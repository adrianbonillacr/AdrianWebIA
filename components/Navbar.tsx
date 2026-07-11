"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { locales, switchLangPath, type Lang, type Dictionary } from "@/lib/i18n";

type NavDict = Dictionary["nav"];

// Rutas (sin prefijo de idioma) cuyo hero es oscuro: navbar transparente.
const darkHeroRoutes = [
  "/",
  "/proyecto-desde-cero",
  "/proyecto-ya-construido",
  "/portafolio",
];

function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar({ lang, t }: { lang: Lang; t: NavDict }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { href: `/${lang}`, label: t.home },
    { href: `/${lang}/proyecto-desde-cero`, label: t.newProject },
    { href: `/${lang}/proyecto-ya-construido`, label: t.builtProject },
    { href: `/${lang}/disciplinas`, label: t.disciplines },
    { href: `/${lang}/portafolio`, label: t.portfolio },
    { href: `/${lang}/contacto`, label: t.contact },
  ];

  // Ruta sin el prefijo de idioma, para decidir el estilo del hero
  const bare = "/" + pathname.split("/").slice(2).join("/");
  const hasDarkHero =
    darkHeroRoutes.includes(bare) || bare.startsWith("/portafolio/");
  const solid = scrolled || !hasDarkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú al navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    burgerRef.current?.focus();
  }, []);

  // Menú mobile: bloquear scroll, foco inicial, focus trap y cierre con Escape
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";

    const menu = menuRef.current;
    const focusables = () =>
      Array.from(
        menu?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ??
          [],
      );
    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  const textColor = solid ? "text-ink" : "text-white";

  // Si el link apunta a la página actual, Next no navega: subimos al tope.
  const scrollTopIfSameRoute =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === href) {
        e.preventDefault();
        window.scrollTo({ top: 0 });
      }
    };

  const LangSwitch = ({ className }: { className?: string }) => (
    <div
      aria-label={t.langSwitchLabel}
      className={`flex items-center gap-2 text-[0.66rem] font-normal uppercase tracking-[0.15em] ${className ?? ""}`}
    >
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
          <Link
            href={switchLangPath(pathname, locale)}
            aria-current={locale === lang ? "true" : undefined}
            className={`transition-opacity duration-300 ${
              locale === lang ? "underline underline-offset-4 decoration-earth" : "opacity-60 hover:opacity-100"
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid
          ? "border-b border-ink/10 bg-white/92 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className={`container-site flex h-20 items-center justify-between ${textColor}`}>
        <Link
          href={`/${lang}`}
          onClick={scrollTopIfSameRoute(`/${lang}`)}
          className="transition-opacity duration-300 hover:opacity-70"
          aria-label={t.logoAria}
        >
          <Logo variant="mark" color={solid ? "ink" : "white"} iconClassName="h-9 w-auto" />
        </Link>

        {/* Navegación de escritorio */}
        <nav aria-label={t.mainNavLabel} className="hidden items-center gap-6 min-[1200px]:flex">
          {navLinks.map((link) => {
            const active =
              link.href === `/${lang}`
                ? pathname === `/${lang}`
                : isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={scrollTopIfSameRoute(link.href)}
                aria-current={active ? "page" : undefined}
                className="group relative py-1 text-[0.66rem] font-normal uppercase tracking-[0.15em]"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-earth transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 min-[1200px]:flex">
          <LangSwitch />
          <Link
            href={`/${lang}/contacto`}
            className="inline-block bg-earth px-5 py-2.5 text-[0.72rem] font-normal uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-earth-dark"
          >
            {t.cta}
          </Link>
        </div>

        {/* Hamburguesa mobile */}
        <button
          ref={burgerRef}
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={t.openMenu}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 min-[1200px]:hidden"
        >
          <span aria-hidden="true" className="block h-px w-6 bg-current" />
          <span aria-hidden="true" className="block h-px w-6 bg-current" />
          <span aria-hidden="true" className="block h-px w-6 bg-current" />
        </button>
      </div>

      {/* Menú mobile fullscreen */}
      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.menuLabel}
          className="fixed inset-0 z-50 flex h-dvh flex-col bg-ink text-white"
        >
          <div className="container-site flex h-20 items-center justify-between">
            <Logo variant="mark" color="white" iconClassName="h-9 w-auto" />
            <button
              type="button"
              onClick={closeMenu}
              aria-label={t.closeMenu}
              className="flex h-10 w-10 items-center justify-center text-2xl font-light"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav
            aria-label={t.mainNavLabel}
            className="container-site flex flex-1 flex-col justify-center gap-6"
          >
            {navLinks.map((link) => {
              const active =
                link.href === `/${lang}`
                  ? pathname === `/${lang}`
                  : isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setMenuOpen(false);
                    scrollTopIfSameRoute(link.href)(e);
                  }}
                  aria-current={active ? "page" : undefined}
                  className={`text-[1.2rem] font-light uppercase tracking-[0.2em] transition-colors duration-300 ${
                    active ? "text-earth" : "text-white hover:text-stone"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <LangSwitch className="mt-4" />
            <Link
              href={`/${lang}/contacto`}
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-block w-fit bg-earth px-8 py-4 text-[0.8rem] font-normal uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-earth-dark"
            >
              {t.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
