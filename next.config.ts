import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // URLs antiguas (sin prefijo de idioma) → español por defecto
    const paths = [
      "proyecto-desde-cero",
      "proyecto-ya-construido",
      "disciplinas",
      "equipo",
      "contacto",
      "portafolio",
    ];
    return [
      ...paths.map((p) => ({
        source: `/${p}`,
        destination: `/es/${p}`,
        permanent: true,
      })),
      {
        source: "/portafolio/:slug",
        destination: "/es/portafolio/:slug",
        permanent: true,
      },
      // Estrategia dejó de ser página propia: ahora vive en el inicio
      { source: "/estrategia", destination: "/es", permanent: true },
      { source: "/es/estrategia", destination: "/es", permanent: true },
      { source: "/en/estrategia", destination: "/en", permanent: true },
    ];
  },
};

export default nextConfig;
