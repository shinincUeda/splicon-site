import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";

const SITE = "https://split-icon.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const enPosts = getAllPostsMeta("en").map((p) => ({
    url: `${SITE}/en/blog/${p.slug}`,
    lastModified: p.date || new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const jaPosts = getAllPostsMeta("ja").map((p) => ({
    url: `${SITE}/ja/blog/${p.slug}`,
    lastModified: p.date || new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: SITE, lastModified: new Date().toISOString(), priority: 1 },
    { url: `${SITE}/en/blog`, lastModified: new Date().toISOString(), priority: 0.8 },
    ...enPosts,
    ...jaPosts,
  ];
}
