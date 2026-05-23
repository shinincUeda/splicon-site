import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";

const SITE = "https://split-icon.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostsMeta().map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: p.date || new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: SITE, lastModified: new Date().toISOString(), priority: 1 },
    { url: `${SITE}/blog`, lastModified: new Date().toISOString(), priority: 0.8 },
    ...posts,
  ];
}
