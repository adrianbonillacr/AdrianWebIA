// TODO: reemplazar por SVG oficial cuando el cliente lo entregue.
// El logo hereda currentColor: colocarlo siempre sobre fondos de la paleta
// (blanco sobre ink/charcoal/earth; ink sobre white/mist). Nunca aplicar
// sombras, rotaciones ni colores fuera de marca.

type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
};

function DegreeDot() {
  return (
    <span
      aria-hidden="true"
      className="relative -top-[0.52em] mx-[0.08em] inline-block h-[0.13em] w-[0.13em] rounded-full bg-current"
    />
  );
}

export default function Logo({ variant = "mark", className }: LogoProps) {
  return (
    <span className={`inline-block leading-none ${className ?? ""}`}>
      <span className="sr-only">19.89 Arquitectura</span>
      <span aria-hidden="true" className="block">
        <span className="text-[1.45em] font-medium tracking-[0.06em]">
          19
          <DegreeDot />
          89
          <DegreeDot />
        </span>
        {variant === "full" && (
          <span className="mt-[0.55em] block text-[0.62em] font-light tracking-[0.52em]">
            ARQUITECTURA
          </span>
        )}
      </span>
    </span>
  );
}
