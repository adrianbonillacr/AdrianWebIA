import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { disciplines, stageLabels } from "@/lib/disciplines";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Disciplinas estratégicas — Herramientas que se integran a cada proyecto",
  description:
    "Selección de activos, diagnóstico, análisis financiero, arquitectura, iluminación, interiores, identidad, fotografía, marketing y tecnología: módulos de la Estrategia 19.89.",
};

export default function DisciplinasPage() {
  return (
    <>
      {/* Hero sobrio (página secundaria) */}
      <section className="bg-mist">
        <div className="container-site pb-20 pt-44">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-earth" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-earth">
              Disciplinas
            </p>
            <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />
          </div>
          <h1 className="mt-8 max-w-[22ch] text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.12] text-ink">
            Disciplinas estratégicas
          </h1>
          <p className="mt-7 max-w-[58ch] text-lg font-light leading-[1.7] text-charcoal">
            Herramientas especializadas que se integran según las necesidades
            de cada proyecto. Ninguna opera de forma aislada: todas responden
            a la Estrategia 19.89.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid gap-px border border-stone/40 bg-stone/40 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((discipline, i) => (
              <Reveal key={discipline.slug} className="h-full" delay={(i % 3) * 80}>
                {/* Toda la card es clicable */}
                <Link
                  href={discipline.href}
                  className="group relative flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-mist/40"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-earth transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-stone">
                    {stageLabels[discipline.stage]}
                  </p>
                  <h2 className="mt-4 text-xl font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-earth">
                    {discipline.name}
                  </h2>
                  <p className="mt-3 max-w-[42ch] font-light leading-[1.65] text-charcoal">
                    {discipline.tagline}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-3 pt-7 text-[0.72rem] font-normal uppercase tracking-[0.18em] text-earth">
                    Ver cómo se integra
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

      <CtaBanner
        texture="madera"
        title={
          <>
            Descubrimos el potencial.{" "}
            <span className="text-stone">Diseñamos la estrategia.</span>{" "}
            Creamos valor.
          </>
        }
        buttonLabel="Agendar una reunión estratégica"
        buttonHref={siteConfig.calendarUrl}
      />
    </>
  );
}
