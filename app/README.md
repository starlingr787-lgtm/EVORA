# Lingo — app para aprender idiomas

App web estática (HTML/CSS/JS, sin build) para hispanohablantes.
Para probarla en local: `cd app && python3 -m http.server` y abrir http://localhost:8000

## Qué incluye
- **7 cursos**: inglés, francés, alemán, italiano, portugués, ruso y rumano.
- **10 unidades por curso**, cada una una situación real (saludos, presentaciones, números, familia, comida, restaurante, viajes, ciudad, compras, días y horas). Las frases de cada unidad usan solo su contexto y su vocabulario, y las unidades siguientes repasan las anteriores.
- **Mapa de niveles**: 5 niveles por unidad (palabras, frases, práctica, escucha y combina, prueba de unidad). Se desbloquean de uno en uno y se puntúan de 1 a 3 estrellas.
- **Ejercicios**: opción múltiple, escribir la traducción, ordenar palabras, completar la frase, relacionar parejas y escucha. Los fallos se repiten al final de la lección.
- **Ruso**: transcripción automática en letras latinas y se acepta escribir la respuesta en latino.
- **Identidad propia**: sin emojis. Iconos SVG propios (`icons.js`), insignias de idioma y mascota Lumi.

## Planes
| | Estándar (gratis) | Premium (7,99 €/mes) |
|---|---|---|
| Cursos | 1 a elegir | los 7 |
| Unidades | 1 a 3 de cada curso | las 10 |
| Vidas | 5 al día | ilimitadas |
| Audio y ejercicios de escucha | no | sí |
| Repaso de errores | no | sí |

## Estructura
- `data.js`: unidades en español y traducciones de cada curso. Para añadir contenido o idiomas se edita solo este archivo.
- `exercises.js`: generación de los ejercicios de cada nivel.
- `icons.js`: iconos, insignias y mascota.
- `app.js`: pantallas, mapa, reproductor de lecciones y planes.

## Pendiente para producción
- **Pagos reales**: el checkout es una simulación. Hay que integrar un procesador de pagos (por ejemplo Stripe) y validar la suscripción en servidor; ahora el plan vive en `localStorage` y se puede manipular.
- Cuentas de usuario y sincronización del progreso entre dispositivos.
- Revisión del contenido por hablantes nativos, sobre todo ruso y rumano.
- El audio usa la síntesis de voz del navegador; la calidad y la disponibilidad de voces en ruso y rumano dependen del dispositivo.
