import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto — Conversemos sobre tu proyecto",
  description:
    "Contanos en qué etapa está tu proyecto inmobiliario. Escribinos por WhatsApp, correo o Instagram — 1989 Arquitectura, Costa Rica.",
};

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

const directLabel =
  "text-[0.7rem] font-medium uppercase tracking-[0.24em] text-earth";

export default function ContactoPage() {
  return (
    <>
      {/* Hero mínimo */}
      <section className="bg-white">
        <div className="container-site pb-16 pt-44">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-earth" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-earth">
              Contacto
            </p>
            <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />
          </div>
          <h1 className="mt-8 max-w-[20ch] text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.12] text-ink">
            Conversemos sobre tu proyecto.
          </h1>
          <p className="mt-7 max-w-[58ch] text-lg font-light leading-[1.7] text-charcoal">
            Ya sea que estés iniciando una inversión o buscando elevar el
            valor de una propiedad existente, podemos ayudarte a definir el
            siguiente paso con claridad.
          </p>
          {/* Dos rutas claras: preseleccionan la etapa en el formulario */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contacto?etapa=desde-cero"
              scroll={false}
              className="inline-block border border-ink px-6 py-3.5 text-[0.72rem] font-normal uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
            >
              Quiero desarrollar un proyecto desde 0
            </Link>
            <Link
              href="/contacto?etapa=construido"
              scroll={false}
              className="inline-block border border-ink px-6 py-3.5 text-[0.72rem] font-normal uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
            >
              Quiero diagnosticar una propiedad existente
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white pb-[clamp(5rem,10vw,8.5rem)]">
        <div className="container-site">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-[3fr_2fr] lg:gap-24">
              {/* Formulario */}
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>

              {/* Contacto directo */}
              <aside className="lg:border-l lg:border-stone/40 lg:pl-12">
                <h2 className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-ink">
                  Contacto directo
                </h2>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 bg-earth px-8 py-4 text-[0.8rem] font-normal uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-earth-dark"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>

                <dl className="mt-10 space-y-8">
                  <div>
                    <dt className={directLabel}>Correo</dt>
                    <dd className="mt-2">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-light text-ink transition-colors duration-300 hover:text-earth"
                      >
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className={directLabel}>Instagram</dt>
                    <dd className="mt-2">
                      <a
                        href={siteConfig.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-light text-ink transition-colors duration-300 hover:text-earth"
                      >
                        {siteConfig.instagramHandle}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className={directLabel}>Ubicación</dt>
                    <dd className="mt-2 font-light text-ink">Costa Rica</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
