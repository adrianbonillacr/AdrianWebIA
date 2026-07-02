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
        alt={`Proyecto ${project.name} — 19°89° Arquitectura`}
        tone={tone}
        label={project.name}
        hoverZoom
        className={aspect}
        sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-6 pb-5 pt-16">
        <p className="text-base font-medium text-white">{project.name}</p>
        <p className="mt-1 text-[0.66rem] font-normal uppercase tracking-[0.24em] text-mist">
          {categoryLabel(project)}
        </p>
      </div>
    </Link>
  );
}
