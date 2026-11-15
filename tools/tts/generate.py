#!/usr/bin/env python3
"""Genera muestras de voz rumana femenina (cálida, grave, pausada) con Google Cloud TTS.
Uso: python3 generate.py "Text în română" [carpeta_salida]
La clave la inyecta el proxy (header x-goog-api-key); aquí se envía un valor ficticio."""
import base64, json, os, sys, urllib.request

TEXT = sys.argv[1] if len(sys.argv) > 1 else "Bun venit la EVORA. Lasă-te purtat încet, într-o experiență caldă și rafinată."
OUT = sys.argv[2] if len(sys.argv) > 2 else "samples"
KEY = os.environ.get("GOOGLE_API_KEY", "dummy")
VOICES = [  # (archivo, voz, pitch, rate)
    ("wavenet-a", "ro-RO-Wavenet-A", -3.0, 0.9),
    ("chirp3-aoede", "ro-RO-Chirp3-HD-Aoede", 0, 0.9),
    ("chirp3-kore", "ro-RO-Chirp3-HD-Kore", 0, 0.9),
]
os.makedirs(OUT, exist_ok=True)
for name, voice, pitch, rate in VOICES:
    audio = {"audioEncoding": "MP3", "speakingRate": rate}
    if "Chirp3" not in voice:  # Chirp3-HD no admite pitch
        audio["pitch"] = pitch
    body = {"input": {"text": TEXT}, "voice": {"languageCode": "ro-RO", "name": voice}, "audioConfig": audio}
    req = urllib.request.Request("https://texttospeech.googleapis.com/v1/text:synthesize",
        json.dumps(body).encode(), {"Content-Type": "application/json", "x-goog-api-key": KEY})
    try:
        data = json.load(urllib.request.urlopen(req))
        open(f"{OUT}/{name}.mp3", "wb").write(base64.b64decode(data["audioContent"]))
        print("OK", name)
    except Exception as e:
        print("FALLO", name, e)
