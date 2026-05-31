import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";

const SITE = "https://www.splitview.net";

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
    { url: `${SITE}/en`, lastModified: new Date().toISOString(), priority: 1 },
    { url: `${SITE}/ja/guide`, lastModified: new Date().toISOString(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE}/ja/blog`, lastModified: new Date().toISOString(), priority: 0.8 },
    { url: `${SITE}/en/guide`, lastModified: new Date().toISOString(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE}/en/blog`, lastModified: new Date().toISOString(), priority: 0.8 },
    { url: `${SITE}/privacy-policy`, lastModified: new Date().toISOString(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${SITE}/privacy-policy-en`, lastModified: new Date().toISOString(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${SITE}/support`, lastModified: new Date().toISOString(), changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${SITE}/support-en`, lastModified: new Date().toISOString(), changeFrequency: "monthly" as const, priority: 0.4 },
    ...enPosts,
    ...jaPosts,
  ];
}
