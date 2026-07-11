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
// El orden es el mismo del portafolio destacado del inicio: Kahwi primero.
export const projects: Project[] = [
  { slug: "kahwi", name: "Kahwi", categories: ["arquitectura", "iluminacion"], featured: true },
  { slug: "tree-lodge", name: "Tree Lodge", categories: ["arquitectura"] },
  { slug: "cafetal", name: "Cafetal", categories: ["arquitectura"] },
  { slug: "diciembre-seis", name: "Diciembre Seis", categories: ["arquitectura"] },
  { slug: "amarea", name: "Amarea", categories: ["arquitectura"] },
  { slug: "edica", name: "Edica", categories: ["iluminacion"] },
  { slug: "flex-center", name: "Flex Center", categories: ["iluminacion"] },
];

/** Portada especial de Kahwi (la misma del portafolio destacado del inicio). */
export const kahwiFeaturedCover = "/images/proyectos/kahwi/cover-destacado.jpg";

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
