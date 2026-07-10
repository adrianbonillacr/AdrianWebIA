export type ProjectCategory = "arquitectura" | "iluminacion";

export type Project = {
  slug: string;
  name: string;
  categories: ProjectCategory[];
  featured?: boolean;
  /** TODO: año del proyecto (se muestra en la card cuando exista). */
  year?: string;
};

// Los textos por idioma (descripciones) viven en lib/i18n (projectExcerpts).
export const projects: Project[] = [
  { slug: "tree-lodge", name: "Tree Lodge", categories: ["arquitectura"], featured: true },
  { slug: "cafetal", name: "Cafetal", categories: ["arquitectura"] },
  { slug: "diciembre-seis", name: "Diciembre Seis", categories: ["arquitectura"] },
  { slug: "kahwi", name: "Kahwi", categories: ["arquitectura", "iluminacion"] },
  { slug: "amarea", name: "Amarea", categories: ["arquitectura"] },
  { slug: "edica", name: "Edica", categories: ["iluminacion"] },
  { slug: "flex-center", name: "Flex Center", categories: ["iluminacion"] },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
