import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Wrench, Mail, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { Button } from "@/components/ui/button";

const PHONE_WA = "923088663440";

export const metadata: Metadata = {
  title: "Support & Maintenance by Asif — Always Fast, Always Live",
  description:
    "Website speed optimization, monthly maintenance, and email/contact solutions — backups, security, uptime monitoring, and Core Web Vitals fixes that keep your site healthy.",
};

const STATS = [
  { num: "99.9%", label: "Uptime guaranteed" },
  { num: "<2s", label: "Target load time" },
  { num: "24hr", label: "Max response time" },
  { num: "80+", label: "Sites maintained" },
];

type Svc = {
  icon: LucideIcon;
  tag: string;
  name: string;
  desc: string;
  includes: string[];
  footLabel: string;
  foot: string;
  href: string;
  accent?: boolean;
};

const SERVICES: Svc[] = [
  {
    icon: Zap,
    tag: "Speed Optimization",
    name: "Core Web Vitals — fixed",
    desc: "I audit your site, find exactly what's slowing it down, and fix it. LCP, CLS, INP — all three Google metrics improved, with proof in PageSpeed scores.",
    includes: [
      "Full PageSpeed audit (mobile + desktop)",
      "Image optimization & next-gen formats",
      "JavaScript and CSS minification",
      "Lazy loading implementation",
      "Plugin audit (WordPress)",
      "CDN and Cloudflare setup",
      "Before/after score report",
    ],
    footLabel: "Timeline:",
    foot: "3–5 business days",
    href: "/services/speed-optimization",
    accent: true,
  },
  {
    icon: Wrench,
    tag: "Maintenance & Support",
    name: "Monthly care — so nothing breaks",
    desc: "Plugin updates, security patches, backups, uptime monitoring, and a direct WhatsApp line for urgent fixes. You run your business, I handle the site.",
    includes: [
      "Weekly plugin & theme updates",
      "Daily automated backups",
      "Uptime monitoring (24/7)",
      "Security scanning & malware removal",
      "2 hours of edits per month",
      "Monthly site health report",
      "WhatsApp support line",
    ],
    footLabel: "Plan:",
    foot: "Monthly retainer — no lock-in",
    href: "/services/maintenance",
  },
  {
    icon: Mail,
    tag: "Email & Contact Solutions",
    name: "Forms that work, emails that deliver",
    desc: "SMTP setup, contact form configuration, email deliverability fixes, and professional business email setup. No more emails going to spam or forms that silently fail.",
    includes: [
      "SMTP configuration (Gmail, Zoho, SES)",
      "Contact form setup (CF7, WPForms, Gravity)",
      "Email deliverability audit (SPF, DKIM, DMARC)",
      "Spam filter testing",
      "Business email setup (Google Workspace / Zoho)",
      "Auto-reply and notification setup",
    ],
    footLabel: "Timeline:",
    foot: "1–2 business days",
    href: "/services/contact-solutions",
  },
];

const FIXES = [
  { title: "Slow LCP (Largest Contentful Paint)", desc: "Hero image too large, no preloading — pushes load time past 3s." },
  { title: "High CLS (layout shift)", desc: "Fonts or images loading without reserved space — Google penalizes this." },
  { title: "Outdated plugins", desc: "Security vulnerabilities and compatibility issues from plugins not updated in months." },
  { title: "Emails going to spam", desc: "Missing SPF, DKIM, or DMARC records — easy to fix, often ignored." },
  { title: "Contact form not delivering", desc: "WordPress default mail function fails on most hosts — needs SMTP." },
  { title: "No backups", desc: "One bad update or hack can wipe a site — daily backups are non-negotiable." },
  { title: "Render-blocking scripts", desc: "JS and CSS loaded in the wrong order — delays when the page becomes interactive." },
  { title: "Uncompressed images", desc: "PNG files uploaded at 3MB when they should be 80KB WebP — kills mobile speed." },
];

type SlaRow = { issue: string; response: string; resolution: string; plan: string; gray?: boolean };
const SLA: SlaRow[] = [
  { issue: "Site down / white screen", response: "Within 2 hours", resolution: "Same day", plan: "All plans" },
  { issue: "Plugin conflict / error", response: "Within 4 hours", resolution: "24 hours", plan: "All plans" },
  { issue: "Content edits", response: "Within 24 hours", resolution: "2 business days", plan: "Standard+" },
  { issue: "Speed optimization request", response: "Within 24 hours", resolution: "3–5 business days", plan: "Pro plan" },
  { issue: "New feature / page build", response: "Quote within 24hr", resolution: "Scoped separately", plan: "Add-on", gray: true },
];

type Pkg = { name: string; price: string; unit: string; desc: string; features: string[]; cta: string; featured?: boolean };
const PACKAGES: Pkg[] = [
  {
    name: "Basic",
    price: "$79",
    unit: "/ month",
    desc: "Backups, updates, and monitoring — the essentials for any live site.",
    features: ["Daily automated backups", "Weekly plugin updates", "Uptime monitoring", "Security scan (monthly)", "Email support"],
    cta: "Get started",
  },
  {
    name: "Standard",
    price: "$149",
    unit: "/ month",
    desc: "Full maintenance with edit hours and direct WhatsApp access.",
    features: ["Everything in Basic", "2 hours of edits/month", "WhatsApp direct line", "Performance report (monthly)", "Priority response (4hr)"],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Pro",
    price: "$299",
    unit: "/ month",
    desc: "Everything plus speed optimization and dedicated support hours.",
    features: ["Everything in Standard", "5 hours of edits/month", "Quarterly speed audit & fixes", "Google Analytics review", "2hr emergency response"],
    cta: "Get started",
  },
];

export default function SupportMaintenancePage() {
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
              <span className="text-brand">Support &amp; Maintenance</span>
            </nav>

            <span className="mt-6 inline-block rounded-full border border-brand/25 bg-brand/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-brand">
              Support &amp; Maintenance
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
              Your site,{" "}
              <span className="text-brand">always fast, always live.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Speed optimization, monthly maintenance, and email setup — I keep your site healthy so
              you never have to worry about it going down or slowing down.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Get a support plan <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-transparent text-foreground hover:bg-accent hover:text-foreground">
                <Link href="/contact">Check my site speed</Link>
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
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">Three services</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Speed, maintenance, and email — sorted
          </h2>
          <p className="mt-2 text-muted-foreground">
            Three things most agencies don&apos;t handle properly. I do all three, and I do them well.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.tag}
                  href={s.href}
                  className={`group flex flex-col rounded-2xl border p-7 transition-colors ${s.accent ? "border-brand/40 bg-brand/[0.07]" : "border-border bg-card/50 hover:border-brand/40"}`}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-brand">{s.tag}</div>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <span className="mt-0.5 font-bold text-brand">✓</span>
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto border-t border-border pt-4 text-xs text-muted-foreground">
                    {s.footLabel} <span className="text-foreground/80">{s.foot}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* WHAT I FIX */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">Common issues I fix</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              If your site has these problems — I fix them
            </h2>
            <p className="mt-2 text-muted-foreground">Things I see every day on client sites that hurt speed, rankings, and conversions.</p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {FIXES.map((f) => (
                <div key={f.title} className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLA TABLE */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">Response times</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              What to expect on a maintenance plan
            </h2>
            <p className="mt-2 text-muted-foreground">Available business hours, with emergency response for critical issues.</p>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-muted/40">
                    {["Issue type", "Response time", "Resolution target", "Included in"].map((h) => (
                      <th key={h} className="border-b border-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SLA.map((row, i) => (
                    <tr key={row.issue} className={`bg-card/50 ${i < SLA.length - 1 ? "border-b border-border" : ""}`}>
                      <td className="px-4 py-3.5 text-sm font-medium text-foreground">{row.issue}</td>
                      <td className="px-4 py-3.5 text-sm text-muted-foreground">{row.response}</td>
                      <td className="px-4 py-3.5 text-sm text-muted-foreground">{row.resolution}</td>
                      <td className="px-4 py-3.5">
                        <span
                          className={
                            row.gray
                              ? "inline-block rounded-md border border-border bg-muted/40 px-2.5 py-1 text-[11px] text-muted-foreground"
                              : "inline-block rounded-md bg-brand/15 px-2.5 py-1 text-[11px] font-medium text-brand"
                          }
                        >
                          {row.plan}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">Pricing</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Support plan pricing
            </h2>
            <p className="mt-2 text-muted-foreground">Monthly plans. No long-term contracts after the first month. PKR pricing available — just ask.</p>

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
                Is your site slow or overdue for maintenance?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Send me your URL — I&apos;ll run a free speed audit and show you exactly what needs
                fixing.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">Get free audit <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
