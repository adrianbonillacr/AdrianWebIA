export type ProjectCategory = "arquitectura" | "iluminacion";

export type Project = {
  slug: string;
  name: string;
  categories: ProjectCategory[];
  featured?: boolean;
  excerpt?: string;
  /** TODO: año del proyecto (se muestra en la card cuando exista). */
  year?: string;
  /** TODO: frase corta de la card (no inventar; solo información real). */
  phrase?: string;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  arquitectura: "Arquitectura",
  iluminacion: "Iluminación",
};

export const projects: Project[] = [
  {
    slug: "tree-lodge",
    name: "Tree Lodge",
    categories: ["arquitectura"],
    featured: true,
    excerpt:
      "Arquitectura en diálogo con el paisaje tropical: líneas limpias, materiales honestos y una distribución que prioriza la apertura y la calma.",
  },
  {
    slug: "cafetal",
    name: "Cafetal",
    categories: ["arquitectura"],
    excerpt:
      "Residencia de volúmenes puros y acentos oscuros, donde los patios y la vegetación ordenan la experiencia del habitar.",
    // TODO: validar descripción con el cliente
  },
  {
    slug: "diciembre-seis",
    name: "Diciembre Seis",
    categories: ["arquitectura"],
    excerpt:
      "Conjunto residencial de líneas horizontales y cubiertas flotantes: claridad formal, privacidad y valor de largo plazo.",
    // TODO: validar descripción con el cliente
  },
  {
    slug: "kahwi",
    name: "Kahwi",
    categories: ["arquitectura", "iluminacion"],
    excerpt:
      "Hotel boutique entre árboles en Tamarindo: pabellones ligeros, materiales naturales y una atmósfera que convierte el paisaje en parte de la experiencia.",
    // TODO: validar descripción con el cliente
  },
  {
    slug: "amarea",
    name: "Amarea",
    categories: ["arquitectura"],
    excerpt:
      "Villas de espíritu tropical: volúmenes blancos, madera clara y una piscina que organiza el paisaje y la vida al exterior.",
    // TODO: validar descripción con el cliente
  },
  {
    slug: "edica",
    name: "Edica",
    categories: ["iluminacion"],
    excerpt:
      "Diseño de iluminación exterior: criterios lumínicos que equilibran seguridad, confort visual y atmósfera en los recorridos.",
    // TODO: validar descripción con el cliente
  },
  {
    slug: "flex-center",
    name: "Flex Center",
    categories: ["iluminacion"],
    excerpt:
      "Criterios de iluminación para un conjunto comercial: eficiencia, jerarquía visual y una lectura clara de la arquitectura nocturna.",
    // TODO: validar descripción con el cliente
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function categoryLabel(project: Project): string {
  return project.categories.map((c) => categoryLabels[c]).join(" · ");
}
