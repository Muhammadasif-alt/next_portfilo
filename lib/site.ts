/**
 * Central site config. Set NEXT_PUBLIC_SITE_URL in Vercel once a custom
 * domain is connected; everything else (canonicals, sitemap, JSON-LD, OG)
 * follows from here.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://next-portfilo-wine.vercel.app"
).replace(/\/$/, "");

export const SITE = {
  url: SITE_URL,
  name: "Asif.dev",
  personName: "Rao Asif Riyasat",
  jobTitle: "Freelance Web Developer & SEO Specialist",
  email: "raoasifriyasat@gmail.com",
  phone: "+923088663440",
  description:
    "I build fast, SEO-ready websites and stores in WordPress, Shopify and Next.js that rank on Google and turn clicks into clients. Freelance, worldwide, replies in 24h.",
  ogImage: `${SITE_URL}/og.jpg`,
} as const;

export const abs = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
