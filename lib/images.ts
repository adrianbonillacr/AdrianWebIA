/**
 * Mapa de imágenes esperadas por el sitio.
 *
 * INSTRUCCIONES PARA EL CLIENTE:
 * - Subir cada foto a la ruta indicada dentro de /public (respetar nombre exacto).
 * - Formato: horizontal 16:9 o 4:3, mínimo 2400px de ancho (retratos del equipo: 3:4 vertical).
 * - Mientras un archivo no exista, el sitio muestra automáticamente un
 *   placeholder tonal de marca en su lugar. No hay que tocar código.
 */

export type ImageTone = "earth" | "stone" | "mist" | "charcoal" | "ink";

export const siteImages = {
  hero: {
    home: "/images/hero/home.jpg", // TODO: foto real — hero principal del sitio (proyecto insignia, horizontal 16:9)
    desdeCero: "/images/hero/proyecto-desde-cero.jpg", // TODO: foto real — terreno / obra inicial
    yaConstruido: "/images/hero/proyecto-ya-construido.jpg", // TODO: foto real — proyecto existente
  },
  texturas: {
    concreto: "/images/texturas/concreto.jpg", // TODO: foto real — textura de concreto (fondo sección Estrategia 19.89)
    madera: "/images/texturas/madera.jpg", // TODO: foto real — textura de madera oscura (banners de cierre)
    travertino: "/images/texturas/travertino.jpg", // TODO: foto real — textura de travertino (heros interiores)
  },
  servicios: {
    desdeCeroEtapa1: "/images/servicios/desde-cero-etapa-01.jpg", // TODO: foto real — asesoría de inversiones
    desdeCeroEtapa2: "/images/servicios/desde-cero-etapa-02.jpg", // TODO: foto real — desarrollo del proyecto
    desdeCeroEtapa3: "/images/servicios/desde-cero-etapa-03.jpg", // TODO: foto real — identidad y posicionamiento
    desdeCeroEtapa4: "/images/servicios/desde-cero-etapa-04.jpg", // TODO: foto real — sostenibilidad / futuro
  },
  equipo: [
    "/images/equipo/retrato-01.jpg", // TODO: foto real — retrato 3:4
    "/images/equipo/retrato-02.jpg", // TODO: foto real — retrato 3:4
    "/images/equipo/retrato-03.jpg", // TODO: foto real — retrato 3:4
    "/images/equipo/retrato-04.jpg", // TODO: foto real — retrato 3:4
    "/images/equipo/retrato-05.jpg", // TODO: foto real — retrato 3:4
    "/images/equipo/retrato-06.jpg", // TODO: foto real — retrato 3:4
  ],
};

/**
 * Imágenes por proyecto del portafolio.
 * `cover` se usa en cards (home y grid de portafolio).
 * `gallery` son las imágenes apiladas del case-study (subir 4–6 por proyecto).
 */
export function projectImages(slug: string) {
  return {
    cover: `/images/proyectos/${slug}/cover.jpg`, // TODO: foto real — portada del proyecto
    gallery: [
      `/images/proyectos/${slug}/01.jpg`, // TODO: foto real
      `/images/proyectos/${slug}/02.jpg`, // TODO: foto real
      `/images/proyectos/${slug}/03.jpg`, // TODO: foto real
      `/images/proyectos/${slug}/04.jpg`, // TODO: foto real
      `/images/proyectos/${slug}/05.jpg`, // TODO: foto real
    ],
  };
}
