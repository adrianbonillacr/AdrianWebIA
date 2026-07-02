import type { Metadata } from "next";
import BrandImage from "@/components/BrandImage";
import CtaBanner from "@/components/CtaBanner";
import DisciplineGrid from "@/components/DisciplineGrid";
import InteriorHero from "@/components/InteriorHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { siteImages } from "@/lib/images";
import { fromZeroStages } from "@/lib/process-steps";

export const metadata: Metadata = {
  title: "Proyecto desde 0 — Inversión inmobiliaria con estrategia",
  description:
    "El camino estratégico para iniciar una inversión inmobiliaria con claridad, criterio y visión de largo plazo: asesoría de inversiones, desarrollo, identidad y sostenibilidad.",
};

const stageImages = [
  siteImages.servicios.desdeCeroEtapa1,
  siteImages.servicios.desdeCeroEtapa2,
  siteImages.servicios.desdeCeroEtapa3,
  siteImages.servicios.desdeCeroEtapa4,
];

const stageTones = ["earth", "charcoal", "stone", "ink"] as const;

export default function ProyectoDesdeCeroPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Proyecto desde 0"
        title="La mejor inversión comienza con la propiedad correcta."
        subtitle="El camino estratégico para iniciar una inversión inmobiliaria con claridad, criterio y visión de largo plazo."
        image={siteImages.hero.desdeCero}
        tone="earth"
      />

      {/* EL PROBLEMA */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow="El problema" align="center" />
            <p className="mx-auto mt-10 max-w-[55ch] text-[clamp(1.25rem,2.4vw,1.7rem)] font-light leading-[1.55] text-ink">
              Muchas personas compran, diseñan o construyen sin saber si el
              proyecto es viable, rentable o tiene verdadero potencial. Las
              decisiones más costosas se toman al inicio — y casi siempre sin
              información.
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUÉ HACEMOS */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
              <SectionHeader eyebrow="Qué hacemos" title="Estrategia antes que inversión." />
              <p className="max-w-[58ch] self-end text-lg font-light leading-[1.7] text-charcoal">
                Evaluamos, planificamos y desarrollamos el proyecto antes de
                las grandes decisiones de inversión. Acompañamos desde la
                primera idea hasta la consolidación del activo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ETAPAS */}
      <section className="section-pad bg-white pt-0">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow="Las etapas" />
          </Reveal>
          <div className="mt-16 space-y-20 lg:space-y-28">
            {fromZeroStages.map((stage, i) => {
              const reversed = i % 2 === 1;
              return (
                <Reveal key={stage.number}>
                  <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                    <BrandImage
                      src={stageImages[i]}
                      alt={`Etapa ${stage.number}: ${stage.title} — 19°89° Arquitectura`}
                      tone={stageTones[i]}
                      label={stage.title}
                      className={`aspect-[4/3] ${reversed ? "md:order-2" : ""}`}
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <div className={reversed ? "md:order-1" : ""}>
                      <span className="text-[clamp(2.6rem,5vw,4rem)] font-semibold leading-none text-earth">
                        {stage.number}
                      </span>
                      <h2 className="mt-5 text-2xl font-semibold text-ink md:text-3xl">
                        {stage.title}
                      </h2>
                      <p className="mt-4 max-w-[46ch] text-lg font-light leading-[1.7] text-charcoal">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DISCIPLINAS INCLUIDAS */}
      <section className="section-pad bg-ink">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow="Disciplinas incluidas" dark />
          </Reveal>
          <Reveal className="mt-14">
            <DisciplineGrid compact />
          </Reveal>
        </div>
      </section>

      {/* RESULTADO ESPERADO */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal className="mx-auto max-w-4xl text-center">
            <SectionHeader eyebrow="Resultado esperado" align="center" />
            <blockquote className="mx-auto mt-10 max-w-[40ch] text-[clamp(1.5rem,3vw,2.3rem)] font-light leading-[1.4] text-ink">
              Un proyecto con fundamento financiero, identidad propia y valor
              de largo plazo —{" "}
              <span className="text-earth">no solo una construcción.</span>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaBanner
        texture="travertino"
        title="La mejor inversión comienza con la propiedad correcta."
        buttonLabel="Quiero desarrollar un proyecto desde cero"
        buttonHref="/contacto?etapa=desde-cero"
      />
    </>
  );
}
