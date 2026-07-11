"use client";

import { useId, useState } from "react";

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
};

/**
 * Lista de disciplinas tipo acordeón: al tocar un ítem se despliega una
 * pestaña debajo con el detalle (empujando el resto para ajustar el espacio);
 * al volver a tocarlo se cierra. Solo uno abierto a la vez.
 *
 * El detalle se monta/desmonta al abrir/cerrar (la lista refluye y ajusta el
 * espacio) con una animación de entrada. Funciona en fondo claro y oscuro.
 */
export default function DisciplineAccordion({
  items,
  labels,
  dark,
}: {
  items: Discipline[];
  labels: Labels;
  dark?: boolean;
}) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const baseId = useId();

  const line = dark ? "border-stone/25" : "border-stone/40";
  const name = dark ? "text-white" : "text-ink";
  const desc = dark ? "text-mist" : "text-charcoal";
  const indicator = dark ? "text-stone" : "text-earth";
  const pillar = dark
    ? "border-stone/40 text-mist"
    : "border-stone/40 text-charcoal";

  return (
    <ul role="list" className={`border-t ${line}`}>
      {items.map((d) => {
        const open = openSlug === d.slug;
        const panelId = `${baseId}-${d.slug}`;
        return (
          <li key={d.slug} className={`border-b ${line}`}>
            <button
              type="button"
              onClick={() => setOpenSlug(open ? null : d.slug)}
              aria-expanded={open}
              aria-controls={panelId}
              className="group flex w-full items-center gap-6 py-6 text-left"
            >
              <span className="min-w-0 flex-1">
                <span className="block text-[0.6rem] font-medium uppercase tracking-[0.24em] text-stone">
                  {labels.stageLabels[d.stage]}
                </span>
                <span
                  className={`mt-2 block text-[clamp(1.25rem,2.4vw,1.7rem)] font-medium leading-snug transition-colors duration-300 group-hover:text-earth ${open ? "text-earth" : name}`}
                >
                  {d.name}
                </span>
              </span>
              {/* Indicador +/− */}
              <span
                aria-hidden="true"
                className={`relative h-5 w-5 shrink-0 ${indicator}`}
              >
                <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                <span
                  className={`absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-500 ${open ? "rotate-90 scale-0" : "rotate-0"}`}
                />
              </span>
            </button>

            {open && (
              <div id={panelId} role="region" className="accordion-panel max-w-[62ch] pb-8">
                <p className="font-normal italic text-earth">{d.tagline}</p>
                <p className={`mt-4 font-light leading-[1.75] ${desc}`}>
                  {d.description}
                </p>
                <p
                  className={`mt-6 w-fit border px-2.5 py-1 text-[0.6rem] font-normal uppercase tracking-[0.18em] ${pillar}`}
                >
                  {d.newOnly ? labels.pathTags.newOnly : labels.pathTags.both}
                </p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
