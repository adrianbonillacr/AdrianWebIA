import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // URLs antiguas (sin prefijo de idioma) → español por defecto
    const paths = [
      "proyecto-desde-cero",
      "proyecto-ya-construido",
      "estrategia",
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
    ];
  },
};

export default nextConfig;
