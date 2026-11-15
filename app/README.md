# Rocco — app para aprender idiomas

App web estática (HTML/CSS/JS, sin build) para hispanohablantes.
Para probarla en local: `cd app && python3 -m http.server` y abrir http://localhost:8000

## Qué incluye
- **7 cursos**: inglés, francés, alemán, italiano, portugués, ruso y rumano.
- **3 sesiones y 30 unidades por curso** (cada sesión = 10 unidades de 5 niveles = 50 niveles del mapa):
  - Sesión 1, Principiante (A1, unidades 1-10): saludos, presentaciones, números, familia, comida, restaurante, viajes, ciudad, compras, días y horas.
  - Sesión 2, Elemental (A2, unidades 11-20): rutina, casa, salud, trabajo, tiempo, ocio, pasado, futuro, opiniones y pedir ayuda.
  - Sesión 3, Intermedio (B1, unidades 21-30): reservas y viajes con imprevistos, estudios, tecnología, hábitos, medio ambiente, cultura, consejos, trámites, experiencias y condicionales.
  - Al elegir un curso se escoge la sesión de partida o se hace una prueba de 8 preguntas que recomienda una. Las sesiones posteriores se desbloquean aprobando la **prueba de sesión** de la anterior (o saltando con ella).
- **Mapa de niveles**: 5 niveles por unidad (palabras, frases, práctica, escucha y combina, prueba de unidad), desbloqueo uno a uno y 1 a 3 estrellas.
- **Ejercicios**: opción múltiple, escribir, completar la frase, relacionar parejas, escucha y **rompecabezas de frases** (piezas con forma de puzle que se arrastran o se tocan a un tablero).
- **Situaciones** (nodo especial del mapa en las unidades 1 y 6, gratis para todos los planes y siempre desbloqueado):
  - *Rompecabezas vivo*: cada pieza tiene el color de su registro (formal azul, informal naranja, urgente rojo, neutro verde) con icono y etiqueta. Al tocar otro tono la frase entera cambia a su variante, con animación, y hay que elegir el tono que encaja con la situación.
  - *Escena para calmar a un personaje*: 3 turnos con medidor de ánimo. Cada respuesta es una pieza con su tono y una explicación en español de por qué calma o molesta.
  - Las variantes de tono están escritas a mano (no se generan) para no producir gramática rota. Hace falta revisión de hablantes nativos antes de publicar.
- **Vocabulario diario**: palabras y frase del día según el curso y el nivel, con marca de "ya la sé", práctica rápida y lista de "mis palabras" con buscador.
- **Repaso espaciado (Premium)**: cada fallo crea una tarjeta que reaparece con el algoritmo SM-2 simplificado (intervalos de 1 día, 3 días y luego ×facilidad; un fallo la devuelve a 1 día). La pestaña Repaso muestra las pendientes de hoy y las que están en seguimiento. Lógica pura en `engine.js` (`srs*`).
- **Diccionario (gratis con límite)**: 6 categorías de 10 palabras (comida, animales, colores, cuerpo, casa, naturaleza) con audio, buscador y práctica. Plan Estándar: 2 prácticas al día; Premium: ilimitadas. Datos en `data5.js`.
- **Español neutro**: el contenido en español evita regionalismos de España (`tests/content.test.js` lo comprueba).
- **Cualquier par de idiomas**: se elige el idioma base (en el que se leen las preguntas) y el idioma a aprender entre los 8 (español, inglés, francés, alemán, italiano, portugués, ruso, rumano). Todas las frases existen ya en los 8 idiomas, así que no hace falta traducir nada para combinar pares (`exercises.js`: `setNative`, `unit()`, `dictWords()`; `data6.js` define el español como idioma a aprender con los textos de `UNITS`). Si se pulsa el mismo idioma que el base, el base pasa a inglés (o a español si se elige inglés). El progreso se guarda por idioma a aprender, no por par.
- **Interfaz en español o inglés** (`i18n.js`): la interfaz es español si el idioma base es español y, en cualquier otro caso, inglés; se puede cambiar en el Perfil. En lugar de duplicar cada pantalla, `i18n.js` traduce los textos fijos con un diccionario de plantillas (`"Unidad {0}"` → `"Unit {0}"`) y observa la pantalla; lo que no tenga traducción se queda en español. `tests/i18n.test.js` comprueba que cada texto fijo de `app.js`, `exercises.js`, `engine.js` y las situaciones tiene traducción. **Hay que ejecutarlo cada vez que se añada un texto nuevo a la interfaz.**
- **Situaciones de tono** funcionan con cualquier par (variantes formal/informal y escenas); el texto explicativo está en español y se muestra en inglés con la interfaz en inglés. El español como idioma a aprender usa voz mexicana (la más cercana al español neutro).
- **Limitaciones actuales**: la interfaz solo existe en español e inglés (con base francés, alemán, etc. la interfaz sale en inglés); los títulos y textos en inglés los escribí yo y necesitan revisión de un hablante nativo; el contenido de los 8 idiomas sigue pendiente de revisión nativa.
- **Ruso**: transcripción automática en letras latinas y se acepta escribir en latino.
- **Rompecabezas con "jugo"**: piezas con brillo y borde en relieve, flotan en el banco, se arrastran con inclinación e imán al hueco más cercano, aterrizan con rebote y chispas, suenan en escala musical (sonidos sintetizados, sin archivos), vibran en móviles, encajan en ola con confeti al acertar y suman racha. El sonido se silencia desde el reproductor y se respeta `prefers-reduced-motion`.
- **Rocco, el mapache** (`rocco.js`): dibujo propio en SVG con pelaje con volumen, máscara, ojos con brillo, bigotes y cola anillada, y 16 gestos (feliz, celebra, triste, piensa, sorpresa, guiño, sueño, enamorado, orgulloso, curioso, concentrado, ups, comiendo chocolate, lavándose las patas, bostezo y café) con animaciones suaves (respira, parpadea, mueve la cola, mastica...). `mascot(mood, px)` sigue siendo la función que se llama desde la app. Comenta el desempeño con frases cortas en español e inglés (`roccoSay(evento)`: aciertos, rachas, fallos, final de nivel, prueba de sesión, sin vidas...), siempre con tono cercano, sin culpa ni insistencia (un test lo vigila). En el mapa aparece unos segundos de vez en cuando haciendo algo al azar y a veces comenta; nunca durante las lecciones y se desactiva en Perfil → «Rocco te acompaña». Al tocarlo hace una reacción al azar. El nombre de la app es Rocco; los identificadores internos (`lingo-state-v3`, `window.__lingo`) se mantienen para no perder el progreso guardado.
- **Estilos de piezas** (Perfil → Estilo de las piezas): *Clásico* (gratis) y, solo Premium, *Caramelos*, *Mándala*, *Burbujas de agua* y *Barras de chocolate*. Cada estilo dibuja el SVG de la pieza (`pzMarkup` en `app.js`) y su CSS está al final de `styles.css`. Con plan Estándar siempre se usa el Clásico aunque haya otro guardado.
- **Pronunciación al tocar una pieza**: al tocar o soltar una pieza suena esa palabra, en el idioma de la pieza (idioma a aprender o idioma base). Premium: clips pregrabados del paquete de palabras `audio/<idioma>-w.mp3|json` (unas 700-900 palabras por idioma, se carga solo cuando hace falta). Sin clip o con plan Estándar: voz del navegador, sin avisos.
- **Identidad propia**: sin emojis. Iconos SVG propios (`icons.js`), insignias de idioma y mascota (un mapache, aún sin nombre definitivo).

## Cómo se decide que subes de nivel (investigación)
Resumen de lo que dicen las fuentes y de cómo lo aplica la app. Nada de esto es un examen oficial: la app es una guía.

**Lo que se sabe**
- El MCER (Consejo de Europa) define los niveles por lo que puedes *hacer* (descriptores "puedo..."), no por un número de palabras. [Descriptores oficiales](https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions).
- Horas de clase acumuladas orientativas de Cambridge: A1 90-100, A2 180-200, B1 350-400, B2 500-600, C1 700-800. [Cambridge English](https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours). Son horas guiadas, aparte del estudio personal.
- Vocabulario de referencia, que varía mucho según la fuente:
  - Inglés (Milton, 5.000 lemas más frecuentes): A1 menos de 1.500, A2 1.500-2.500, B1 2.750-3.250, B2 3.250-3.750. [Milton](http://eurosla.org/monographs/EM02/Milton.pdf). Es una estimación de investigación, no una cuota oficial.
  - Alemán (Goethe-Institut): la lista de A1 tiene unas 650 palabras (se espera dominar activamente la mitad) y la de B1 unas 2.400 unidades. [Wortliste B1](https://www.goethe.de/pro/relaunch/prf/da/Goethe-Zertifikat_B1_Wortliste.pdf).
  - Ruso (TORFL): A1 hasta 780 unidades; A2 hasta 1.300 según una fuente (no confirmado en una segunda). No pude verificar las cifras de B1.
  - Francés, italiano, portugués y rumano: no encontré cifras oficiales por nivel.
- Comprensión lectora: se necesita conocer alrededor del 95 % de las palabras de un texto para una comprensión mínima y cerca del 98 % para una comprensión cómoda (Laufer; Hu y Nation). Eso explica por qué el vocabulario manda al subir de nivel, aunque dependa del texto. [Resumen](https://files.eric.ed.gov/fulltext/EJ887873.pdf).
- Umbral de dominio: el 80-90 % de aciertos antes de avanzar viene del aprendizaje de dominio de Bloom y de guías de repaso espaciado (80-85 % para frases, 90-95 % para vocabulario concreto). No encontré un estudio que valide un corte exacto para vocabulario de idiomas.
- Duolingo afirma que sus cursos se alinean con el MCER y que casi todos los principales llegan ya hasta B2; no publica una tabla oficial de unidad a nivel.

**Qué hace la app con eso**
1. Una sesión equivale a un tramo del MCER (A1, A2, B1) y muestra su objetivo "puedes..." basado en los descriptores globales.
2. El **dominio de la sesión** es el porcentaje de estrellas obtenidas (3 estrellas = 0 fallos en el nivel) sobre las unidades abiertas del plan.
3. La **prueba de sesión** tiene 20 preguntas de un solo intento, repartidas entre las unidades de la sesión. Se aprueba con 16 aciertos (80 %), la pauta del aprendizaje de dominio. Al aprobar se desbloquea y se ofrece la siguiente sesión. Si no, se listan las unidades con más fallos.
4. No es estricto: se puede elegir la sesión de partida y saltar a otra aprobando la prueba de la anterior.

**Límite importante**: cada unidad enseña ahora 20 palabras y 12 frases (antes 8 y 5), es decir unas 200 palabras y 120 frases por sesión y 600 palabras por curso (más 60 del diccionario). Sigue por debajo del vocabulario de referencia (A1 unas 650 palabras; B1 unas 2.400), así que no se puede afirmar que Rocco cubra un nivel completo: las etiquetas A1/A2/B1 indican *temas y funciones* trabajados. Tampoco hay todavía explicaciones de gramática. Para acercarse a esas cifras habría que seguir ampliando (el contenido se añade solo en `data7a/b/c.js`, ver `extra.js`).

## Planes
| | Estándar (gratis) | Premium (7,99 €/mes) |
|---|---|---|
| Cursos | 1 a elegir | los 7 |
| Unidades | 1 a 3 de cada sesión | las 30 |
| Vidas | 5 al día | ilimitadas |
| Palabras del día | 5 | 10 |
| Voz natural y ejercicios de escucha | no | sí |
| Repaso de errores | no | sí |
| Situaciones (tono y escenas) | sí | sí |

## Voz
Las frases se reproducen con **locuciones neuronales pregeneradas** (`audio/<idioma>.mp3` + `audio/<idioma>.json`): un único MP3 por idioma con todas las frases concatenadas y un índice de posiciones. Si faltan, la app usa la mejor voz instalada en el navegador.
Se generaron con [Piper](https://github.com/OHF-Voice/piper1-gpl) (voces `rhasspy/piper-voices`):

| Idioma | Voz | Licencia del conjunto de datos |
|---|---|---|
| Inglés | en_GB-cori-high | Dominio público |
| Francés | fr_FR-siwis-medium | CC BY 4.0 (Siwis, Universidad de Edimburgo) |
| Alemán | de_DE-thorsten-high | CC0 |
| Italiano | it_IT-serena-high | CC BY 4.0 (committa/serena-synthetic-it-27h) |
| Portugués | pt_PT-tugão-medium | CC0 |
| Ruso | ru_RU-denis-medium | CC0 |
| Rumano | Google Cloud TTS `ro-RO-Chirp3-HD-Sulafat` (voz femenina de pago, audio pregenerado) | Términos de Google Cloud; sin atribución obligatoria, revisar antes de uso comercial |
| Español (curso para angloparlantes) | es_MX-claude-high | Apache-2.0 |

Las voces francesa e italiana exigen atribución (CC BY 4.0): mantén esta tabla visible en la app si la publicas. Antes de uso comercial, revisa las licencias vigentes de cada voz.
**Paquetes de palabras.** `node tools/tts/export_texts.js` también escribe `tools/tts/.work/texts-w.json` (cada palabra distinta de las frases, clave `w:<palabra>`); `python tools/tts/generate.py --set w` genera `audio/<idioma>-w.*`. Hay que regenerarlo si cambian las frases.
**Control de calidad de la voz.** `tools/tts/verify.py` transcribe cada clip con Whisper y puntúa el parecido. Esa medida es poco fiable en palabras sueltas de menos de 1 s (alucina "uh, uh…" o escribe "4." en vez de "Four"), por lo que una puntuación baja en clips cortos no implica mala voz (p. ej. el 0,674 del portugués es un artefacto de medición, no se tocó). El rumano sí mejoró de forma real con el método "mejor de N". Sigue pendiente la escucha por hablantes nativos.
El contenido ampliado vive en `extra.js` (cargador) y `data7a.js`, `data7b.js`, `data7c.js` (una línea por elemento con las 8 lenguas en columnas `es|en|fr|de|it|pt|ru|ro`); se añade AL FINAL de cada unidad, así los 8 elementos originales y sus claves de audio no cambian. Las lecciones tienen un tope de preguntas (`MAX_Q_*` en `exercises.js`) aunque la unidad tenga mucho contenido; la pantalla de introducción muestra todo y cada intento sortea elementos distintos. Para regenerar el audio tras cambiar `data.js`, `data2.js` o los `data7*.js` hay que repetir la síntesis con el mismo orden de claves (`<unidad>w<n>` para palabras, `<unidad>s<n>` para frases y las de `extraClips()` en `data3.js` para situaciones).

## Seguridad y arquitectura
**Claves y costes**
- No hay ninguna clave de API en el código del navegador. La app solo hace `fetch` de sus propios audios.
- Los audios se generan fuera de línea con `tools/tts/` (caché por contenido: una frase no se vuelve a sintetizar si no cambia). Cualquier clave de un motor de pago viviría solo en variables de entorno del equipo o del CI.
- `vercel.json` añade, solo para `/app/`, una política CSP estricta (sin scripts de terceros ni `eval`), `nosniff`, `Referrer-Policy` y `Permissions-Policy`, y caché de un año para los audios (se invalida cambiando `AUDIO_V` en `app/app.js`).
- Todo texto que llega a `innerHTML` pasa por `esc()` (el contenido es propio; el único texto libre del usuario, el buscador y las respuestas, se escapa).

**Riesgos que siguen abiertos (necesitan backend)**
- El plan Premium se guarda en `localStorage`: cualquiera puede activarlo desde la consola. Hay que validar la suscripción en servidor (webhooks del procesador de pagos) antes de cobrar.
- Los audios son archivos públicos: quien conozca la URL puede descargarlos sin ser Premium. Para protegerlos hay que servirlos desde una función de borde que compruebe un token de suscripción.

**Motor de juego** (`engine.js`): lógica pura y sin DOM, probada con `node app/tests/engine.test.js`.
- Estado de la sesión y del puzle como JSON simple: piezas por id (`slots: [3, null, 0]`), acciones `TAP`/`DROP`/`RESET` y un reductor puro `puzzleReduce(estado, acción)`.
- `Engine.snapshot()` produce una instantánea mínima (`kind`, `i`, `correct`, `wrong`, `combo`) pensada para enviarse por WebSocket en un futuro modo multijugador; el cliente actual y uno multijugador compartirían las mismas reglas.
- La interfaz (`app.js`) solo traduce eventos en acciones y pinta el estado.

**Rendimiento de animaciones**
- El tablero se construye una vez y cada pieza es un nodo que solo se mueve entre huecos y banco. No se reconstruye el DOM al mover una pieza.
- El arrastre usa `transform: translate3d` dentro de `requestAnimationFrame`, con las posiciones de los huecos medidas una sola vez al empezar.
- Las animaciones continuas usan solo `transform` y `opacity` (anillos, brillo, barra de progreso, destello del tablero). La forma SVG de cada pieza se cachea.
- Medido con el mismo guion (2 toques y 1 arrastre): nodos DOM tocados 96 a 18-28, layouts 118-121 a 13-19.

## Estructura
- `data3.js`: situaciones (tonos, rompecabezas vivo y escenas) y la lista de textos que necesitan audio.
- `data.js`, `data2.js`: unidades en español y traducciones de cada curso. Para añadir contenido o idiomas se editan solo estos archivos.
- `data5.js`: categorías del diccionario.
- `data6.js`: el español como idioma a aprender y los textos en inglés (títulos de unidad, contexto, nombres del diccionario).
- `i18n.js`: interfaz en inglés (diccionario de plantillas + observador de pantalla).
- `engine.js`: motor de juego puro (puzle, sesión, reglas, escena, repaso espaciado) y `tests/engine.test.js`.
- `exercises.js`: generación de los ejercicios de cada nivel y de la prueba de nivel.
- `icons.js`: iconos, insignias y mascota.
- `app.js`: pantallas, mapa, reproductor de lecciones, vocabulario y planes.
- `audio/`: locuciones (generadas con `../tools/tts/`).

## Pendiente para producción
- **Pagos reales**: el checkout es una simulación. Hay que integrar un procesador de pagos (por ejemplo Stripe) y validar la suscripción en servidor; ahora el plan vive en `localStorage` y se puede manipular.
- Cuentas de usuario y sincronización del progreso entre dispositivos.
- Revisión del contenido y del audio por hablantes nativos, sobre todo ruso y rumano.
- La calidad de las voces es buena pero sigue siendo síntesis: si se busca el máximo realismo, el audio puede regenerarse con un servicio de pago (ElevenLabs, Google, Azure) sin tocar el resto de la app.
