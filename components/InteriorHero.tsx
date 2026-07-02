import BrandImage from "@/components/BrandImage";
import type { ImageTone } from "@/lib/images";

/**
 * Hero de páginas interiores: fondo oscuro (textura/foto + overlay ink),
 * eyebrow con punto, H1 y subtítulo opcional.
 */
export default function InteriorHero({
  eyebrow,
  title,
  subtitle,
  image,
  tone = "charcoal",
  size = "tall",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  tone?: ImageTone;
  size?: "tall" | "short";
}) {
  return (
    <section
      className={`relative flex items-center overflow-hidden bg-ink text-white ${
        size === "tall" ? "min-h-[75vh]" : "min-h-[45vh]"
      }`}
    >
      {image && (
        <div className="absolute inset-0" aria-hidden="true">
          <BrandImage src={image} alt="" tone={tone} className="h-full w-full" priority />
          <div className="absolute inset-0 bg-ink/60" />
        </div>
      )}
      <div className="container-site relative pb-20 pt-40">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-stone" />
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-stone">
            {eyebrow}
          </p>
        </div>
        <h1 className="mt-8 max-w-[20ch] text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.12]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-[52ch] text-base font-light leading-[1.7] text-mist md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
