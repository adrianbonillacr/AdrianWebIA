import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import DisciplineGrid from "@/components/DisciplineGrid";
import InteriorHero from "@/components/InteriorHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { siteImages } from "@/lib/images";
import { valueIndexDimensions } from "@/lib/process-steps";

export const metadata: Metadata = {
  title: "Proyecto ya construido — Diagnóstico estratégico",
  description:
    "Consultoría estratégica para descubrir el potencial oculto de un proyecto existente: diagnóstico integral, Índice de Valor 19.89 y hoja de ruta de inversión.",
};

export default function ProyectoYaConstruidoPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Proyecto ya construido"
        title="Medimos primero. Invertimos después."
        subtitle="Una consultoría estratégica para descubrir el potencial oculto de un proyecto existente."
        image={siteImages.hero.yaConstruido}
        tone="charcoal"
      />

      {/* EL PROBLEMA */}
      <section className="section-pad bg-charcoal text-white">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow="El problema" align="center" dark />
            <p className="mx-auto mt-10 max-w-[55ch] text-[clamp(1.25rem,2.4vw,1.7rem)] font-light leading-[1.55] text-mist">
              Tu proyecto ya existe, pero puede estar desaprovechado:
              experiencia débil, diseño sin estrategia, poca diferenciación o
              inversiones sin prioridad clara.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DIAGNÓSTICO ESTRATÉGICO */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
              <SectionHeader
                eyebrow="Diagnóstico Estratégico"
                title="Entender el proyecto antes de invertir en él."
              />
              <p className="max-w-[58ch] self-end text-lg font-light leading-[1.7] text-charcoal">
                Evaluación integral del estado actual del proyecto —
                funcionalidad, experiencia, identidad y potencial comercial.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ÍNDICE DE VALOR 19.89 */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Índice de Valor 19.89"
              title="Puntuamos el proyecto en cinco dimensiones."
            />
            <p className="mt-6 max-w-[52ch] text-lg font-light leading-[1.7] text-charcoal">
              El resultado indica dónde invertir primero.
            </p>
          </Reveal>
          <Reveal className="mt-14 max-w-3xl">
            <ul className="space-y-8" role="list">
              {valueIndexDimensions.map((dimension) => (
                <li key={dimension.label}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[0.78rem] font-medium uppercase tracking-[0.2em] text-ink">
                      {dimension.label}
                    </span>
                    <span className="text-[0.78rem] font-medium tracking-[0.1em] text-earth">
                      {dimension.value}
                    </span>
                  </div>
                  <div
                    role="img"
                    aria-label={`${dimension.label}: ${dimension.value} de 100`}
                    className="mt-3 h-1 w-full bg-stone/40"
                  >
                    <div
                      className="value-bar-fill h-full bg-earth"
                      style={{ width: `${dimension.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[0.68rem] font-normal uppercase tracking-[0.2em] text-earth">
              Valores ilustrativos — cada proyecto recibe su propia medición
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROYECTO ROADMAP */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
              <SectionHeader
                eyebrow="Proyecto Roadmap"
                title="Prioridades claras, inversión ordenada."
              />
              <p className="max-w-[58ch] self-end text-lg font-light leading-[1.7] text-charcoal">
                Una hoja de ruta clara que prioriza inversiones y acciones
                según su impacto en el valor del proyecto.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DISCIPLINAS RECOMENDADAS */}
      <section className="section-pad bg-ink">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow="Disciplinas recomendadas" dark />
          </Reveal>
          <Reveal className="mt-14">
            <DisciplineGrid compact />
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaBanner
        texture="concreto"
        title={
          <>
            Medimos primero.{" "}
            <span className="text-stone">Invertimos después.</span>
          </>
        }
        buttonLabel="Quiero optimizar mi proyecto"
        buttonHref="/contacto?etapa=construido"
      />
    </>
  );
}
