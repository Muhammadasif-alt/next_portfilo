import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { POSTS } from "@/lib/blog-data";
import { LOCATIONS } from "@/lib/locations-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; priority: number; freq: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/services/web-development", priority: 0.9, freq: "monthly" },
    { path: "/services/marketing", priority: 0.9, freq: "monthly" },
    { path: "/services/ecommerce", priority: 0.9, freq: "monthly" },
    { path: "/services/support-maintenance", priority: 0.9, freq: "monthly" },
    { path: "/projects", priority: 0.8, freq: "weekly" },
    { path: "/about", priority: 0.7, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/contact", priority: 0.6, freq: "yearly" },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...LOCATIONS.map((l) => ({
      url: `${SITE_URL}/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.dateISO),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
