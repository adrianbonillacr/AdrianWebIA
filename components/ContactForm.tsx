"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { buttonClasses } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";
import type { Dictionary } from "@/lib/i18n";

type FormDict = Dictionary["contactPage"]["form"];

const fieldLabel =
  "block text-[0.7rem] font-medium uppercase tracking-[0.24em] text-earth";
const fieldInput =
  "mt-2 w-full border-b border-stone bg-transparent px-0 py-3 font-light text-ink transition-colors duration-300 placeholder:text-stone focus:border-earth focus:outline-none";

/**
 * Formulario de contacto con envío real vía FormSubmit (POST nativo, sin
 * backend propio). Al enviar, FormSubmit entrega el correo a siteConfig.email
 * y redirige de vuelta a la página de contacto con ?enviado=1.
 *
 * Además, cada envío se registra en el Google Sheet de contactos mediante un
 * webhook de Apps Script (siteConfig.contactSheetWebhook): se dispara un
 * fetch con keepalive justo antes del POST nativo, así sobrevive a la
 * navegación. Instrucciones del webhook: docs/contactos-sheet.md
 *
 * IMPORTANTE (una sola vez): el PRIMER envío desde el sitio publicado dispara
 * un correo de activación de FormSubmit a siteConfig.email; hay que abrirlo
 * y confirmar.
 *
 * TODO: si más adelante se quiere control total (plantillas, dominio propio),
 * migrar a Resend con una API route.
 */
function logToSheet(form: HTMLFormElement) {
  const webhook = siteConfig.contactSheetWebhook;
  if (!webhook) return;
  const data = new FormData(form);
  const params = new URLSearchParams({
    nombre: String(data.get("Nombre") ?? ""),
    correo: String(data.get("email") ?? ""),
    telefono: String(data.get("Telefono") ?? ""),
    etapa: String(data.get("Etapa del proyecto") ?? ""),
    mensaje: String(data.get("Mensaje") ?? ""),
    idioma: document.documentElement.lang || "es",
    origen: window.location.href,
  });
  // Fire-and-forget: no bloquea ni condiciona el envío del correo.
  try {
    void fetch(webhook, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
  } catch {
    // El registro en el sheet es secundario; el correo sigue su curso.
  }
}
export default function ContactForm({ t }: { t: FormDict }) {
  const searchParams = useSearchParams();
  const etapaParam = searchParams.get("etapa");
  const enviado = searchParams.get("enviado") === "1";
  const normalizedEtapa =
    etapaParam === "construido"
      ? t.stageBuilt
      : etapaParam === "desde-cero"
        ? t.stageNew
        : "";

  const [etapa, setEtapa] = useState(normalizedEtapa);
  // _next debe ser una URL absoluta; se resuelve en el cliente para funcionar
  // igual en el dominio de Vercel y en el dominio final (mantiene el idioma).
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    if (normalizedEtapa) setEtapa(normalizedEtapa);
  }, [normalizedEtapa]);

  useEffect(() => {
    setNextUrl(`${window.location.origin}${window.location.pathname}?enviado=1`);
  }, []);

  if (enviado) {
    return (
      <div className="border border-stone/40 p-10" role="status">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-earth">
          {t.sentTitle}
        </p>
        <p className="mt-4 text-lg font-light leading-[1.7] text-ink">{t.sentText}</p>
      </div>
    );
  }

  return (
    <form
      action={`https://formsubmit.co/${siteConfig.email}`}
      method="POST"
      onSubmit={(e) => logToSheet(e.currentTarget)}
      className="space-y-9"
    >
      {/* Configuración de FormSubmit */}
      <input type="hidden" name="_subject" value={t.subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {nextUrl && <input type="hidden" name="_next" value={nextUrl} />}

      <div>
        <label htmlFor="nombre" className={fieldLabel}>
          {t.name}
        </label>
        <input
          id="nombre"
          name="Nombre"
          type="text"
          required
          autoComplete="name"
          className={fieldInput}
        />
      </div>

      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label htmlFor="correo" className={fieldLabel}>
            {t.email}
          </label>
          <input
            id="correo"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldInput}
          />
        </div>
        <div>
          <label htmlFor="telefono" className={fieldLabel}>
            {t.phone}
          </label>
          <input
            id="telefono"
            name="Telefono"
            type="tel"
            autoComplete="tel"
            className={fieldInput}
          />
        </div>
      </div>

      <div>
        <label htmlFor="etapa" className={fieldLabel}>
          {t.stage}
        </label>
        <select
          id="etapa"
          name="Etapa del proyecto"
          required
          value={etapa}
          onChange={(e) => setEtapa(e.target.value)}
          className={`${fieldInput} appearance-none`}
        >
          <option value="" disabled>
            {t.stagePlaceholder}
          </option>
          <option value={t.stageNew}>{t.stageNew}</option>
          <option value={t.stageBuilt}>{t.stageBuilt}</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className={fieldLabel}>
          {t.message}
        </label>
        <textarea
          id="mensaje"
          name="Mensaje"
          rows={5}
          required
          className={`${fieldInput} resize-y`}
        />
      </div>

      <button type="submit" className={buttonClasses("earth")}>
        {t.submit}
      </button>
    </form>
  );
}
