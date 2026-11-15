# Lingo — app para aprender idiomas

App web estática (HTML/CSS/JS, sin build) para hispanohablantes.
Para probarla en local: `cd app && python3 -m http.server` y abrir http://localhost:8000

## Qué incluye
- **7 cursos**: inglés, francés, alemán, italiano, portugués, ruso y rumano.
- **2 niveles y 20 unidades por curso**:
  - Principiante (A1, unidades 1-10): saludos, presentaciones, números, familia, comida, restaurante, viajes, ciudad, compras, días y horas.
  - Intermedio (A2, unidades 11-20): rutina, casa, salud, trabajo, tiempo, ocio, pasado, futuro, opiniones y pedir ayuda.
  - Al elegir un curso se escoge el nivel o se hace una prueba de 8 preguntas que recomienda uno. El nivel se puede cambiar desde el mapa.
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

## Planes
| | Estándar (gratis) | Premium (7,99 €/mes) |
|---|---|---|
| Cursos | 1 a elegir | los 7 |
| Unidades | 1 a 3 de cada nivel | las 20 |
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
