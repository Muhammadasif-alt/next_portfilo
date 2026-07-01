import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Megaphone, ShoppingBag, Settings, Check } from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";

export const metadata: Metadata = {
  title: "Web Development and SEO Services | Asif.dev",
  description:
    "Web development, SEO, e-commerce, and Meta ads for growing businesses. WordPress, Shopify, Laravel, and Next.js builds that rank and convert. Fixed quotes, 24h replies.",
  alternates: { canonical: "/services" },
};

const PILLARS = [
  {
    icon: Code2,
    num: "01",
    title: "Web Development",
    line: "Fast, SEO-ready websites and web apps, built on the right stack for your goals.",
    items: [
      "WordPress and Elementor custom builds",
      "Shopify and Liquid custom themes",
      "Custom web apps in Laravel, Next.js, and the MERN stack",
      "WooCommerce online stores",
      "Website redesign and migration",
      "API and payment gateway integration",
    ],
    best: "Businesses that need a professional site or a custom platform that loads fast and ranks well.",
    href: "/services/web-development",
  },
  {
    icon: Megaphone,
    num: "02",
    title: "Marketing and SEO",
    line: "Get found on Google and turn that traffic into leads.",
    items: [
      "Technical SEO audits and fixes",
      "On-page SEO and content optimisation",
      "Local SEO and Google Business Profile",
      "Schema and structured data",
      "Meta ads (Facebook and Instagram lead gen)",
      "Weekly performance reporting",
    ],
    best: "Businesses that have a site but aren't showing up, or aren't getting enough leads from it.",
    href: "/services/marketing",
  },
  {
    icon: ShoppingBag,
    num: "03",
    title: "E-commerce and Automation",
    line: "Sell more and let the busywork run itself.",
    items: [
      "Shopify and WooCommerce store builds",
      "Product, checkout, and payment setup",
      "Landing pages and sales funnels",
      "CRM and GHL automation",
      "Zapier and Make workflows",
      "Lead capture and follow-up automation",
    ],
    best: "Store owners and service businesses that want more sales with less manual work.",
    href: "/services/ecommerce",
  },
  {
    icon: Settings,
    num: "04",
    title: "Support and Maintenance",
    line: "Keep your site fast, secure, and always online.",
    items: [
      "Flexible monthly care plans",
      "Speed and Core Web Vitals tuning",
      "Security, backups, and updates",
      "Bug fixes and small changes",
      "Uptime monitoring",
      "Priority support with 24h replies",
    ],
    best: "Business owners who want their site handled so they can focus on running the business.",
    href: "/services/support-maintenance",
  },
];

const PROCESS = [
  { n: "01", title: "Discover", desc: "We talk about your goals, audience, and what success looks like. You get a clear plan and a fixed quote." },
  { n: "02", title: "Design", desc: "I map the structure and design a clean, on-brand layout built to convert, not just look nice." },
  { n: "03", title: "Build", desc: "I develop your site on the right stack with clean, semantic, SEO-ready code." },
  { n: "04", title: "Optimise", desc: "Speed, Core Web Vitals, meta tags, and schema are tuned before anything goes live." },
  { n: "05", title: "Launch", desc: "We go live with testing across devices and browsers. Everything checked, nothing left to chance." },
  { n: "06", title: "Support", desc: "Ongoing care plans keep your site fast, secure, and improving over time." },
];

const STACK = [
  "WordPress", "Elementor", "Shopify", "WooCommerce", "PHP", "Laravel", "Python",
  "MERN Stack", "Next.js", "Tailwind CSS", "Meta Ads", "Google Search Console",
  "GA4", "Schema", "GHL", "Zapier",
];

const WHY = [
  "One point of contact from first message to launch and beyond.",
  "SEO and speed built into every build, never sold as an upsell.",
  "Fixed quotes, so you know the full cost before work begins.",
  "Clear communication, replies within 24 hours.",
  "50+ sites shipped across the US, UK, UAE, and Pakistan.",
  "Honest advice, even when it means recommending less than you asked for.",
];

const WHY_STATS = [
  ["50+", "Projects shipped"],
  ["200%+", "Avg. organic traffic growth"],
  ["24h", "Reply time"],
  ["100%", "Remote, worldwide"],
];

const FAQS = [
  {
    q: "Can you do just SEO, or just the website?",
    a: "Both. Pick a single service or a full end-to-end build. I'll recommend what actually moves the needle for your goals.",
  },
  {
    q: "Which platform should I use?",
    a: "It depends on your goals. WordPress for content-heavy sites, Shopify for stores, custom Next.js or Laravel for apps and speed. I'll advise on the first call.",
  },
  {
    q: "Do you fix existing sites, or only build new ones?",
    a: "Both. I redesign, speed up, and re-rank existing sites, or build fresh from scratch.",
  },
  {
    q: "How do you charge for services?",
    a: "Fixed project quotes for builds, and simple monthly plans for SEO and maintenance. No hourly surprises.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. Most of my clients are in the US, UK, UAE, and Canada. Fully remote, every timezone.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <HireHero
        small="What I Do"
        title="Services"
        taglineTitle="Everything your site needs to launch, rank, and grow."
        taglineText="One developer who plans, builds, and optimises fast websites and stores that search engines understand and customers trust."
      />
      <main className="bg-[#0a0a0a] text-white">
        {/* ===== INTRO POSITIONING ===== */}
        <section className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              The right tool for the job, <span className="text-[#ff5a1e]">every time.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
              Most freelancers sell you one stack and force your project to fit it. I do the opposite.
              I pick the platform and approach that fits your goals, your budget, and your timeline,
              then build it clean, fast, and SEO-ready from day one. Below are the four ways I help
              businesses grow online.
            </p>
          </div>
        </section>

        {/* ===== SERVICE PILLARS ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-xl border border-[#ff5a1e]/25 bg-[#ff5a1e]/10 text-[#ff5a1e]">
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-sm font-bold text-white/30">/ {p.num}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{p.line}</p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-white/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff5a1e]" />
                        {it}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/60">
                    <span className="font-semibold text-white/80">Best for:</span> {p.best}
                  </p>

                  <Link
                    href={p.href}
                    className="group mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff5a1e]"
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section className="border-t border-white/10 bg-black px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                A simple process, no surprises
              </h2>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROCESS.map((s) => (
                <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="font-mono text-sm font-bold text-[#ff5a1e]">{s.n}</span>
                  <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TECH STACK ===== */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Built on tools that scale
            </h2>
            <p className="mt-4 text-white/65">
              I work across the platforms that power the modern web, and recommend the best fit for
              your project, not just the one I like most.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {STACK.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/75"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY WORK WITH ME ===== */}
        <section className="border-t border-white/10 bg-black px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Why businesses pick me
              </h2>
              <ul className="mt-8 space-y-4">
                {WHY.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-white/75">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#ff5a1e]" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 self-start">
              {WHY_STATS.map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
                >
                  <div className="text-3xl font-extrabold text-[#ff5a1e]">{n}</div>
                  <div className="mt-1 text-xs text-white/55">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICE FAQ ===== */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Common questions
            </h2>
            <div className="mt-12 space-y-3">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group overflow-hidden rounded-xl border border-white/10 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 bg-[#141414] px-5 py-4 text-sm font-semibold text-white transition-colors group-open:bg-[#ff5a1e] sm:text-base">
                    {f.q}
                    <span className="text-lg transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="bg-black px-5 py-4 text-sm leading-relaxed text-white/85">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="border-t border-white/10 px-6 pb-24 pt-4 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#ff5a1e]/30 bg-gradient-to-b from-[#1c0e08] to-[#0a0604] p-10 text-center sm:p-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/65">
              Tell me your goal and I&apos;ll point you to the right one, with a clear plan and a
              fixed quote. No obligation, just an honest next step.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#ff5a1e] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
              >
                Start your project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Book a free consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <HireFooter />
    </>
  );
}
