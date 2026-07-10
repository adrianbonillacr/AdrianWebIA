import Link from "next/link";
import BrandImage from "@/components/BrandImage";
import { projectImages, type ImageTone } from "@/lib/images";
import type { Project } from "@/lib/projects";
import type { Lang } from "@/lib/i18n";

/** Tonos rotativos para que los placeholders del grid no se vean planos. */
const toneCycle: ImageTone[] = ["earth", "charcoal", "stone", "ink", "mist"];

export function projectTone(index: number): ImageTone {
  return toneCycle[index % toneCycle.length];
}

export default function ProjectCard({
  project,
  lang,
  categoryText,
  alt,
  tone = "earth",
  aspect = "aspect-[4/3]",
  sizes,
  coverSrc,
}: {
  project: Project;
  lang: Lang;
  /** Categoría ya traducida (p. ej. "Arquitectura · Iluminación"). */
  categoryText: string;
  /** Alt ya traducido. */
  alt: string;
  tone?: ImageTone;
  aspect?: string;
  sizes?: string;
  /** Portada alternativa (p. ej. la del portafolio destacado del home). */
  coverSrc?: string;
}) {
  return (
    <Link
      href={`/${lang}/portafolio/${project.slug}`}
      className="group relative block overflow-hidden"
    >
      <BrandImage
        src={coverSrc ?? projectImages(project.slug).cover}
        alt={alt}
        tone={tone}
        label={project.name}
        hoverZoom
        className={aspect}
        sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-ink/75 px-6 py-4">
        <p className="text-base font-medium text-white">{project.name}</p>
        <p className="mt-1 text-[0.66rem] font-normal uppercase tracking-[0.24em] text-mist">
          {categoryText}
          {project.year ? ` · ${project.year}` : ""}
        </p>
      </div>
    </Link>
  );
}
