import type { Metadata } from "next";
import Link from "next/link";
import ArrowLink from "@/components/ArrowLink";
import CtaBanner from "@/components/CtaBanner";
import InteriorHero from "@/components/InteriorHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { getDict, isLang, type Lang } from "@/lib/i18n";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  return { title: t.built.metaTitle, description: t.built.metaDescription };
}

export default async function ProyectoYaConstruidoPage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const t = getDict(lang);
  const b = t.built;

  return (
    <>
      <InteriorHero eyebrow={b.heroEyebrow} title={b.heroTitle} subtitle={b.heroSubtitle} />

      {/* INTRO */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow={b.introEyebrow} align="center" />
            <p className="mx-auto mt-10 max-w-[56ch] text-[clamp(1.15rem,2.2vw,1.5rem)] font-light leading-[1.6] text-ink">
              {b.introText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* POR QUÉ COMENZAR CON UN DIAGNÓSTICO */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
              <SectionHeader eyebrow={b.whyEyebrow} title={b.whyTitle} />
              <p className="max-w-[56ch] self-end text-lg font-light leading-[1.7] text-charcoal">
                {b.whyText}
              </p>
            </div>
          </Reveal>

          <div className="mt-16">
            <Reveal>
              <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-earth">
                {b.goalsLabel}
              </p>
            </Reveal>
            <ul role="list">
              {b.goals.map((goal, i) => (
                <Reveal key={goal} delay={i * 80}>
                  <li className="grid grid-cols-[4rem_1fr] items-baseline gap-6 border-t border-stone/40 py-7 md:grid-cols-[7rem_1fr] md:gap-8">
                    <span
                      aria-hidden="true"
                      className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold leading-none text-earth"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="max-w-[58ch] font-light leading-[1.7] text-charcoal md:text-lg">
                      {goal}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
            <div className="border-t border-stone/40" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ÍNDICE DE VALOR 19.89 */}
      <section className="section-pad bg-charcoal text-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow={b.indexEyebrow} title={b.indexTitle} dark />
            <p className="mt-6 max-w-[56ch] font-light leading-[1.7] text-mist">
              {b.indexText}
            </p>
          </Reveal>
          <Reveal className="mt-14 max-w-3xl">
            <ul className="space-y-8" role="list">
              {t.valueDims.map((dimension) => (
                <li key={dimension.label}>
                  <span className="text-[0.78rem] font-medium uppercase tracking-[0.2em] text-white">
                    {dimension.label}
                  </span>
                  <div aria-hidden="true" className="mt-3 h-1 w-full bg-stone/30">
                    <div
                      className="value-bar-fill h-full bg-earth"
                      style={{ width: `${dimension.demoFill}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[0.68rem] font-normal uppercase tracking-[0.2em] text-stone">
              {b.indexNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROYECTO ROADMAP */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
              <SectionHeader eyebrow={b.roadmapEyebrow} title={b.roadmapTitle} />
              <p className="max-w-[56ch] self-end text-lg font-light leading-[1.7] text-charcoal">
                {b.roadmapText}
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <p className="mb-6 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-earth">
              {b.roadmapStagesLabel}
            </p>
            <div className="grid gap-px border border-stone/40 bg-stone/40 sm:grid-cols-2 lg:grid-cols-4">
              {b.roadmapStages.map((stage) => (
                <Link
                  key={stage.title}
                  href={`/${lang}${stage.href}`}
                  className="group bg-white p-6 transition-colors duration-300 hover:bg-mist/50"
                >
                  <span className="text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold leading-none text-earth">
                    {stage.number}
                  </span>
                  <p className="mt-4 text-[0.95rem] font-medium leading-snug text-ink">
                    {stage.title}
                  </p>
                  <span className="mt-3 inline-block text-[0.66rem] font-normal uppercase tracking-[0.22em] text-stone transition-colors duration-300 group-hover:text-earth">
                    {b.seeStage}{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal className="mx-auto mt-20 max-w-3xl text-center">
            <p className="mx-auto max-w-[56ch] text-[clamp(1.05rem,2vw,1.35rem)] font-light leading-[1.6] text-ink">
              {b.closingText}
            </p>
            <div className="mt-8 flex justify-center">
              <ArrowLink href={`/${lang}/estrategia`}>{b.closingLink}</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaBanner
        title={
          <>
            {b.ctaTitlePart1}{" "}
            <span className="text-stone">{b.ctaTitlePart2}</span>
          </>
        }
        buttonLabel={b.ctaButton}
        buttonHref={`/${lang}/contacto?etapa=construido`}
      />
    </>
  );
}
