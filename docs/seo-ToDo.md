# Blog & Content Strategy — Klyn.com.mx

> Plan integrado de SEO, GEO, AEO y AIO para posicionamiento por contenido

---

## 🎯 Objetivo

Crear un blog de artículos que posicione para keywords informativas y transaccionales,
optimizado para búsqueda tradicional (SEO), AI Overviews y motores de respuesta (GEO/AEO/AIO).

---

## 📁 Arquitectura propuesta

```
src/pages/blog/
  ├── index.astro              → listado de artículos
  └── posts/
      └── [slug].astro         → artículo individual (dinámico)
```

---

## 🔴 Fase 1 — Infraestructura

- [x] **Crear layout específico para blog** — `src/layouts/BlogLayout.astro` con Article schema, breadcrumbs, author, datePublished
- [x] **Crear página `/blog/index.astro`** — listado con paginación, preview cards, SEO meta
- [x] **Crear template dinámico `/blog/posts/[slug].astro`** — ruta programática para artículos
- [x] **Configurar `@astrojs/mdx`** — para escribir posts en MDX con frontmatter
- [x] **Agregar Article schema (JSON-LD)** en cada post: headline, description, datePublished, author, image, publisher
- [x] **Agregar BreadcrumbList schema** en cada post
- [x] **Agregar BlogPosting schema** para visibilidad en Google News / Discover
- [x] **Actualizar sitemap** para incluir rutas del blog — automático vía `@astrojs/sitemap`

---

## 🟡 Fase 2 — Contenido (programmatic SEO)

### Ejes temáticos

| Tema | Keywords objetivo | Tipo de contenido |
|------|------------------|-------------------|
| **Limpieza profesional** | "cómo limpiar baños comerciales", "desinfectante vs cloro", "tips limpieza oficinas" | Guías, tutoriales |
| **Suministros B2B** | "proveedor de suministros de limpieza Los Mochis", "papelería para empresas" | Comparativas, listas |
| **Industrias** | "limpieza para hoteles Sinaloa", "insumos de limpieza escuelas" | Guías por industria |
| **Productos** | "cloro industrial precio", "trapeador microfibra vs algodón" | Fichas, comparativas |

### Plan de artículos inicial (12)

- [x] **Artículo 1:** "Guía completa de productos de limpieza profesional para empresas en México"
- [x] **Artículo 2:** "¿Cloro o desinfectante? Cuándo usar cada uno en tu negocio"
- [x] **Artículo 3:** "Cómo elegir el proveedor de suministros de limpieza adecuado para tu empresa"
- [x] **Artículo 4:** "Suministros de papelería básicos que toda oficina necesita"
- [x] **Artículo 5:** "Guía de limpieza para hoteles: productos y protocolos esenciales"
- [ ] **Artículo 6:** "Productos de limpieza para escuelas: seguridad y eficiencia"
- [ ] **Artículo 7:** "Limpieza para restaurantes: desengrasantes, desinfectantes y sanidad"
- [ ] **Artículo 8:** "Trapos de microfibra vs algodón: ¿cuál elegir para tu negocio?"
- [ ] **Artículo 9:** "Cómo calcular el consumo mensual de suministros de limpieza"
- [ ] **Artículo 10:** "Guía de compra: químicos de limpieza industrial en México"
- [ ] **Artículo 11:** "Importancia de la limpieza profesional en espacios de trabajo"
- [ ] **Artículo 12:** "Cómo organizar el almacén de suministros de limpieza en tu empresa"

---

## 🔵 Fase 3 — GEO / AEO / AIO

- [ ] **Estructurar artículos para featured snippets** — párrafos de respuesta directa (< 50 words) al inicio, lists, tables
- [ ] **Incluir FAQSchema en cada artículo** — 3-5 preguntas/respuestas relacionadas
- [ ] **Usar formato "Pregunta → Respuesta directa → Desarrollo"** — optimizado para voice search y AI extract
- [ ] **Agregar "Key takeaway" box en cada post** — para que LLMs puedan citar fácilmente
- [ ] **Incluir internal links contextuales** hacia productos y categorías del catálogo
- [ ] **Optimizar headings (H2, H3)** con preguntas naturales que la gente busca
- [ ] **Crear `llms-full.txt`** con resúmenes extendidos de cada artículo para AI crawlers
- [ ] **Tabla de contenido al inicio de cada artículo** (Table of Contents con anchor links)

---

## 🟢 Fase 4 — Optimización continua

- [ ] **Monitorear posiciones** en Google Search Console
- [ ] **Analizar qué artículos generan tráfico y conversión** (GA4)
- [ ] **Expandir artículos según tendencias de búsqueda**
- [ ] **Agregar casos de éxito / testimonios de clientes** como contenido E-E-A-T
- [ ] **Considerar guest posts y backlinks** desde directorios/diarios locales de Sinaloa

---

## 📊 KPIs esperados

- +50 páginas indexadas (vs 6 actuales)
- Tráfico orgánico desde keywords informativas
- Rich results con FAQ schema + Article
- Citaciones en AI Overviews / ChatGPT / Perplexity
