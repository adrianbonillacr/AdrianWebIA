"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type FilterId = "todos" | "arquitectura" | "iluminacion";

/**
 * Tabs de filtro sin recarga. Los cards (server components) llegan como
 * children con data-categories; el filtrado es por CSS según data-filter
 * (ver globals.css), así las imágenes no se re-renderizan.
 */
export default function PortfolioFilter({
  children,
  labels,
  groupLabel,
}: {
  children: ReactNode;
  /** Etiquetas traducidas para: todos, arquitectura, iluminacion. */
  labels: { todos: string; arquitectura: string; iluminacion: string };
  groupLabel: string;
}) {
  const [active, setActive] = useState<FilterId>("todos");
  const filters: { id: FilterId; label: string }[] = [
    { id: "todos", label: labels.todos },
    { id: "arquitectura", label: labels.arquitectura },
    { id: "iluminacion", label: labels.iluminacion },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-x-10 gap-y-4" role="group" aria-label={groupLabel}>
        {filters.map((filter) => {
          const isActive = active === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActive(filter.id)}
              aria-pressed={isActive}
              className={`group relative pb-1.5 text-[0.78rem] font-normal uppercase tracking-[0.22em] transition-colors duration-300 ${
                isActive ? "text-ink" : "text-stone hover:text-ink"
              }`}
            >
              {filter.label}
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-0 h-px w-full origin-left bg-earth transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          );
        })}
      </div>
      <div data-filter={active} className="mt-14 grid gap-6 md:grid-cols-2">
        {children}
      </div>
    </div>
  );
}
