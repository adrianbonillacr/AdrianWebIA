import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BrandImage from "@/components/BrandImage";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { projectImages, type ImageTone } from "@/lib/images";
import { categoryLabel, getProject, projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Portafolio`,
    description:
      project.excerpt ??
      `${project.name}: proyecto de ${categoryLabel(project).toLowerCase()} desarrollado por 1989 Arquitectura en Costa Rica.`,
  };
}

const galleryTones: ImageTone[] = ["earth", "charcoal", "stone", "ink", "mist"];

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const gallery = projectImages(project.slug).gallery;

  return (
    <>
      {/* Encabezado editorial del case-study */}
      <section className="bg-ink text-white">
        <div className="container-site pb-16 pt-44">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-stone" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-stone">
              {categoryLabel(project)}
            </p>
            <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />
          </div>
          <h1 className="mt-8 text-[clamp(2.4rem,5.5vw,4rem)] font-semibold leading-[1.1]">
            {project.name}
          </h1>
          {project.excerpt ? (
            <p className="mt-7 max-w-[62ch] text-lg font-light leading-[1.7] text-mist">
              {project.excerpt}
            </p>
          ) : (
            // TODO: descripción del proyecto (agregar excerpt en /lib/projects.ts)
            null
          )}
        </div>
      </section>

      {/* Galería apilada fullwidth */}
      <section className="section-pad bg-white">
        <div className="container-site space-y-8">
          {gallery.map((src, i) => (
            <Reveal key={src}>
              <BrandImage
                src={src}
                alt={`Proyecto ${project.name} — 19°89° Arquitectura (imagen ${i + 1})`}
                tone={galleryTones[i % galleryTones.length]}
                label={project.name}
                className="aspect-[16/9]"
                sizes="(min-width: 1184px) 1104px, 100vw"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Navegación anterior / siguiente */}
      <nav aria-label="Otros proyectos" className="border-t border-stone/40 bg-white">
        <div className="container-site grid grid-cols-2">
          <Link
            href={`/portafolio/${prev.slug}`}
            className="group border-r border-stone/40 py-10 pr-6 transition-colors duration-300 hover:bg-mist/40"
          >
            <span className="flex items-center gap-3 text-[0.68rem] font-normal uppercase tracking-[0.24em] text-earth">
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1.5">
                ←
              </span>
              Anterior
            </span>
            <span className="mt-3 block text-lg font-medium text-ink">{prev.name}</span>
          </Link>
          <Link
            href={`/portafolio/${next.slug}`}
            className="group py-10 pl-6 text-right transition-colors duration-300 hover:bg-mist/40"
          >
            <span className="flex items-center justify-end gap-3 text-[0.68rem] font-normal uppercase tracking-[0.24em] text-earth">
              Siguiente
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </span>
            <span className="mt-3 block text-lg font-medium text-ink">{next.name}</span>
          </Link>
        </div>
      </nav>

      <CtaBanner
        texture="madera"
        title={
          <>
            Una propiedad puede construirse en meses.{" "}
            <span className="text-stone">
              Un proyecto extraordinario se construye con estrategia.
            </span>
          </>
        }
        buttonLabel="Agendar una reunión estratégica"
        buttonHref={siteConfig.calendarUrl}
      />
    </>
  );
}
