import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Zap,
  Search,
  MessageSquare,
  Gauge,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";

export const metadata: Metadata = {
  title: "About Asif | Freelance Web Developer and SEO Specialist",
  description:
    "Meet Asif, a freelance web developer and SEO specialist with 5+ years building fast, search-ready websites and stores for clients across the US, UK, UAE, and Pakistan.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Asif | Web Developer and SEO Specialist",
    description:
      "Meet Asif, a freelance web developer and SEO specialist with 5+ years building fast, search-ready websites and stores for clients across the US, UK, UAE, and Pakistan.",
  },
};

const PRINCIPLES = [
  {
    icon: Zap,
    title: "Performance first",
    desc: "If it is not fast, nothing else matters.",
  },
  {
    icon: Search,
    title: "SEO built in",
    desc: "Structure, schema, and Core Web Vitals from the first line of code.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    desc: "You always know what is happening and what it costs.",
  },
];

const STACK_GROUPS = [
  {
    title: "Web Development",
    items: ["WordPress", "Elementor", "Shopify", "WooCommerce", "PHP", "Laravel", "Python", "MERN Stack", "Next.js", "Tailwind CSS"],
  },
  {
    title: "SEO and Marketing",
    items: ["Technical SEO", "On-page SEO", "Local SEO", "Schema & structured data", "Core Web Vitals", "Search Console", "GA4", "Meta Ads"],
  },
  {
    title: "Automation and Integration",
    items: ["GHL", "Zapier", "Make", "Payment gateways", "API integration", "CRM setup"],
  },
];

const PROCESS = [
  { n: "01", t: "We talk first.", d: "I learn your goals before I quote a single number." },
  { n: "02", t: "You get a fixed price.", d: "No hourly meter, no scope creep bills." },
  { n: "03", t: "I build clean.", d: "Semantic, SEO-ready code that search engines and humans both understand." },
  { n: "04", t: "We test everything.", d: "Across devices and browsers before anything goes live." },
  { n: "05", t: "I stay available.", d: "Clear updates throughout, and support after launch." },
];

const NUMBERS = [
  ["50+", "Websites and stores shipped"],
  ["5+", "Years building for the web"],
  ["200%+", "Average organic traffic growth"],
  ["24h", "Reply time, every day"],
];

const VALUES = [
  { icon: ShieldCheck, title: "Honesty", desc: "If you do not need something, I will tell you, even if it means a smaller invoice." },
  { icon: Gauge, title: "Speed", desc: "Every site I ship is tuned to pass Core Web Vitals." },
  { icon: BadgeCheck, title: "Ownership", desc: "I take responsibility from the first message to long after launch." },
  { icon: MessageSquare, title: "Clarity", desc: "Plain language, fixed quotes, and no jargon walls." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a1e]">
      <span className="h-2 w-2 rounded-full bg-[#ff5a1e]" />
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      <HireHero
        small="About Me"
        title="The developer behind the builds"
        taglineTitle="Hi, I'm Asif, a web developer and SEO specialist."
        taglineText="I build fast, search-ready websites and stores that rank on Google and turn visitors into clients. Clean code, honest advice, and work that performs in the real world."
        primaryCta={{ label: "Start your project", href: "/contact" }}
        secondaryCta={{ label: "View my work", href: "/projects" }}
      />

      <main className="bg-[#0a0a0a] text-white">
        {/* ===== 2. QUICK INTRO ===== */}
        <section className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>In short</Eyebrow>
            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              For the past 5+ years I have helped businesses across the US, UK, UAE, and Pakistan
              launch websites that load fast, rank well, and actually bring in leads. I work across
              WordPress, Shopify, Laravel, Python, the MERN stack, and Next.js, and I pick the right
              stack for the job instead of forcing every project into the same template.
            </p>
            <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#ff5a1e]/30 bg-[#ff5a1e]/10 px-6 py-4 text-base font-semibold text-white">
              One developer, start to finish, with SEO and speed built into every build.
            </p>
          </div>
        </section>

        {/* ===== 3. MY STORY ===== */}
        <section className="border-b border-white/10 bg-black px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <Eyebrow>The Journey</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                How I got here
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-white/70">
                <p>
                  I started the way most self-taught developers do, building small WordPress sites and
                  fixing broken ones for anyone who would let me. What kept me going was a simple
                  frustration: most websites looked fine but performed terribly. Slow load times, no
                  SEO, no real strategy behind them.
                </p>
                <p>
                  So I went deeper. I learned to write clean, semantic code, to build custom themes
                  instead of drag-and-drop clutter, and to treat SEO and speed as part of development,
                  not an afterthought. Over time I moved from single pages to full custom web apps in
                  Laravel, Next.js, and the MERN stack, and from one-off fixes to long-term
                  partnerships with agencies and business owners.
                </p>
                <p>
                  Today I ship fast, SEO-ready websites and stores for clients around the world. The
                  mission has not changed since day one: build sites that are quick, that rank, and
                  that earn their keep.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/asif-about.png"
                alt="Asif — freelance web developer"
                className="w-full rounded-2xl border border-white/10 object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== 4. MY APPROACH ===== */}
        <section className="border-b border-white/10 bg-[#0a0604] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <Eyebrow>How I Think</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                The right tool for the job, every time
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70">
                A lot of freelancers sell you one stack and bend your project to fit it. I do the
                opposite. I start with your goal, your audience, and your budget, then choose the
                platform and approach that fit. WordPress for content-heavy sites. Shopify for stores.
                Custom Next.js or Laravel when speed and scale matter. The tech serves the goal, never
                the other way around.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {PRINCIPLES.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#ff5a1e]/25 bg-[#ff5a1e]/10 text-[#ff5a1e]">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== 5. SEO IS NOT AN ADD-ON ===== */}
        <section className="border-b border-white/10 bg-black px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#ff5a1e]/30 bg-gradient-to-b from-[#1c0e08] to-[#0a0604] p-8 sm:p-12">
            <Eyebrow>Why It Matters</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              SEO built into every build, never bolted on
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/70">
              <p>
                Most agencies build a site, then sell you SEO as a separate service later. By then the
                damage is done. Slow code, messy structure, and missing meta data cost you rankings
                before you even launch.
              </p>
              <p>
                I do it the right way. Optimised meta tags, structured data, mobile-first design, clean
                URLs, and fast Core Web Vitals are part of the build, not an upsell. That means your
                site is ready to rank the day it goes live, and it keeps pulling in organic traffic
                without paying for every single click.
              </p>
            </div>
          </div>
        </section>

        {/* ===== 6. SKILLS & TECH STACK ===== */}
        <section className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <Eyebrow>What I Work With</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                The tools behind the results
              </h2>
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
            <p className="mt-8 text-sm text-white/55">
              I recommend the best fit for your project, not just the tools I happen to like most.
            </p>
          </div>
        </section>

        {/* ===== 7. THE WAY I WORK ===== */}
        <section className="border-b border-white/10 bg-black px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <Eyebrow>My Process</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                No surprises, no guesswork
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {PROCESS.map((s) => (
                <div
                  key={s.n}
                  className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="font-mono text-xl font-extrabold text-[#ff5a1e]">{s.n}</span>
                  <div>
                    <h3 className="text-lg font-bold">{s.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base font-semibold text-white/80">
              You will never wonder where your project stands or what it will cost.
            </p>
          </div>
        </section>

        {/* ===== 8. NUMBERS ===== */}
        <section className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Proof, Not Promises</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">A few numbers</h2>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {NUMBERS.map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
                >
                  <div className="text-4xl font-extrabold text-[#ff5a1e]">{n}</div>
                  <div className="mt-2 text-sm text-white/55">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 9. WHO I WORK WITH ===== */}
        <section className="border-b border-white/10 bg-[#0a0604] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Clients</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Trusted by businesses worldwide
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              I work fully remote with clients across the US, UK, UAE, Canada, and Pakistan. From
              local contractors and service businesses to online stores and agencies, the common
              thread is simple: they want a site that works and a developer they can actually reach.
              No timezone has ever been a problem, and no project is too far away.
            </p>
          </div>
        </section>

        {/* ===== 10. WHAT I VALUE ===== */}
        <section className="border-b border-white/10 bg-black px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <Eyebrow>How I Operate</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                The things I will not cut corners on
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#ff5a1e]/25 bg-[#ff5a1e]/10 text-[#ff5a1e]">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== 11. BEYOND THE CODE ===== */}
        <section className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about-2-asif.png"
                alt="Asif away from the screen"
                className="w-full rounded-2xl border border-white/10 object-cover"
              />
            </div>
            <div>
              <Eyebrow>Off the Clock</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                When I&apos;m not shipping
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70">
                When I step away from the screen, I am usually reading up on what changed in search
                this month, testing a new framework, or helping someone get their first site online. I
                genuinely enjoy teaching web development and breaking down the stuff that scares
                beginners. That same patience is what clients tell me they value most: I explain
                things instead of hiding behind technical terms.
              </p>
            </div>
          </div>
        </section>

        {/* ===== 12. CTA ===== */}
        <section className="px-6 pb-24 pt-20 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#ff5a1e]/30 bg-gradient-to-b from-[#1c0e08] to-[#0a0604] p-10 text-center sm:p-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let&apos;s build something that works
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/65">
              Whether you need a fresh website, an online store, or a site that finally ranks, I would
              love to hear what you are working on. Tell me your goal and I will get back within 24
              hours with a clear plan and a fixed quote.
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
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <HireFooter />
    </>
  );
}
