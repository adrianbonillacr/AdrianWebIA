import type { Metadata } from "next";
import ArrowLink from "@/components/ArrowLink";
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
    "Desarrollamos, transformamos y posicionamos proyectos inmobiliarios con estrategia, diseño y visión de largo plazo. Estudio de arquitectura e inversión en Costa Rica.",
};

const paths = [
  {
    tag: "CAMINO 01",
    title: "Proyecto desde 0",
    tagline: "La mejor inversión comienza con la propiedad correcta.",
    description:
      "Para quienes quieren iniciar una inversión inmobiliaria con claridad desde la primera decisión — incluso antes de comprar.",
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
      "Para quienes ya tienen una propiedad o proyecto y quieren descubrir su verdadero potencial.",
    linkLabel: "Ver diagnóstico",
    href: "/proyecto-ya-construido",
    image: siteImages.hero.yaConstruido,
    tone: "charcoal" as const,
  },
];

const beliefs = [
  {
    title: "Diseño con intención",
    description:
      "El diseño más allá de lo estético: una herramienta para dar respuestas claras y conscientes a las necesidades de cada proyecto y de quienes lo habitan.",
  },
  {
    title: "Asesoría de calidad",
    description:
      "Todo inicia con una asesoría financiera que evalúa la factibilidad y la rentabilidad del proyecto. A partir de esos lineamientos, diseñamos.",
  },
  {
    title: "Conexión con el lugar",
    description:
      "Cada proyecto nace del entendimiento profundo del sitio: su historia, su clima y su cultura. El contexto no es un dato — es inspiración y responsabilidad.",
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
      {/* HERO */}
      <section className="relative flex min-h-svh items-center overflow-hidden bg-ink text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <BrandImage
            src={siteImages.hero.home}
            alt=""
            tone="earth"
            className="h-full w-full"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="container-site relative py-32">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-mist" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-mist">
              19°89° Arquitectura — Costa Rica
            </p>
          </div>
          <h1 className="mt-8 max-w-[16ch] text-[clamp(2.6rem,6.4vw,4.6rem)] font-semibold leading-[1.08]">
            Arquitectura e inversión con valor.
          </h1>
          <p className="mt-7 max-w-[52ch] text-base font-light leading-[1.7] text-mist md:text-lg">
            Desarrollamos, transformamos y posicionamos proyectos inmobiliarios
            con estrategia, diseño y visión de largo plazo.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button href="/proyecto-desde-cero" variant="earth">
              Quiero desarrollar un proyecto
            </Button>
            <Button href="/proyecto-ya-construido" variant="outline-light">
              Quiero optimizar una propiedad
            </Button>
          </div>
        </div>
        <a
          href="#dos-caminos"
          className="absolute bottom-10 left-6 flex items-center gap-4 text-[0.65rem] font-normal uppercase tracking-[0.3em] text-mist transition-colors duration-300 hover:text-white md:left-10"
        >
          Descubrir
          <span aria-hidden="true" className="h-px w-16 bg-mist/60" />
        </a>
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
                <article className="group">
                  <div className="relative overflow-hidden">
                    <BrandImage
                      src={path.image}
                      alt={`${path.title} — 19°89° Arquitectura`}
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
                  <h3 className="mt-8 text-2xl font-semibold text-ink">{path.title}</h3>
                  <p className="mt-3 font-normal italic text-earth">{path.tagline}</p>
                  <p className="mt-4 max-w-[52ch] font-light leading-[1.7] text-charcoal">
                    {path.description}
                  </p>
                  <ArrowLink href={path.href} className="mt-6">
                    {path.linkLabel}
                  </ArrowLink>
                </article>
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
              title="Antes de diseñar, entendemos el proyecto."
              dark
              align="center"
            />
            <p className="mx-auto mt-8 max-w-[62ch] font-light leading-[1.7] text-mist">
              La Estrategia 19.89 es nuestro proceso de análisis, planificación
              y desarrollo. Evaluamos cada proyecto desde su potencial
              arquitectónico, financiero, comercial, visual y experiencial,
              para orientar la inversión hacia donde realmente genera valor.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EN QUÉ CREEMOS */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow="En qué creemos" />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {beliefs.map((belief, i) => (
              <Reveal key={belief.title} delay={i * 120}>
                <div className="border-t border-ink pt-6">
                  <h3 className="text-lg font-medium text-ink">{belief.title}</h3>
                  <p className="mt-4 max-w-[46ch] font-light leading-[1.7] text-charcoal">
                    {belief.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Cómo trabajamos"
              title="Un proceso que ordena las decisiones antes de invertir."
            />
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={(i % 3) * 100}>
                <div className="border-t border-stone/40 pt-6">
                  <span className="text-[0.8rem] font-medium tracking-[0.2em] text-earth">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-medium text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-[42ch] font-light leading-[1.7] text-charcoal">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DISCIPLINAS ESTRATÉGICAS */}
      <section id="disciplinas" className="section-pad bg-ink">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Disciplinas estratégicas"
              title="Todo lo que un proyecto necesita bajo una misma visión."
              dark
            />
          </Reveal>
          <Reveal className="mt-16">
            <DisciplineGrid />
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
