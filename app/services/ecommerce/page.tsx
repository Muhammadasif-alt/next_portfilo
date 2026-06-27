import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  Palette,
  Zap,
  Smartphone,
  BarChart3,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { Button } from "@/components/ui/button";

const PHONE_WA = "923088663440";

export const metadata: Metadata = {
  title: "E-commerce & Automation by Asif — Shopify Stores & Python Scripts",
  description:
    "High-converting Shopify stores and custom Python automation scripts — payment integrations, CRO, web scraping, lead generation, and report automation. Fixed pricing, fast delivery.",
};

const STATS = [
  { num: "40+", label: "Stores launched" },
  { num: "2.8x", label: "Avg conversion lift" },
  { num: "HBL/Stripe", label: "Payment gateways" },
  { num: "48hr", label: "Automation delivery" },
];

type Block = {
  tag: string;
  title: string;
  desc: string;
  features: string[];
  link: { label: string; href: string };
  timelineLabel: string;
  timeline: string;
  accent?: boolean;
};

const BLOCKS: Block[] = [
  {
    tag: "Shopify Development",
    title: "High-converting Shopify stores",
    desc: "I build clean, fast Shopify stores with custom Liquid sections, payment integrations (HBL, Stripe, Apple Pay), and conversion-focused design. Fully optimised for mobile and Google.",
    features: [
      "Custom Liquid theme development",
      "HBL, Stripe, Apple Pay setup",
      "Product page CRO optimization",
      "Mobile-first design",
      "Speed optimization (Core Web Vitals)",
      "Google Shopping feed setup",
      "Abandoned cart flows",
    ],
    link: { label: "Full Shopify details", href: "/contact" },
    timelineLabel: "Timeline:",
    timeline: "2–4 weeks depending on scope",
    accent: true,
  },
  {
    tag: "Python Development & Automation",
    title: "Automation scripts that save hours",
    desc: "Custom Python scripts for data scraping, lead generation, report automation, image processing, API integrations, and business workflows. Built clean, documented, and ready to run.",
    features: [
      "Web scraping & data extraction",
      "Lead generation tools (Google Places API)",
      "Automated PDF/Excel reporting",
      "Image processing pipelines",
      "API integrations (any platform)",
      "Scheduled task automation",
      "Data cleaning & transformation",
    ],
    link: { label: "Python development details", href: "/contact" },
    timelineLabel: "Timeline:",
    timeline: "48hr – 1 week per script",
  },
];

type Feat = { icon: LucideIcon; title: string; desc: string };
const SHOPIFY_FEATURES: Feat[] = [
  { icon: CreditCard, title: "Payment integrations", desc: "HBL Pay, Stripe, Apple Pay, EasyPaisa — setup and troubleshooting included." },
  { icon: Palette, title: "Custom Liquid sections", desc: "Custom theme sections that match your brand — no generic templates." },
  { icon: Zap, title: "Speed optimization", desc: "Image compression, lazy loading, script deferral for sub-2s load times." },
  { icon: Smartphone, title: "Mobile-first build", desc: "60%+ of e-commerce traffic is mobile — I design for thumbs, not mice." },
  { icon: BarChart3, title: "Analytics & pixels", desc: "GA4, Meta Pixel, and TikTok Pixel setup with conversion event tracking." },
  { icon: Plug, title: "App integrations", desc: "Klaviyo, Loox, Judge.me, ReConvert — the apps that actually move revenue." },
];

const USE_CASES = [
  { num: "01", title: "Lead generation tool", desc: "Google Places API scraper that finds business leads by industry and location, checks their PageSpeed score, and exports a ranked outreach list." },
  { num: "02", title: "SEO report generator", desc: "Automated PDF report builder that pulls data, applies branding, and generates client-ready SEO reports in seconds instead of hours." },
  { num: "03", title: "Image processing pipeline", desc: "Background removal, sky replacement, and transparent PNG generation using OpenCV — built for e-commerce product photography workflows." },
  { num: "04", title: "Data scraping & export", desc: "Playwright-based scrapers that extract structured data from any website and export clean Excel or JSON files — ready for analysis." },
];

type Pkg = { name: string; price: string; unit: string; desc: string; features: string[]; cta: string; featured?: boolean };
const PACKAGES: Pkg[] = [
  {
    name: "Shopify Starter",
    price: "$599",
    unit: "one-time",
    desc: "Simple product store — up to 50 products, clean design, payment setup.",
    features: ["Theme customization", "Up to 50 products setup", "Payment gateway integration", "Mobile optimization", "Basic SEO setup"],
    cta: "Get started",
  },
  {
    name: "Shopify Pro",
    price: "$1,299",
    unit: "one-time",
    desc: "Full custom build with CRO, speed optimization, and all integrations.",
    features: ["Custom Liquid sections", "Unlimited products", "All payment gateways", "Speed optimization (CWV pass)", "Analytics & pixel setup", "3 app integrations"],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Automation Script",
    price: "From $99",
    unit: "per script",
    desc: "Custom Python scripts — priced by complexity, delivered in 48 hours to 1 week.",
    features: ["Fully custom to your workflow", "Clean, documented code", "Setup and testing included", "30-day bug fix guarantee", "Optional maintenance plan"],
    cta: "Describe your need",
  },
];

export default function EcommercePage() {
  return (
    <>
      <HireHero small="Service" title="E-commerce" taglineTitle="Stores that sell." taglineText="Shopify and WooCommerce builds plus automation that runs your store for you." />
      <main>
        {/* STATS */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-5xl grid-cols-2 px-6 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} className={`px-4 py-7 text-center ${i < STATS.length - 1 ? "sm:border-r sm:border-border" : ""}`}>
                <div className="text-2xl font-extrabold tracking-tight text-brand sm:text-3xl">{s.num}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES SPLIT */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">Two services</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Shopify stores + Python automation
          </h2>
          <p className="mt-2 text-muted-foreground">
            Two different problems, one developer. I build stores that sell and scripts that save time.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {BLOCKS.map((b) => (
              <div key={b.tag} className={`flex flex-col rounded-2xl border p-7 sm:p-8 ${b.accent ? "border-brand/40 bg-brand/[0.07]" : "border-border bg-card/50"}`}>
                <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-brand">{b.tag}</div>
                <h3 className="mt-1.5 text-xl font-bold text-foreground">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {b.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="mt-0.5 font-bold text-brand">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={b.link.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-all hover:gap-2.5">
                  {b.link.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <div className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                  {b.timelineLabel} <span className="text-foreground/80">{b.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SHOPIFY FEATURES */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">Shopify capabilities</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Everything a Shopify store needs
            </h2>
            <p className="mt-2 text-muted-foreground">
              From basic product stores to full Liquid section development and payment troubleshooting.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SHOPIFY_FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="rounded-2xl border border-border bg-card/50 p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-foreground">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AUTOMATION USE CASES */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">Automation examples</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              What I&apos;ve built with Python
            </h2>
            <p className="mt-2 text-muted-foreground">Real automation tools for real business problems — not generic scripts.</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {USE_CASES.map((u) => (
                <div key={u.num} className="flex gap-4 rounded-2xl border border-border bg-card/50 p-6">
                  <div className="font-mono text-2xl font-bold text-brand/40">{u.num}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{u.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{u.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">Pricing</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Shopify &amp; automation pricing
            </h2>
            <p className="mt-2 text-muted-foreground">Fixed price for defined scope. I quote before I start — no hourly surprises.</p>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {PACKAGES.map((p) => (
                <div key={p.name} className={`flex flex-col rounded-2xl border p-7 ${p.featured ? "border-brand/50 bg-brand/[0.07]" : "border-border bg-card/50"}`}>
                  {p.featured && (
                    <span className="mb-4 inline-block w-fit rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                  <div className="mt-1 flex items-end gap-1.5">
                    <span className="text-3xl font-extrabold tracking-tight text-brand">{p.price}</span>
                    <span className="pb-1 text-sm text-muted-foreground">{p.unit}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <span className="mt-0.5 font-bold text-brand">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full rounded-lg" variant={p.featured ? "default" : "outline"}>
                    <Link href="/contact">{p.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <div className="rounded-3xl border border-border bg-card/50 p-10 text-center sm:p-14">
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Have a store or workflow in mind?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Tell me what you need — I&apos;ll scope it, price it, and deliver it on time.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">Start a project <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-transparent text-foreground hover:bg-accent hover:text-foreground">
                  <a href={`https://wa.me/${PHONE_WA}`} target="_blank" rel="noopener noreferrer">WhatsApp me</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <HireFooter />
    </>
  );
}
