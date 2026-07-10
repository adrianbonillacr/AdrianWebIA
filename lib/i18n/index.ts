import { es, type Dictionary } from "./es";
import { en } from "./en";
import type { Lang } from "./config";

const dictionaries: Record<Lang, Dictionary> = { es, en };

export function getDict(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export type { Dictionary };
export { locales, defaultLocale, isLang, switchLangPath, type Lang } from "./config";
