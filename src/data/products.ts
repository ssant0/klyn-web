export interface ProductVariant {
  key: string;      // machine key, e.g. "presentacion" | "esencia" | "talla" | "color"
  label: string;    // human label shown in UI / WhatsApp message, e.g. "Presentación"
  options: string[]; // e.g. ["1L", "3.75L", "5L", "20L"]
}

export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  categoryKey: "quimicos" | "herramientas" | "higienicos" | "papeleria" | "empaques";
  accent: "blue" | "gold";
  image?: string;          // future photo path, e.g. /assets/products/fabuloso.webp
  variants?: ProductVariant[];
}

// ── Reusable variant presets ──────────────────────────────
const PRES_LIQUIDO: ProductVariant = {
  key: "presentacion",
  label: "Presentación",
  options: ["1L", "3.75L", "5L", "20L"],
};

export const products: Product[] = [

  // ── Químicos — Limpieza General ──────────────────────────────
  { id:   1, name: "Aceite para Mopa",                                                           category: "Químicos", subcategory: "Limpieza General", categoryKey: "quimicos", accent: "blue",
    variants: [{ key: "presentacion", label: "Presentación", options: ["1L","5L","20L"] }] },
  { id:   2, name: "Aromatizante Ambiental",                                                     category: "Químicos", subcategory: "Limpieza General", categoryKey: "quimicos", accent: "blue",
    variants: [{ key: "presentacion", label: "Presentación", options: ["1L","5L","20L"] }] },
  { id:   3, name: "Aromatizante MAQUIAROMA",                                                    category: "Químicos", subcategory: "Limpieza General", categoryKey: "quimicos", accent: "blue" },
  { id:   4, name: "Lavatrastes",                                                                category: "Químicos", subcategory: "Limpieza General", categoryKey: "quimicos", accent: "blue",
    variants: [{ key: "presentacion", label: "Presentación", options: ["1L","5L","20L"] }] },
  { id:   5, name: "Limpiador Multiusos",                                                        category: "Químicos", subcategory: "Limpieza General", categoryKey: "quimicos", accent: "blue",
    variants: [{ key: "presentacion", label: "Presentación", options: ["1L","5L","20L"] }, { key: "esencia", label: "Esencia", options: ["Pasión frutal","Brisa de mar","Limón","Lavanda"] }] },
  { id:   6, name: "Pinol",                                                                      category: "Químicos", subcategory: "Limpieza General", categoryKey: "quimicos", accent: "blue",
    variants: [{ key: "presentacion", label: "Presentación", options: ["1L","5L","20L"] }] },
  { id:   7, name: "Repuestos Airwick",                                                          category: "Químicos", subcategory: "Limpieza General", categoryKey: "quimicos", accent: "blue" },

  // ── Químicos — Desinfección y Sanitización ───────────────────
  { id:   8, name: "Aromatizante WEISE Aerosol 400 ml",                                          category: "Químicos", subcategory: "Desinfección y Sanitización", categoryKey: "quimicos", accent: "blue" },
  { id:   9, name: "Cloro",                                                                      category: "Químicos", subcategory: "Desinfección y Sanitización", categoryKey: "quimicos", accent: "blue",
    variants: [PRES_LIQUIDO] },
  { id:  10, name: "Cloro Seco Granulado",                                                       category: "Químicos", subcategory: "Desinfección y Sanitización", categoryKey: "quimicos", accent: "blue" },
  { id:  11, name: "Desinfectante LYSOL",                                                        category: "Químicos", subcategory: "Desinfección y Sanitización", categoryKey: "quimicos", accent: "blue",
    variants: [{ key: "presentacion", label: "Presentación", options: ["1L","5L","20L"] }] },
  { id:  12, name: "Hipoclorito de Sodio - Garrafa 24Kg",                                        category: "Químicos", subcategory: "Desinfección y Sanitización", categoryKey: "quimicos", accent: "blue" },
  { id:  13, name: "Lyson Aerosol",                                                              category: "Químicos", subcategory: "Desinfección y Sanitización", categoryKey: "quimicos", accent: "blue" },
  { id:  14, name: "Pastilla de cloro",                                                          category: "Químicos", subcategory: "Desinfección y Sanitización", categoryKey: "quimicos", accent: "blue" },
  { id:  15, name: "Pinol Lechoso",                                                              category: "Químicos", subcategory: "Desinfección y Sanitización", categoryKey: "quimicos", accent: "blue",
    variants: [{ key: "presentacion", label: "Presentación", options: ["1L","5L","20L"] }] },
  { id:  16, name: "Toalla Desinfectante Cloralex",                                              category: "Químicos", subcategory: "Desinfección y Sanitización", categoryKey: "quimicos", accent: "blue" },
  { id:  17, name: "Toalla Desinfectante MM",                                                    category: "Químicos", subcategory: "Desinfección y Sanitización", categoryKey: "quimicos", accent: "blue" },

  // ── Químicos — Desengrasantes ────────────────────────────────
  { id:  18, name: "Desengrasante",                                                              category: "Químicos", subcategory: "Desengrasantes", categoryKey: "quimicos", accent: "blue",
    variants: [{ key: "presentacion", label: "Presentación", options: ["1L","3.75L","20L"] }] },

  // ── Químicos — Lavandería ────────────────────────────────────
  { id:  19, name: "Detergente Arcoíris 9kg",                                                    category: "Químicos", subcategory: "Lavandería", categoryKey: "quimicos", accent: "blue" },
  { id:  20, name: "Detergente Blanca Nieves 10kg",                                              category: "Químicos", subcategory: "Lavandería", categoryKey: "quimicos", accent: "blue" },
  { id:  21, name: "Detergente Liquido",                                                         category: "Químicos", subcategory: "Lavandería", categoryKey: "quimicos", accent: "blue",
    variants: [{ key: "presentacion", label: "Presentación", options: ["1L","5L","20L"] }] },
  { id:  22, name: "Detergente RUTH 10kg",                                                       category: "Químicos", subcategory: "Lavandería", categoryKey: "quimicos", accent: "blue" },
  { id:  23, name: "Detergente UTIL 11kg",                                                       category: "Químicos", subcategory: "Lavandería", categoryKey: "quimicos", accent: "blue" },
  { id:  24, name: "Detergente en Polvo",                                                        category: "Químicos", subcategory: "Lavandería", categoryKey: "quimicos", accent: "blue" },
  { id:  25, name: "Jabón ZOTE",                                                                 category: "Químicos", subcategory: "Lavandería", categoryKey: "quimicos", accent: "blue" },
  { id:  26, name: "Jabón ZOTE Caja 25pzs 400g",                                                 category: "Químicos", subcategory: "Lavandería", categoryKey: "quimicos", accent: "blue" },
  { id:  27, name: "Suavizante de Telas",                                                        category: "Químicos", subcategory: "Lavandería", categoryKey: "quimicos", accent: "blue",
    variants: [{ key: "presentacion", label: "Presentación", options: ["1L","5L","20L"] }] },

  // ── Químicos — Especializados ────────────────────────────────
  { id:  28, name: "Ácido Muriático SULTAN",                                                     category: "Químicos", subcategory: "Especializados", categoryKey: "quimicos", accent: "blue" },
  { id:  29, name: "Cloro Granulado",                                                            category: "Químicos", subcategory: "Especializados", categoryKey: "quimicos", accent: "blue" },
  { id:  30, name: "Detergente Desinfectante Alcalino Hypofoam, DIVERSEY",                       category: "Químicos", subcategory: "Especializados", categoryKey: "quimicos", accent: "blue" },
  { id:  31, name: "Limpiador de Acero Inoxidable",                                              category: "Químicos", subcategory: "Especializados", categoryKey: "quimicos", accent: "blue",
    variants: [{ key: "presentacion", label: "Presentación", options: ["1L","3.75L","20L"] }] },
  { id:  32, name: "Limpiador de Acero Inoxidable, 5L, DIVERSEY",                                category: "Químicos", subcategory: "Especializados", categoryKey: "quimicos", accent: "blue" },
  { id:  33, name: "Mata Cucarachas Urbano",                                                     category: "Químicos", subcategory: "Especializados", categoryKey: "quimicos", accent: "blue" },
  { id:  34, name: "Mata Moscos Urbano",                                                         category: "Químicos", subcategory: "Especializados", categoryKey: "quimicos", accent: "blue" },

  // ── Químicos — Cuidado de Baños ──────────────────────────────
  { id:  35, name: "Pastilla WEISE para WC 60gr",                                                category: "Químicos", subcategory: "Cuidado de Baños", categoryKey: "quimicos", accent: "blue" },
  { id:  36, name: "Pastilla Weise para WC 70gr",                                                category: "Químicos", subcategory: "Cuidado de Baños", categoryKey: "quimicos", accent: "blue" },
  { id:  37, name: "Pastillas Harpic",                                                           category: "Químicos", subcategory: "Cuidado de Baños", categoryKey: "quimicos", accent: "blue" },
  { id:  38, name: "Pastillas Sanitarias ALEN, GREAT VALUE",                                     category: "Químicos", subcategory: "Cuidado de Baños", categoryKey: "quimicos", accent: "blue" },
  { id:  39, name: "Tapete para Mingitorio C/10pzs",                                             category: "Químicos", subcategory: "Cuidado de Baños", categoryKey: "quimicos", accent: "blue" },

  // ── Herramientas — Mopas y Trapeadores ───────────────────────
  { id:  40, name: "Base para Mapeador, CASTOR, 60cm",                                           category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  41, name: "Base para Mapeador, CASTOR, 90cm",                                           category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  42, name: "Funda Mopa 60cm",                                                            category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  43, name: "Funda Mopa 90cm",                                                            category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  44, name: "Jalador Higiénico, CASTOR, 45cm",                                            category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  45, name: "Jalador de Agua Reforzado",                                                  category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  46, name: "Jalador para Pisos B/Metal, CASTOR, 50cm",                                   category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  47, name: "Trapeador Hilo No 6 de Colores",                                             category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  48, name: "Trapeador Microfibra Rojo, CASTOR",                                          category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  49, name: "Trapeador Microfibra, CASTOR, 250g",                                         category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  50, name: "Trapeador Tiras Microfibra/Microseda",                                       category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  51, name: "Trapeador de Microseda Forjado Bastón Lamina",                               category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  52, name: "Trapeador de Microseda Forjado Bastón de Lámina",                            category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  53, name: "Trapeador de Tela Microfibra Amarillo Bastón Madera",                        category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },
  { id:  54, name: "Trapeador de Tela Microfibra Verde Bastón Madera",                           category: "Herramientas", subcategory: "Mopas y Trapeadores", categoryKey: "herramientas", accent: "gold" },

  // ── Herramientas — Escobas y Cepillos ────────────────────────
  { id:  55, name: "Cepillo Plástico P/WC",                                                      category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  56, name: "Cepillo Tipo Plancha",                                                       category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  57, name: "Cepillo WC Bola con Base",                                                   category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  58, name: "Cepillo WC Bola sin Base",                                                   category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  59, name: "Cepillo de Alambre con Mango TRUPER",                                        category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  60, name: "Cepillo de Fibras Suaves",                                                   category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  61, name: "Cepillo de Mano T/Plancha",                                                  category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  62, name: "Cepillo para Baño",                                                          category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  63, name: "Cepillo para Pisos 25cm",                                                    category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  64, name: "Escoba 6 Hilos Mijo Roja",                                                   category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  65, name: "Escoba 6 Hilos Mixta Azul",                                                  category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  66, name: "Escoba 6 Hilos Plástico Virgen",                                             category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  67, name: "Escoba Abanico Larga",                                                       category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  68, name: "Escoba Angular, CASTOR",                                                     category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  69, name: "Escoba Coco Popote Azul",                                                    category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  70, name: "Escoba Coco Premium Plata",                                                  category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  71, name: "Escoba Espiga",                                                              category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  72, name: "Escoba Espiga 8 Hilos",                                                      category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  73, name: "Escoba Metálica 20 Dientes Curva",                                           category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  74, name: "Escoba Metálica 22 Dientes Reforzada",                                       category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  75, name: "Escoba Metálica 22 Dientes TRUPER",                                          category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  76, name: "Escoba Plástico T/Bodega",                                                   category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  77, name: "Escoba para Jardín EM20 TRUPER",                                             category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  78, name: "Rastrillo para Jardín 16 Dientes TRUPER",                                    category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  79, name: "Recogedor C/Bastón Dust-Pro, CASTOR",                                        category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  80, name: "Recogedor Plástico Perico",                                                  category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  81, name: "Recogedor de Basura C/Mango",                                                category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  82, name: "Recogedor de Lámina",                                                        category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },
  { id:  83, name: "Recogedor de Lámina sm",                                                     category: "Herramientas", subcategory: "Escobas y Cepillos", categoryKey: "herramientas", accent: "gold" },

  // ── Herramientas — Contenedores ──────────────────────────────
  { id:  84, name: "Bote de Basura para Oficina",                                                category: "Herramientas", subcategory: "Contenedores", categoryKey: "herramientas", accent: "gold" },
  { id:  85, name: "Caja Plástica Uso Rudo 102L Negro Tapa Amarilla",                            category: "Herramientas", subcategory: "Contenedores", categoryKey: "herramientas", accent: "gold" },
  { id:  86, name: "Carretilla, PRETUL",                                                         category: "Herramientas", subcategory: "Contenedores", categoryKey: "herramientas", accent: "gold" },
  { id:  87, name: "Cesto de Plástico, SABLON",                                                  category: "Herramientas", subcategory: "Contenedores", categoryKey: "herramientas", accent: "gold" },
  { id:  88, name: "Jabonera Manual Uso Rudo Humo con Negro, OVAL, 1L",                          category: "Herramientas", subcategory: "Contenedores", categoryKey: "herramientas", accent: "gold" },
  { id:  89, name: "Tambo 200L",                                                                 category: "Herramientas", subcategory: "Contenedores", categoryKey: "herramientas", accent: "gold" },

  // ── Herramientas — Cubetas ───────────────────────────────────
  { id:  90, name: "Cubeta Exprimidora JOFEL",                                                   category: "Herramientas", subcategory: "Cubetas", categoryKey: "herramientas", accent: "gold" },
  { id:  91, name: "Cubeta Exprimidora PERICO",                                                  category: "Herramientas", subcategory: "Cubetas", categoryKey: "herramientas", accent: "gold" },
  { id:  92, name: "Cubeta Industrial 19L",                                                      category: "Herramientas", subcategory: "Cubetas", categoryKey: "herramientas", accent: "gold" },
  { id:  93, name: "Cubeta con Escurridor",                                                      category: "Herramientas", subcategory: "Cubetas", categoryKey: "herramientas", accent: "gold" },
  { id:  94, name: "Cubeta con Exprimidor 35L Amarilla RUBERMAIND",                              category: "Herramientas", subcategory: "Cubetas", categoryKey: "herramientas", accent: "gold" },
  { id:  95, name: "Cubeta con Exprimidor Amarilla, OVAL, 20L",                                  category: "Herramientas", subcategory: "Cubetas", categoryKey: "herramientas", accent: "gold" },
  { id:  96, name: "Cubeta con Exprimidor KLINTEK 8L",                                           category: "Herramientas", subcategory: "Cubetas", categoryKey: "herramientas", accent: "gold" },
  { id:  97, name: "Cubeta con Exprimidor, OVAL, 32L",                                           category: "Herramientas", subcategory: "Cubetas", categoryKey: "herramientas", accent: "gold" },

  // ── Herramientas — Dispensadores ─────────────────────────────
  { id:  98, name: "Despachador Toalla Interdoblada Largo Humo, OVAL",                           category: "Herramientas", subcategory: "Dispensadores", categoryKey: "herramientas", accent: "gold" },
  { id:  99, name: "Despachador de Cinta para Flejar",                                           category: "Herramientas", subcategory: "Dispensadores", categoryKey: "herramientas", accent: "gold" },
  { id: 100, name: "Despachador de Papel Higiénico Jumbo Humo, Ecopro, OVAL",                    category: "Herramientas", subcategory: "Dispensadores", categoryKey: "herramientas", accent: "gold" },
  { id: 101, name: "Despachador de Papel Higiénico Junior Humo, OVAL (DV009)",                   category: "Herramientas", subcategory: "Dispensadores", categoryKey: "herramientas", accent: "gold" },
  { id: 102, name: "Despachador de Toalla Rollo Palanca Humo, OVAL",                             category: "Herramientas", subcategory: "Dispensadores", categoryKey: "herramientas", accent: "gold" },
  { id: 103, name: "Dispensador Toalla Auto Corte Compacto JR, GREYMOON",                        category: "Herramientas", subcategory: "Dispensadores", categoryKey: "herramientas", accent: "gold" },
  { id: 104, name: "Dispensador Toalla Auto Corte Negra, GREYMOON",                              category: "Herramientas", subcategory: "Dispensadores", categoryKey: "herramientas", accent: "gold" },
  { id: 105, name: "Dispensador de Papel Higiénico GREYMOON AD200",                              category: "Herramientas", subcategory: "Dispensadores", categoryKey: "herramientas", accent: "gold" },
  { id: 106, name: "Dispensador de Papel Higiénico GREYMOON Zero Humo",                          category: "Herramientas", subcategory: "Dispensadores", categoryKey: "herramientas", accent: "gold" },

  // ── Herramientas — Paños y Fibras ────────────────────────────
  { id: 107, name: "Fibra Verde Scotch",                                                         category: "Herramientas", subcategory: "Paños y Fibras", categoryKey: "herramientas", accent: "gold" },
  { id: 108, name: "Fibra Verde con Esponja 8x12cm",                                             category: "Herramientas", subcategory: "Paños y Fibras", categoryKey: "herramientas", accent: "gold" },
  { id: 109, name: "Fibra Verde con Esponja GV 8x12cm",                                          category: "Herramientas", subcategory: "Paños y Fibras", categoryKey: "herramientas", accent: "gold" },
  { id: 110, name: "Fibra con Esponja 2pzs",                                                     category: "Herramientas", subcategory: "Paños y Fibras", categoryKey: "herramientas", accent: "gold" },
  { id: 111, name: "Fibra con Esponja, 3M P-94, Caja",                                           category: "Herramientas", subcategory: "Paños y Fibras", categoryKey: "herramientas", accent: "gold" },
  { id: 112, name: "Franela",                                                                    category: "Herramientas", subcategory: "Paños y Fibras", categoryKey: "herramientas", accent: "gold" },
  { id: 113, name: "Microfibra",                                                                 category: "Herramientas", subcategory: "Paños y Fibras", categoryKey: "herramientas", accent: "gold" },
  { id: 114, name: "Rollo Scott Azul",                                                           category: "Herramientas", subcategory: "Paños y Fibras", categoryKey: "herramientas", accent: "gold" },

  // ── Herramientas — Asas ──────────────────────────────────────
  { id: 115, name: "Asa 48mm",                                                                   category: "Herramientas", subcategory: "Asas", categoryKey: "herramientas", accent: "gold" },
  { id: 116, name: "Bastón de Lámina, 1.37, Rosca 3/4",                                          category: "Herramientas", subcategory: "Asas", categoryKey: "herramientas", accent: "gold" },

  // ── Herramientas — Envases ───────────────────────────────────
  { id: 117, name: "Atomizador Italiano, GUALA",                                                 category: "Herramientas", subcategory: "Envases", categoryKey: "herramientas", accent: "gold" },
  { id: 118, name: "Atomizador de Plástico 1L MAPLE TOOLS, SURTEX,KLINTEK",                      category: "Herramientas", subcategory: "Envases", categoryKey: "herramientas", accent: "gold" },
  { id: 119, name: "Envase PET, 1L",                                                             category: "Herramientas", subcategory: "Envases", categoryKey: "herramientas", accent: "gold" },
  { id: 120, name: "Envase PET, 5L",                                                             category: "Herramientas", subcategory: "Envases", categoryKey: "herramientas", accent: "gold" },
  { id: 121, name: "Envase Polietileno, 1L",                                                     category: "Herramientas", subcategory: "Envases", categoryKey: "herramientas", accent: "gold" },
  { id: 122, name: "Envase Polietileno, 3.75L",                                                  category: "Herramientas", subcategory: "Envases", categoryKey: "herramientas", accent: "gold" },

  // ── Herramientas — Etiquetadoras ─────────────────────────────
  { id: 123, name: "ETIQUETA 26X16, BLANCA, ESTUCHE C/36 ROLLOS, ROLLO C/1,000",                 category: "Herramientas", subcategory: "Etiquetadoras", categoryKey: "herramientas", accent: "gold" },
  { id: 124, name: "Etiquetadora OPEN S-16 A",                                                   category: "Herramientas", subcategory: "Etiquetadoras", categoryKey: "herramientas", accent: "gold" },
  { id: 125, name: "Etiquetadora, RIBETEC",                                                      category: "Herramientas", subcategory: "Etiquetadoras", categoryKey: "herramientas", accent: "gold" },
  { id: 126, name: "Rodillo Entintador Open",                                                    category: "Herramientas", subcategory: "Etiquetadoras", categoryKey: "herramientas", accent: "gold" },

  // ── Herramientas — Tapas ─────────────────────────────────────
  { id: 127, name: "Tapa Cuello Corto",                                                          category: "Herramientas", subcategory: "Tapas", categoryKey: "herramientas", accent: "gold" },
  { id: 128, name: "Tapa Galón de 5L",                                                           category: "Herramientas", subcategory: "Tapas", categoryKey: "herramientas", accent: "gold" },

  // ── Higiénicos — Bolsas ──────────────────────────────────────
  { id: 129, name: "Bolsa Basura 210pzs 60x68 Blanca",                                           category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 130, name: "Bolsa Camiseta Grande",                                                      category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 131, name: "Bolsa Camiseta Jumbo #6",                                                    category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 132, name: "Bolsa Negra 50x70",                                                          category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 133, name: "Bolsa Negra 70+40x150",                                                      category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 134, name: "Bolsa Negra 70x90",                                                          category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 135, name: "Bolsa Negra Jumbo",                                                          category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 136, name: "Bolsa Rollo Natural 24x24",                                                  category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 137, name: "Bolsa Rollo Natural 35x47",                                                  category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 138, name: "Bolsa Rollo Natural 40x48",                                                  category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 139, name: "Bolsa Rollo Negra 24x24",                                                    category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 140, name: "Bolsa Rollo Negra 30x37",                                                    category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 141, name: "Bolsa Rollo Negra 35x47",                                                    category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 142, name: "Bolsa Rollo Negra 40x48",                                                    category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 143, name: "Bolsa de Helado 10x25",                                                      category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 144, name: "Bolsa de Helado 8x25",                                                       category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },
  { id: 145, name: "Bolsas Negras 70+30x120",                                                    category: "Higiénicos", subcategory: "Bolsas", categoryKey: "higienicos", accent: "gold" },

  // ── Higiénicos — Papel Institucional ─────────────────────────
  { id: 146, name: "Kleenex Tradicional Cottonelle Dorada 40pzs R/360",                          category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 147, name: "Papel Higiénico JR. C/12 Rollos KIMBERLY CLARK",                             category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 148, name: "Papel Higiénico LEVEL PRO 350 48/1 Individual",                              category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 149, name: "Papel Higiénico MARLI 12pzs 200m",                                           category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 150, name: "Papel Higiénico, Bobina, FAPSA, Caja C/12 180m",                             category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 151, name: "Papel Higiénico, DALIA, 160m HD 24/4",                                       category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 152, name: "Papel Higiénico, DALIA, 180m",                                               category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 153, name: "Papel Higiénico, DALIA, 180m, Caja con C/12",                                category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 154, name: "Papel Higiénico, LEVEL PRO, Individual",                                     category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 155, name: "Papel Sanitario Rollo ADORABLE,COTTONELLE",                                  category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 156, name: "Toalla Interdoblada para Manos Hojas Dobles 100PZs KIMBERLY CLARK",          category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 157, name: "Toalla Interdoblada, DALITAS",                                               category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 158, name: "Toalla Interdoblada, DALITAS, Caja C/20",                                    category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 159, name: "Toalla Interdoblada, FAPSA ECO K2250, Caja 8/250",                           category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 160, name: "Toalla Interdoblada, FAPSA TI2100, Caja C/20",                               category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 161, name: "Toalla Interdoblada, FAPSA TI250, 16/250",                                   category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 162, name: "Toalla Interdoblada, Sanitas, Caja 20pzs C/100",                             category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 163, name: "Toalla P/Manos ROLLOMATIC 180MTS KIMBERLY CLARK",                            category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 164, name: "Toalla en Rollo Blanca MARLI 6pzs R/180",                                    category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 165, name: "Toalla en Rollo, FAPSA ECO K160",                                            category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 166, name: "Toalla en Rollo, FAPSA ECO K160, Caja C/6",                                  category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 167, name: "Toalla en Rollo, FAPSA TR180, Caja C/6",                                     category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },
  { id: 168, name: "Toalla en Rollo, Fluido Céntrico, FAPSA PRO FC180, Caja C/6",                category: "Higiénicos", subcategory: "Papel Institucional", categoryKey: "higienicos", accent: "gold" },

  // ── Higiénicos — Cuidado Personal ────────────────────────────
  { id: 169, name: "Cortina P/Baño KIMBERLY CLARK, MAINSTAYS",                                   category: "Higiénicos", subcategory: "Cuidado Personal", categoryKey: "higienicos", accent: "gold" },
  { id: 170, name: "Jabón Barra ECO",                                                            category: "Higiénicos", subcategory: "Cuidado Personal", categoryKey: "higienicos", accent: "gold" },
  { id: 171, name: "Shampoo p. Manos",                                                           category: "Higiénicos", subcategory: "Cuidado Personal", categoryKey: "higienicos", accent: "gold",
    variants: [{ key: "presentacion", label: "Presentación", options: ["1L","5L","20L"] }, { key: "esencia", label: "Esencia", options: ["Cereza","Neutro"] }] },
  { id: 172, name: "Toalla para Baño COTTONELLA",                                                category: "Higiénicos", subcategory: "Cuidado Personal", categoryKey: "higienicos", accent: "gold" },

  // ── Higiénicos — Desechables de Comedor ──────────────────────
  { id: 173, name: "Vaso Cono, SEGOSAN, C/5000",                                                 category: "Higiénicos", subcategory: "Desechables de Comedor", categoryKey: "higienicos", accent: "gold" },

  // ── Higiénicos — Protección Personal ─────────────────────────
  { id: 174, name: "Cofia Desechable C/1000",                                                    category: "Higiénicos", subcategory: "Protección Personal", categoryKey: "higienicos", accent: "gold" },
  { id: 175, name: "Cubreboca COVID Tricapa 50pzs",                                              category: "Higiénicos", subcategory: "Protección Personal", categoryKey: "higienicos", accent: "gold" },
  { id: 176, name: "Raidolitos 10 piezas",                                                       category: "Higiénicos", subcategory: "Protección Personal", categoryKey: "higienicos", accent: "gold" },

  // ── Higiénicos — Protección Manual ───────────────────────────
  { id: 177, name: "Guante DERMACARE 56-450",                                                    category: "Higiénicos", subcategory: "Protección Manual", categoryKey: "higienicos", accent: "gold" },
  { id: 178, name: "Guante Látex Rojo Doméstico",                                                category: "Higiénicos", subcategory: "Protección Manual", categoryKey: "higienicos", accent: "gold" },
  { id: 179, name: "Guante de Hule Látex Reforzado DERMOCARE",                                   category: "Higiénicos", subcategory: "Protección Manual", categoryKey: "higienicos", accent: "gold" },
  { id: 180, name: "Guantes de Nitrilo",                                                         category: "Higiénicos", subcategory: "Protección Manual", categoryKey: "higienicos", accent: "gold",
    variants: [{ key: "talla", label: "Talla", options: ["CH","M","G"] }] },

  // ── Papelería — Papel Cortado ────────────────────────────────
  { id: 181, name: "Cinta Masking 24mm X 54m",                                                   category: "Papelería", subcategory: "Papel Cortado", categoryKey: "papeleria", accent: "blue" },
  { id: 182, name: "Hoja Blanca Bond Tamaño Carta 500pzs",                                       category: "Papelería", subcategory: "Papel Cortado", categoryKey: "papeleria", accent: "blue" },
  { id: 183, name: "Hoja Blanca Fotobond",                                                       category: "Papelería", subcategory: "Papel Cortado", categoryKey: "papeleria", accent: "blue" },
  { id: 184, name: "Hoja Opalina",                                                               category: "Papelería", subcategory: "Papel Cortado", categoryKey: "papeleria", accent: "blue" },

  // ── Papelería — Pizarrones y Pintarrones ─────────────────────
  { id: 185, name: "Pizarrón de corcho 60x90",                                                   category: "Papelería", subcategory: "Pizarrones y Pintarrones", categoryKey: "papeleria", accent: "blue" },

  // ── Papelería — Accesorios de Oficina ────────────────────────
  { id: 186, name: "Cordón para Gaffete",                                                        category: "Papelería", subcategory: "Accesorios de Oficina", categoryKey: "papeleria", accent: "blue" },

  // ── Papelería — Impresión ────────────────────────────────────
  { id: 187, name: "Mica Térmica 8ml 6.5x9.5cm, PASCUA",                                         category: "Papelería", subcategory: "Impresión", categoryKey: "papeleria", accent: "blue" },
  { id: 188, name: "Rollo Térmico 80mm x 70mm",                                                  category: "Papelería", subcategory: "Impresión", categoryKey: "papeleria", accent: "blue",
    variants: [{ key: "paquete", label: "Paquete", options: ["1pz","3pz","6pz"] }] },
  { id: 189, name: "Tinta Stamp Creator Pro, BROTHER",                                           category: "Papelería", subcategory: "Impresión", categoryKey: "papeleria", accent: "blue" },

  // ── Papelería — Enmicadoras ──────────────────────────────────
  { id: 190, name: "Enmicadora, GBC",                                                            category: "Papelería", subcategory: "Enmicadoras", categoryKey: "papeleria", accent: "blue" },

  // ── Empaques — Temperatura ───────────────────────────────────
  { id: 191, name: "BTP Pro C USB",                                                              category: "Empaques", subcategory: "Temperatura", categoryKey: "empaques", accent: "gold" },
];
