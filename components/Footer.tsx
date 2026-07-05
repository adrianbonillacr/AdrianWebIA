import Link from "next/link";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/site-config";

const columnHeading =
  "text-[0.72rem] font-medium uppercase tracking-[0.28em] text-stone";
const footerLink =
  "text-sm font-light text-mist transition-colors duration-300 hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Logo variant="full" className="text-[1.1rem]" />
          <p className="mt-6 max-w-[26ch] text-sm font-light leading-relaxed text-stone">
            {siteConfig.descriptor}
          </p>
        </div>

        <nav aria-label="Servicios">
          <h2 className={columnHeading}>Servicios</h2>
          <ul className="mt-6 space-y-3">
            <li>
              <Link href="/proyecto-desde-cero" className={footerLink}>
                Proyecto desde 0
              </Link>
            </li>
            <li>
              <Link href="/proyecto-ya-construido" className={footerLink}>
                Proyecto ya construido
              </Link>
            </li>
            <li>
              <Link href="/disciplinas" className={footerLink}>
                Disciplinas
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Estudio">
          <h2 className={columnHeading}>Estudio</h2>
          <ul className="mt-6 space-y-3">
            <li>
              <Link href="/estrategia" className={footerLink}>
                Estrategia 19.89
              </Link>
            </li>
            <li>
              <Link href="/portafolio" className={footerLink}>
                Portafolio
              </Link>
            </li>
            <li>
              <Link href="/contacto" className={footerLink}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={columnHeading}>Contacto</h2>
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
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
