# SEO — Pendientes (requieren decisiones de contenido o backend)

Generado tras auditoría completa con 6 agentes especializados (2026-03-09).

## Crítico

- [x] **Convertir imágenes PNG a WebP** — `botes-cloro-imagen.png` (2.3 MB), `contacto-imagen.png` (2.3 MB), `parallax-footer-image.png` (7.6 MB). Convertir a WebP con calidad 75–82. Target: <150 KB cada una. Mayor ganancia de rendimiento pendiente (LCP/CWV).
- [ ] **Página de contacto muy delgada (~90 palabras)** — Agregar mínimo 300 palabras: proceso de cotización paso a paso, qué incluir en el mensaje de WhatsApp, dirección física visible en el cuerpo de la página, horario en prosa.

## Alto

- [ ] **Logos de socios son SVGs placeholder** — La sección "Empresas con quienes colaboramos" usa gráficos genéricos del template. Reemplazar con logos reales de clientes o eliminar la sección hasta tenerlos.
- [ ] **`sameAs` vacío en schemas** — Llenar los arrays `"sameAs": []` en `src/layouts/Layout.astro` (schemas `WholesaleStore` y `Organization`) con las URLs reales de Facebook, Instagram y Google Business Profile.
- [ ] **Dirección física no visible en el contenido** — La dirección solo está en el schema markup. Agregarla como texto visible en `/contacto`.
- [ ] **Palabra "mayoreo" ausente del sitio** — Los compradores B2B buscan "suministros de limpieza al mayoreo" y términos similares. Agregar al copy de `/productos`.

## Medio

- [ ] **Sin Aviso de Privacidad** — Requerido por la LFPDPPP mexicana. Crear página `/aviso-de-privacidad` con aviso estándar de privacidad.
- [ ] **Página Nosotros demasiado corta (~390 palabras, mínimo 500)** — Agregar: año de fundación, nombre de al menos un integrante del equipo, una anécdota o historia de cliente real.
- [ ] **Respuestas del FAQ demasiado vagas** — "A todos lados" (pregunta de envíos) y "Trabajamos como más se ajuste a tus necesidades" (pregunta de pedidos recurrentes) no aportan información útil. Expandir con datos concretos.

## Bajo

- [ ] **Logo en PNG (17 KB)** — Solicitar versión SVG al cliente para reemplazar `/assets/logo/klyn-logo.png`. SVG es vector, pesa ~1–2 KB y es nítido en todas las resoluciones.
- [ ] **Coordenadas `geo` son aproximadas** — En `Layout.astro`, el schema `WholesaleStore` usa coordenadas del centro de Los Mochis (25.7906, -108.9867). Actualizar con las coordenadas exactas de Melchor Ocampo 1054 una vez confirmadas.
