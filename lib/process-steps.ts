export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

// Sección "Del análisis a la acción" (home): proceso resumido de la Estrategia 19.89
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Comprendemos",
    description: "Escuchamos los objetivos y entendemos el punto de partida del proyecto.",
  },
  {
    number: "02",
    title: "Diagnosticamos",
    description: "Evaluamos el estado actual: fortalezas, riesgos y oportunidades.",
  },
  {
    number: "03",
    title: "Priorizamos",
    description: "Ordenamos las decisiones según su impacto en el valor.",
  },
  {
    number: "04",
    title: "Diseñamos",
    description: "Traducimos la estrategia en espacios, experiencia e identidad.",
  },
  {
    number: "05",
    title: "Desarrollamos",
    description: "Ejecutamos las intervenciones con criterio y supervisión.",
  },
  {
    number: "06",
    title: "Posicionamos",
    description: "Comunicamos el proyecto para que el mercado lo conozca.",
  },
  {
    number: "07",
    title: "Evolucionamos",
    description: "Acompañamos el crecimiento con visión de largo plazo.",
  },
];

export type ValueDimension = {
  label: string;
  /** Proporción de llenado del ejemplo visual (0–100). No es un dato real. */
  demoFill: number;
};

// Índice de Valor 19.89 (/proyecto-ya-construido) — ejemplo visual, sin datos duros
export const valueIndexDimensions: ValueDimension[] = [
  { label: "Funcionalidad", demoFill: 72 },
  { label: "Experiencia", demoFill: 58 },
  { label: "Identidad", demoFill: 45 },
  { label: "Diferenciación", demoFill: 61 },
  { label: "Potencial comercial", demoFill: 80 },
];
