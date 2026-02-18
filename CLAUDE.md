# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production (outputs to ./dist)
npm run preview    # Preview production build locally
npm run astro      # Run Astro CLI commands
```

No test or lint commands are configured.

## Architecture

## Project Context

**Klyn** es una empresa mexicana de venta y entrega de suministros de limpieza y papelería (cloro, limpiadores, papel, plumas, etc.), con sede en Los Mochis, Sinaloa. Realiza envíos a todo México y entregas presenciales en Los Mochis.

El sitio es **informativo B2B** — sin e-commerce ni precios visibles. El objetivo es que negocios contacten directamente a Klyn vía WhatsApp, teléfono o email. Existe plan futuro de escalar a B2C.

**Identidad visual:**
- Colores de marca: `#6cace3` (azul), `#ffffff` (blanco), `#fab60a` (amarillo/dorado)
- Logo disponible (buscar versión SVG)

**Páginas planeadas:** Inicio, Nosotros, Productos (showcase por categorías, sin precios), Contacto

**Pendientes del cliente:** template de diseño, logo en SVG, copy/texto, fotos de productos

**Dominio:** www.klyn.com.mx

---

## Architecture

This is an **Astro static site** deployed to **Cloudflare Pages**.

**Key integrations:**
- `@astrojs/cloudflare` — wraps the Astro build as a Cloudflare Worker; the entry point is `dist/_worker.js/index.js`
- `@astrojs/sitemap` — generates a sitemap at build time
- `@tailwindcss/vite` — Tailwind CSS v4 via Vite plugin (no `tailwind.config.*` file; configured through CSS)

**Deployment:** Targets **Cloudflare Pages** (not Workers). `wrangler.jsonc` sets `pages_build_output_dir: ./dist`. Deploy with `wrangler pages deploy` or via the Cloudflare Pages Git integration. The adapter uses `mode: 'directory'` which outputs a `_worker.js` inside `dist/` for Pages to pick up automatically.

**Pages/routing:** Files in `src/pages/` become routes (Astro file-based routing). Currently only `src/pages/index.astro` exists.

**Styles:** `src/styles/global.css` holds global styles. Import it in layouts/pages as needed.
