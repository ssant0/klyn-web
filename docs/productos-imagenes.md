# Imágenes de productos — inventario y estatus

Análisis de las fotos de producto en `public/assets/img/products/` contra el catálogo de `src/data/products.ts`.
Las fotos ya están versionadas en el repo (se eliminó la regla de `.gitignore` que las excluía) y se asignaron al campo `image` de los productos correspondientes.

## Convención de nombres

`<tipo-de-producto>-<marca>-<spec>.webp`

- kebab-case, sin acentos ni signos (`Ácido Muriático SULTAN` → `acido-muriatico-sultan`).
- Formato `.webp` (todas las `.png` se convirtieron con `magick`).
- **La marca va siempre al final**, después del tipo genérico: `Detergente RUTH 10kg` → `detergente-ruth-10kg`.

## Resumen

| Concepto | Total |
| --- | --- |
| Imágenes en la carpeta | 27 |
| Asignadas a un producto | 26 |
| Sin producto registrado | 1 |
| Eliminadas | 1 (`24.png`) |

## Imágenes asignadas (26)

| Archivo | Producto (`id`) |
| --- | --- |
| `aromatizante-maquiaroma.webp` | 3 · Aromatizante MAQUIAROMA |
| `aromatizante-wiese.webp` | 8 · Aromatizante WIESE Aerosol 400 ml |
| `cloro-klyn-20l.webp` | 9 · Cloro |
| `desinfectante-lysol.webp` | 13 · Desinfectante LYSOL Aerosol |
| `pastillas-de-cloro.webp` | 14 · Pastilla de cloro |
| `toalla-desinfectante-clorox.webp` | 16 · Toalla Desinfectante Clorox |
| `toallitas-desinfectantes-membersmark.webp` | 17 · Toalla Desinfectante MM |
| `desengrasante.webp` | 18 · Desengrasante |
| `detergente-arcoiris-9kg.webp` | 19 · Detergente Arcoíris 9kg |
| `detergente-blanca-nieves-10kg.webp` | 20 · Detergente Blanca Nieves 10kg |
| `detergente-liquido-klyn.webp` | 21 · Detergente Liquido |
| `detergente-ruth-10kg.webp` | 22 · Detergente RUTH 10kg |
| `detergente-util.webp` | 23 · Detergente UTIL 11kg ⚠️ |
| `detergente-en-polvo.webp` | 24 · Detergente en Polvo |
| `jabon-zote.webp` | 25 · Jabón ZOTE |
| `jabon-zote-caja-25pzs.webp` | 26 · Jabón ZOTE Caja 25pzs 400g |
| `suavizante-klyn.webp` | 27 · Suavizante de Telas |
| `acido-muriatico-sultan.webp` | 28 · Ácido Muriático SULTAN |
| `cloro-granulado.webp` | 29 · Cloro Granulado |
| `detergente-alcalino-diversey.webp` | 30 · Detergente Desinfectante Alcalino Hypofoam, DIVERSEY |
| `limpiador-acero-inoxidable-klyn.webp` | 31 · Limpiador de Acero Inoxidable |
| `limpiador-acero-inoxidable-diversey.webp` | 32 · Limpiador de Acero Inoxidable, 5L, DIVERSEY |
| `pastilla-aromatizante-wiese.webp` | 35 · Pastilla WIESE para WC 60gr ⚠️ |
| `pastilla-wiese-70gr.webp` | 36 · Pastilla WIESE para WC 70gr |
| `pastillas-great-value.webp` | 38 · Pastillas Sanitarias ALEN, GREAT VALUE |
| `tapete-para-mingitorio-wiese.webp` | 39 · Tapete para Mingitorio C/10pzs |

## Imágenes SIN producto registrado (1)

| Archivo | Qué es | Estado |
| --- | --- | --- |
| `desinfectante-lysol-pro-spray.webp` | **Lysol PRO** Commercial Disinfectant Spray | No existe la variante PRO. `11 · Desinfectante LYSOL` solo maneja líquido 1L/5L/20L. |

## Decisiones y notas

- **Lysol**: la foto `desinfectante-lysol.webp` (aerosol) se asignó a `13 · Desinfectante LYSOL Aerosol`. La variante `11 · Desinfectante LYSOL` es líquido, no aerosol.
- **Detergente UTIL**: la foto muestra **1 kg**, el producto dice **11 kg**. Se asignó igual (misma marca/línea); conviene corregir el dato o la foto.
- **Pastilla WIESE**: `35 · Pastilla WIESE para WC 60gr` usa la foto de WIESE WC Citrus **56 g** (tamaño más cercano). `36 · ...70gr` ya tiene su propia foto de 70 g.
- **Cloro**: `9 · Cloro` usa la foto del envase Klyn **Blanqueador Multiusos 20 L**, que es la presentación de 20 L que se vende en el catálogo. El archivo se llamaba `blanqueador-klyn.webp`.
- **Toalla desinfectante**: el producto 16 se llamaba "Toalla Desinfectante Cloralex", pero la foto y el artículo real son **Clorox Disinfecting Wipes**. Se renombró la ficha a "Toalla Desinfectante Clorox" y se asignó `toalla-desinfectante-clorox.webp`.
- **Nombre de archivo heredado**: `toallitas-desinfectantes-membersmark.webp` conserva el plural y el guion bajo de marca; no se renombró para no romper referencias.

## Cambios aplicados

- Tres fotos nuevas asignadas: `9 · Cloro`, `16 · Toalla Desinfectante Clorox` y `36 · Pastilla WIESE para WC 70gr`.
- `blanqueador-klyn.webp` → `cloro-klyn-20l.webp` (la foto es la misma, en mejor calidad).
- `toallitas-desinfectantes-clorox.webp` → `toalla-desinfectante-clorox.webp`.
- Ficha 16 renombrada de "Toalla Desinfectante Cloralex" a "Toalla Desinfectante Clorox".
- Total: **26 productos con foto** de 190.
- Eliminada la regla `public/assets/img/products/` de `.gitignore` para versionar las fotos.
- Eliminado `24.png` (Wiese Potpourri, no servía).
- `blanca-nieves-10kg.webp` → `detergente-blanca-nieves-10kg.webp` (marca primero → tipo primero).
- Marca movida al final en: `diversey-acero-inoxidable` → `limpiador-acero-inoxidable-diversey`, `wiese-aromatizante` → `aromatizante-wiese`, `caja-jabon-zote` → `jabon-zote-caja-25pzs`.
- Prefijo genérico agregado donde solo había marca: `lysol` → `desinfectante-lysol`, `lysol-pro-desinfectante-spray` → `desinfectante-lysol-pro-spray`.
- Todas las `.png` convertidas a `.webp` con `magick` y se eliminó el `.png` original.
