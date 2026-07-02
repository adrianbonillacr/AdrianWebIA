"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { buttonClasses } from "@/components/Button";

const fieldLabel =
  "block text-[0.7rem] font-medium uppercase tracking-[0.24em] text-earth";
const fieldInput =
  "mt-2 w-full border-b border-stone bg-transparent px-0 py-3 font-light text-ink transition-colors duration-300 placeholder:text-stone focus:border-earth focus:outline-none";

/**
 * Formulario de contacto. Por ahora simula el envío en el cliente.
 * TODO: conectar a Resend / API route (POST a /api/contacto) cuando exista
 * la cuenta de envío transaccional.
 */
export default function ContactForm() {
  const searchParams = useSearchParams();
  const etapaParam = searchParams.get("etapa");
  const defaultEtapa =
    etapaParam === "construido"
      ? "construido"
      : etapaParam === "desde-cero"
        ? "desde-cero"
        : "";

  const [sent, setSent] = useState(false);

  if (sent) {
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
      noValidate={false}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
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
          defaultValue={defaultEtapa}
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

      <button type="submit" className={buttonClasses("earth")}>
        Enviar mensaje
      </button>
    </form>
  );
}
