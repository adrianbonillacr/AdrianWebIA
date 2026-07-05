/**
 * Mapa de imágenes del sitio.
 *
 * Las fotos actuales provienen de la carpeta "Insumos - Assets" (selección
 * inicial optimizada a JPG ≤2560px). Para reemplazar cualquier imagen basta
 * con sobrescribir el archivo en /public respetando el nombre.
 * Si un archivo no existe, el sitio muestra un placeholder tonal de marca.
 */

export type ImageTone = "earth" | "stone" | "mist" | "charcoal" | "ink";

export const siteImages = {
  hero: {
    home: "/images/hero/home.jpg", // Tree Lodge — piscina al atardecer
    desdeCero: "/images/hero/proyecto-desde-cero.jpg", // obra en estructura (B/N)
    yaConstruido: "/images/hero/proyecto-ya-construido.jpg", // Kahwi — fogata al atardecer
  },
  texturas: {
    // Fondos de secciones oscuras y banners (se muestran con overlay ink)
    concreto: "/images/texturas/concreto.jpg", // Amarea — patio de piedra
    madera: "/images/texturas/madera.jpg", // Tree Lodge — portón de madera
    travertino: "/images/texturas/travertino.jpg", // Diciembre Seis — fachada
  },
  servicios: {
    asesoria: "/images/servicios/asesoria.jpg", // bitácora / asesoría (B/N)
    estudio: "/images/servicios/estudio.jpg", // estudio / dirección (B/N)
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
