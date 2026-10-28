# Fixes SEO pendientes

Estado al 19 de octubre de 2026. Este archivo reemplaza la tabla de fixes que vivía en `AGENTS.md`; el detalle completo del audit está en `.seo-audit/` (ACTION-PLAN.md, FULL-AUDIT-REPORT.md, content.md, technical.md).

Leyenda: `[ ]` pendiente · `[~]` en progreso · `[x]` cerrado.

| # | Fix | Prioridad | Estado |
|---|---|---|---|
| 16 | Reconciliar trust numbers (200+ clientes, 200+ productos, 32 estados) | Alta | [~] |
| 20 | Reducir el DOM de `/productos/` a menos de 1,500 nodos | Media | [ ] |
| 21 | Fotos reales en los 20 productos de mayor rotación | Media | [~] |

---

## Fix 16 — Reconciliar trust numbers

**Estado:** en progreso. Los testimonios ya tienen nombre y cargo (Daniel Moreno, CBTA 81; Cristopher Camacho, CUCII Los Mochis), lo que cerró la parte de prueba social anónima que señalaba el audit. Falta cuadrar los números.

**Problema**

La home muestra tres cifras que no coinciden entre sí ni con el catálogo:

- `200+` clientes.
- `200+` productos, cuando el catálogo tiene 190 y el badge de `/productos/` usa el total real.
- `32` estados, sin evidencia pública de operación en cada uno.

Además, la empresa nació en 2025, así que "200+ clientes" es una afirmación fuerte que un visitante puede cuestionar.

**Dónde**

- `src/pages/index.astro` — bloque `hero-stats` (Clientes, Productos, Estados).
- `src/pages/productos.astro` — badge `TOTAL` del hero.
- `src/pages/nosotros.astro` y `src/pages/instituciones-educativas.astro` — revisar si repiten cifras.
- `.seo-audit/content.md` — hallazgos de "unverifiable social proof" e "inconsistent product-count claims".

**Criterio de aceptación**

1. El número de productos coincide con `products.length` en `src/data/products.ts` y con el badge del catálogo.
2. Cada cifra publicada tiene una fuente verificable: conteo del catálogo, export de CRM, guías de envío o facturación.
3. Ninguna página contradice a otra.
4. Si una cifra no se puede sostener, se reemplaza por un dato comprobable (por ejemplo, "Envíos a todo México" en lugar de "32 estados").

**Opciones**

- **Productos:** usar `{TOTAL}` en la home, igual que en `/productos/`, o cambiar a "190+".
- **Clientes:** conservar "200+" solo si existe un export de clientes activos que lo respalde; si no, usar "Clientes en Los Mochis y la región" o un dato de cobertura.
- **Estados:** si se envía por paquetería a todo el país, "Envíos a todo México" es verificable y comunica lo mismo. Si se quiere conservar "32", documentar al menos un envío por estado.
- **Evidencia interna:** guardar el conteo o export que respalde cada cifra en este mismo archivo al cerrar el fix.

**Notas**

- El audit también pedía nombrar a los testimonios; eso ya está resuelto en `/instituciones-educativas/`.
- No cambiar las cifras sin revisar el schema `WholesaleStore` y las meta descripciones donde aparezcan.

---

## Fix 20 — Reducir el DOM de `/productos/`

**Estado:** pendiente. La auditoría de agosto de 2026 midió 3,416 nodos, 361 KB de HTML y 37 KB de JSON inline duplicado.

**Problema**

El catálogo renderiza los 190 productos en el HTML inicial. Cada tarjeta arrastra wrappers, imagen o emoji, nombre, categoría, botón y datos de variantes. Eso produce:

- DOM por encima de la meta de 1,500 nodos.
- HTML pesado para móvil y para el crawl.
- Duplicación: los productos viajan en el markup y otra vez en `window.__KLYN_PRODUCTS__` vía `define:vars`.

**Dónde**

- `src/pages/productos.astro` — render de tarjetas, `define:vars`, JSON inline, búsqueda y filtros.
- `src/data/products.ts` — 190 productos.
- `.seo-audit/FULL-AUDIT-REPORT.md` — sección de rendimiento.

**Criterio de aceptación**

1. `/productos/` queda por debajo de 1,500 nodos en la medición de Lighthouse móvil.
2. La búsqueda, los filtros, el carrito y el selector de variantes siguen funcionando igual.
3. El HTML inicial conserva contenido indexable suficiente: encabezados de categoría y los productos de mayor rotación.
4. El HTML baja de forma clara respecto a los 361 KB actuales.

**Opciones, de menor a mayor esfuerzo**

1. **Quitar duplicación de datos:** enviar a JavaScript solo lo necesario (variantes y emoji), no el catálogo completo. Ahorra peso, no nodos.
2. **Render por categoría:** mostrar una categoría a la vez con "Ver más" o paginación. Reduce nodos de golpe y mejora el tiempo de interacción.
3. **Carga progresiva:** renderizar las primeras 24–36 tarjetas y cargar el resto al hacer scroll o al filtrar. Requiere cuidar el HTML inicial para SEO.
4. **Páginas de categoría indexables:** `/productos/quimicos/`, `/productos/papeleria/`, etc. Resuelve a la vez el DOM y el hueco de SEO que marcó el audit (filtros que hoy son solo anclas).

**Cómo medir**

- En DevTools: `document.querySelectorAll('*').length`.
- Lighthouse móvil: "Avoid an excessive DOM size".
- Tamaño de `dist/productos/index.html` antes y después.

**Riesgo**

Bajar nodos a costa de esconder todo el catálogo puede perder tráfico de cola larga. La salida más segura es combinar carga progresiva con páginas de categoría indexables.

---

## Fix 21 — Fotos reales en los 20 productos de mayor rotación

**Estado:** en progreso. Hay 26 productos con `image` en `src/data/products.ts` y 27 archivos en `public/assets/img/products/` (26 referenciados + 1 huérfano). Faltan el ranking del top 20 y dos fotos que no coinciden con la presentación.

**Problema**

El catálogo sigue mostrando emoji en la mayoría de las tarjetas. La foto real mejora conversión y confianza, sobre todo en los productos que sostienen la venta. Queda un archivo sin producto y dos fotos que no coinciden con la presentación.

**Dónde**

- `src/data/products.ts` — campo `image`.
- `public/assets/img/products/` — archivos WebP.
- `docs/productos-imagenes.md` — inventario y decisiones previas.

**Criterio de aceptación**

1. Los 20 productos de mayor rotación tienen foto real asignada.
2. Cada foto corresponde a la marca y presentación correctas.
3. Formato WebP, proporción 4:3, menos de 100 KB, fondo consistente.
4. `alt` generado desde el nombre del producto, sin keyword stuffing.
5. Los productos sin foto muestran el placeholder actual sin romper la tarjeta.

**Pendientes concretos**

- **Definir el top 20:** pedir el ranking de ventas o rotación; no elegirlo por intuición.
- **Detergente UTIL:** la foto muestra 1 kg y la ficha dice 11 kg. Corregir foto o presentación.
- **Pastilla WIESE 60gr:** la foto es de 56 g y la ficha dice 60 g. Ajustar el dato o conseguir la foto correcta.
- **Archivo sin producto:** `desinfectante-lysol-pro-spray.webp`. Decidir si se da de alta la variante PRO o se elimina.

**Cómo cerrar**

1. Obtener el top 20 por ventas.
2. Cruzar contra `products.ts` y marcar los que ya tienen foto.
3. Fotografiar o conseguir las faltantes con la misma luz y fondo.
4. Optimizar a WebP y asignar `image`.
5. Corregir UTIL y WIESE 60gr; decidir el archivo huérfano de Lysol PRO.
6. Build, revisar tarjetas en `/productos/` y actualizar `docs/productos-imagenes.md`.

---

## Cómo cerrar un fix

1. Implementar el cambio en una rama propia.
2. Correr `npm run build` y validar la página afectada en móvil y escritorio.
3. Medir con el criterio de aceptación de cada fix.
4. Actualizar el estado en este archivo y anotar la evidencia (conteo, captura o cifra).
5. Mergear a `develop`; `main` solo cuando el cambio esté validado en producción.

El resto de hallazgos del audit quedó fuera de este backlog. Si se retoman, agregarlos aquí con el mismo formato.
