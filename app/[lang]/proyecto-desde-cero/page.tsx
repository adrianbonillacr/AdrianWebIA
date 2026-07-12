import type { Metadata } from "next";
import Link from "next/link";
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
  return { title: t.fromZero.metaTitle, description: t.fromZero.metaDescription };
}

/** Punto de lista de marca: cuadrado fino earth + texto ligero. */
function BrandList({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3" role="list">
      {items.map((item) => (
        <li key={item} className="flex items-baseline gap-3">
          <span
            aria-hidden="true"
            className={`h-[0.32rem] w-[0.32rem] shrink-0 translate-y-[-0.1rem] ${dark ? "bg-stone" : "bg-earth"}`}
          />
          <span className={`font-light leading-[1.65] ${dark ? "text-mist" : "text-charcoal"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ListLabel({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <p
      className={`mb-4 text-[0.68rem] font-medium uppercase tracking-[0.26em] ${dark ? "text-stone" : "text-earth"}`}
    >
      {children}
    </p>
  );
}

export default async function ProyectoDesdeCeroPage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const t = getDict(lang);
  const z = t.fromZero;

  return (
    <>
      <InteriorHero eyebrow={z.heroEyebrow} title={z.heroTitle} subtitle={z.heroSubtitle} />

      {/* INTRO */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow={z.introEyebrow} align="center" />
            <p className="mx-auto mt-10 max-w-[58ch] text-[clamp(1.15rem,2.2vw,1.5rem)] font-light leading-[1.6] text-ink">
              {z.introText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ETAPA 1 · ASESORÍA DE INVERSIÓN */}
      <section id="etapa-1" className="section-pad scroll-mt-24 bg-white">
        <div className="container-site">
          <Reveal>
            <div>
              <span
                aria-hidden="true"
                className="block text-[clamp(1.3rem,2vw,1.7rem)] font-semibold leading-none text-earth"
              >
                01
              </span>
              <div className="mt-5">
                <SectionHeader
                  eyebrow={z.stage1Eyebrow}
                  title={z.stage1Title}
                  titleSizeClassName="text-[clamp(2.1rem,4.4vw,3.4rem)]"
                />
              </div>
            </div>
            <p className="mt-8 max-w-[62ch] font-light leading-[1.7] text-charcoal">
              {z.stage1Text}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Card A · Selección de activos */}
            <Reveal>
              <article className="flex h-full flex-col border border-stone/40 p-8 lg:p-10">
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                  {z.assetSelection.option}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-ink">
                  {z.assetSelection.title}
                </h3>
                <p className="mt-4 max-w-[52ch] font-light leading-[1.7] text-charcoal">
                  {z.assetSelection.description}
                </p>

                <div className="mt-8">
                  <ListLabel>{z.assetSelection.includesLabel}</ListLabel>
                  <BrandList items={z.assetSelection.bullets} />
                </div>

                <div className="mt-8">
                  <ListLabel>{z.assetSelection.deliverablesLabel}</ListLabel>
                  <BrandList items={z.assetSelection.deliverables} />
                </div>

                {/* Honorarios sin montos: se detallan en la propuesta */}
                <div className="mt-8 border-t border-stone/40 pt-6">
                  <ListLabel>{z.assetSelection.feeLabel}</ListLabel>
                  <p className="max-w-[52ch] text-[0.9rem] font-light leading-[1.7] text-charcoal">
                    {z.assetSelection.feeNote}
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Card B · Diagnóstico estratégico — toda la card es clicable */}
            <Reveal delay={120}>
              <Link
                href={`/${lang}/proyecto-ya-construido`}
                className="group flex h-full flex-col border border-stone/40 bg-mist/40 p-8 transition-colors duration-300 hover:bg-mist/70 lg:p-10"
              >
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                  {z.diagnosis.option}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-earth">
                  {z.diagnosis.title}
                </h3>
                <p className="mt-4 max-w-[52ch] font-light leading-[1.7] text-charcoal">
                  {z.diagnosis.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-3 pt-8 text-[0.8rem] font-normal uppercase tracking-[0.14em] text-earth">
                  {z.diagnosis.link}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ETAPA 2 · DESARROLLO DEL PROYECTO */}
      <section id="etapa-2" className="section-pad scroll-mt-24 bg-mist">
        <div className="container-site">
          <Reveal>
            <div>
              <span
                aria-hidden="true"
                className="block text-[clamp(1.3rem,2vw,1.7rem)] font-semibold leading-none text-earth"
              >
                02
              </span>
              <div className="mt-5">
                <SectionHeader
                  eyebrow={z.stage2Eyebrow}
                  title={z.stage2Title}
                  titleSizeClassName="text-[clamp(2.1rem,4.4vw,3.4rem)]"
                />
              </div>
            </div>
            <p className="mt-8 max-w-[62ch] font-light leading-[1.7] text-charcoal">
              {z.stage2Text}
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <ul className="grid gap-px border border-stone/40 bg-stone/40 sm:grid-cols-2 lg:grid-cols-5" role="list">
              {z.developmentDisciplines.map((name) => (
                <li key={name} className="bg-mist p-6">
                  <span className="text-[0.9rem] font-medium leading-snug text-ink">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Destacado: Análisis financiero estratégico */}
          <Reveal className="mt-12">
            <div className="border border-stone/40 bg-white p-8 lg:p-12">
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                {z.financial.label}
              </p>
              <h3 className="mt-4 max-w-[28ch] text-2xl font-semibold leading-snug text-ink">
                {z.financial.title}
              </h3>
              <div className="mt-6 grid gap-10 lg:grid-cols-2">
                <p className="max-w-[52ch] font-light leading-[1.7] text-charcoal">
                  {z.financial.description}
                </p>
                <div>
                  <ListLabel>{z.financial.benefitsLabel}</ListLabel>
                  <BrandList items={z.financial.benefits} />
                </div>
              </div>
              <p className="mt-8 border-t border-stone/40 pt-5 text-[0.82rem] font-light leading-[1.7] text-charcoal">
                {z.financial.note}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ETAPA 3 · IDENTIDAD Y POSICIONAMIENTO */}
      <section id="etapa-3" className="section-pad scroll-mt-24 bg-white">
        <div className="container-site">
          <Reveal>
            <div>
              <span
                aria-hidden="true"
                className="block text-[clamp(1.3rem,2vw,1.7rem)] font-semibold leading-none text-earth"
              >
                03
              </span>
              <div className="mt-5">
                <SectionHeader
                  eyebrow={z.stage3Eyebrow}
                  title={z.stage3Title}
                  titleClassName="max-w-[28ch]"
                  titleSizeClassName="text-[clamp(2.1rem,4.4vw,3.4rem)]"
                />
              </div>
            </div>
            <p className="mt-8 max-w-[68ch] font-light leading-[1.7] text-charcoal">
              {z.stage3Text}
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <ul className="grid gap-px border border-stone/40 bg-stone/40 sm:grid-cols-3" role="list">
              {z.identityDisciplines.map((name) => (
                <li key={name} className="bg-white p-6">
                  <span className="text-[0.9rem] font-medium leading-snug text-ink">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Marketing digital */}
          <Reveal className="mt-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                  {z.marketing.label}
                </p>
                <p className="mt-5 max-w-[42ch] text-xl font-light leading-[1.55] text-ink">
                  {z.marketing.intro}
                </p>
              </div>
              <div>
                <ListLabel>{z.marketing.scopeLabel}</ListLabel>
                <BrandList items={z.marketing.scope} />
              </div>
            </div>
          </Reveal>

          {/* Paquetes (sin montos: la inversión se detalla en la propuesta) */}
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {z.packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 100}>
                <article
                  className={`relative flex h-full flex-col border p-8 ${
                    pkg.featured ? "border-earth" : "border-stone/40"
                  }`}
                >
                  {pkg.featured && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-0.5 bg-earth"
                    />
                  )}
                  <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                    {z.marketing.packageLabel}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold uppercase tracking-[0.08em] text-ink">
                    {pkg.name}
                  </h3>
                  <p className="mt-3 font-light leading-[1.6] text-charcoal">
                    {pkg.positioning}
                  </p>
                  <div className="mt-6 border-t border-stone/40 pt-6">
                    <ListLabel>{z.marketing.includesLabel}</ListLabel>
                    <ul className="space-y-2.5" role="list">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-baseline gap-3">
                          <span
                            aria-hidden="true"
                            className="h-[0.32rem] w-[0.32rem] shrink-0 bg-earth"
                          />
                          <span className="text-[0.9rem] font-light leading-[1.6] text-charcoal">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <p className="max-w-[68ch] text-[0.82rem] font-light leading-[1.7] text-charcoal">
              {z.marketing.pricingNote}
            </p>
            <p className="mt-3 max-w-[68ch] text-[0.82rem] font-light leading-[1.7] text-charcoal">
              {z.marketing.travelNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ETAPA 4 · AUTOMATIZACIÓN Y MOVILIDAD */}
      <section id="etapa-4" className="section-pad scroll-mt-24 bg-ink text-white">
        <div className="container-site">
          <Reveal>
            <div>
              <span
                aria-hidden="true"
                className="block text-[clamp(1.3rem,2vw,1.7rem)] font-semibold leading-none text-earth"
              >
                04
              </span>
              <div className="mt-5">
                <SectionHeader
                  eyebrow={z.stage4Eyebrow}
                  title={z.stage4Title}
                  titleClassName="max-w-[30ch]"
                  titleSizeClassName="text-[clamp(2.1rem,4.4vw,3.4rem)]"
                  dark
                />
              </div>
            </div>
            <p className="mt-8 max-w-[62ch] font-light leading-[1.7] text-mist">
              {z.stage4Text}
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <ListLabel dark>{z.stage4EvaluationLabel}</ListLabel>
                <BrandList items={z.stage4Evaluation} dark />
              </div>
              <div>
                <ListLabel dark>{z.stage4BenefitsLabel}</ListLabel>
                <BrandList items={z.stage4Benefits} dark />
              </div>
            </div>
            <p className="mt-12 max-w-[62ch] border-l border-earth pl-5 font-light leading-[1.7] text-mist">
              {z.stage4Result}
            </p>
          </Reveal>
        </div>
      </section>

      {/* DEL ANÁLISIS A LA ACCIÓN */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow={z.closingEyebrow} align="center" />
            <p className="mx-auto mt-10 max-w-[56ch] text-[clamp(1.15rem,2.2vw,1.5rem)] font-light leading-[1.6] text-ink">
              {z.closingText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaBanner
        title={z.ctaTitle}
        buttonLabel={z.ctaButton}
        buttonHref={`/${lang}/contacto?etapa=desde-cero`}
      />
    </>
  );
}
