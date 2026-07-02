export type ProjectCategory = "arquitectura" | "iluminacion";

export type Project = {
  slug: string;
  name: string;
  categories: ProjectCategory[];
  featured?: boolean;
  excerpt?: string;
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
    // TODO: descripción del proyecto
  },
  {
    slug: "diciembre-seis",
    name: "Diciembre Seis",
    categories: ["arquitectura"],
    // TODO: descripción del proyecto
  },
  {
    slug: "kahwi",
    name: "Kahwi",
    categories: ["arquitectura", "iluminacion"],
    // TODO: descripción del proyecto
  },
  {
    slug: "amarea",
    name: "Amarea",
    categories: ["arquitectura"],
    // TODO: descripción del proyecto
  },
  {
    slug: "edica",
    name: "Edica",
    categories: ["iluminacion"],
    // TODO: descripción del proyecto
  },
  {
    slug: "flex-center",
    name: "Flex Center",
    categories: ["iluminacion"],
    // TODO: descripción del proyecto
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function categoryLabel(project: Project): string {
  return project.categories.map((c) => categoryLabels[c]).join(" · ");
}
