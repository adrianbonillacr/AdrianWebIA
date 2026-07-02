"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/proyecto-desde-cero", label: "Proyecto desde 0" },
  { href: "/proyecto-ya-construido", label: "Proyecto ya construido" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/equipo", label: "Equipo" },
  { href: "/contacto", label: "Contacto" },
];

// Rutas cuyo hero es oscuro: la navbar arranca transparente con texto blanco.
const darkHeroRoutes = [
  "/",
  "/proyecto-desde-cero",
  "/proyecto-ya-construido",
  "/portafolio",
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const hasDarkHero =
    darkHeroRoutes.includes(pathname) || pathname.startsWith("/portafolio/");
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
          href="/"
          className="transition-opacity duration-300 hover:opacity-70"
          aria-label="19°89° Arquitectura — Inicio"
        >
          <Logo variant="mark" className="text-[1.05rem]" />
        </Link>

        {/* Navegación de escritorio */}
        <nav aria-label="Principal" className="hidden items-center gap-8 min-[920px]:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className="group relative py-1 text-[0.72rem] font-normal uppercase tracking-[0.18em]"
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

        <div className="hidden min-[920px]:block">
          <Link
            href={siteConfig.calendarUrl}
            className="inline-block bg-earth px-5 py-2.5 text-[0.72rem] font-normal uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-earth-dark"
          >
            Agendar reunión
          </Link>
        </div>

        {/* Hamburguesa mobile */}
        <button
          ref={burgerRef}
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menú"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 min-[920px]:hidden"
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
          aria-label="Menú de navegación"
          className="fixed inset-0 z-50 flex h-dvh flex-col bg-ink text-white"
        >
          <div className="container-site flex h-20 items-center justify-between">
            <Logo variant="mark" className="text-[1.05rem]" />
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Cerrar menú"
              className="flex h-10 w-10 items-center justify-center text-2xl font-light"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav
            aria-label="Principal"
            className="container-site flex flex-1 flex-col justify-center gap-7"
          >
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`text-[1.35rem] font-light uppercase tracking-[0.24em] transition-colors duration-300 ${
                    active ? "text-earth" : "text-white hover:text-stone"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={siteConfig.calendarUrl}
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-block w-fit bg-earth px-8 py-4 text-[0.8rem] font-normal uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-earth-dark"
            >
              Agendar reunión
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
