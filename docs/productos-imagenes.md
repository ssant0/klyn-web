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
| Asignadas a un producto | 24 |
| Sin producto registrado | 3 |
| Eliminadas | 1 (`24.png`) |

## Imágenes asignadas (24)

| Archivo | Producto (`id`) |
| --- | --- |
| `aromatizante-maquiaroma.webp` | 3 · Aromatizante MAQUIAROMA |
| `aromatizante-wiese.webp` | 8 · Aromatizante WEISE Aerosol 400 ml |
| `desinfectante-lysol.webp` | 13 · Lyson Aerosol ⚠️ |
| `pastillas-de-cloro.webp` | 14 · Pastilla de cloro |
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
| `pastilla-aromatizante-wiese.webp` | 35 · Pastilla WEISE para WC 60gr ⚠️ |
| `pastillas-harpic.webp` | 37 · Pastillas Harpic |
| `pastillas-great-value.webp` | 38 · Pastillas Sanitarias ALEN, GREAT VALUE |
| `tapete-para-mingitorio-wiese.webp` | 39 · Tapete para Mingitorio C/10pzs |

## Imágenes SIN producto registrado (3)

**No se dieron de alta** (no se creó ningún producto nuevo) y quedan pendientes de decisión.

| Archivo | Qué es | Estado |
| --- | --- | --- |
| `blanqueador-klyn.webp` | Klyn **Blanqueador Multiusos** 20 L | No existe un producto "Blanqueador". Lo más cercano es `9 · Cloro` (20 L), pero es otro artículo. |
| `desinfectante-lysol-pro-spray.webp` | **Lysol PRO** Commercial Disinfectant Spray | No existe la variante PRO. `11 · Desinfectante LYSOL` solo maneja líquido 1L/5L/20L. |
| `toallitas-desinfectantes-clorox.webp` | **Clorox** Disinfecting Wipes | **Decisión: no asignar.** El producto 16 es "Toalla Desinfectante Cloralex" (marca distinta). |

## Decisiones y notas

- **Lysol**: la foto `desinfectante-lysol.webp` (aerosol) se asignó a `13 · Lyson Aerosol` (el nombre en el dato tiene un typo: "Lyson"). La variante `11 · Desinfectante LYSOL` es líquido, no aerosol.
- **Detergente UTIL**: la foto muestra **1 kg**, el producto dice **11 kg**. Se asignó igual (misma marca/línea); conviene corregir el dato o la foto.
- **Pastilla Wiese**: la foto es Wiese WC Citrus **56 g**; se asignó a `35 · Pastilla WEISE para WC 60gr` (tamaño más cercano). `36 · ...70gr` queda sin foto.
- **Clorox vs Cloralex**: no se asignó. El producto 16 queda sin foto.

## Cambios aplicados

- Campo `image` agregado a 23 productos en `src/data/products.ts` (el id 20 ya lo tenía): total **24 productos con foto**.
- Eliminada la regla `public/assets/img/products/` de `.gitignore` para versionar las fotos.
- Eliminado `24.png` (Wiese Potpourri, no servía).
- `blanca-nieves-10kg.webp` → `detergente-blanca-nieves-10kg.webp` (marca primero → tipo primero).
- Marca movida al final en: `diversey-acero-inoxidable` → `limpiador-acero-inoxidable-diversey`, `wiese-aromatizante` → `aromatizante-wiese`, `caja-jabon-zote` → `jabon-zote-caja-25pzs`.
- Prefijo genérico agregado donde solo había marca: `lysol` → `desinfectante-lysol`, `lysol-pro-desinfectante-spray` → `desinfectante-lysol-pro-spray`, `blanqueador` → `blanqueador-klyn`.
- Todas las `.png` convertidas a `.webp` con `magick` y se eliminó el `.png` original.
