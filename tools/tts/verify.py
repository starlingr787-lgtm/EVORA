#!/usr/bin/env python3
"""Control de calidad automático de las voces: transcribe cada clip con Whisper y lo compara con el texto esperado.

  python tools/tts/verify.py qa --lang ro            # mide (0 a 1) cuánto se parece lo que "se oye" a lo que debería decir
  python tools/tts/verify.py improve --lang ro       # regenera los clips con puntuación baja eligiendo la mejor de varias versiones
  python tools/tts/verify.py qa --lang ro --sample 80

Es una guía objetiva, no un oído humano: Whisper falla a veces con palabras sueltas muy cortas. Úsala para detectar
clips sospechosos y compara siempre "antes" y "después". Requiere: pip install piper-tts faster-whisper
(si el cliente de Hugging Face usa un host de descarga bloqueado, exporta HF_HUB_DISABLE_XET=1).
"""
import argparse, difflib, io, json, os, random, re, subprocess, sys, unicodedata, wave
from pathlib import Path
import numpy as np

sys.path.insert(0, str(Path(__file__).parent))
import generate as G  # reutiliza rutas, voces, ajustes y el codificador MP3

NUM = {"ro": {"unu": "1", "doi": "2", "trei": "3", "patru": "4", "cinci": "5", "zece": "10", "douazeci": "20", "o suta": "100"}}
PARAMS = [(.4, .5, 1.15), (.5, .8, 1.25), (.8, .8, 1.1), (.667, .4, 1.3), (.3, .3, 1.2)]  # (noise_scale, noise_w, length_scale)


def norm(s):
    s = unicodedata.normalize("NFD", s.lower().replace("ß", "ss")); s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"\s+", " ", re.sub(r"[^\w\s]", "", s)).strip()


def score(lang, exp, got):
    e, g = norm(exp), norm(got)
    if NUM.get(lang, {}).get(e) == g: return 1.0
    return difflib.SequenceMatcher(None, e, g).ratio()


def decode(blob):
    p = subprocess.run(["ffmpeg", "-v", "error", "-f", "mp3", "-i", "pipe:0", "-f", "f32le", "-ar", "16000", "-ac", "1", "pipe:1"], input=blob, capture_output=True)
    return np.frombuffer(p.stdout, dtype=np.float32)


def whisper():
    from faster_whisper import WhisperModel
    return WhisperModel("small", device="cpu", compute_type="int8", cpu_threads=4)


def recog(model, lang, audio16k):
    segs, _ = model.transcribe(audio16k, language=lang, beam_size=5, condition_on_previous_text=False, vad_filter=False, temperature=0)
    return " ".join(s.text.strip() for s in segs)


def load(lang):
    texts = json.load(open(G.WORK / "texts.json"))[lang]
    idx = json.load(open(G.AUDIO / f"{lang}.json")); blob = (G.AUDIO / f"{lang}.mp3").read_bytes()
    return texts, idx, blob


def cmd_qa(a):
    model = whisper(); texts, idx, blob = load(a.lang)
    keys = [k for k in idx if k in texts]
    if a.sample: random.Random(1).shuffle(keys); keys = keys[:a.sample]
    res = {}
    for k in keys:
        o, n = idx[k][:2]; got = recog(model, a.lang, decode(blob[o:o + n])); res[k] = {"t": texts[k], "asr": got, "s": round(score(a.lang, texts[k], got), 3)}
    G.WORK.mkdir(exist_ok=True); json.dump(res, open(G.WORK / f"qa_{a.lang}.json", "w"), ensure_ascii=False, indent=1)
    words = [v["s"] for v in res.values() if len(v["t"].split()) == 1]; sents = [v["s"] for v in res.values() if len(v["t"].split()) > 1]
    avg = lambda v: round(sum(v) / len(v), 3) if v else None
    print(f"{a.lang}: {len(res)} clips | media {avg([v['s'] for v in res.values()])} | palabras {avg(words)} | frases {avg(sents)} | < {a.threshold}: {sum(1 for v in res.values() if v['s'] < a.threshold)}")


def synth(provider_voice, SynthesisConfig, text, ns=.667, nw=.8, ls=1.08):
    buf = io.BytesIO()
    with wave.open(buf, "wb") as w: provider_voice.synthesize_wav(text, w, syn_config=SynthesisConfig(length_scale=ls, noise_scale=ns, noise_w_scale=nw))
    buf.seek(0)
    with wave.open(buf) as w: return np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16)


def to_wav(x):
    buf = io.BytesIO()
    with wave.open(buf, "wb") as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(22050); w.writeframes(x.tobytes())
    return buf.getvalue()


def to16k(x):
    p = subprocess.run(["ffmpeg", "-v", "error", "-f", "s16le", "-ar", "22050", "-ac", "1", "-i", "pipe:0", "-f", "f32le", "-ar", "16000", "-ac", "1", "pipe:1"], input=x.tobytes(), capture_output=True)
    return np.frombuffer(p.stdout, dtype=np.float32)


def split_repeats(x, sr=22050):
    """Separa una palabra repetida 3 veces ('da. da. da.') por silencios: la 2ª y 3ª suelen salir mejor que la 1ª."""
    f = int(sr * .01); n = len(x) // f
    env = np.array([np.abs(x[i * f:(i + 1) * f]).mean() for i in range(n)]); thr = max(env.max() * .04, 1)
    segs, start, gap = [], None, 0
    for i, v in enumerate(env > thr):
        if v:
            if start is None: start = i
            gap = 0
        elif start is not None:
            gap += 1
            if gap >= 15: segs.append((start, i - gap)); start = None; gap = 0
    if start is not None: segs.append((start, n - 1))
    return [x[max(0, a - 6) * f:min(n, b + 6) * f] for a, b in segs if b - a > 8]


def cmd_improve(a):
    from piper import PiperVoice, SynthesisConfig
    model = whisper(); texts, idx, blob = load(a.lang)
    voice = PiperVoice.load(str(G.MODELS / f"{a.lang}.onnx"), config_path=str(G.MODELS / f"{a.lang}.onnx.json"))
    base_f = G.WORK / f"qa_{a.lang}.json"
    if not base_f.exists(): sys.exit("Ejecuta antes:  verify.py qa --lang " + a.lang)
    base = json.load(open(base_f)); targets = [k for k, v in base.items() if v["s"] < a.threshold]
    print(a.lang, "objetivos", len(targets)); new, report = {}, {}
    for k in targets:
        t = texts[k]; cands = []
        if len(t.split()) == 1:
            cands += [("txt:" + v, synth(voice, SynthesisConfig, v)) for v in (t.lower(), t + ".", t + "!")]
            cands += [(f"par:{p}", synth(voice, SynthesisConfig, t, *p)) for p in PARAMS]
            cands += [(f"rep{j}", s) for j, s in enumerate(split_repeats(synth(voice, SynthesisConfig, f"{t}. {t}. {t}.", .5, .6, 1.15)))]
        else:
            cands += [(f"par:{p}", synth(voice, SynthesisConfig, t, *p)) for p in PARAMS]
        best = (base[k]["s"], None, None, "")
        for name, x in cands:
            if len(x) < 2000: continue
            got = recog(model, a.lang, to16k(x)); sc = score(a.lang, t, got)
            if sc > best[0] + 1e-9: best = (sc, name, x, got)
        if best[1] and best[0] >= base[k]["s"] + .05:
            new[k] = G.to_mp3(to_wav(best[2])); report[k] = {"t": t, "antes": base[k]["s"], "despues": round(best[0], 3), "via": best[1], "asr_antes": base[k]["asr"], "asr_despues": best[3]}
    out, nidx = bytearray(), {}
    for k, (o, l, *_) in idx.items():
        data = new.get(k) or blob[o:o + l]; nidx[k] = [len(out), len(data)]; out += data
    G.atomic_write(G.AUDIO / f"{a.lang}.mp3", bytes(out)); G.atomic_write(G.AUDIO / f"{a.lang}.json", json.dumps(nidx, separators=(",", ":")), "w")
    json.dump(report, open(G.WORK / f"improve_{a.lang}.json", "w"), ensure_ascii=False, indent=1)
    gain = [r["despues"] - r["antes"] for r in report.values()]
    print(f"{a.lang}: mejorados {len(report)} de {len(targets)} | mejora media {round(sum(gain) / max(1, len(gain)), 3)}")
    print("Recuerda: subir AUDIO_V en app/app.js y ejecutar  generate.py --adopt --only " + a.lang)


if __name__ == "__main__":
    ap = argparse.ArgumentParser(); ap.add_argument("cmd", choices=["qa", "improve"]); ap.add_argument("--lang", required=True)
    ap.add_argument("--threshold", type=float, default=.8); ap.add_argument("--sample", type=int, default=0)
    a = ap.parse_args(); (cmd_qa if a.cmd == "qa" else cmd_improve)(a)
