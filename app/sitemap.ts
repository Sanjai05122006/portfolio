import type { MetadataRoute } from "next";

import { getProjectSlugs } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sanjaiapp.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-15");
  const staticRoutes = ["", "/about", "/contact", "/projects", "/stack"];
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));

  const projectEntries = getProjectSlugs().map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified,
  }));

  return [...staticEntries, ...projectEntries];
}
