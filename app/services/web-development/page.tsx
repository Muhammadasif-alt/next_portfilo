import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Code2, Layers, Triangle, Boxes, ArrowRight, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { Button } from "@/components/ui/button";

const PHONE_WA = "923088663440";

export const metadata: Metadata = {
  title: "Web Development by Asif — Sites That Rank, Convert & Load Fast",
  description:
    "Web development across WordPress, PHP, Laravel, Next.js, and the MERN stack — clean, SEO-ready sites and apps built to grow your business. Clear process and transparent pricing.",
};

const STATS = [
  { num: "120+", label: "Sites delivered" },
  { num: "<2s", label: "Avg load time" },
  { num: "5", label: "Tech stacks" },
  { num: "98%", label: "Client retention" },
];

type Svc = {
  slug: string;
  icon: LucideIcon;
  name: string;
  desc: string;
  tags: string[];
  timeline: string;
  featured?: boolean;
};

const SERVICES: Svc[] = [
  {
    slug: "wordpress",
    icon: Globe,
    name: "WordPress Development",
    desc: "Fast, SEO-ready sites with custom themes, WooCommerce, and page builders — no bloat, no drag.",
    tags: ["Custom theme", "WooCommerce", "SEO optimized", "Page speed"],
    timeline: "2–4 weeks",
    featured: true,
  },
  {
    slug: "php",
    icon: Code2,
    name: "PHP Development",
    desc: "Custom PHP backends and web applications built for performance and easy maintenance.",
    tags: ["Custom backend", "REST API", "MySQL"],
    timeline: "3–6 weeks",
  },
  {
    slug: "laravel",
    icon: Layers,
    name: "Laravel Development",
    desc: "Scalable web applications with clean architecture — portals, dashboards, SaaS tools.",
    tags: ["MVC", "Eloquent ORM", "API first"],
    timeline: "4–8 weeks",
  },
  {
    slug: "nextjs",
    icon: Triangle,
    name: "Next.js Development",
    desc: "Blazing-fast React apps with SSR and SSG — ideal for SEO-heavy or content-rich sites.",
    tags: ["SSR / SSG", "React", "Vercel deploy"],
    timeline: "3–6 weeks",
  },
  {
    slug: "mern-stack",
    icon: Boxes,
    name: "MERN Stack Development",
    desc: "Full-stack JS apps using MongoDB, Express, React, and Node — end to end, one team.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    timeline: "6–12 weeks",
  },
];

const PROCESS = [
  { num: "Step 01", title: "Discovery call", desc: "I understand your goals, audience, and timeline before writing a single line of code." },
  { num: "Step 02", title: "Proposal & scope", desc: "You get a clear document — deliverables, timeline, and price. No surprises later." },
  { num: "Step 03", title: "Design & build", desc: "I build in sprints with regular checkpoints so you see progress, not just a final reveal." },
  { num: "Step 04", title: "Launch & handoff", desc: "I deploy, test, and hand over everything — logins, docs, and training if needed." },
];

const TECH = [
  "WordPress", "PHP 8", "Laravel 11", "Next.js 16", "React 19", "Node.js",
  "MongoDB", "MySQL", "Tailwind CSS", "Vercel", "Cloudflare", "Git / GitHub",
];

type Pkg = {
  name: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PACKAGES: Pkg[] = [
  {
    name: "Starter",
    price: "$499",
    unit: "one-time",
    desc: "For small businesses that need a clean, fast site up quickly.",
    features: ["WordPress site, up to 5 pages", "Mobile responsive", "Basic SEO setup", "Contact form", "1 revision round"],
    cta: "Get started",
  },
  {
    name: "Growth",
    price: "$999",
    unit: "one-time",
    desc: "For businesses that want a professional site that generates leads.",
    features: ["Custom WordPress theme", "Up to 12 pages", "Full SEO optimization", "Speed optimization", "Analytics setup", "3 revision rounds"],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Custom",
    price: "Custom",
    unit: "quote",
    desc: "Laravel, MERN, Next.js, or anything complex — I scope it properly.",
    features: ["Any tech stack", "Full-stack development", "API integrations", "Custom admin panel", "Dedicated point of contact"],
    cta: "Talk to me",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]" />
          <div className="relative mx-auto max-w-3xl px-6 pt-32 pb-16 text-center lg:pt-40">
            <nav className="flex items-center justify-center gap-2 font-mono text-xs text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <span className="text-muted-foreground/50">›</span>
              <Link href="/services" className="transition-colors hover:text-foreground">Services</Link>
              <span className="text-muted-foreground/50">›</span>
              <span className="text-brand">Web Development</span>
            </nav>

            <span className="mt-6 inline-block rounded-full border border-brand/25 bg-brand/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-brand">
              Web Development
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
              Websites that <span className="text-brand">rank, convert,</span> and load fast
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              From simple WordPress sites to complex full-stack applications — I build clean,
              SEO-ready websites that actually grow your business.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Start a project <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-transparent text-foreground hover:bg-accent hover:text-foreground">
                <Link href="/projects">See my work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-5xl grid-cols-2 px-6 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-7 text-center ${i < STATS.length - 1 ? "sm:border-r sm:border-border" : ""}`}
              >
                <div className="text-3xl font-extrabold tracking-tight text-brand">{s.num}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">What I build</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            5 web technologies, one developer
          </h2>
          <p className="mt-2 text-muted-foreground">
            I pick the right tool for your project — not the one I&apos;m most comfortable with.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`group relative flex flex-col rounded-2xl border p-6 transition-colors ${
                    s.featured
                      ? "border-brand/40 bg-brand/[0.07]"
                      : "border-border bg-card/50 hover:border-brand/40"
                  }`}
                >
                  {s.featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
                      Most popular
                    </span>
                  )}
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-lg border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">
                      Timeline: <span className="text-foreground/80">{s.timeline}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">How I work</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              From brief to live in 4 steps
            </h2>
            <p className="mt-2 text-muted-foreground">No long back-and-forths. I move fast and keep you in the loop.</p>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((p) => (
                <div key={p.num} className="bg-card/50 p-6">
                  <div className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-brand">{p.num}</div>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">Tech stack</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Tools I use every day
            </h2>
            <p className="mt-2 text-muted-foreground">No outdated tech — just proven tools that work at scale.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {TECH.map((t) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">Pricing</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Simple, transparent packages
            </h2>
            <p className="mt-2 text-muted-foreground">Starting prices — final quote depends on scope. No hidden fees.</p>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {PACKAGES.map((p) => (
                <div
                  key={p.name}
                  className={`flex flex-col rounded-2xl border p-7 ${
                    p.featured ? "border-brand/50 bg-brand/[0.07]" : "border-border bg-card/50"
                  }`}
                >
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
                  <Button
                    asChild
                    className={`mt-6 w-full rounded-lg ${p.featured ? "" : "bg-transparent border border-border text-foreground hover:bg-accent"}`}
                    variant={p.featured ? "default" : "outline"}
                  >
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
                Ready to build something great?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Free consultation — I&apos;ll tell you exactly what your project needs and how long
                it&apos;ll take.
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
      <Footer />
    </>
  );
}
