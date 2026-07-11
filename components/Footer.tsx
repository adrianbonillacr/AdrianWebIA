import Link from "next/link";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/site-config";
import type { Dictionary, Lang } from "@/lib/i18n";

const columnHeading =
  "text-[0.72rem] font-medium uppercase tracking-[0.28em] text-stone";
const footerLink =
  "text-sm font-light text-mist transition-colors duration-300 hover:text-white";

export default function Footer({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Logo variant="full" color="white" iconClassName="h-16 w-auto" className="text-[0.8rem]" />
          <p className="mt-6 max-w-[26ch] text-sm font-light leading-relaxed text-stone">
            {t.footer.descriptor}
          </p>
        </div>

        <nav aria-label={t.footer.servicesLabel}>
          <h2 className={columnHeading}>{t.footer.services}</h2>
          <ul className="mt-6 space-y-3">
            <li>
              <Link href={`/${lang}/proyecto-desde-cero`} className={footerLink}>
                {t.nav.newProject}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/proyecto-ya-construido`} className={footerLink}>
                {t.nav.builtProject}
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label={t.footer.studioLabel}>
          <h2 className={columnHeading}>{t.footer.studio}</h2>
          <ul className="mt-6 space-y-3">
            <li>
              <Link href={`/${lang}/disciplinas`} className={footerLink}>
                {t.nav.disciplines}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/portafolio`} className={footerLink}>
                {t.nav.portfolio}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/contacto`} className={footerLink}>
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={columnHeading}>{t.footer.contact}</h2>
          <ul className="mt-6 space-y-3">
            <li>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={footerLink}
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className={footerLink}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={footerLink}
              >
                {siteConfig.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone/20">
        <div className="container-site flex flex-col gap-2 py-6 text-[0.72rem] font-light uppercase tracking-[0.18em] text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.name}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
