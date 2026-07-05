/**
 * Disciplinas estratégicas de 19.89 Arquitectura.
 * No son servicios aislados: son herramientas que se integran dentro de los
 * dos caminos principales (Proyecto desde 0 / Proyecto ya construido) según
 * la etapa de la Estrategia 19.89 a la que pertenecen.
 */

export type DisciplineStage =
  | "asesoria"
  | "desarrollo"
  | "identidad"
  | "tecnologia";

export const stageLabels: Record<DisciplineStage, string> = {
  asesoria: "Etapa 1 · Asesoría de inversión",
  desarrollo: "Etapa 2 · Desarrollo del proyecto",
  identidad: "Etapa 3 · Identidad y posicionamiento",
  tecnologia: "Etapa 4 · Tecnología al servicio del usuario",
};

export type Discipline = {
  slug: string;
  name: string;
  /** Frase corta de valor (tono editorial, sin lenguaje genérico). */
  tagline: string;
  stage: DisciplineStage;
  /** A dónde lleva el CTA "Ver cómo se integra". */
  href: string;
};

export const disciplines: Discipline[] = [
  {
    slug: "seleccion-de-activos",
    name: "Selección de activos",
    tagline: "La mejor inversión comienza eligiendo bien.",
    stage: "asesoria",
    href: "/proyecto-desde-cero#etapa-1",
  },
  {
    slug: "diagnostico-estrategico",
    name: "Diagnóstico estratégico",
    tagline: "Medimos primero. Invertimos después.",
    stage: "asesoria",
    href: "/proyecto-ya-construido",
  },
  {
    slug: "analisis-financiero",
    name: "Análisis financiero estratégico",
    tagline: "Invertir mejor comienza por comprender el potencial del proyecto.",
    stage: "desarrollo",
    href: "/proyecto-desde-cero#etapa-2",
  },
  {
    slug: "arquitectura",
    name: "Arquitectura",
    tagline: "Diseño con fundamento estratégico, del anteproyecto a la obra.",
    stage: "desarrollo",
    href: "/proyecto-desde-cero#etapa-2",
  },
  {
    slug: "diseno-de-iluminacion",
    name: "Diseño de iluminación",
    tagline: "Atmósferas que transforman la experiencia del espacio.",
    stage: "desarrollo",
    href: "/proyecto-desde-cero#etapa-2",
  },
  {
    slug: "diseno-de-interiores",
    name: "Diseño de interiores",
    tagline: "Narrativa espacial, materiales y curaduría con intención.",
    stage: "desarrollo",
    href: "/proyecto-desde-cero#etapa-2",
  },
  {
    slug: "mobiliario-decoracion",
    name: "Mobiliario & decoración",
    tagline: "Piezas y ambientación que completan la experiencia.",
    stage: "desarrollo",
    href: "/proyecto-desde-cero#etapa-2",
  },
  {
    slug: "proteccion-de-identidad",
    name: "Protección de identidad",
    tagline: "Una marca protegida es un activo que crece.",
    stage: "identidad",
    href: "/proyecto-desde-cero#etapa-3",
  },
  {
    slug: "fotografia-profesional",
    name: "Fotografía profesional",
    tagline: "El proyecto merece verse como lo que es.",
    stage: "identidad",
    href: "/proyecto-desde-cero#etapa-3",
  },
  {
    slug: "marketing-digital",
    name: "Marketing digital",
    tagline: "Un gran proyecto necesita ser visible.",
    stage: "identidad",
    href: "/proyecto-desde-cero#etapa-3",
  },
  {
    slug: "tecnologia",
    name: "Tecnología al servicio del usuario",
    tagline: "Innovación que simplifica la operación y aporta valor.",
    stage: "tecnologia",
    href: "/proyecto-desde-cero#etapa-4",
  },
];

/**
 * Versión resumida para el grid del home (10 módulos): la Etapa 1 se
 * presenta como "Asesoría de inversión" (agrupa selección de activos y
 * diagnóstico estratégico).
 */
export type HomeDiscipline = { name: string; description: string };

export const homeDisciplines: HomeDiscipline[] = [
  {
    name: "Asesoría de inversión",
    description: "Selección de activos y diagnóstico estratégico del punto de partida.",
  },
  {
    name: "Análisis financiero estratégico",
    description: "Orienta la inversión hacia donde existe mayor potencial de valor.",
  },
  {
    name: "Arquitectura",
    description: "Diseño, anteproyecto, remodelaciones y supervisión.",
  },
  {
    name: "Diseño de iluminación",
    description: "Atmósferas, criterios lumínicos y selección de luminarias.",
  },
  {
    name: "Diseño de interiores",
    description: "Narrativa espacial, materiales, acabados y curaduría.",
  },
  {
    name: "Mobiliario & decoración",
    description: "Curaduría de piezas, styling y ambientación.",
  },
  {
    name: "Protección de identidad",
    description: "Protección de marca, identidad visual y posicionamiento.",
  },
  {
    name: "Fotografía profesional",
    description: "Fotografía arquitectónica, hotelera y dirección visual.",
  },
  {
    name: "Marketing digital",
    description: "Estrategia de comunicación, contenido y campañas.",
  },
  {
    name: "Tecnología al servicio del usuario",
    description: "Automatización, eficiencia y experiencia de uso.",
  },
];
