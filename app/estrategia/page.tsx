import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { strategyPrinciples } from "@/lib/strategy";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Estrategia 19.89 — Descubrimos el potencial. Diseñamos la estrategia. Creamos valor",
  description:
    "La Estrategia 19.89 es una metodología para acompañar proyectos residenciales, comerciales y hoteleros desde sus primeras etapas hasta su consolidación.",
};

export default function EstrategiaPage() {
  return (
    <>
      {/* HERO — negro sólido, sin fotografías */}
      <section className="relative flex min-h-[70vh] items-center bg-ink text-white">
        <div className="container-site pb-20 pt-40">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-stone" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-stone">
              Estrategia 19.89
            </p>
          </div>
          <h1 className="mt-8 max-w-[24ch] text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.12]">
            Descubrimos el potencial.{" "}
            <span className="text-stone">Diseñamos la estrategia.</span>{" "}
            Creamos valor.
          </h1>
          <p className="mt-7 max-w-[58ch] text-base font-light leading-[1.7] text-mist md:text-lg">
            La Estrategia 19.89 es una metodología desarrollada para acompañar
            proyectos residenciales, comerciales y hoteleros desde sus
            primeras etapas hasta su consolidación.
          </p>
        </div>
        {/* Marcador editorial vertical */}
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
            <SectionHeader
              eyebrow="La metodología"
              title="Seis principios ordenan cada decisión."
            />
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {strategyPrinciples.map((principle, i) => (
              <Reveal key={principle.number} delay={(i % 3) * 100}>
                <div className="border-t border-stone/40 pt-6">
                  <span className="text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-none text-earth">
                    {principle.number}
                  </span>
                  <h2 className="mt-5 text-lg font-medium text-ink">
                    {principle.title}
                  </h2>
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
            <SectionHeader
              eyebrow="Cómo se aplica"
              title="La metodología se recorre por uno de dos caminos."
            />
          </Reveal>
          <div className="mt-12 grid gap-px border border-stone/40 bg-stone/40 md:grid-cols-2">
            <Reveal className="h-full">
              {/* Toda la card es clicable */}
              <Link
                href="/proyecto-desde-cero"
                className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-mist/50 lg:p-10"
              >
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                  Camino 01
                </p>
                <h3 className="mt-3 text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-earth">
                  Proyecto desde 0
                </h3>
                <p className="mt-3 max-w-[46ch] font-light leading-[1.7] text-charcoal">
                  Desde la selección del activo hasta el posicionamiento:
                  claridad antes de cada decisión de inversión.
                </p>
                <span className="mt-auto inline-flex items-center gap-3 pt-6 text-[0.8rem] font-normal uppercase tracking-[0.14em] text-earth">
                  Ver proceso
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
            <Reveal className="h-full" delay={120}>
              <Link
                href="/proyecto-ya-construido"
                className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-mist/50 lg:p-10"
              >
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                  Camino 02
                </p>
                <h3 className="mt-3 text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-earth">
                  Proyecto ya construido
                </h3>
                <p className="mt-3 max-w-[46ch] font-light leading-[1.7] text-charcoal">
                  Diagnóstico Estratégico, Índice de Valor 19.89 y una hoja de
                  ruta que ordena las prioridades de inversión.
                </p>
                <span className="mt-auto inline-flex items-center gap-3 pt-6 text-[0.8rem] font-normal uppercase tracking-[0.14em] text-earth">
                  Ver diagnóstico
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaBanner
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
