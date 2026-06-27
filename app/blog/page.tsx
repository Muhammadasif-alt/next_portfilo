import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";

export const metadata: Metadata = {
  title: "Blog — Web Development Tips by Asif",
  description:
    "Articles on web development, SEO, speed optimisation, WordPress, Shopify, and Next.js — practical tips to build faster, better-ranking websites.",
};

type Post = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  read: string;
  img: string;
};

const POSTS: Post[] = [
  {
    title: "10 ways to make your WordPress site load in under a second",
    excerpt: "Caching, image optimisation, and the plugins that are secretly slowing you down — a practical speed checklist.",
    category: "Performance",
    date: "Jun 2026",
    read: "6 min read",
    img: "https://picsum.photos/seed/asif-blog-1/800/500",
  },
  {
    title: "Shopify vs WooCommerce: which should you actually choose?",
    excerpt: "An honest comparison for store owners — cost, control, SEO, and scaling — with no platform bias.",
    category: "E-commerce",
    date: "Jun 2026",
    read: "8 min read",
    img: "https://picsum.photos/seed/asif-blog-2/800/500",
  },
  {
    title: "The technical SEO checklist every new website needs",
    excerpt: "Sitemaps, schema, Core Web Vitals, and the on-page basics that get you indexed and ranking faster.",
    category: "SEO",
    date: "May 2026",
    read: "7 min read",
    img: "https://picsum.photos/seed/asif-blog-3/800/500",
  },
  {
    title: "Why I build with Next.js (and when I don't)",
    excerpt: "Server rendering, SEO, and speed — the real-world trade-offs of the modern React framework.",
    category: "Next.js",
    date: "May 2026",
    read: "5 min read",
    img: "https://picsum.photos/seed/asif-blog-4/800/500",
  },
  {
    title: "Fixing the most common contact-form problems",
    excerpt: "Why your form emails go to spam — and how proper SMTP, SPF, and DKIM keep your leads landing in the inbox.",
    category: "Development",
    date: "Apr 2026",
    read: "6 min read",
    img: "https://picsum.photos/seed/asif-blog-5/800/500",
  },
  {
    title: "Core Web Vitals explained for non-developers",
    excerpt: "LCP, CLS, INP — what Google's speed metrics mean, why they affect rankings, and how to pass them.",
    category: "Performance",
    date: "Apr 2026",
    read: "9 min read",
    img: "https://picsum.photos/seed/asif-blog-6/800/500",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 pt-32 pb-14 lg:pt-40">
            <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              Blog
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Notes on building faster, better websites
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Practical articles on web development, SEO, and performance — what I learn building
              real projects.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {POSTS.map((p) => (
                <Link
                  key={p.title}
                  href="#"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors hover:border-brand/50"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                      <span className="text-brand">{p.category}</span>
                      <span>•</span>
                      <span>{p.date}</span>
                      <span>•</span>
                      <span>{p.read}</span>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold leading-snug text-foreground">{p.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <p className="mt-12 text-center text-sm text-muted-foreground">
              More articles coming soon — check back regularly.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
