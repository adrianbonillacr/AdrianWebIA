import Link from "next/link";
import BrandImage from "@/components/BrandImage";
import { projectImages, type ImageTone } from "@/lib/images";
import { categoryLabel, type Project } from "@/lib/projects";

/** Tonos rotativos para que los placeholders del grid no se vean planos. */
const toneCycle: ImageTone[] = ["earth", "charcoal", "stone", "ink", "mist"];

export function projectTone(index: number): ImageTone {
  return toneCycle[index % toneCycle.length];
}

export default function ProjectCard({
  project,
  tone = "earth",
  aspect = "aspect-[4/3]",
  sizes,
}: {
  project: Project;
  tone?: ImageTone;
  aspect?: string;
  sizes?: string;
}) {
  return (
    <Link
      href={`/portafolio/${project.slug}`}
      className="group relative block overflow-hidden"
    >
      <BrandImage
        src={projectImages(project.slug).cover}
        alt={`Proyecto ${project.name} — 19.89 Arquitectura`}
        tone={tone}
        label={project.name}
        hoverZoom
        className={aspect}
        sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-ink/75 px-6 py-4">
        <p className="text-base font-medium text-white">{project.name}</p>
        <p className="mt-1 text-[0.66rem] font-normal uppercase tracking-[0.24em] text-mist">
          {categoryLabel(project)}
          {project.year ? ` · ${project.year}` : ""}
        </p>
        {project.phrase && (
          <p className="mt-2 max-w-[46ch] text-[0.82rem] font-light leading-snug text-mist">
            {project.phrase}
          </p>
        )}
      </div>
    </Link>
  );
}
