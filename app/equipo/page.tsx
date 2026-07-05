import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { disciplines } from "@/lib/disciplines";
import { siteConfig } from "@/lib/site-config";

// Página conceptual: sin nombres, cargos ni retratos hasta que exista la
// información real del equipo. Fuera del menú principal por ahora.
// TODO: cuando el cliente entregue nombres, roles y retratos reales,
// reincorporar la página al menú y agregar el grid de personas.

export const metadata: Metadata = {
  title: "El equipo como ventaja",
  description:
    "La ventaja estratégica de 1989 Arquitectura está en integrar arquitectura, inversión, iluminación, interiores, identidad, comunicación y tecnología bajo una sola visión.",
};

export default function EquipoPage() {
  return (
    <>
      {/* Hero sobrio */}
      <section className="bg-mist">
        <div className="container-site pb-20 pt-44">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-earth" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-earth">
              Estudio
            </p>
            <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />
          </div>
          <h1 className="mt-8 max-w-[20ch] text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.12] text-ink">
            El equipo como ventaja.
          </h1>
          <p className="mt-7 max-w-[62ch] text-lg font-light leading-[1.7] text-charcoal">
            La ventaja estratégica de 19.89 está en integrar arquitectura,
            inversión, iluminación, interiores, identidad, comunicación y
            tecnología bajo una sola visión. Cada disciplina aporta criterio
            para que las decisiones de diseño también respondan a decisiones
            de valor.
          </p>
        </div>
      </section>

      {/* Especialidades */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow="Especialidades" />
            <p className="mt-10 max-w-[62ch] text-[clamp(1.2rem,2.2vw,1.6rem)] font-light leading-[1.6] text-ink">
              {disciplines.map((d, i) => (
                <span key={d.slug}>
                  <span className="font-normal">{d.name}</span>
                  {i < disciplines.length - 1 && (
                    <span aria-hidden="true" className="text-earth"> · </span>
                  )}
                </span>
              ))}
            </p>
          </Reveal>
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
