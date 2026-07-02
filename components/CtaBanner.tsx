import type { ReactNode } from "react";
import BrandImage from "@/components/BrandImage";
import Button from "@/components/Button";
import { siteImages, type ImageTone } from "@/lib/images";

type Texture = "madera" | "concreto" | "travertino";

const textureConfig: Record<Texture, { src: string; tone: ImageTone }> = {
  madera: { src: siteImages.texturas.madera, tone: "earth" },
  concreto: { src: siteImages.texturas.concreto, tone: "charcoal" },
  travertino: { src: siteImages.texturas.travertino, tone: "stone" },
};

/**
 * Banner de cierre con textura de marca. Cuando exista la foto real de
 * textura se muestra con overlay ink; mientras tanto, gradiente tonal + grano.
 */
export default function CtaBanner({
  title,
  eyebrow,
  buttonLabel,
  buttonHref,
  texture = "madera",
}: {
  title: ReactNode;
  eyebrow?: string;
  buttonLabel: string;
  buttonHref: string;
  texture?: Texture;
}) {
  const { src, tone } = textureConfig[texture];

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <BrandImage src={src} alt="" tone={tone} className="h-full w-full" />
        <div className="absolute inset-0 bg-ink/80" />
      </div>
      <div className="container-site section-pad relative text-center">
        {eyebrow && (
          <p className="mb-8 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-stone">
            {eyebrow}
          </p>
        )}
        <h2 className="mx-auto max-w-[26ch] text-[clamp(1.9rem,3.8vw,3rem)] font-semibold leading-[1.2]">
          {title}
        </h2>
        <div className="mt-12">
          <Button href={buttonHref} variant="earth">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
