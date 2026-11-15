# Pendiente: voz rumana femenina (leer esto primero)

**Proyecto:** Lingo, app para aprender idiomas en `app/` (8 idiomas: es, en, fr, de, it, pt, ru, ro). Rama de trabajo: `claude/language-learning-app-7hzdie`. No crear PRs.

**Petición del usuario (única tarea de este chat):** la voz rumana actual (Piper `ro_RO-mihai-medium`, masculina) no suena bien. Quiere una voz **femenina** que pronuncie mejor el rumano.

**Estado:**
- En Piper solo existe la voz masculina de Mihai; las alternativas abiertas son no comerciales. Se decidió usar **Google Cloud Text-to-Speech**.
- El usuario ya tiene proyecto, facturación y la API "Cloud Text-to-Speech" activada, y creó una clave de API.
- La clave está guardada por el usuario en el entorno `evora-voces` como secreto de red: host `texttospeech.googleapis.com`, cabecera `x-goog-api-key`. **Nunca pedirla en el chat ni escribirla en el repositorio.** Solo se aplica a sesiones nuevas.
- `tools/tts/generate.py` ya incluye `GoogleProvider` (voces `google:<nombre>`), `--list-voices ro-RO` y `--samples ro --voices <v1,v2>`. Ver `tools/tts/README.md`.
- El audio rumano completo con la voz actual ya existe y está subido (`app/audio/ro.*`), así que la app funciona mientras tanto.

**Qué hacer, en este orden:**
1. Comprobar que la clave funciona: `python3 tools/tts/generate.py --list-voices ro-RO` (si da "API key not valid", la sesión no recibe el secreto: decírselo al usuario en pocas líneas).
2. Elegir 2-3 voces femeninas rumanas (probar Chirp3-HD, Wavenet/Neural2 si existen) y generar muestras con `--samples ro --voices ...` (antes `node tools/tts/export_texts.js`).
3. Publicar una página de muestras (Artifact, con los MP3 como archivos) para que el usuario escuche y elija. Nota: no se puede juzgar el sonido a oído; Whisper (`tools/tts/verify.py`) solo mide inteligibilidad.
4. Con la voz elegida: poner `"ro": "google:<voz>"` en `VOICES` de `generate.py`, ejecutar `python tools/tts/generate.py --only ro` (unos 1.011 clips, ~15.600 caracteres; cada frase se paga una vez por la caché de hash), subir `AUDIO_V` en `app/app.js`, probar y subir.
5. Republicar el artefacto https://claude.ai/artifact/H6bGMiMRvX4rtq56kDhouA (build en el directorio de trabajo; page.html + `audio/*.json|mp3`).
6. Actualizar la tabla de voces del README de `app/` y los créditos en el perfil (`app/app.js`, la voz de Google no exige atribución, pero revisar términos).

**Cómo tratar al usuario:** habla español claro y breve, sin listas largas ni jerga. Está cansado y no es técnico. No pierde tokens con explicaciones largas. Una cosa a la vez.

**Reglas del repositorio:** commits con el pie de atribución que indique el sistema; no tocar la web de marketing; no publicar en Vercel todavía.
