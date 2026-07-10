import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;

  const routes: { path: string; changeFrequency: "monthly" | "yearly"; priority: number }[] = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/proyecto-desde-cero", changeFrequency: "monthly", priority: 0.9 },
    { path: "/proyecto-ya-construido", changeFrequency: "monthly", priority: 0.9 },
    { path: "/estrategia", changeFrequency: "monthly", priority: 0.8 },
    { path: "/disciplinas", changeFrequency: "monthly", priority: 0.7 },
    { path: "/portafolio", changeFrequency: "monthly", priority: 0.8 },
    { path: "/equipo", changeFrequency: "yearly", priority: 0.4 },
    { path: "/contacto", changeFrequency: "yearly", priority: 0.7 },
    ...projects.map((p) => ({
      path: `/portafolio/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];

  return locales.flatMap((lang) =>
    routes.map((route) => ({
      url: `${base}/${lang}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: lang === "es" ? route.priority : route.priority * 0.9,
    })),
  );
}
