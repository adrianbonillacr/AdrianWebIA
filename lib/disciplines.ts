export type Discipline = {
  slug: string;
  name: string;
  description: string;
};

export const disciplines: Discipline[] = [
  {
    slug: "arquitectura",
    name: "Arquitectura",
    description: "Diseño, anteproyecto, remodelaciones y supervisión.",
  },
  {
    slug: "iluminacion",
    name: "Iluminación",
    description: "Atmósferas, criterios lumínicos y selección de luminarias.",
  },
  {
    slug: "interiores",
    name: "Interiores",
    description: "Narrativa espacial, materiales, acabados y curaduría.",
  },
  {
    slug: "mobiliario",
    name: "Mobiliario",
    description: "Curaduría, piezas Budaya, styling y ambientación.",
  },
  {
    slug: "identidad",
    name: "Identidad",
    description: "Protección de marca, identidad visual y posicionamiento.",
  },
  {
    slug: "fotografia",
    name: "Fotografía",
    description: "Fotografía arquitectónica, hotelera y dirección visual.",
  },
  {
    slug: "marketing",
    name: "Marketing",
    description: "Estrategia de comunicación, contenido y campañas.",
  },
  {
    slug: "sostenibilidad",
    name: "Sostenibilidad",
    description: "Eficiencia energética, domótica y valor agregado.",
  },
];
