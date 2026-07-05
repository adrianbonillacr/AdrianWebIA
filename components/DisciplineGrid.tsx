import { homeDisciplines, type HomeDiscipline } from "@/lib/disciplines";

/**
 * Grid de disciplinas sobre fondo ink. Las disciplinas son herramientas
 * dentro de la Estrategia 19.89 — nunca servicios protagonistas.
 * Celdas separadas por líneas de 1px stone/25; al hover la celda se aclara
 * levemente y una línea superior de 2px earth crece de 0 a 100%.
 */
export default function DisciplineGrid({
  items = homeDisciplines,
  compact,
}: {
  items?: HomeDiscipline[];
  compact?: boolean;
}) {
  return (
    <ul
      className="grid grid-cols-1 gap-px border border-stone/25 bg-stone/25 sm:grid-cols-2 lg:grid-cols-5"
      role="list"
    >
      {items.map((d) => (
        <li
          key={d.name}
          className={`group relative bg-ink transition-colors duration-300 hover:bg-charcoal ${
            compact ? "p-6" : "p-6 lg:p-8"
          }`}
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-earth transition-transform duration-500 group-hover:scale-x-100"
          />
          <h3 className="text-[0.95rem] font-medium leading-snug text-white">
            {d.name}
          </h3>
          <p className="mt-3 text-[0.82rem] font-light leading-relaxed text-mist">
            {d.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
