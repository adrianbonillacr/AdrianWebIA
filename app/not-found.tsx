import Button from "@/components/Button";

// 404 global (fuera del árbol de idioma): texto breve en ambos idiomas.
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
        <p className="mt-2 max-w-[52ch] text-sm font-light leading-[1.7] text-stone">
          This page does not exist — but your project does.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/es" variant="outline-light">
            Volver al inicio
          </Button>
          <Button href="/en" variant="outline-light">
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
