# Herramientas de voz de Lingo

La app **no llama a ningún motor de voz en tiempo real**: reproduce MP3 ya generados (`app/audio/<idioma>.mp3` + `<idioma>.json`).
Así no hay claves en el navegador ni gasto por uso. Estas herramientas generan y verifican esos audios.

| Herramienta | Para qué |
|---|---|
| `export_texts.js` | Lista todos los textos que necesitan audio (`.work/texts.json`). |
| `generate.py` | Genera lo que falte con **caché por contenido**: no repite un clip si su texto y su voz no cambiaron. `--dry-run` no gasta nada. |
| `verify.py qa` | Transcribe cada clip con Whisper y puntúa de 0 a 1 cuánto se parece al texto. |
| `verify.py improve` | Regenera los clips con puntuación baja: prueba varias versiones y se queda con la que mejor se entiende. |

## Flujo habitual
```bash
pip install piper-tts faster-whisper          # y ffmpeg instalado; modelos .onnx en tools/tts/models/<idioma>.onnx
node tools/tts/export_texts.js
python tools/tts/generate.py --dry-run        # cuántos clips nuevos hay (0 si no tocaste textos)
python tools/tts/generate.py                  # genera solo los nuevos o modificados
python tools/tts/verify.py qa --lang ro       # (opcional) mide inteligibilidad
python tools/tts/verify.py improve --lang ro  # (opcional) repara los peores
# después: sube AUDIO_V en app/app.js para que los navegadores descarguen los audios nuevos
```
La primera vez, si ya existen audios, ejecuta `generate.py --adopt` para registrarlos como válidos.

## Si algún día se usa un motor de pago (ElevenLabs, Azure, Google...)
- La clave va **solo** en una variable de entorno del equipo o del CI (por ejemplo `TTS_API_KEY`), nunca en `app/` ni en el navegador.
- Se implementa como otro proveedor con el mismo método `synthesize(text) -> wav` en `generate.py`.
- La caché por hash ya garantiza que cada frase se paga una sola vez.
- Los precios y las licencias de salida varían por proveedor: revísalos antes de publicar audio generado.

## Voz de pago para un idioma (Google Cloud Text-to-Speech)
`generate.py` admite voces de Google con el prefijo `google:` en `VOICES` (p. ej. `"ro": "google:ro-RO-Chirp3-HD-Aoede"`). Solo cambia el idioma indicado; el resto sigue con Piper.
- La clave va en la variable de entorno `GOOGLE_TTS_API_KEY` (o como secreto de red del entorno con la cabecera `x-goog-api-key` para `texttospeech.googleapis.com`). Nunca en el repositorio ni en `app/`.
- `python tools/tts/generate.py --list-voices ro-RO` lista las voces disponibles.
- `python tools/tts/generate.py --samples ro --voices ro-RO-Chirp3-HD-Aoede,ro-RO-Wavenet-A` crea muestras en `tools/tts/.work/samples/` para elegir de oído.
- El hash de cada clip incluye la voz, así que al cambiarla se regenera todo el idioma y solo ese idioma. Cada frase se sintetiza una sola vez.
- Coste: el texto rumano completo son unos 15.600 caracteres, dentro de las capas gratuitas habituales. Revisa precios y términos de uso del audio antes de publicar.
