import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

// La fuente oficial de marca es Gilroy (licencia paga). Poppins queda como
// sustituta 1:1 vía la variable --font-poppins → --font-sans: cuando exista la
// licencia, cambiar esta carga por next/font/local sin tocar componentes.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.namePlain} | Arquitectura e inversión con valor — Costa Rica`,
    template: `%s | ${siteConfig.namePlain}`,
  },
  description:
    "Estudio de arquitectura e inversión inmobiliaria en Costa Rica. Desarrollamos, transformamos y posicionamos proyectos inmobiliarios con estrategia, diseño y visión de largo plazo.",
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: siteConfig.namePlain,
    url: siteConfig.domain,
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.namePlain,
  alternateName: siteConfig.name,
  description:
    "Estudio de arquitectura e inversión inmobiliaria en Costa Rica. Estrategia, diseño y visión de largo plazo para proyectos inmobiliarios.",
  url: siteConfig.domain,
  email: siteConfig.email,
  slogan: siteConfig.tagline,
  sameAs: [siteConfig.instagram],
  address: {
    "@type": "PostalAddress",
    addressCountry: "CR",
  },
  areaServed: "Costa Rica",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: el script inline agrega la clase "js" antes de
    // la hidratación (solo afecta atributos de <html>, no al contenido).
    <html lang="es" className={poppins.variable} suppressHydrationWarning>
      <body>
        {/* Marca html.js para que los reveals solo oculten contenido con JS activo */}
        <Script id="js-flag" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js')"}
        </Script>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-earth focus:px-5 focus:py-3 focus:text-[0.8rem] focus:uppercase focus:tracking-[0.14em] focus:text-white"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <CustomCursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
