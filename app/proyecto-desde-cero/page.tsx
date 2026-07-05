import type { Metadata } from "next";
import ArrowLink from "@/components/ArrowLink";
import CtaBanner from "@/components/CtaBanner";
import InteriorHero from "@/components/InteriorHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { siteImages } from "@/lib/images";
import {
  analysisToAction,
  assetSelection,
  digitalMarketing,
  financialAnalysis,
  marketingPackages,
  strategicDiagnosis,
  technology,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Proyecto desde 0 — La mejor inversión comienza con la propiedad correcta",
  description:
    "Un camino estratégico para iniciar proyectos inmobiliarios con claridad, criterio y visión de largo plazo: asesoría de inversión, desarrollo, identidad y tecnología.",
};

/** Punto de lista de marca: cuadrado fino earth + texto ligero. */
function BrandList({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3" role="list">
      {items.map((item) => (
        <li key={item} className="flex items-baseline gap-3">
          <span
            aria-hidden="true"
            className={`h-[0.32rem] w-[0.32rem] shrink-0 translate-y-[-0.1rem] ${dark ? "bg-stone" : "bg-earth"}`}
          />
          <span className={`font-light leading-[1.65] ${dark ? "text-mist" : "text-charcoal"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ListLabel({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <p
      className={`mb-4 text-[0.68rem] font-medium uppercase tracking-[0.26em] ${dark ? "text-stone" : "text-earth"}`}
    >
      {children}
    </p>
  );
}

const developmentDisciplines = [
  "Análisis financiero estratégico",
  "Arquitectura",
  "Diseño de iluminación",
  "Diseño de interiores",
  "Mobiliario & decoración",
];

const identityDisciplines = [
  "Protección de identidad",
  "Fotografía profesional",
  "Marketing digital",
];

export default function ProyectoDesdeCeroPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Proyecto desde 0"
        title="La mejor inversión comienza con la propiedad correcta."
        subtitle="Un camino estratégico para iniciar proyectos inmobiliarios con claridad, criterio y visión de largo plazo."
        image={siteImages.hero.desdeCero}
        tone="earth"
      />

      {/* INTRO */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow="El punto de partida" align="center" />
            <p className="mx-auto mt-10 max-w-[58ch] text-[clamp(1.15rem,2.2vw,1.5rem)] font-light leading-[1.6] text-ink">
              Las decisiones más importantes de un proyecto suelen tomarse
              antes del primer plano: elegir una propiedad, definir el
              concepto, ordenar la inversión y entender cómo el proyecto
              llegará al mercado. Sin una estrategia clara, pueden surgir
              inversiones de bajo impacto, oportunidades desaprovechadas y
              proyectos que no alcanzan su verdadero potencial.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ETAPA 1 · ASESORÍA DE INVERSIÓN */}
      <section id="etapa-1" className="section-pad scroll-mt-24 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="flex items-end gap-6">
              <span
                aria-hidden="true"
                className="text-[clamp(3.4rem,7vw,5.5rem)] font-semibold leading-[0.85] text-earth"
              >
                01
              </span>
              <div className="flex-1 pb-2">
                <SectionHeader
                  eyebrow="Etapa 1 · Asesoría de inversión"
                  title="Antes de diseñar, evaluamos el punto de partida."
                />
              </div>
            </div>
            <p className="mt-8 max-w-[62ch] font-light leading-[1.7] text-charcoal">
              Esta etapa permite entender si el cliente ya cuenta con una
              propiedad o si necesita apoyo para seleccionar el activo
              correcto.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Card A · Selección de activos */}
            <Reveal>
              <article className="flex h-full flex-col border border-stone/40 p-8 lg:p-10">
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                  {assetSelection.option}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-ink">
                  {assetSelection.title}
                </h3>
                <p className="mt-4 max-w-[52ch] font-light leading-[1.7] text-charcoal">
                  {assetSelection.description}
                </p>

                <div className="mt-8">
                  <ListLabel>Qué incluye</ListLabel>
                  <BrandList items={assetSelection.bullets} />
                </div>

                <div className="mt-8">
                  <ListLabel>Entregables</ListLabel>
                  <BrandList items={assetSelection.deliverables} />
                </div>

                <div className="mt-8 border-t border-stone/40 pt-6">
                  <ListLabel>Honorarios</ListLabel>
                  <p className="text-xl font-medium text-ink">{assetSelection.fee}</p>
                  <p className="mt-3 max-w-[52ch] text-[0.82rem] font-light leading-[1.7] text-charcoal">
                    {assetSelection.feeNote}
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Card B · Diagnóstico estratégico */}
            <Reveal delay={120}>
              <article className="flex h-full flex-col border border-stone/40 bg-mist/40 p-8 lg:p-10">
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                  {strategicDiagnosis.option}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-ink">
                  {strategicDiagnosis.title}
                </h3>
                <p className="mt-4 max-w-[52ch] font-light leading-[1.7] text-charcoal">
                  {strategicDiagnosis.description}
                </p>
                <div className="mt-auto pt-8">
                  <ArrowLink href="/proyecto-ya-construido">
                    Ver diagnóstico estratégico
                  </ArrowLink>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ETAPA 2 · DESARROLLO DEL PROYECTO */}
      <section id="etapa-2" className="section-pad scroll-mt-24 bg-mist">
        <div className="container-site">
          <Reveal>
            <div className="flex items-end gap-6">
              <span
                aria-hidden="true"
                className="text-[clamp(3.4rem,7vw,5.5rem)] font-semibold leading-[0.85] text-earth"
              >
                02
              </span>
              <div className="flex-1 pb-2">
                <SectionHeader
                  eyebrow="Etapa 2 · Desarrollo del proyecto"
                  title="La estrategia se convierte en proyecto."
                />
              </div>
            </div>
            <p className="mt-8 max-w-[62ch] font-light leading-[1.7] text-charcoal">
              Con una estrategia definida y una hoja de ruta clara, comienza
              la etapa de desarrollo. Cada disciplina se implementa según las
              necesidades del proyecto y las oportunidades identificadas
              durante el análisis.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <ul className="grid gap-px border border-stone/40 bg-stone/40 sm:grid-cols-2 lg:grid-cols-5" role="list">
              {developmentDisciplines.map((name) => (
                <li key={name} className="bg-mist p-6">
                  <span className="text-[0.9rem] font-medium leading-snug text-ink">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Destacado: Análisis financiero estratégico */}
          <Reveal className="mt-12">
            <div className="border border-stone/40 bg-white p-8 lg:p-12">
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                Análisis financiero estratégico
              </p>
              <h3 className="mt-4 max-w-[28ch] text-2xl font-semibold leading-snug text-ink">
                {financialAnalysis.title}
              </h3>
              <div className="mt-6 grid gap-10 lg:grid-cols-2">
                <p className="max-w-[52ch] font-light leading-[1.7] text-charcoal">
                  {financialAnalysis.description}
                </p>
                <div>
                  <ListLabel>Beneficios</ListLabel>
                  <BrandList items={financialAnalysis.benefits} />
                </div>
              </div>
              <p className="mt-8 border-t border-stone/40 pt-5 text-[0.82rem] font-light leading-[1.7] text-charcoal">
                {financialAnalysis.note}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ETAPA 3 · IDENTIDAD Y POSICIONAMIENTO */}
      <section id="etapa-3" className="section-pad scroll-mt-24 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="flex items-end gap-6">
              <span
                aria-hidden="true"
                className="text-[clamp(3.4rem,7vw,5.5rem)] font-semibold leading-[0.85] text-earth"
              >
                03
              </span>
              <div className="flex-1 pb-2">
                <SectionHeader
                  eyebrow="Etapa 3 · Identidad y posicionamiento"
                  title="Un gran proyecto merece una identidad capaz de comunicar su valor."
                  titleClassName="max-w-[28ch]"
                />
              </div>
            </div>
            <p className="mt-8 max-w-[68ch] font-light leading-[1.7] text-charcoal">
              Una vez definida la estrategia y desarrolladas las
              intervenciones físicas, comienza una nueva etapa: construir la
              identidad, la narrativa y la presencia del proyecto. En la
              Estrategia 19.89, la protección de identidad, la fotografía y el
              marketing digital no se entienden como acciones independientes.
              Son herramientas que permiten comunicar, posicionar y fortalecer
              todo aquello que ya ha sido construido.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <ul className="grid gap-px border border-stone/40 bg-stone/40 sm:grid-cols-3" role="list">
              {identityDisciplines.map((name) => (
                <li key={name} className="bg-white p-6">
                  <span className="text-[0.9rem] font-medium leading-snug text-ink">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Marketing digital */}
          <Reveal className="mt-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                  Marketing digital
                </p>
                <p className="mt-5 max-w-[42ch] text-xl font-light leading-[1.55] text-ink">
                  {digitalMarketing.intro}
                </p>
              </div>
              <div>
                <ListLabel>Alcances</ListLabel>
                <BrandList items={digitalMarketing.scope} />
              </div>
            </div>
          </Reveal>

          {/* Paquetes */}
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {marketingPackages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 100}>
                <article
                  className={`relative flex h-full flex-col border p-8 ${
                    pkg.featured ? "border-earth" : "border-stone/40"
                  }`}
                >
                  {pkg.featured && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-0.5 bg-earth"
                    />
                  )}
                  <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                    Paquete
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold uppercase tracking-[0.08em] text-ink">
                    {pkg.name}
                  </h3>
                  <p className="mt-3 font-light leading-[1.6] text-charcoal">
                    {pkg.positioning}
                  </p>
                  <div className="mt-6 border-t border-stone/40 pt-6">
                    <ListLabel>Incluye</ListLabel>
                    <ul className="space-y-2.5" role="list">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-baseline gap-3">
                          <span
                            aria-hidden="true"
                            className="h-[0.32rem] w-[0.32rem] shrink-0 bg-earth"
                          />
                          <span className="text-[0.9rem] font-light leading-[1.6] text-charcoal">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-8">
                    <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
                      Inversión
                    </p>
                    {/* TODO: definir precios finales de los paquetes */}
                    <p className="mt-1 text-lg font-medium text-ink">{pkg.price}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <p className="max-w-[68ch] text-[0.82rem] font-light leading-[1.7] text-charcoal">
              {digitalMarketing.travelNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ETAPA 4 · TECNOLOGÍA AL SERVICIO DEL USUARIO */}
      <section id="etapa-4" className="section-pad scroll-mt-24 bg-ink text-white">
        <div className="container-site">
          <Reveal>
            <div className="flex items-end gap-6">
              <span
                aria-hidden="true"
                className="text-[clamp(3.4rem,7vw,5.5rem)] font-semibold leading-[0.85] text-earth"
              >
                04
              </span>
              <div className="flex-1 pb-2">
                <SectionHeader
                  eyebrow="Etapa 4 · Tecnología al servicio del usuario"
                  title={technology.title}
                  titleClassName="max-w-[30ch]"
                  dark
                />
              </div>
            </div>
            <p className="mt-8 max-w-[62ch] font-light leading-[1.7] text-mist">
              {technology.description}
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <ListLabel dark>Qué evaluamos</ListLabel>
                <BrandList items={technology.evaluation} dark />
              </div>
              <div>
                <ListLabel dark>Beneficios</ListLabel>
                <BrandList items={technology.benefits} dark />
              </div>
            </div>
            <p className="mt-12 max-w-[62ch] border-l border-earth pl-5 font-light leading-[1.7] text-mist">
              {technology.result}
            </p>
          </Reveal>
        </div>
      </section>

      {/* DEL ANÁLISIS A LA ACCIÓN */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow={analysisToAction.title} align="center" />
            <p className="mx-auto mt-10 max-w-[56ch] text-[clamp(1.15rem,2.2vw,1.5rem)] font-light leading-[1.6] text-ink">
              {analysisToAction.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaBanner
        texture="travertino"
        title="La mejor inversión comienza con la propiedad correcta."
        buttonLabel="Quiero desarrollar un proyecto desde 0"
        buttonHref="/contacto?etapa=desde-cero"
      />
    </>
  );
}
