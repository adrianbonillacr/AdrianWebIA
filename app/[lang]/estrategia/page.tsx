import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { getDict, isLang, type Lang } from "@/lib/i18n";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  return { title: t.strategyPage.metaTitle, description: t.strategyPage.metaDescription };
}

export default async function EstrategiaPage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const t = getDict(lang);
  const s = t.strategyPage;

  const pathCards = [
    {
      label: s.path1Label,
      title: s.path1Title,
      text: s.path1Text,
      link: s.path1Link,
      href: `/${lang}/proyecto-desde-cero`,
    },
    {
      label: s.path2Label,
      title: s.path2Title,
      text: s.path2Text,
      link: s.path2Link,
      href: `/${lang}/proyecto-ya-construido`,
    },
  ];

  return (
    <>
      {/* HERO — negro sólido, sin fotografías */}
      <section className="relative flex min-h-[70vh] items-center bg-ink text-white">
        <div className="container-site pb-20 pt-40">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-stone" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-stone">
              {s.heroEyebrow}
            </p>
          </div>
          <h1 className="mt-8 max-w-[24ch] text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.12]">
            {t.common.claim.part1}{" "}
            <span className="text-stone">{t.common.claim.part2}</span>{" "}
            {t.common.claim.part3}
          </h1>
          <p className="mt-7 max-w-[58ch] text-base font-light leading-[1.7] text-mist md:text-lg">
            {s.heroText}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="absolute bottom-10 right-6 hidden text-[0.7rem] font-light tracking-[0.4em] text-mist/50 md:block md:right-10"
          style={{ writingMode: "vertical-rl" }}
        >
          19.89
        </span>
      </section>

      {/* PRINCIPIOS */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow={s.principlesEyebrow} title={s.principlesTitle} />
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {t.principles.map((principle, i) => (
              <Reveal key={principle.number} delay={(i % 3) * 100}>
                <div className="border-t border-stone/40 pt-6">
                  <span className="text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-none text-earth">
                    {principle.number}
                  </span>
                  <h2 className="mt-5 text-lg font-medium text-ink">{principle.title}</h2>
                  <p className="mt-3 max-w-[42ch] font-light leading-[1.7] text-charcoal">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOS CAMINOS DE ENTRADA */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow={s.howEyebrow} title={s.howTitle} />
          </Reveal>
          <div className="mt-12 grid gap-px border border-stone/40 bg-stone/40 md:grid-cols-2">
            {pathCards.map((card, i) => (
              <Reveal key={card.href} className="h-full" delay={i * 120}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-mist/50 lg:p-10"
                >
                  <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                    {card.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-earth">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-[46ch] font-light leading-[1.7] text-charcoal">
                    {card.text}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-3 pt-6 text-[0.8rem] font-normal uppercase tracking-[0.14em] text-earth">
                    {card.link}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
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
