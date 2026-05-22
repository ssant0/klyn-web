# SEO To-Do — Klyn.com.mx

> Audit date: 2026-05-21
> Site: https://www.klyn.com.mx

---

## Score: 78/100 — Bueno, con oportunidades claras

---

## 🚨 Crítico (arreglar inmediato)

- [ ] **`sameAs: []` vacío** — Facebook, Instagram y LinkedIn existen pero no están vinculados en el Schema.org `Organization`
  - Facebook: https://www.facebook.com/share/1DqQxgT3Zk/
  - Instagram: https://www.instagram.com/klyn.com.mx/
  - LinkedIn: https://www.linkedin.com/company/klyn-solutions/
- [ ] **CSP `unsafe-inline` en scripts** — Migrar a hashes o nonces para eliminar riesgo XSS

## 🔴 Alto (1 semana)

- [ ] **FAQPage schema** — La sección FAQ (homepage y contacto) no tiene structured data. Oportunidad perdida de rich results.
- [ ] **H1 sin keyword principal** — Homepage: `"El aliado que tu negocio necesita."` — no incluye "suministros de limpieza", "proveedor B2B", "Los Mochis".
- [ ] **Sin blog / contenido** — 6 páginas total. Sin capacidad de rankear keywords informativas.
- [ ] **Sin `x-default` hreflang** — Solo `es-MX` presente. Agregar `x-default` apuntando a la misma URL.

## 🟡 Medio (1 mes)

- [ ] **Sin `lastmod` / `priority` / `changefreq` en sitemap** — No hay señales de actualización para Google.
- [ ] **`links.astro` en sitemap pero es `noindex`** — Inconsistente. Excluir del sitemap o quitar noindex.
- [ ] **Sin páginas de producto individuales** — `/productos` solo tiene categorías. Sin URLs únicas para "cloro industrial", "papel bond", etc. — se pierde long-tail SEO.
- [ ] **Misma OG image en todas las páginas** — Usar OG image específica por página para mejor preview en redes.
- [ ] **Inline event handlers** (`onmouseover`, `onmouseout`) — Violan CSP y son mala práctica.
- [ ] **Sin srcset ni responsive images** — Misma imagen sirve a mobile y desktop.

## 🟢 Bajo (nice to have)

- [ ] **Sin llms.txt** — Para AI search readiness (GEO / AI Overviews).
- [ ] **Sin Google Business Profile visible en la web** — Conectar reseñas y SEO local.
- [ ] **Sin testimonios / casos de éxito** — Falta social proof (E-E-A-T).
- [ ] **Sin `Product` schema** — Categorías no tienen datos estructurados de producto.
