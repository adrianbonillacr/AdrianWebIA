import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-svh items-center bg-ink text-white">
      <div className="container-site py-32">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-stone" />
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-stone">
            Error 404
          </p>
        </div>
        <h1 className="mt-8 max-w-[20ch] text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.12]">
          Esta página no existe.
        </h1>
        <p className="mt-6 max-w-[52ch] text-lg font-light leading-[1.7] text-mist">
          Pero tu proyecto sí. Volvé al inicio y descubrí cómo trabajamos.
        </p>
        <div className="mt-10">
          <Button href="/" variant="outline-light">
            Volver al inicio
          </Button>
        </div>
      </div>
    </section>
  );
}
