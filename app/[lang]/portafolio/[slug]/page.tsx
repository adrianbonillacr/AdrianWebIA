import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BrandImage from "@/components/BrandImage";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { getDict, isLang, type Lang } from "@/lib/i18n";
import { projectImages, type ImageTone } from "@/lib/images";
import { getProject, projects } from "@/lib/projects";

type Params = Promise<{ lang: string; slug: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  const project = getProject(slug);
  if (!project) return {};
  const category = project.categories.map((c) => t.categories[c]).join(" · ");
  return {
    title: t.portfolio.metaProjectTitle(project.name),
    description:
      t.projectExcerpts[project.slug] ??
      t.portfolio.metaProjectDescription(project.name, category),
  };
}

const galleryTones: ImageTone[] = ["earth", "charcoal", "stone", "ink", "mist"];

export default async function ProjectPage({ params }: { params: Params }) {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang as Lang;
  const t = getDict(lang);
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const gallery = projectImages(project.slug).gallery;
  const categoryText = project.categories.map((c) => t.categories[c]).join(" · ");
  const excerpt = t.projectExcerpts[project.slug];

  return (
    <>
      {/* Encabezado editorial del case-study */}
      <section className="bg-ink text-white">
        <div className="container-site pb-16 pt-44">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-stone" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-stone">
              {categoryText}
            </p>
            <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />
          </div>
          <h1 className="mt-8 text-[clamp(2.4rem,5.5vw,4rem)] font-semibold leading-[1.1]">
            {project.name}
          </h1>
          {excerpt && (
            <p className="mt-7 max-w-[62ch] text-lg font-light leading-[1.7] text-mist">
              {excerpt}
            </p>
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
                alt={t.portfolio.galleryAlt(project.name, i + 1)}
                tone={galleryTones[i % galleryTones.length]}
                label={project.name}
                className="aspect-[16/9]"
                sizes="(min-width: 1184px) 1104px, 100vw"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Navegación anterior / siguiente — hover tipográfico */}
      <nav aria-label={t.portfolio.otherProjectsLabel} className="border-t border-stone/40 bg-white">
        <div className="container-site grid grid-cols-2">
          <Link
            href={`/${lang}/portafolio/${prev.slug}`}
            className="group flex flex-col justify-center border-r border-stone/40 py-12 pr-6"
          >
            <span className="flex items-center gap-3 text-[0.68rem] font-normal uppercase tracking-[0.24em] text-stone transition-colors duration-300 group-hover:text-earth">
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1.5">
                ←
              </span>
              {t.portfolio.previous}
            </span>
            <span className="mt-3 block text-lg font-medium text-ink transition-colors duration-300 group-hover:text-earth">
              {prev.name}
            </span>
          </Link>
          <Link
            href={`/${lang}/portafolio/${next.slug}`}
            className="group flex flex-col items-end justify-center py-12 pl-6 text-right"
          >
            <span className="flex items-center gap-3 text-[0.68rem] font-normal uppercase tracking-[0.24em] text-stone transition-colors duration-300 group-hover:text-earth">
              {t.portfolio.next}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </span>
            <span className="mt-3 block text-lg font-medium text-ink transition-colors duration-300 group-hover:text-earth">
              {next.name}
            </span>
          </Link>
        </div>
      </nav>

      <CtaBanner
        title={
          <>
            {t.common.claim.part1}{" "}
            <span className="text-stone">{t.common.claim.part2}</span>{" "}
            {t.common.claim.part3}
          </>
        }
        buttonLabel={t.common.scheduleMeeting}
        buttonHref={`/${lang}/contacto`}
      />
    </>
  );
}
