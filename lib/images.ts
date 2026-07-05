/**
 * Mapa de imágenes del sitio.
 *
 * Las fotos provienen de la carpeta "Insumos - Assets" (selección optimizada
 * a JPG ≤2560px). Para reemplazar cualquier imagen basta con sobrescribir el
 * archivo en /public respetando el nombre. Si un archivo no existe, el sitio
 * muestra un placeholder de color sólido de marca.
 *
 * Los encabezados (heros) y banners no llevan fotografía: son colores sólidos.
 */

export type ImageTone = "earth" | "stone" | "mist" | "charcoal" | "ink";

export const siteImages = {
  // Imágenes de las dos cards principales del home ("Dos caminos")
  hero: {
    desdeCero: "/images/hero/proyecto-desde-cero.jpg", // Amarea — piscina y patio
    yaConstruido: "/images/hero/proyecto-ya-construido.jpg", // Kahwi — pabellón social (foto real)
  },
  logo: {
    white: "/images/logo/icono-white.png",
    ink: "/images/logo/icono-ink.png",
  },
};

/** Cantidad de imágenes reales disponibles por galería de proyecto. */
const projectGalleryCounts: Record<string, number> = {
  "tree-lodge": 5,
  cafetal: 5,
  "diciembre-seis": 5,
  kahwi: 5,
  amarea: 5,
  edica: 2,
  "flex-center": 2,
};

export function projectImages(slug: string) {
  const count = projectGalleryCounts[slug] ?? 5;
  return {
    cover: `/images/proyectos/${slug}/cover.jpg`,
    gallery: Array.from(
      { length: count },
      (_, i) => `/images/proyectos/${slug}/${String(i + 1).padStart(2, "0")}.jpg`,
    ),
  };
}
