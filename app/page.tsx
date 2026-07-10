import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";

// La raíz redirige al idioma por defecto. El contenido vive en /[lang].
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
