/**
 * Firma visual del sitio: punto relleno + eyebrow en mayúsculas letterspaced
 * + línea horizontal de 1px. Usar en todas las secciones.
 */

type SectionHeaderProps = {
  eyebrow: string;
  title?: string;
  /** Sobre fondos oscuros: eyebrow en stone, título en blanco. */
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  /** Reemplaza el tamaño de fuente por defecto del título (ej. etapas). */
  titleSizeClassName?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  dark,
  align = "left",
  className,
  titleClassName,
  titleSizeClassName = "text-[clamp(1.75rem,3.4vw,2.7rem)]",
}: SectionHeaderProps) {
  const accent = dark ? "text-stone" : "text-earth";
  const dotColor = dark ? "bg-stone" : "bg-earth";
  const titleColor = dark ? "text-white" : "text-ink";
  const centered = align === "center";

  return (
    <div className={`${centered ? "text-center" : ""} ${className ?? ""}`}>
      <div className="flex items-center gap-4">
        {centered && <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />}
        <span
          aria-hidden="true"
          className={`h-[0.4rem] w-[0.4rem] shrink-0 rounded-full ${dotColor}`}
        />
        <span
          className={`text-[0.72rem] font-medium uppercase tracking-[0.28em] ${accent}`}
        >
          {eyebrow}
        </span>
        <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />
      </div>
      {title && (
        <h2
          className={`mt-8 max-w-[24ch] ${titleSizeClassName} font-semibold leading-[1.15] ${titleColor} ${
            centered ? "mx-auto" : ""
          } ${titleClassName ?? ""}`}
        >
          {title}
        </h2>
      )}
    </div>
  );
}
