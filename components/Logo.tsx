import Image from "next/image";

/**
 * Logo oficial 19.89 (ícono "19° / 89°" entregado por el cliente, recoloreado
 * a los tonos de la paleta: /public/images/logo/icono-white.png e icono-ink.png).
 * Nunca aplicar sombras, rotaciones ni colores fuera de marca.
 */

type LogoProps = {
  variant?: "full" | "mark";
  color?: "white" | "ink";
  className?: string;
  /** Controla el alto del ícono (Tailwind), ej. "h-9 w-auto". */
  iconClassName?: string;
};

export default function Logo({
  variant = "mark",
  color = "ink",
  className,
  iconClassName,
}: LogoProps) {
  const src =
    color === "white" ? "/images/logo/icono-white.png" : "/images/logo/icono-ink.png";
  const textColor = color === "white" ? "text-white" : "text-ink";

  return (
    <span className={`inline-flex flex-col ${className ?? ""}`}>
      <span className="sr-only">19.89 Arquitectura</span>
      <Image
        src={src}
        alt=""
        width={325}
        height={381}
        className={iconClassName ?? "h-9 w-auto"}
      />
      {variant === "full" && (
        <span
          aria-hidden="true"
          className={`mt-5 block text-[0.78em] font-light tracking-[0.52em] ${textColor}`}
        >
          ARQUITECTURA
        </span>
      )}
    </span>
  );
}
