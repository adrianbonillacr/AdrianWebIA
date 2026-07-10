"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/i18n";

/** Ajusta el atributo lang del documento según la ruta activa. */
export default function SetHtmlLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
