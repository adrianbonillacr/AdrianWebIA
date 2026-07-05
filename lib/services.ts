/**
 * Contenido de las etapas de servicio (Proyecto desde 0 / Proyecto ya construido).
 * Textos aprobados de los PDFs de marca 2026 — no parafrasear.
 */

// ETAPA 1 · Asesoría de inversión — Opción A: Selección de activos
export const assetSelection = {
  option: "Opción A · Aún no existe una propiedad",
  title: "Selección de activos",
  description:
    "Evaluamos oportunidades alineadas con los objetivos, presupuesto y visión del proyecto para facilitar la toma de decisiones antes de invertir.",
  bullets: [
    "Comprender el perfil de inversión.",
    "Identificar oportunidades alineadas con el proyecto.",
    "Evaluar ubicación, contexto y potencial de desarrollo.",
    "Identificar riesgos, limitaciones y oportunidades.",
    "Presentar recomendaciones estratégicas.",
  ],
  deliverables: [
    "Informe ejecutivo.",
    "Evaluación de oportunidades analizadas.",
    "Recomendaciones para la toma de decisiones.",
  ],
  fee: "USD $600 + IVA",
  feeNote:
    "En caso de continuar el desarrollo del proyecto con 19.89 Arquitectura, estos honorarios podrán reconocerse parcial o totalmente dentro del contrato integral, según condiciones acordadas.",
};

// ETAPA 1 · Asesoría de inversión — Opción B: Diagnóstico estratégico
export const strategicDiagnosis = {
  option: "Opción B · Ya existe una propiedad",
  title: "Diagnóstico estratégico",
  description:
    "Cuando el cliente ya cuenta con una propiedad, pasamos al análisis estratégico del proyecto para identificar oportunidades, prioridades y ruta de desarrollo.",
};

// ETAPA 2 · Análisis financiero estratégico
export const financialAnalysis = {
  title: "Invertir mejor comienza por comprender el potencial del proyecto.",
  description:
    "Permite orientar las inversiones, establecer prioridades y evaluar dónde existen mayores oportunidades para generar valor.",
  benefits: [
    "Mayor claridad para invertir.",
    "Priorización de recursos.",
    "Mejor toma de decisiones.",
  ],
  note: "Análisis consultivo orientado a encontrar la rentabilidad del proyecto. Incluido dentro del servicio de anteproyecto.",
};

// ETAPA 3 · Marketing digital
export const digitalMarketing = {
  intro:
    "Un gran proyecto necesita una estrategia capaz de hacerlo visible. No basta con crear un excelente espacio; el mercado necesita conocerlo.",
  scope: [
    "Estrategia de comunicación digital.",
    "Planificación de contenido.",
    "Posicionamiento de marca.",
    "Gestión de redes sociales.",
    "Campañas de comunicación digital.",
    "Análisis y optimización estratégica.",
  ],
  travelNote:
    "Los traslados dentro de la GAM están incluidos. Para proyectos fuera de esta zona, los costos de desplazamiento se cotizarán por separado.",
};

export type MarketingPackage = {
  name: string;
  positioning: string;
  includes: string[];
  price: string; // TODO: definir precios finales de los paquetes
  featured?: boolean;
};

export const marketingPackages: MarketingPackage[] = [
  {
    name: "Start",
    positioning: "Pensado para proyectos que inician su presencia digital.",
    includes: [
      "Reunión creativa inicial.",
      "Estrategia básica de contenido.",
      "1 sesión de fotografía profesional.",
      "2 reels editados.",
      "Banco de imágenes editadas.",
      "Contenido listo para publicar.",
    ],
    price: "USD $000 + IVA",
  },
  {
    name: "Growth",
    positioning: "Diseñado para proyectos que buscan consolidar su presencia.",
    includes: [
      "Estrategia básica de contenido.",
      "Dirección creativa.",
      "1 sesión de fotografía profesional.",
      "5 reels editados.",
      "Banco de fotografías profesionales.",
      "Guía de comunicación visual.",
      "Contenido listo para publicar.",
    ],
    price: "USD $000 + IVA",
    featured: true,
  },
  {
    name: "Signature",
    positioning: "La solución integral de comunicación.",
    includes: [
      "Estrategia de marca.",
      "Dirección creativa integral.",
      "Producción audiovisual premium.",
      "Fotografía profesional.",
      "Video corporativo o promocional.",
      "Reels para campañas.",
      "Toma aérea con drone.",
      "Biblioteca completa de imágenes y videos para 1 a 3 meses.",
    ],
    price: "USD $000 + IVA",
  },
];

// ETAPA 4 · Tecnología al servicio del usuario
export const technology = {
  title:
    "Innovación que mejora la experiencia, simplifica la operación y aporta valor al proyecto.",
  description:
    "Las mejores soluciones tecnológicas son aquellas que pasan desapercibidas. No buscan añadir complejidad, sino hacer que cada espacio funcione de forma más eficiente, cómoda e intuitiva para quienes lo utilizan.",
  evaluation: [
    "Automatización y control inteligente.",
    "Movilidad eléctrica.",
    "Tecnologías orientadas al confort y la eficiencia.",
    "Soluciones para optimizar la operación del proyecto.",
    "Oportunidades de innovación y diferenciación.",
  ],
  benefits: [
    "Mayor comodidad para los usuarios.",
    "Operación más eficiente.",
    "Mejor experiencia de uso.",
    "Incremento del valor percibido.",
    "Proyectos preparados para las necesidades del futuro.",
  ],
  result:
    "La tecnología deja de ser un complemento para convertirse en una herramienta que simplifica el día a día, mejora la experiencia de las personas y fortalece el valor del proyecto a largo plazo.",
};

// Cierre "Del análisis a la acción" (páginas de servicio)
export const analysisToAction = {
  title: "Del análisis a la acción",
  description:
    "Cada recomendación busca orientar los recursos hacia aquellas acciones con mayor potencial de impacto y generación de valor. La contratación puede realizarse de forma integral o por etapas, según las prioridades y objetivos definidos.",
};
