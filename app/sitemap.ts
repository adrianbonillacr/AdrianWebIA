import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/proyecto-desde-cero`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/proyecto-ya-construido`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portafolio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/equipo`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contacto`, changeFrequency: "yearly", priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${base}/portafolio/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes];
}
