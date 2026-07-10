import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { getDict, isLang, type Lang } from "@/lib/i18n";

// Página conceptual: sin nombres, cargos ni retratos hasta que exista la
// información real del equipo. Fuera del menú principal por ahora.

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  return { title: t.team.metaTitle, description: t.team.metaDescription };
}

export default async function EquipoPage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const t = getDict(lang);

  return (
    <>
      {/* Hero sobrio */}
      <section className="bg-mist">
        <div className="container-site pb-20 pt-44">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-earth" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-earth">
              {t.team.heroEyebrow}
            </p>
            <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />
          </div>
          <h1 className="mt-8 max-w-[20ch] text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.12] text-ink">
            {t.team.heroTitle}
          </h1>
          <p className="mt-7 max-w-[62ch] text-lg font-light leading-[1.7] text-charcoal">
            {t.team.heroText}
          </p>
        </div>
      </section>

      {/* Especialidades */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow={t.team.specialtiesEyebrow} />
            <p className="mt-10 max-w-[62ch] text-[clamp(1.2rem,2.2vw,1.6rem)] font-light leading-[1.6] text-ink">
              {t.disciplines.map((d, i) => (
                <span key={d.slug}>
                  <span className="font-normal">{d.name}</span>
                  {i < t.disciplines.length - 1 && (
                    <span aria-hidden="true" className="text-earth"> · </span>
                  )}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

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
