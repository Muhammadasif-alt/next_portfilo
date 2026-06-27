import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HireHeader } from "@/components/portfolio/hire-header";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { Button } from "@/components/ui/button";

const PHONE_WA = "923088663440";

export const metadata: Metadata = {
  title: "Marketing & SEO by Asif — Get Found, Get Leads, Get Revenue",
  description:
    "Digital marketing — SEO, Meta ads, and social media management that brings consistent leads. Free SEO audit, transparent monthly retainers, and real results.",
};

const STATS = [
  { num: "3.2x", label: "Avg lead increase" },
  { num: "60+", label: "Campaigns managed" },
  { num: "Top 3", label: "Avg Google ranking" },
  { num: "PK/CA/AE", label: "Markets served" },
];

type Result = { label: string; num: string; sub: string };
type SvcBlock = {
  tag: string;
  title: string;
  desc: string;
  includes: string[];
  link: { label: string; href: string };
  results: Result[];
  highlight?: boolean;
};

const SERVICES: SvcBlock[] = [
  {
    tag: "SEO Optimization",
    title: "Rank on Google — local and national",
    desc: "I handle technical SEO, on-page optimization, Google Business Profile, and local citations. Built for businesses that want real organic traffic — not just rankings.",
    includes: [
      "Full technical SEO audit",
      "On-page optimization (all pages)",
      "Google Business Profile setup & management",
      "Local citation building (directories, NAP)",
      "Monthly ranking reports",
      "Schema markup (LocalBusiness, FAQ)",
    ],
    link: { label: "Learn more about SEO", href: "/contact" },
    results: [
      { label: "Typical result — 90 days", num: "+180%", sub: "Organic traffic increase" },
      { label: "Local pack ranking", num: "Top 3", sub: "For primary keywords" },
      { label: "Timeline to results", num: "60–90 days", sub: "First visible improvements" },
    ],
    highlight: true,
  },
  {
    tag: "Meta Ads",
    title: "Facebook & Instagram ads that generate leads",
    desc: "Full campaign management — from creative strategy and ad copy to pixel setup, audience targeting, and optimization. I've run ads for real estate, e-commerce, and service businesses across Pakistan, UAE, and North America.",
    includes: [
      "Audience research & targeting",
      "Ad creative (copy + design brief)",
      "Meta Pixel & conversion tracking setup",
      "A/B testing on creatives and audiences",
      "WhatsApp and Instant Form integration",
      "Weekly performance reporting",
    ],
    link: { label: "Ask about Meta Ads", href: "/contact" },
    results: [
      { label: "Cost per lead (avg)", num: "$4–12", sub: "Depending on industry" },
      { label: "ROAS achieved", num: "3.5–6x", sub: "E-commerce campaigns" },
      { label: "Campaign launch", num: "5–7 days", sub: "From brief to live" },
    ],
  },
  {
    tag: "Social Media Management",
    title: "Consistent content that builds your brand",
    desc: "Monthly content calendars, designed posts, captions, and scheduling — I manage Instagram, Facebook, LinkedIn, and TikTok so your brand shows up consistently without you lifting a finger.",
    includes: [
      "Monthly content calendar",
      "12–20 posts per month",
      "Custom graphics and caption writing",
      "Stories and reels scripts",
      "Scheduling and publishing",
      "Monthly engagement report",
    ],
    link: { label: "Ask about Social Media", href: "/contact" },
    results: [
      { label: "Posts per month", num: "12–20", sub: "Across all platforms" },
      { label: "Avg follower growth", num: "+25%", sub: "First 3 months" },
      { label: "Platforms covered", num: "4", sub: "IG, FB, LinkedIn, TikTok" },
    ],
  },
];

const TIMELINE = [
  { week: "Week 1–2", title: "Full audit & quick wins", desc: "Technical SEO audit, competitor analysis, keyword research. I fix any critical issues immediately." },
  { week: "Week 3–4", title: "On-page optimization", desc: "Titles, meta descriptions, headings, internal linking, schema markup — all optimized to your target keywords." },
  { week: "Month 2", title: "Content & local presence", desc: "GBP optimization, citation building, 2–4 new SEO blog posts targeting long-tail keywords." },
  { week: "Month 3", title: "Authority building", desc: "Backlink outreach, content updates based on ranking data, reporting and next sprint planning." },
];

type Pkg = { name: string; price: string; unit: string; desc: string; features: string[]; cta: string; featured?: boolean };

const PACKAGES: Pkg[] = [
  {
    name: "SEO Starter",
    price: "$299",
    unit: "/ month",
    desc: "For businesses just starting with SEO and local visibility.",
    features: ["Technical SEO audit", "On-page optimization (10 pages)", "GBP management", "2 blog posts/month", "Monthly report"],
    cta: "Get started",
  },
  {
    name: "Growth Bundle",
    price: "$599",
    unit: "/ month",
    desc: "SEO + Meta Ads together for maximum lead generation.",
    features: ["Full SEO management", "Meta ads (up to $1000 ad spend)", "Social media (12 posts/month)", "Monthly strategy call", "Weekly reporting", "WhatsApp direct access"],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Full Marketing",
    price: "Custom",
    unit: "/ month",
    desc: "Full-service for businesses that want me as their in-house marketing team.",
    features: ["Everything in Growth Bundle", "No ad spend cap", "Dedicated point of contact", "Content writing (blogs + web copy)", "Competitor monitoring"],
    cta: "Talk to me",
  },
];

export default function MarketingPage() {
  return (
    <>
      <HireHeader />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]" />
          <div className="relative mx-auto max-w-3xl px-6 pt-20 pb-16 text-center lg:pt-24">
            <nav className="flex items-center justify-center gap-2 font-mono text-xs text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <span className="text-muted-foreground/50">›</span>
              <Link href="/services" className="transition-colors hover:text-foreground">Services</Link>
              <span className="text-muted-foreground/50">›</span>
              <span className="text-brand">Marketing &amp; SEO</span>
            </nav>

            <span className="mt-6 inline-block rounded-full border border-brand/25 bg-brand/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-brand">
              Digital Marketing
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
              Get found on Google.
              <br />
              <span className="text-brand">Get leads. Get revenue.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              SEO, Meta ads, and social media — I run the full marketing stack so your business grows
              while you focus on delivery.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Get a free audit <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-transparent text-foreground hover:bg-accent hover:text-foreground">
                <Link href="/contact">View case studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-5xl grid-cols-2 px-6 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} className={`px-4 py-7 text-center ${i < STATS.length - 1 ? "sm:border-r sm:border-border" : ""}`}>
                <div className="text-3xl font-extrabold tracking-tight text-brand">{s.num}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">What I do</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Three services, one goal — more customers
          </h2>
          <p className="mt-2 text-muted-foreground">
            I don&apos;t just run campaigns. I build systems that bring in consistent leads month
            after month.
          </p>

          <div className="mt-10 space-y-5">
            {SERVICES.map((s) => (
              <div key={s.tag} className="grid overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
                {/* info */}
                <div className={`p-7 sm:p-8 ${s.highlight ? "bg-brand/[0.07]" : "bg-card/50"}`}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">{s.tag}</div>
                  <h3 className="mt-1.5 text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <span className="mt-0.5 font-bold text-brand">✓</span>
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.link.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-all hover:gap-2.5">
                    {s.link.label} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                {/* aside results */}
                <div className="flex flex-col gap-3 border-t border-border bg-muted/30 p-7 sm:border-l sm:border-t-0 sm:p-8">
                  {s.results.map((r) => (
                    <div key={r.label} className="rounded-xl border border-brand/20 bg-brand/10 p-4">
                      <div className="text-xs text-muted-foreground">{r.label}</div>
                      <div className="mt-1 text-2xl font-extrabold text-brand">{r.num}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{r.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">SEO Sprint — how it works</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              What happens in the first 90 days
            </h2>
            <p className="mt-2 text-muted-foreground">SEO is a process, not a one-time fix. Here&apos;s how I structure the first sprint.</p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              {TIMELINE.map((t, i) => (
                <div key={t.week} className={`flex flex-col gap-1.5 bg-card/50 p-6 sm:flex-row sm:gap-6 ${i < TIMELINE.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="shrink-0 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brand sm:w-24 sm:pt-0.5">{t.week}</div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
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
              Marketing retainer packages
            </h2>
            <p className="mt-2 text-muted-foreground">Monthly plans — cancel anytime after the first 3 months. USD and PKR pricing available.</p>

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
                Get a free SEO audit — no strings attached
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                I&apos;ll review your site, check your Google rankings, and show you exactly
                what&apos;s holding you back.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">Request free audit <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
