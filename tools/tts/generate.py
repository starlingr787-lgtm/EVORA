#!/usr/bin/env python3
"""Genera o actualiza los audios de Lingo con caché por contenido.

Reglas de ahorro (nunca se llama dos veces a un motor de voz por la misma frase):
  1. Cada clip se identifica por un hash de (voz + ajustes + texto). Se guarda en app/audio/<idioma>.meta.json.
  2. Antes de sintetizar se compara: si el clip ya existe y su hash coincide, se REUTILIZA.
  3. Solo se sintetizan las claves nuevas o cuyo texto cambió. Los clips huérfanos se eliminan al compactar.
Las claves de API (si algún día se usa un motor de pago) viven SOLO aquí, en variables de entorno del
equipo o del CI. Jamás se envían al navegador: la app solo reproduce los MP3 ya generados.

Uso:
  node tools/tts/export_texts.js                  # 1) lista de textos
  python tools/tts/generate.py --dry-run          # 2) qué haría (sin gastar nada)
  python tools/tts/generate.py                    # 3) genera lo que falte
  python tools/tts/generate.py --adopt            # marca como válidos los clips existentes (primera vez)
  python tools/tts/generate.py --only ro,fr       # limita a algunos idiomas
Modelos Piper: TTS_MODELS_DIR (por defecto tools/tts/models) con <idioma>.onnx y <idioma>.onnx.json.
"""
import argparse, hashlib, io, json, os, subprocess, sys, wave
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
AUDIO, WORK = ROOT / "app" / "audio", ROOT / "tools" / "tts" / ".work"
MODELS = Path(os.environ.get("TTS_MODELS_DIR", ROOT / "tools" / "tts" / "models"))
VOICES = {  # voz elegida por idioma (todas con licencia que permite uso comercial; ver README de la app)
    "en": "piper:en_GB-cori-high", "fr": "piper:fr_FR-siwis-medium", "de": "piper:de_DE-thorsten-high",
    "it": "piper:it_IT-serena-high", "pt": "piper:pt_PT-tugão-medium", "ru": "piper:ru_RU-denis-medium", "ro": "piper:ro_RO-mihai-medium",
    "es": "piper:es_MX-claude-high",
}
SETTINGS = {"length_scale": 1.08}
FILTER = ("silenceremove=start_periods=1:start_threshold=-48dB:start_silence=0.05,areverse,"
          "silenceremove=start_periods=1:start_threshold=-48dB:start_silence=0.08,areverse,loudnorm=I=-17:LRA=7:TP=-2,apad=pad_dur=0.12")


def clip_hash(lang, text):
    return hashlib.sha1(f"{VOICES[lang]}|{json.dumps(SETTINGS, sort_keys=True)}|{text}".encode()).hexdigest()[:12]


class PiperProvider:
    """Proveedor local y gratuito. Un proveedor de pago implementaría el mismo método synthesize(text)->wav."""
    def __init__(self, lang):
        from piper import PiperVoice, SynthesisConfig
        self.cfg = SynthesisConfig(**SETTINGS)
        self.voice = PiperVoice.load(str(MODELS / f"{lang}.onnx"), config_path=str(MODELS / f"{lang}.onnx.json"))

    def synthesize(self, text):
        buf = io.BytesIO()
        with wave.open(buf, "wb") as w:
            self.voice.synthesize_wav(text, w, syn_config=self.cfg)
        return buf.getvalue()


def to_mp3(wav):
    p = subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-f", "wav", "-i", "pipe:0", "-af", FILTER, "-ac", "1", "-ar", "22050",
                        "-c:a", "libmp3lame", "-b:a", "40k", "-write_xing", "0", "-id3v2_version", "0", "-f", "mp3", "pipe:1"], input=wav, capture_output=True)
    if p.returncode or not p.stdout:
        raise RuntimeError(p.stderr.decode()[:200])
    return p.stdout


def atomic_write(path, data, mode="wb"):
    tmp = Path(str(path) + ".tmp")
    with open(tmp, mode) as f:
        f.write(data)
    os.replace(tmp, path)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", default=",".join(VOICES)); ap.add_argument("--dry-run", action="store_true"); ap.add_argument("--adopt", action="store_true")
    args = ap.parse_args()
    texts_file = WORK / "texts.json"
    if not texts_file.exists():
        sys.exit("Falta tools/tts/.work/texts.json: ejecuta antes  node tools/tts/export_texts.js")
    texts = json.load(open(texts_file))
    for lang in args.only.split(","):
        idx_f, meta_f, pack_f = AUDIO / f"{lang}.json", AUDIO / f"{lang}.meta.json", AUDIO / f"{lang}.mp3"
        idx = json.load(open(idx_f)) if idx_f.exists() else {}
        meta = json.load(open(meta_f)) if meta_f.exists() else {}
        blob = pack_f.read_bytes() if pack_f.exists() else b""
        want = texts[lang]
        if args.adopt:
            meta = {k: clip_hash(lang, t) for k, t in want.items() if k in idx}
            atomic_write(meta_f, json.dumps(meta, separators=(",", ":")), "w"); print(lang, "adoptados", len(meta)); continue
        todo = [k for k, t in want.items() if k not in idx or meta.get(k) != clip_hash(lang, t)]
        orphans = [k for k in idx if k not in want]
        print(f"{lang}: {len(want)} clips | reutilizados {len(want) - len(todo)} | por generar {len(todo)} | huérfanos {len(orphans)}")
        if args.dry_run or not (todo or orphans):
            continue
        fresh = {}
        if todo:
            prov = PiperProvider(lang)
            for n, k in enumerate(todo, 1):
                fresh[k] = to_mp3(prov.synthesize(want[k]))
                if n % 25 == 0: print(f"  {lang} {n}/{len(todo)}", flush=True)
        out, new_idx, new_meta = bytearray(), {}, {}
        for k in sorted(want, key=lambda s: (int(''.join(c for c in s if c.isdigit())[:2] or 0), s)):
            if k in fresh: data = fresh[k]
            elif k in idx: o, l = idx[k][:2]; data = blob[o:o + l]
            else: continue
            new_idx[k] = [len(out), len(data)]; new_meta[k] = clip_hash(lang, want[k]); out += data
        atomic_write(pack_f, bytes(out)); atomic_write(idx_f, json.dumps(new_idx, separators=(",", ":")), "w"); atomic_write(meta_f, json.dumps(new_meta, separators=(",", ":")), "w")
        print(f"  {lang}: escrito ({len(out) // 1024} KB). Recuerda subir AUDIO_V en app/app.js para renovar la caché del navegador.")


if __name__ == "__main__":
    main()
