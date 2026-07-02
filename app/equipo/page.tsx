import type { Metadata } from "next";
import BrandImage from "@/components/BrandImage";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { disciplines } from "@/lib/disciplines";
import { team } from "@/lib/team";
import { siteConfig } from "@/lib/site-config";
import type { ImageTone } from "@/lib/images";

export const metadata: Metadata = {
  title: "Equipo — Un equipo multidisciplinario bajo una misma visión",
  description:
    "Arquitectura, finanzas, iluminación, interiores, identidad y comunicación trabajando de forma integrada: la ventaja estratégica de 1989 Arquitectura.",
};

const portraitTones: ImageTone[] = ["earth", "stone", "charcoal", "mist", "ink", "earth"];

export default function EquipoPage() {
  return (
    <>
      {/* Hero sobrio */}
      <section className="bg-mist">
        <div className="container-site pb-20 pt-44">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-earth" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-earth">
              Equipo
            </p>
            <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />
          </div>
          <h1 className="mt-8 max-w-[22ch] text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.12] text-ink">
            Un equipo multidisciplinario bajo una misma visión.
          </h1>
          <p className="mt-7 max-w-[62ch] text-lg font-light leading-[1.7] text-charcoal">
            Arquitectura, finanzas, iluminación, interiores, identidad y
            comunicación trabajando de forma integrada. Esa es la ventaja
            estratégica de 19°89°: cada decisión de diseño responde también a
            una decisión de inversión.
          </p>
        </div>
      </section>

      {/* Retratos */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow="Las personas" />
          </Reveal>
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={`${member.image}`} delay={(i % 3) * 100}>
                <article className="group">
                  <BrandImage
                    src={member.image}
                    alt={`${member.name}, ${member.role} — 19°89° Arquitectura`}
                    tone={portraitTones[i]}
                    label={member.role}
                    hoverZoom
                    className="aspect-[3/4]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <h3 className="mt-5 text-base font-medium text-ink">{member.name}</h3>
                  <p className="mt-1 text-[0.7rem] font-normal uppercase tracking-[0.24em] text-earth">
                    {member.role}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="section-pad bg-mist">
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
            <p className="mt-8 max-w-[62ch] font-light leading-[1.7] text-charcoal">
              Ocho disciplinas que no operan como servicios aislados, sino como
              una sola estrategia: cada una aporta información y criterio a las
              decisiones de inversión del proyecto.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        texture="madera"
        title={
          <>
            Una propiedad puede construirse en meses.{" "}
            <span className="text-stone">
              Un proyecto extraordinario se construye con estrategia.
            </span>
          </>
        }
        buttonLabel="Agendar una reunión estratégica"
        buttonHref={siteConfig.calendarUrl}
      />
    </>
  );
}
