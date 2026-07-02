export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

// Sección "Cómo trabajamos" del home
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Descubrimos",
    description: "Analizamos el proyecto y entendemos su potencial.",
  },
  {
    number: "02",
    title: "Evaluamos",
    description: "Identificamos fortalezas, riesgos y oportunidades.",
  },
  {
    number: "03",
    title: "Planificamos",
    description: "Diseñamos una hoja de ruta estratégica.",
  },
  {
    number: "04",
    title: "Desarrollamos",
    description: "Ejecutamos las acciones que generan mayor valor.",
  },
  {
    number: "05",
    title: "Posicionamos",
    description: "Construimos identidad, presencia y comunicación.",
  },
  {
    number: "06",
    title: "Evolucionamos",
    description: "Acompañamos el crecimiento con visión de largo plazo.",
  },
];

export type ServiceStage = {
  number: string;
  title: string;
  description: string;
};

// Etapas de /proyecto-desde-cero
export const fromZeroStages: ServiceStage[] = [
  {
    number: "01",
    title: "Asesoría de inversiones",
    description:
      "Evaluación de activos, ubicación, potencial, riesgos y oportunidades.",
  },
  {
    number: "02",
    title: "Desarrollo del proyecto",
    description:
      "Análisis financiero, arquitectura, iluminación, interiores y mobiliario.",
  },
  {
    number: "03",
    title: "Identidad y posicionamiento",
    description:
      "Protección de marca, fotografía profesional y marketing digital.",
  },
  {
    number: "04",
    title: "Listos para el futuro",
    description: "Sostenibilidad, eficiencia, domótica y valor agregado.",
  },
];

export type ValueDimension = {
  label: string;
  // Valor demo ilustrativo (0–100) — no son datos reales
  value: number;
};

// Índice de Valor 19.89 (/proyecto-ya-construido)
export const valueIndexDimensions: ValueDimension[] = [
  { label: "Funcionalidad", value: 72 },
  { label: "Experiencia", value: 58 },
  { label: "Identidad", value: 45 },
  { label: "Diferenciación", value: 61 },
  { label: "Potencial comercial", value: 80 },
];
