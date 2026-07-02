import type { Metadata } from "next";
import InteriorHero from "@/components/InteriorHero";
import PortfolioFilter from "@/components/PortfolioFilter";
import ProjectCard, { projectTone } from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portafolio — Proyectos de arquitectura e iluminación",
  description:
    "Proyectos con estrategia detrás: arquitectura e iluminación en Costa Rica. Tree Lodge, Cafetal, Diciembre Seis, Kahwi, Amarea, Edica y Flex Center.",
};

export default function PortafolioPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Portafolio"
        title="Proyectos con estrategia detrás."
        size="short"
      />

      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <PortfolioFilter>
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
                      tone={projectTone(i)}
                      aspect={wide ? "aspect-[16/9]" : "aspect-[4/3]"}
                      sizes={
                        wide
                          ? "(min-width: 1184px) 1104px, 100vw"
                          : "(min-width: 768px) 50vw, 100vw"
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
