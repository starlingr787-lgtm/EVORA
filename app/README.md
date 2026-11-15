# Lingo — app para aprender idiomas

App web estática (HTML/CSS/JS, sin build) para hispanohablantes: inglés, francés, alemán, italiano y portugués.
Abrir `app/index.html` o servir la carpeta (`python3 -m http.server`).

## Planes
| | Estándar (gratis) | Premium |
|---|---|---|
| Idiomas | 1 | 5 |
| Lecciones por idioma | 2 | todas |
| Vidas | 5 al día | ilimitadas |
| Audio de pronunciación | ✗ | ✓ |

## Pendiente para producción
- **Pagos reales**: el checkout actual es una simulación (`checkout()` en `app.js`). Hay que integrar Stripe Checkout/Billing y validar la suscripción en servidor; el plan se guarda en `localStorage` y es fácil de manipular.
- Cuentas de usuario y sincronización del progreso (hoy solo `localStorage`).
- Más contenido: se añade en `data.js`.
