export const locales = ["es", "en"] as const;

export type Lang = (typeof locales)[number];

export const defaultLocale: Lang = "es";

export function isLang(value: string): value is Lang {
  return (locales as readonly string[]).includes(value);
}

/** Cambia el prefijo de idioma de una ruta (/es/contacto -> /en/contacto). */
export function switchLangPath(pathname: string, lang: Lang): string {
  const parts = pathname.split("/");
  // parts[0] es "" (la ruta empieza con /); parts[1] es el idioma actual
  parts[1] = lang;
  return parts.join("/") || `/${lang}`;
}
