/**
 * Hero de páginas interiores: fondo negro sólido (ink, según libro de marca),
 * eyebrow con punto, H1 y subtítulo opcional. Sin fotografías.
 */
export default function InteriorHero({
  eyebrow,
  title,
  subtitle,
  size = "tall",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  size?: "tall" | "short";
}) {
  return (
    <section
      className={`relative flex items-center bg-ink text-white ${
        size === "tall" ? "min-h-[70vh]" : "min-h-[45vh]"
      }`}
    >
      <div className="container-site pb-20 pt-40">
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
      {/* Marcador editorial vertical */}
      <span
        aria-hidden="true"
        className="absolute bottom-10 right-6 hidden text-[0.7rem] font-light tracking-[0.4em] text-mist/50 md:block md:right-10"
        style={{ writingMode: "vertical-rl" }}
      >
        19.89
      </span>
    </section>
  );
}
