import type { Metadata } from "next";
import Link from "next/link";
import ArrowLink from "@/components/ArrowLink";
import Logo from "@/components/Logo";
import BrandImage from "@/components/BrandImage";
import Button from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";
import DisciplineGrid from "@/components/DisciplineGrid";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { siteImages } from "@/lib/images";
import { processSteps } from "@/lib/process-steps";
import { getProject } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.namePlain} | Arquitectura e inversión con valor — Costa Rica`,
  },
  description:
    "Firma especializada en el desarrollo estratégico de proyectos inmobiliarios en Costa Rica. Analizamos, planificamos, diseñamos y posicionamos proyectos para convertir propiedades en activos con valor a largo plazo.",
};

const paths = [
  {
    tag: "CAMINO 01",
    title: "Proyecto desde 0",
    tagline: "La mejor inversión comienza con la propiedad correcta.",
    description:
      "Para quienes quieren iniciar un proyecto inmobiliario con claridad desde las primeras decisiones: selección del activo, estrategia, diseño, desarrollo, identidad y posicionamiento.",
    linkLabel: "Ver proceso",
    href: "/proyecto-desde-cero",
    image: siteImages.hero.desdeCero,
    tone: "earth" as const,
  },
  {
    tag: "CAMINO 02",
    title: "Proyecto ya construido",
    tagline: "Medimos primero. Invertimos después.",
    description:
      "Para quienes ya tienen una propiedad o proyecto en funcionamiento y quieren identificar oportunidades de mejora, priorizar inversiones y aumentar su valor.",
    linkLabel: "Ver diagnóstico",
    href: "/proyecto-ya-construido",
    image: siteImages.hero.yaConstruido,
    tone: "charcoal" as const,
  },
];

const featuredArchitecture = ["tree-lodge", "cafetal", "diciembre-seis", "kahwi", "amarea"];
const featuredLighting = ["edica", "flex-center", "kahwi"];

function PortfolioLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-ink">
        {label}
      </span>
      <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO — negro sólido, logo grande a la izquierda, información mínima */}
      <section className="relative flex min-h-svh items-center bg-ink text-white">
        <div className="container-site grid items-center gap-14 py-32 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div className="lg:border-r lg:border-stone/25 lg:pr-16">
            <Logo variant="full" className="text-[clamp(3rem,8vw,5.5rem)]" />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-mist" />
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-mist">
                Estudio de arquitectura — Costa Rica
              </p>
            </div>
            <h1 className="mt-8 max-w-[16ch] text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[1.1]">
              Arquitectura e inversión con valor.
            </h1>
            <p className="mt-6 max-w-[46ch] text-base font-light leading-[1.7] text-mist md:text-lg">
              Desarrollamos, transformamos y posicionamos proyectos
              inmobiliarios con estrategia, diseño y visión de largo plazo.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/proyecto-desde-cero" variant="earth">
                Desarrollar un proyecto desde 0
              </Button>
              <Button href="/proyecto-ya-construido" variant="outline-light">
                Optimizar una propiedad existente
              </Button>
            </div>
          </div>
        </div>
        <a
          href="#dos-caminos"
          className="absolute bottom-10 left-6 flex items-center gap-4 text-[0.65rem] font-normal uppercase tracking-[0.3em] text-mist transition-colors duration-300 hover:text-white md:left-10"
        >
          Descubrir
          <span aria-hidden="true" className="h-px w-16 bg-mist/60" />
        </a>
        {/* Marcador editorial vertical (recurso visual del PDF) */}
        <span
          aria-hidden="true"
          className="absolute bottom-10 right-6 hidden text-[0.7rem] font-light tracking-[0.4em] text-mist/50 md:block md:right-10"
          style={{ writingMode: "vertical-rl" }}
        >
          20 26.
        </span>
      </section>

      {/* DOS CAMINOS */}
      <section id="dos-caminos" className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Dos caminos para crear valor"
              title="Cada proyecto está en un momento distinto. Por eso trabajamos en dos rutas claras."
              titleClassName="max-w-[30ch]"
            />
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-10">
            {paths.map((path, i) => (
              <Reveal key={path.href} delay={i * 120}>
                {/* Toda la card (imagen + texto) es el área clicable */}
                <Link href={path.href} className="group block">
                  <article>
                    <div className="relative overflow-hidden">
                      <BrandImage
                        src={path.image}
                        alt={`${path.title} — 19.89 Arquitectura`}
                        tone={path.tone}
                        label={path.title}
                        hoverZoom
                        className="aspect-[4/3]"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                      <span className="absolute left-5 top-5 border border-white/60 px-3 py-1.5 text-[0.62rem] font-normal uppercase tracking-[0.28em] text-white">
                        {path.tag}
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-earth">
                      {path.title}
                    </h3>
                    <p className="mt-3 font-normal italic text-earth">{path.tagline}</p>
                    <p className="mt-4 max-w-[54ch] font-light leading-[1.7] text-charcoal">
                      {path.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-3 text-[0.8rem] font-normal uppercase tracking-[0.14em] text-earth">
                      {path.linkLabel}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                      >
                        →
                      </span>
                    </span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRATEGIA 19.89 */}
      <section className="relative overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <BrandImage
            src={siteImages.texturas.concreto}
            alt=""
            tone="charcoal"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-ink/75" />
        </div>
        <div className="container-site section-pad relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow="Estrategia 19.89"
              title="Una metodología para tomar mejores decisiones."
              dark
              align="center"
            />
            <p className="mx-auto mt-8 max-w-[62ch] font-light leading-[1.7] text-mist">
              La Estrategia 19.89 es una metodología desarrollada para
              acompañar proyectos residenciales, comerciales y hoteleros desde
              sus primeras etapas hasta su consolidación. Su objetivo es
              ayudar a propietarios e inversionistas a tomar mejores
              decisiones, establecer prioridades y desarrollar proyectos
              capaces de diferenciarse y generar valor a largo plazo.
            </p>
            <div className="mt-10 flex justify-center">
              <ArrowLink href="/estrategia">Conocer la metodología</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEL ANÁLISIS A LA ACCIÓN */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Del análisis a la acción"
              title="Un proceso que ordena las decisiones antes de invertir."
            />
          </Reveal>
          <div className="mt-16">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={(i % 4) * 60}>
                <div className="grid items-baseline gap-2 border-t border-stone/40 py-7 md:grid-cols-[7rem_16rem_1fr] md:gap-8">
                  <span className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold leading-none text-earth">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-medium text-ink">{step.title}</h3>
                  <p className="max-w-[52ch] font-light leading-[1.7] text-charcoal">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-stone/40" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* DISCIPLINAS BAJO UNA MISMA VISIÓN */}
      <section id="disciplinas" className="section-pad bg-ink">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Disciplinas"
              title="Disciplinas bajo una misma visión."
              dark
            />
            <p className="mt-6 max-w-[58ch] font-light leading-[1.7] text-mist">
              No son servicios aislados: son herramientas que se integran
              dentro de la estrategia según las necesidades de cada proyecto.
            </p>
          </Reveal>
          <Reveal className="mt-14">
            <DisciplineGrid />
          </Reveal>
          <Reveal className="mt-10">
            <ArrowLink href="/disciplinas">Ver todas las disciplinas</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* PORTAFOLIO DESTACADO */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow="Portafolio destacado" />
          </Reveal>

          <Reveal className="mt-14">
            <PortfolioLabel label="Arquitectura" />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {featuredArchitecture.map((slug, i) => {
                const project = getProject(slug);
                if (!project) return null;
                const wide = project.featured;
                return (
                  <div key={slug} className={wide ? "md:col-span-2" : undefined}>
                    <ProjectCard
                      project={project}
                      tone={(["earth", "charcoal", "stone", "ink", "earth"] as const)[i]}
                      aspect={wide ? "aspect-[16/9]" : "aspect-[4/3]"}
                      sizes={wide ? "(min-width: 1184px) 1104px, 100vw" : undefined}
                    />
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="mt-20">
            <PortfolioLabel label="Iluminación" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredLighting.map((slug, i) => {
                const project = getProject(slug);
                if (!project) return null;
                return (
                  <ProjectCard
                    key={slug}
                    project={project}
                    tone={(["ink", "earth", "charcoal"] as const)[i]}
                  />
                );
              })}
            </div>
          </Reveal>

          <Reveal className="mt-16 text-center">
            <Button href="/portafolio" variant="outline-dark">
              Ver portafolio completo
            </Button>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
      <CtaBanner
        texture="madera"
        title={
          <>
            Descubrimos el potencial.{" "}
            <span className="text-stone">Diseñamos la estrategia.</span>{" "}
            Creamos valor.
          </>
        }
        buttonLabel="Agendar una reunión estratégica"
        buttonHref={siteConfig.calendarUrl}
      />
    </>
  );
}
