import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import DisciplineAccordion from "@/components/DisciplineAccordion";
import { getDict, isLang, type Lang } from "@/lib/i18n";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  return {
    title: t.disciplinesPage.metaTitle,
    description: t.disciplinesPage.metaDescription,
  };
}

export default async function DisciplinasPage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const t = getDict(lang);
  const d = t.disciplinesPage;

  return (
    <>
      {/* Hero sobrio (página secundaria) */}
      <section className="bg-mist">
        <div className="container-site pb-20 pt-44">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-earth" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-earth">
              {d.heroEyebrow}
            </p>
            <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />
          </div>
          <h1 className="mt-8 max-w-[22ch] text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.12] text-ink">
            {d.heroTitle}
          </h1>
          <p className="mt-7 max-w-[58ch] text-lg font-light leading-[1.7] text-charcoal">
            {d.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Lista desplegable (acordeón): el detalle se abre debajo de cada ítem */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <DisciplineAccordion
            items={t.disciplines}
            labels={{ stageLabels: t.stageLabels, pathTags: t.pathTags }}
          />
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
