import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Code2, Megaphone, ShoppingBag, Settings } from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, breadcrumbSchema, businessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Web Development and SEO Services | Asif.dev",
  description:
    "Web development, SEO, e-commerce, and Meta ads for growing businesses. WordPress, Shopify, Laravel, and Next.js builds that rank and convert. Fixed quotes, 24h replies.",
  alternates: { canonical: "/services" },
  openGraph: {
    images: ["/og.jpg"],
    title: "Web Development and SEO Services",
    description:
      "Web development, SEO, e-commerce, and Meta ads for growing businesses. WordPress, Shopify, Laravel, and Next.js builds that rank and convert. Fixed quotes, 24h replies.",
  },
};

const SERVICES = [
  {
    num: "01",
    icon: Code2,
    title: "Web Development",
    short: "Fast, SEO-ready websites and web apps, built on the right stack for your goals.",
    body: "From a simple business site to a full custom web app, I write clean, semantic code that loads fast and ranks well. No bloated page builders stacked on top of each other, no themes held together with plugins. Just the right build for what you actually need.",
    included: [
      "WordPress and Elementor custom builds",
      "Shopify and Liquid custom themes",
      "Custom web apps in Laravel, Next.js, and the MERN stack",
      "Headless and JAMstack builds (Next.js with a headless CMS)",
      "WooCommerce online stores",
      "Mobile apps with React Native",
      "Progressive Web Apps (PWA)",
      "Website redesign and migration",
      "API and payment gateway integration",
      "Landing pages built to convert",
    ],
    best: "Businesses that need a professional site or a custom platform that loads fast and ranks well.",
    result: "A site that is quick, clean, and ready to rank the day it goes live.",
    cta: "Get a quote",
    detailHref: "/services/web-development",
  },
  {
    num: "02",
    icon: Megaphone,
    title: "Marketing and SEO",
    short: "Get found on Google and turn that traffic into leads.",
    body: "A beautiful site is useless if no one finds it. I make sure yours shows up when your customers search, then keeps pulling in organic traffic without paying for every click. Technical fixes, on-page work, and content all pointed at one goal: rankings that bring leads.",
    included: [
      "Technical SEO audits and fixes",
      "On-page SEO and content optimisation",
      "Local SEO and Google Business Profile",
      "Schema and structured data",
      "Core Web Vitals and speed for SEO",
      "Meta ads (Facebook and Instagram lead gen)",
      "Social media management and content",
      "Monthly performance reporting in plain English",
    ],
    best: "Businesses that have a site but are not showing up, or are not getting enough leads from it.",
    result: "Higher rankings, more organic traffic, and clear reports you can actually read.",
    cta: "Get a quote",
    detailHref: "/services/marketing",
  },
  {
    num: "03",
    icon: ShoppingBag,
    title: "E-commerce and Automation",
    short: "Sell more and let the busywork run itself.",
    body: "Whether you are launching a new store or fixing one that does not convert, I build online stores that are fast, easy to manage, and built to sell. Then I connect the tools that follow up with leads and customers automatically, so you spend less time on manual work.",
    included: [
      "Shopify and WooCommerce store builds",
      "Product, checkout, and payment setup",
      "Landing pages and sales funnels",
      "CRM and GHL automation",
      "Zapier and Make workflows",
      "Lead capture and follow-up automation",
      "Abandoned cart and email flows",
    ],
    best: "Store owners and service businesses that want more sales with less manual work.",
    result: "A store that converts and a follow-up system that runs while you sleep.",
    cta: "Get a quote",
    detailHref: "/services/ecommerce",
  },
  {
    num: "04",
    icon: Settings,
    title: "Support and Maintenance",
    short: "Keep your site fast, secure, and always online.",
    body: "A website is not a one-time job. It needs updates, backups, and someone to call when something breaks. My care plans keep your site healthy so you can focus on running the business instead of worrying about your website.",
    included: [
      "Flexible monthly care plans",
      "Speed and Core Web Vitals tuning",
      "Security, backups, and plugin or core updates",
      "Bug fixes and small content changes",
      "Uptime monitoring",
      "Priority support with 24h replies",
    ],
    best: "Business owners who want their site handled so they can focus on the business.",
    result: "Peace of mind, and a site that stays fast, secure, and online.",
    cta: "Start a care plan",
    detailHref: "/services/support-maintenance",
  },
];

const WHICH = [
  { q: "I need a new website or store.", a: "Start with Web Development or E-commerce." },
  { q: "I have a site but no one finds it.", a: "Start with Marketing and SEO." },
  { q: "My site is slow or breaking.", a: "Start with Support and Maintenance." },
  { q: "I want more leads from ads.", a: "Start with Meta ads under Marketing and SEO." },
  { q: "I want everything handled by one person.", a: "Perfect, that is exactly how I work." },
];

const PRICING = [
  { t: "Builds are fixed price.", d: "After a quick chat about your goals, you get one clear number before any work starts." },
  { t: "SEO and maintenance are simple monthly plans.", d: "Predictable cost, cancel anytime." },
  { t: "Every quote is written down.", d: "Scope, timeline, and price all in one place, so nothing changes on you mid-project." },
  { t: "Free consultation first.", d: "We talk before you pay anything, with no obligation." },
];

const PROCESS = [
  { n: "01", title: "Discover", desc: "We talk about your goals, audience, and what success looks like. You get a clear plan and a fixed quote.", img: "https://picsum.photos/seed/asif-proc-discover/600/520" },
  { n: "02", title: "Design", desc: "I map the structure and design a clean, on-brand layout built to convert, not just look nice.", img: "https://picsum.photos/seed/asif-proc-design/600/520" },
  { n: "03", title: "Build", desc: "I develop your site on the right stack with clean, semantic, SEO-ready code.", img: "https://picsum.photos/seed/asif-proc-build/600/520" },
  { n: "04", title: "Optimise", desc: "Speed, Core Web Vitals, meta tags, and schema are tuned before anything goes live.", img: "https://picsum.photos/seed/asif-proc-optimise/600/520" },
  { n: "05", title: "Launch", desc: "We go live with testing across devices and browsers. Everything checked, nothing left to chance.", img: "https://picsum.photos/seed/asif-proc-launch/600/520" },
  { n: "06", title: "Support", desc: "Ongoing care plans keep your site fast, secure, and improving over time.", img: "https://picsum.photos/seed/asif-proc-support/600/520" },
];

const STACK_GROUPS = [
  { title: "Web and Mobile", items: ["WordPress", "Elementor", "Shopify", "WooCommerce", "PHP", "Laravel", "Python", "MERN Stack", "Next.js", "React Native", "Tailwind CSS"] },
  { title: "Growth", items: ["Technical SEO", "On-page SEO", "Schema", "Google Search Console", "GA4", "Meta Ads", "Social media"] },
  { title: "Automation", items: ["GHL", "Zapier", "Make", "Payment gateways", "API integration"] },
];

const WHY = [
  "One point of contact from first message to launch and beyond.",
  "SEO and speed built into every build, never sold as an upsell.",
  "Fixed quotes, so you know the full cost before work begins.",
  "Clear communication, replies within 24 hours.",
  "Honest advice, even when it means recommending less than you asked for.",
  "5+ years and 50+ sites shipped across the US, UK, UAE, and Pakistan.",
];

const WHY_STATS = [
  ["50+", "Projects shipped"],
  ["200%+", "Avg. organic traffic growth"],
  ["24h", "Reply time"],
  ["100%", "Remote, worldwide"],
];

const FAQS = [
  { q: "Can you do just SEO, or just the website?", a: "Both. Pick a single service or a full end-to-end build. I will recommend what actually moves the needle for your goals." },
  { q: "Which platform should I use?", a: "It depends on your goals. WordPress for content-heavy sites, Shopify for stores, custom Next.js or Laravel for apps and speed. I will advise on the first call." },
  { q: "Do you fix existing sites, or only build new ones?", a: "Both. I redesign, speed up, and re-rank existing sites, or build fresh from scratch." },
  { q: "How fast can you start?", a: "Usually within a few days of agreeing the scope. You will get a clear timeline before we begin." },
  { q: "Do you work with clients outside Pakistan?", a: "Yes. Most of my clients are in the US, UK, UAE, and Canada. Fully remote, every timezone." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a1e]">
      <span className="h-2 w-2 rounded-full bg-[#ff5a1e]" />
      {children}
    </p>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          businessSchema(),
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <HireHero
        small="What I Do"
        title="Web Dev & SEO Services"
        taglineTitle="Everything your site needs to launch, rank, and grow."
        taglineText="I plan, build, and optimise fast websites and stores that search engines understand and customers trust. Every service is built around one thing: results you can measure."
        primaryCta={{ label: "Start your project", href: "/contact" }}
        secondaryCta={{ label: "See my work", href: "/projects" }}
      />

      <main className="bg-[#0a0a0a] text-white">
        {/* ===== 2. POSITIONING INTRO ===== */}
        <section className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>How I Work</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              The right tool for the job, <span className="text-[#ff5a1e]">every time</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Most freelancers sell you one stack and force your project to fit it. I do the opposite.
              I pick the platform and approach that fit your goals, your budget, and your timeline,
              then build it clean, fast, and SEO-ready from day one. Everything below is a service I
              deliver end to end, so you deal with one person from the first message to launch and
              beyond.
            </p>
            <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm text-white/70">
              Not sure what you need? Jump to &quot;Which service is right for you&quot; below, or just
              message me and I will point you the right way.
            </p>
          </div>
        </section>

        {/* ===== 3-6. SERVICE PILLARS ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px] space-y-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
                >
                  {/* left */}
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="grid h-14 w-14 place-items-center rounded-xl border border-[#ff5a1e]/25 bg-[#ff5a1e]/10 text-[#ff5a1e]">
                        <Icon className="h-7 w-7" strokeWidth={1.75} />
                      </span>
                      <Eyebrow>Service {s.num}</Eyebrow>
                    </div>
                    <h2 className="mt-5 text-3xl font-extrabold tracking-tight">{s.title}</h2>
                    <p className="mt-3 text-lg font-semibold text-[#ff8a5e]">{s.short}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">{s.body}</p>

                    <div className="mt-6 space-y-3">
                      <p className="text-sm text-white/70">
                        <span className="font-semibold text-white">Best for:</span> {s.best}
                      </p>
                      <p className="rounded-xl border border-[#ff5a1e]/25 bg-[#ff5a1e]/5 p-4 text-sm text-white/80">
                        <span className="font-semibold text-[#ff5a1e]">Result you get:</span> {s.result}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 rounded-full bg-[#ff5a1e] px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
                      >
                        {s.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                      <Link
                        href={s.detailHref}
                        className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>

                  {/* right — what's included */}
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6 lg:p-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#ff5a1e]">
                      What&apos;s included
                    </h3>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {s.included.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-white/75">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff5a1e]" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== 7. WHICH SERVICE IS RIGHT FOR YOU ===== */}
        <section className="border-t border-white/10 bg-black px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <Eyebrow>Not Sure Where To Start</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Which service is right for you?
              </h2>
              <p className="mt-4 text-white/65">
                Pick the line that sounds like you, and you will know where to begin.
              </p>
            </div>
            <div className="mt-10 space-y-3">
              {WHICH.map((w) => (
                <div
                  key={w.q}
                  className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <span className="font-semibold text-white">&quot;{w.q}&quot;</span>
                  <span className="text-sm text-[#ff8a5e]">{w.a}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-white/65">
              Still unsure? Message me your goal and I will tell you honestly what you actually need,
              even if it is less than you asked for.
            </p>
            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#ff5a1e] px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
              >
                Get a recommendation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 8. HOW PRICING WORKS ===== */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <Eyebrow>Simple and Honest</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                How pricing works
              </h2>
              <p className="mt-4 text-white/65">
                No hourly meters, no surprise invoices. Here is exactly how I quote every project.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {PRICING.map((p) => (
                <div key={p.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-bold">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{p.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base font-semibold text-white/80">
              You will always know the full cost before we begin.
            </p>
          </div>
        </section>

        {/* ===== 9. MY PROCESS (image cards) ===== */}
        <section className="relative overflow-hidden border-t border-[#ff5a1e]/25 bg-[#0a0604] px-6 py-20 lg:px-10 lg:py-28">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-[#ff5a1e]/15 blur-[120px]" />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>How It Gets Done</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                A simple process, no surprises
              </h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROCESS.map((p) => (
                <article
                  key={p.n}
                  className="group flex flex-col rounded-3xl border border-[#ff5a1e]/35 bg-gradient-to-b from-[#1c0e08] to-[#0a0604] p-3 transition-all duration-300 hover:-translate-y-2 hover:border-[#ff5a1e] hover:shadow-[0_24px_70px_-20px_rgba(255,90,30,0.55)]"
                >
                  <div className="overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt=""
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative px-3 pb-6 pt-9">
                    <span className="absolute -top-5 left-3 grid h-11 w-11 place-items-center rounded-full bg-[#ff5a1e] text-lg font-extrabold text-white shadow-lg shadow-[#ff5a1e]/40">
                      {p.n}
                    </span>
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 10. TECH STACK ===== */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <Eyebrow>Built To Scale</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                The tools behind the results
              </h2>
              <p className="mt-4 text-white/65">
                I work across the platforms that power the modern web, and recommend the best fit for
                your project, not just the one I like most.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {STACK_GROUPS.map((g) => (
                <div key={g.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#ff5a1e]">
                    {g.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border border-white/15 bg-white/[0.02] px-3 py-1.5 text-sm text-white/75"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 11. WHY WORK WITH ME ===== */}
        <section className="border-t border-white/10 bg-black px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Why Me</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
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

        {/* ===== 12. FAQ + CTA ===== */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <Eyebrow>Before You Ask</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Common questions
              </h2>
            </div>
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

            <div className="mt-14 rounded-3xl border border-[#ff5a1e]/30 bg-gradient-to-b from-[#1c0e08] to-[#0a0604] p-10 text-center sm:p-14">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Not sure which service you need?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/65">
                Tell me your goal and I will point you to the right one, with a clear plan and a fixed
                quote. No obligation, just an honest next step.
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
          </div>
        </section>
      </main>
      <HireFooter />
    </>
  );
}
