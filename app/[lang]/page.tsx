import type { Metadata } from "next";
import Link from "next/link";
import ArrowLink from "@/components/ArrowLink";
import Button from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";
import DisciplineAccordion from "@/components/DisciplineAccordion";
import Logo from "@/components/Logo";
import Preloader from "@/components/Preloader";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { getDict, isLang, type Lang } from "@/lib/i18n";
import { getProject, kahwiFeaturedCover, type Project } from "@/lib/projects";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  return {
    title: { absolute: t.meta.homeTitle },
    description: t.meta.homeDescription,
  };
}

function categoryText(project: Project, t: ReturnType<typeof getDict>): string {
  return project.categories.map((c) => t.categories[c]).join(" · ");
}

// Portafolio destacado del inicio (mismo orden que la página de portafolio)
const featuredProjects = ["kahwi", "tree-lodge", "cafetal", "diciembre-seis", "amarea"];

export default async function HomePage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const t = getDict(lang);

  const paths = [
    {
      tag: t.home.path1Tag,
      title: t.home.path1Title,
      tagline: t.home.path1Tagline,
      description: t.home.path1Description,
      linkLabel: t.home.path1Link,
      href: `/${lang}/proyecto-desde-cero`,
      number: "01",
      // Colores sólidos de marca (sin fotografías)
      bg: "bg-earth",
    },
    {
      tag: t.home.path2Tag,
      title: t.home.path2Title,
      tagline: t.home.path2Tagline,
      description: t.home.path2Description,
      linkLabel: t.home.path2Link,
      href: `/${lang}/proyecto-ya-construido`,
      number: "02",
      bg: "bg-charcoal",
    },
  ];

  return (
    <>
      {/* Pre-pantalla de 2s: fondo sólido con el logo */}
      <Preloader />

      {/* HERO — negro sólido, logo grande a la izquierda, información mínima */}
      <section className="relative flex min-h-svh items-center bg-ink text-white">
        <div className="container-site grid items-center gap-14 py-32 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div className="lg:border-r lg:border-stone/25 lg:pr-16">
            <Logo
              variant="mark"
              color="white"
              iconClassName="h-[clamp(13rem,26vw,19rem)] w-auto"
            />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-mist" />
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-mist">
                {t.home.heroEyebrow}
              </p>
            </div>
            <h1 className="mt-8 max-w-[16ch] text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[1.1]">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-[46ch] text-base font-light leading-[1.7] text-mist md:text-lg">
              {t.home.heroSubtitle}
            </p>
          </div>
        </div>
        <a
          href="#dos-caminos"
          className="absolute bottom-10 left-6 flex items-center gap-4 text-[0.65rem] font-normal uppercase tracking-[0.3em] text-mist transition-colors duration-300 hover:text-white md:left-10"
        >
          {t.common.discover}
          <span aria-hidden="true" className="h-px w-16 bg-mist/60" />
        </a>
        {/* Marcador editorial vertical */}
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
              eyebrow={t.home.pathsEyebrow}
              title={t.home.pathsTitle}
              titleClassName="max-w-[30ch]"
            />
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-10">
            {paths.map((path, i) => (
              <Reveal key={path.href} delay={i * 120}>
                {/* Toda la card (bloque de color + texto) es el área clicable */}
                <Link href={path.href} className="group block">
                  <article>
                    {/* Bloque de color sólido de marca (sin fotografía) */}
                    <div className={`relative aspect-[4/3] overflow-hidden ${path.bg}`}>
                      <div aria-hidden="true" className="texture-grain absolute inset-0" />
                      <span className="absolute left-5 top-5 border border-white/60 px-3 py-1.5 text-[0.62rem] font-normal uppercase tracking-[0.28em] text-white">
                        {path.tag}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute bottom-4 right-6 text-[clamp(4.5rem,9vw,7rem)] font-semibold leading-none text-white/15 transition-colors duration-500 group-hover:text-white/25"
                      >
                        {path.number}
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

      {/* ESTRATEGIA 19.89 — resumen incorporado al inicio (antes página aparte) */}
      <section id="estrategia" className="scroll-mt-20 bg-charcoal text-white">
        <div className="container-site section-pad">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow={t.home.strategyEyebrow}
              title={t.home.strategyTitle}
              dark
              align="center"
            />
            <p className="mx-auto mt-8 max-w-[62ch] font-light leading-[1.7] text-mist">
              {t.home.strategyText}
            </p>
            <p className="mx-auto mt-6 max-w-[62ch] border-l border-earth pl-5 text-left font-light leading-[1.7] text-mist">
              {t.home.strategyWhy}
            </p>
          </Reveal>
        </div>
      </section>

      {/* DEL ANÁLISIS A LA ACCIÓN */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow={t.home.processEyebrow} title={t.home.processTitle} />
          </Reveal>
          <div className="mt-16">
            {t.processSteps.map((step, i) => (
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
              eyebrow={t.home.disciplinesEyebrow}
              title={t.home.disciplinesTitle}
              dark
            />
            <p className="mt-6 max-w-[58ch] font-light leading-[1.7] text-mist">
              {t.home.disciplinesNote}
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <DisciplineAccordion
              items={t.disciplines}
              labels={{ stageLabels: t.stageLabels, pathTags: t.pathTags }}
              dark
            />
          </Reveal>
          <Reveal className="mt-10">
            <ArrowLink href={`/${lang}/disciplinas`}>{t.home.disciplinesLink}</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* PORTAFOLIO DESTACADO — Kahwi en primer lugar con su portada especial */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow={t.home.portfolioEyebrow} />
          </Reveal>

          <Reveal className="mt-14">
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((slug, i) => {
                const project = getProject(slug);
                if (!project) return null;
                const wide = i === 0; // Kahwi abre el portafolio destacado
                return (
                  <div key={slug} className={wide ? "md:col-span-2" : undefined}>
                    <ProjectCard
                      project={project}
                      lang={lang}
                      categoryText={categoryText(project, t)}
                      alt={t.portfolio.projectAlt(project.name)}
                      tone={(["earth", "charcoal", "stone", "ink", "earth"] as const)[i]}
                      aspect={wide ? "aspect-[16/9]" : "aspect-[4/3]"}
                      sizes={wide ? "(min-width: 1184px) 1104px, 100vw" : undefined}
                      coverSrc={wide ? kahwiFeaturedCover : undefined}
                    />
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="mt-16 text-center">
            <Button href={`/${lang}/portafolio`} variant="outline-dark">
              {t.home.seeFullPortfolio}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
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
