#!/usr/bin/env python3
"""Reparte los paquetes de audio por sesión (A1, A2, B1, B2, C1 y diccionario) para que la app solo descargue lo que usa.

Hay dos formatos:
  * Paquete COMPLETO (herramientas): tools/tts/packs/<nombre>.mp3 + .json (clip -> [inicio, largo]) + .meta.json (hash de caché).
    Es lo que lee y escribe generate.py. Los mp3 completos no se suben a git (se pueden reconstruir con `join`).
  * Paquete REPARTIDO (lo que sirve la app): app/audio/<nombre>.json (clip -> [inicio, largo, paquete]) y
    app/audio/<nombre>-s<paquete>.mp3, uno por sesión (0-4) y el 5 para el diccionario.
<nombre> es el idioma ("en") o "<idioma>-w" para las palabras sueltas.

Uso:
  python tools/tts/packs.py split [nombre ...]   completo -> repartido (todos si no se indica ninguno)
  python tools/tts/packs.py join  [nombre ...]   repartido -> completo (recupera los mp3 completos)
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PACKS, AUDIO, WORK = ROOT / "tools" / "tts" / "packs", ROOT / "app" / "audio", ROOT / "tools" / "tts" / ".work"
UNITS_PER_SESSION, DICT_PACK = 10, 5
LANGS = ["en", "fr", "de", "it", "pt", "ru", "es", "ro"]


def pack_of(key, unit_of_word=None):
    """Paquete de un clip según su clave: 0-4 = sesión de su unidad, 5 = diccionario."""
    if key.startswith("D"): return DICT_PACK
    if key.startswith("w:"): return min((unit_of_word or {}).get(key, 0) // UNITS_PER_SESSION, DICT_PACK - 1)
    m = re.match(r"^(\d+)[ws]\d+$", key) or re.match(r"^L(\d+)[A-Z]\d+$", key)
    if m: return min(int(m.group(1)) // UNITS_PER_SESSION, DICT_PACK - 1)
    m = re.match(r"^S(\d+)$", key)  # S<unidad><turno><opción>: turno y opción son una cifra cada uno
    if m and len(m.group(1)) >= 3: return min(int(m.group(1)[:-2]) // UNITS_PER_SESSION, DICT_PACK - 1)
    return 0


def _write(path, data, mode="wb"):
    tmp = path.with_suffix(path.suffix + ".tmp")
    with open(tmp, mode, **({"encoding": "utf8"} if "b" not in mode else {})) as f: f.write(data)
    tmp.replace(path)


def split_one(name):
    full_idx, full_mp3 = PACKS / f"{name}.json", PACKS / f"{name}.mp3"
    if not (full_idx.exists() and full_mp3.exists()): print(name, "sin paquete completo, se omite"); return
    idx, blob = json.load(open(full_idx)), full_mp3.read_bytes()
    lang = name.split("-")[0]
    uow = json.load(open(WORK / "units-w.json")).get(lang, {}) if name.endswith("-w") and (WORK / "units-w.json").exists() else None
    bufs, out = {}, {}
    for k in idx:
        p = pack_of(k, uow); o, l = idx[k][:2]; b = bufs.setdefault(p, bytearray())
        out[k] = [len(b), l, p]; b += blob[o:o + l]
    AUDIO.mkdir(parents=True, exist_ok=True)
    for old in AUDIO.glob(f"{name}-s*.mp3"): old.unlink()
    for p, b in bufs.items(): _write(AUDIO / f"{name}-s{p}.mp3", bytes(b))
    _write(AUDIO / f"{name}.json", json.dumps(out, separators=(",", ":")), "w")
    print(f"{name}: " + ", ".join(f"s{p} {len(b) // 1024} KB" for p, b in sorted(bufs.items())))


def join_one(name):
    idx_f = AUDIO / f"{name}.json"
    if not idx_f.exists(): print(name, "sin paquete repartido, se omite"); return
    idx, parts, out, new = json.load(open(idx_f)), {}, bytearray(), {}
    for k in idx:
        o, l, p = idx[k]
        if p not in parts: parts[p] = (AUDIO / f"{name}-s{p}.mp3").read_bytes()
        new[k] = [len(out), l]; out += parts[p][o:o + l]
    PACKS.mkdir(parents=True, exist_ok=True)
    _write(PACKS / f"{name}.mp3", bytes(out)); _write(PACKS / f"{name}.json", json.dumps(new, separators=(",", ":")), "w")
    print(f"{name}: completo reconstruido ({len(out) // 1024} KB)")


def main():
    if len(sys.argv) < 2 or sys.argv[1] not in ("split", "join"): sys.exit(__doc__)
    names = sys.argv[2:] or [n for l in LANGS for n in (l, l + "-w")]
    for n in names: (split_one if sys.argv[1] == "split" else join_one)(n)


if __name__ == "__main__":
    main()
