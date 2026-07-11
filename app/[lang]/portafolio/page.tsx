import type { Metadata } from "next";
import InteriorHero from "@/components/InteriorHero";
import PortfolioFilter from "@/components/PortfolioFilter";
import ProjectCard, { projectTone } from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { getDict, isLang, type Lang } from "@/lib/i18n";
import { kahwiFeaturedCover, projects } from "@/lib/projects";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  return { title: t.portfolio.metaTitle, description: t.portfolio.metaDescription };
}

export default async function PortafolioPage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const t = getDict(lang);

  return (
    <>
      <InteriorHero
        eyebrow={t.portfolio.heroEyebrow}
        title={t.portfolio.heroTitle}
        size="short"
      />

      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <PortfolioFilter
              labels={{
                todos: t.portfolio.filterAll,
                arquitectura: t.portfolio.filterArchitecture,
                iluminacion: t.portfolio.filterLighting,
              }}
              groupLabel={t.portfolio.filterGroupLabel}
            >
              {projects.map((project, i) => {
                const wide = i % 4 === 0;
                return (
                  <div
                    key={project.slug}
                    data-categories={project.categories.join(" ")}
                    className={wide ? "md:col-span-2" : undefined}
                  >
                    <ProjectCard
                      project={project}
                      lang={lang}
                      categoryText={project.categories
                        .map((c) => t.categories[c])
                        .join(" · ")}
                      alt={t.portfolio.projectAlt(project.name)}
                      tone={projectTone(i)}
                      aspect={wide ? "aspect-[16/9]" : "aspect-[4/3]"}
                      sizes={
                        wide
                          ? "(min-width: 1184px) 1104px, 100vw"
                          : "(min-width: 768px) 50vw, 100vw"
                      }
                      // Misma portada destacada de Kahwi que el inicio
                      coverSrc={
                        project.slug === "kahwi" ? kahwiFeaturedCover : undefined
                      }
                    />
                  </div>
                );
              })}
            </PortfolioFilter>
          </Reveal>
        </div>
      </section>
    </>
  );
}
