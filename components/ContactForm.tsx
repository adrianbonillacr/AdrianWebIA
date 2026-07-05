"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { buttonClasses } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

const fieldLabel =
  "block text-[0.7rem] font-medium uppercase tracking-[0.24em] text-earth";
const fieldInput =
  "mt-2 w-full border-b border-stone bg-transparent px-0 py-3 font-light text-ink transition-colors duration-300 placeholder:text-stone focus:border-earth focus:outline-none";

/**
 * Formulario de contacto con envío real de correo vía FormSubmit
 * (https://formsubmit.co — gratuito, sin backend propio).
 *
 * IMPORTANTE: el PRIMER envío dispara un correo de activación a
 * siteConfig.email; hay que abrir ese correo y confirmar una única vez.
 * A partir de ahí, cada mensaje del formulario llega directo a la bandeja.
 *
 * TODO: si más adelante se quiere control total (plantillas, dominio propio),
 * migrar a Resend con una API route.
 */
export default function ContactForm() {
  const searchParams = useSearchParams();
  const etapaParam = searchParams.get("etapa");
  const normalizedEtapa =
    etapaParam === "construido"
      ? "construido"
      : etapaParam === "desde-cero"
        ? "desde-cero"
        : "";

  const [etapa, setEtapa] = useState(normalizedEtapa);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  // Sincroniza el select cuando se navega con ?etapa= sin recargar
  // (botones de ruta de la propia página de contacto).
  useEffect(() => {
    if (normalizedEtapa) setEtapa(normalizedEtapa);
  }, [normalizedEtapa]);

  if (status === "sent") {
    return (
      <div className="border border-stone/40 p-10" role="status">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-earth">
          Mensaje enviado
        </p>
        <p className="mt-4 text-lg font-light leading-[1.7] text-ink">
          Mensaje enviado. Te contactamos pronto.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const etapaLabel =
          data.get("etapa") === "construido"
            ? "Ya tengo un proyecto construido"
            : "Quiero iniciar desde 0";
        setStatus("sending");
        try {
          const res = await fetch(
            `https://formsubmit.co/ajax/${siteConfig.email}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                Nombre: data.get("nombre"),
                Correo: data.get("correo"),
                Teléfono: data.get("telefono") || "—",
                "Etapa del proyecto": etapaLabel,
                Mensaje: data.get("mensaje"),
                _subject: `Consulta de proyecto — ${data.get("nombre")}`,
                _template: "table",
                _captcha: "false",
              }),
            },
          );
          setStatus(res.ok ? "sent" : "error");
        } catch {
          setStatus("error");
        }
      }}
      className="space-y-9"
    >
      <div>
        <label htmlFor="nombre" className={fieldLabel}>
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          className={fieldInput}
        />
      </div>

      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label htmlFor="correo" className={fieldLabel}>
            Correo
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            required
            autoComplete="email"
            className={fieldInput}
          />
        </div>
        <div>
          <label htmlFor="telefono" className={fieldLabel}>
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            className={fieldInput}
          />
        </div>
      </div>

      <div>
        <label htmlFor="etapa" className={fieldLabel}>
          ¿En qué etapa está tu proyecto?
        </label>
        <select
          id="etapa"
          name="etapa"
          required
          value={etapa}
          onChange={(e) => setEtapa(e.target.value)}
          className={`${fieldInput} appearance-none`}
        >
          <option value="" disabled>
            Seleccionar…
          </option>
          <option value="desde-cero">Quiero iniciar desde 0</option>
          <option value="construido">Ya tengo un proyecto construido</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className={fieldLabel}>
          Contanos sobre tu proyecto
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          className={`${fieldInput} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`${buttonClasses("earth")} disabled:opacity-60`}
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm font-normal text-earth">
          No pudimos enviar el mensaje. Intentá de nuevo o escribinos directo a{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
            {siteConfig.email}
          </a>{" "}
          o por WhatsApp.
        </p>
      )}
    </form>
  );
}
