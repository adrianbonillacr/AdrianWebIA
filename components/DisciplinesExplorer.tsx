"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

type Discipline = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stage: string;
  newOnly: boolean;
};

type Labels = {
  stageLabels: Record<string, string>;
  pathTags: { both: string; newOnly: string };
  integrateLink: string;
  modalLabel: string;
  modalClose: string;
  modalPillar: string;
};

/**
 * Grid de disciplinas donde cada card abre un modal (nodo) con la explicación
 * de la disciplina. Accesible: foco al abrir, cierre con Escape / backdrop / X,
 * scroll bloqueado y foco devuelto al disparador.
 */
export default function DisciplinesExplorer({
  disciplines,
  labels,
}: {
  disciplines: Discipline[];
  labels: Labels;
}) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const active = disciplines.find((d) => d.slug === openSlug) ?? null;

  const close = useCallback(() => {
    setOpenSlug(null);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <>
      <div className="grid gap-px border border-stone/40 bg-stone/40 sm:grid-cols-2 lg:grid-cols-3">
        {disciplines.map((d, i) => (
          <Reveal key={d.slug} className="h-full" delay={(i % 3) * 80}>
            <button
              type="button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setOpenSlug(d.slug);
              }}
              aria-haspopup="dialog"
              className="group relative flex h-full w-full flex-col bg-white p-8 text-left transition-colors duration-300 hover:bg-mist/40"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-earth transition-transform duration-500 group-hover:scale-x-100"
              />
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-stone">
                {labels.stageLabels[d.stage]}
              </p>
              <h2 className="mt-4 text-xl font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-earth">
                {d.name}
              </h2>
              <p className="mt-3 max-w-[42ch] font-light leading-[1.65] text-charcoal">
                {d.tagline}
              </p>
              <p className="mt-5 w-fit border border-stone/40 px-2.5 py-1 text-[0.6rem] font-normal uppercase tracking-[0.18em] text-charcoal">
                {d.newOnly ? labels.pathTags.newOnly : labels.pathTags.both}
              </p>
              <span className="mt-auto inline-flex items-center gap-3 pt-7 text-[0.72rem] font-normal uppercase tracking-[0.18em] text-earth">
                {labels.integrateLink}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Modal / nodo de detalle */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={labels.modalLabel}
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={close}
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-xl border border-stone/30 bg-white p-8 sm:p-12">
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label={labels.modalClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center text-2xl font-light text-ink transition-colors duration-300 hover:text-earth"
            >
              <span aria-hidden="true">×</span>
            </button>

            <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-earth">
              {labels.stageLabels[active.stage]}
            </p>
            <h3 className="mt-4 text-[clamp(1.6rem,3.2vw,2.2rem)] font-semibold leading-tight text-ink">
              {active.name}
            </h3>
            <p className="mt-2 font-normal italic text-earth">{active.tagline}</p>
            <p className="mt-6 font-light leading-[1.75] text-charcoal">
              {active.description}
            </p>

            <div className="mt-8 border-t border-stone/40 pt-5">
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-stone">
                {labels.modalPillar}
              </p>
              <p className="mt-2 text-sm font-light text-ink">
                {active.newOnly ? labels.pathTags.newOnly : labels.pathTags.both}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
