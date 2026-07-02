import { disciplines } from "@/lib/disciplines";

/**
 * Grid de las 8 disciplinas estratégicas sobre fondo ink.
 * Celdas separadas por líneas de 1px stone/25; al hover la celda se aclara
 * levemente y una línea superior de 2px earth crece de 0 a 100%.
 */
export default function DisciplineGrid({ compact }: { compact?: boolean }) {
  return (
    <ul
      className="grid grid-cols-1 gap-px border border-stone/25 bg-stone/25 sm:grid-cols-2 lg:grid-cols-4"
      role="list"
    >
      {disciplines.map((d) => (
        <li
          key={d.slug}
          className={`group relative bg-ink transition-colors duration-300 hover:bg-charcoal ${
            compact ? "p-6" : "p-8 lg:p-10"
          }`}
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-earth transition-transform duration-500 group-hover:scale-x-100"
          />
          <h3 className="text-base font-medium text-white">{d.name}</h3>
          <p
            className={`mt-3 font-light leading-relaxed text-mist ${
              compact ? "text-[0.82rem]" : "text-sm"
            }`}
          >
            {d.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
