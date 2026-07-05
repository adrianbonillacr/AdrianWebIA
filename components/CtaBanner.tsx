import type { ReactNode } from "react";
import Button from "@/components/Button";

/**
 * Banner de cierre: fondo negro sólido (ink) con grano sutil de marca.
 * Sin fotografías ni degradados, según libro de marca.
 */
export default function CtaBanner({
  title,
  eyebrow,
  buttonLabel,
  buttonHref,
}: {
  title: ReactNode;
  eyebrow?: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="texture-grain absolute inset-0" />
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
