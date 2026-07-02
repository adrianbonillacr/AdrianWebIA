"use client";

import { useState } from "react";
import type { ReactNode } from "react";

const filters = [
  { id: "todos", label: "Todos" },
  { id: "arquitectura", label: "Arquitectura" },
  { id: "iluminacion", label: "Iluminación" },
] as const;

type FilterId = (typeof filters)[number]["id"];

/**
 * Tabs de filtro sin recarga. Los cards (server components) llegan como
 * children con data-categories; el filtrado es por CSS según data-filter
 * (ver globals.css), así las imágenes no se re-renderizan.
 */
export default function PortfolioFilter({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<FilterId>("todos");

  return (
    <div>
      <div className="flex flex-wrap gap-x-10 gap-y-4" role="group" aria-label="Filtrar proyectos">
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
