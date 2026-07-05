import type { Metadata } from "next";
import ArrowLink from "@/components/ArrowLink";
import CtaBanner from "@/components/CtaBanner";
import InteriorHero from "@/components/InteriorHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { siteImages } from "@/lib/images";
import { valueIndexDimensions } from "@/lib/process-steps";
import { analysisToAction } from "@/lib/services";

export const metadata: Metadata = {
  title: "Proyecto ya construido — Diagnóstico Estratégico del Proyecto",
  description:
    "Consultoría estratégica para comprender el estado actual de una propiedad, identificar oportunidades de mejora y orientar futuras decisiones de inversión.",
};

const consultingGoals = [
  "Comprender el funcionamiento general del proyecto.",
  "Identificar fortalezas y oportunidades de mejora.",
  "Detectar aspectos que afectan la experiencia del usuario o huésped.",
  "Establecer prioridades de intervención.",
  "Orientar futuras inversiones mediante una estrategia clara.",
];

const roadmapStages = [
  {
    number: "01",
    title: "Desarrollo del proyecto",
    href: "/proyecto-desde-cero#etapa-2",
  },
  {
    number: "02",
    title: "Identidad y posicionamiento",
    href: "/proyecto-desde-cero#etapa-3",
  },
  {
    number: "03",
    title: "Tecnología al servicio del usuario",
    href: "/proyecto-desde-cero#etapa-4",
  },
  {
    number: "04",
    title: "Del análisis a la acción",
    href: "/estrategia",
  },
];

export default function ProyectoYaConstruidoPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Proyecto ya construido"
        title="Medimos primero. Invertimos después."
        subtitle="Una consultoría estratégica para comprender el estado actual de una propiedad, identificar oportunidades de mejora y orientar futuras decisiones de inversión."
        image={siteImages.hero.yaConstruido}
        tone="charcoal"
      />

      {/* INTRO */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow="Diagnóstico Estratégico del Proyecto" align="center" />
            <p className="mx-auto mt-10 max-w-[56ch] text-[clamp(1.15rem,2.2vw,1.5rem)] font-light leading-[1.6] text-ink">
              El Diagnóstico Estratégico del Proyecto está diseñado para
              comprender cómo funciona una propiedad existente, detectar
              oportunidades de mejora y establecer una estrategia clara para
              aumentar su experiencia, diferenciación y valor a largo plazo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* POR QUÉ COMENZAR CON UN DIAGNÓSTICO */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
              <SectionHeader
                eyebrow="¿Por qué comenzar con un diagnóstico?"
                title="Las mejores decisiones se toman cuando existe claridad."
              />
              <p className="max-w-[56ch] self-end text-lg font-light leading-[1.7] text-charcoal">
                Antes de invertir, remodelar o implementar nuevas disciplinas,
                es fundamental comprender cómo funciona el proyecto, cuáles
                son sus fortalezas y dónde se encuentran las mayores
                oportunidades de mejora.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <p className="mb-6 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-earth">
              Qué buscamos durante la consultoría
            </p>
            <ul className="grid gap-px border border-stone/40 bg-stone/40 md:grid-cols-2" role="list">
              {consultingGoals.map((goal, i) => (
                <li
                  key={goal}
                  className={`flex items-baseline gap-5 bg-white p-6 ${
                    i === consultingGoals.length - 1 ? "md:col-span-2" : ""
                  }`}
                >
                  <span className="text-lg font-semibold leading-none text-earth">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-light leading-[1.65] text-charcoal">{goal}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ÍNDICE DE VALOR 19.89 */}
      <section className="section-pad bg-charcoal text-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Índice de Valor 19.89"
              title="Cinco dimensiones para entender dónde invertir primero."
              dark
            />
            <p className="mt-6 max-w-[56ch] font-light leading-[1.7] text-mist">
              El resultado del diagnóstico permite entender dónde invertir
              primero y qué acciones pueden generar mayor impacto.
            </p>
          </Reveal>
          <Reveal className="mt-14 max-w-3xl">
            <ul className="space-y-8" role="list">
              {valueIndexDimensions.map((dimension) => (
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
              Ejemplo visual — la medición real se construye durante el diagnóstico de cada proyecto
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
              <p className="max-w-[56ch] self-end text-lg font-light leading-[1.7] text-charcoal">
                Después del diagnóstico, se define una hoja de ruta con
                prioridades claras. Esta hoja de ruta permite contratar las
                disciplinas de forma integral o por etapas según el nivel de
                urgencia, impacto y presupuesto.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <p className="mb-6 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-earth">
              Etapas posteriores recomendadas
            </p>
            <div className="grid gap-px border border-stone/40 bg-stone/40 sm:grid-cols-2 lg:grid-cols-4">
              {roadmapStages.map((stage) => (
                <a
                  key={stage.title}
                  href={stage.href}
                  className="group bg-white p-6 transition-colors duration-300 hover:bg-mist/50"
                >
                  <span className="text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold leading-none text-earth">
                    {stage.number}
                  </span>
                  <p className="mt-4 text-[0.95rem] font-medium leading-snug text-ink">
                    {stage.title}
                  </p>
                  <span className="mt-3 inline-block text-[0.66rem] font-normal uppercase tracking-[0.22em] text-stone transition-colors duration-300 group-hover:text-earth">
                    Ver etapa{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="mx-auto mt-20 max-w-3xl text-center">
            <p className="mx-auto max-w-[56ch] text-[clamp(1.05rem,2vw,1.35rem)] font-light leading-[1.6] text-ink">
              {analysisToAction.description}
            </p>
            <div className="mt-8 flex justify-center">
              <ArrowLink href="/estrategia">Conocer la Estrategia 19.89</ArrowLink>
            </div>
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
        buttonLabel="Quiero diagnosticar mi proyecto"
        buttonHref="/contacto?etapa=construido"
      />
    </>
  );
}
