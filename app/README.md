# Lingo — app para aprender idiomas

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
- **Ruso**: transcripción automática en letras latinas y se acepta escribir en latino.
- **Rompecabezas con "jugo"**: piezas con brillo y borde en relieve, flotan en el banco, se arrastran con inclinación e imán al hueco más cercano, aterrizan con rebote y chispas, suenan en escala musical (sonidos sintetizados, sin archivos), vibran en móviles, encajan en ola con confeti al acertar y suman racha. El sonido se silencia desde el reproductor y se respeta `prefers-reduced-motion`.
- **Identidad propia**: sin emojis. Iconos SVG propios (`icons.js`), insignias de idioma y mascota Lumi.

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

**Límite importante**: cada unidad enseña 8 palabras y 5 frases, es decir unas 80 palabras por sesión. Eso queda muy por debajo del vocabulario de referencia de cada nivel (centenares de palabras). Las etiquetas A1/A2/B1 indican los *temas y funciones* que se trabajan, no una cobertura completa del nivel. Para acercarse a esas cifras habría que subir el número de palabras por unidad.

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
| Rumano | ro_RO-mihai-medium | CC0 |

Las voces francesa e italiana exigen atribución (CC BY 4.0): mantén esta tabla visible en la app si la publicas. Antes de uso comercial, revisa las licencias vigentes de cada voz.
Para regenerar el audio tras cambiar `data.js` o `data2.js` hay que repetir la síntesis con el mismo orden de claves (`<unidad>w<n>` para palabras, `<unidad>s<n>` para frases y las de `extraClips()` en `data3.js` para situaciones).

## Estructura
- `data3.js`: situaciones (tonos, rompecabezas vivo y escenas) y la lista de textos que necesitan audio.
- `data.js`, `data2.js`: unidades en español y traducciones de cada curso. Para añadir contenido o idiomas se editan solo estos archivos.
- `exercises.js`: generación de los ejercicios de cada nivel y de la prueba de nivel.
- `icons.js`: iconos, insignias y mascota.
- `app.js`: pantallas, mapa, reproductor de lecciones, vocabulario y planes.
- `audio/`: locuciones.

## Pendiente para producción
- **Pagos reales**: el checkout es una simulación. Hay que integrar un procesador de pagos (por ejemplo Stripe) y validar la suscripción en servidor; ahora el plan vive en `localStorage` y se puede manipular.
- Cuentas de usuario y sincronización del progreso entre dispositivos.
- Revisión del contenido y del audio por hablantes nativos, sobre todo ruso y rumano.
- La calidad de las voces es buena pero sigue siendo síntesis: si se busca el máximo realismo, el audio puede regenerarse con un servicio de pago (ElevenLabs, Google, Azure) sin tocar el resto de la app.
