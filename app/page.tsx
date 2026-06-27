import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { PROJECTS, projectShot } from "@/lib/projects-data";
import { HireContactForm } from "@/components/portfolio/hire-contact-form";
import { HireNav } from "@/components/portfolio/hire-nav";
import { HireFooter } from "@/components/portfolio/hire-footer";
import "./orbit.css";

const ORBIT = PROJECTS.slice(0, 13);

export const metadata: Metadata = {
  title: "Asif — Web Developer",
  description:
    "Hey, I'm Asif — a web developer. From first line to launch, I build fast, SEO-ready sites that connect and convert.",
};

const SKILLS = [
  { num: "01", label: "Web Development", href: "/services/web-development" },
  { num: "02", label: "Marketing & SEO", href: "/services/marketing" },
  { num: "03", label: "E-commerce & Automation", href: "/services/ecommerce" },
  { num: "04", label: "Support & Maintenance", href: "/services/support-maintenance" },
];

const CARDS = [
  "https://picsum.photos/seed/asif-card-craft/800/1000?grayscale",
  "https://picsum.photos/seed/asif-card-focus/800/1000?grayscale",
  "https://picsum.photos/seed/asif-card-detail/800/1000?grayscale",
];

const NOTIFS = [
  { pos: "left-0 bottom-[28%] lg:-left-8", amount: "$3,396.00", time: "", show: "" },
  { pos: "right-0 bottom-[32%] lg:-right-8", amount: "$2,800.00", time: "", show: "hidden sm:block" },
  { pos: "left-0 bottom-[3%] lg:-left-6", amount: "$1,250.00", time: "15:24", show: "" },
];

type Part = { t: string; hl?: boolean };
const QUALIFY: { img: string; n: string; title: string; parts: Part[] }[] = [
  {
    img: "/card1-asif.png",
    n: "1",
    title: "Rank & get noticed",
    parts: [
      { t: "You want a " },
      { t: "fast, modern website", hl: true },
      { t: " that ranks on Google and puts your business in front of the right people." },
    ],
  },
  {
    img: "/card2-asif-1.png",
    n: "2",
    title: "Win clients every month",
    parts: [
      { t: "You dream of a site that turns visitors into " },
      { t: "real clients and sales", hl: true },
      { t: " — consistently, every single month, with results you can measure." },
    ],
  },
  {
    img: "/card3-asif-1.png",
    n: "3",
    title: "Everything, done for you",
    parts: [
      { t: "You want a " },
      { t: "complete end-to-end build", hl: true },
      { t: " — design, development, SEO, and ongoing support — all handled by one developer." },
    ],
  },
];

const OFFER: { n: string; title: [string, string]; desc: string; href: string }[] = [
  {
    n: "01",
    title: ["Web", "Development"],
    desc: "Fast, SEO-ready websites and web apps — WordPress, Shopify, Laravel, and Next.js, built around your goals.",
    href: "/services/web-development",
  },
  {
    n: "02",
    title: ["Meta", "Ads"],
    desc: "Facebook & Instagram campaigns that generate real leads — targeting, creative, pixel setup, and weekly reporting.",
    href: "/services/marketing",
  },
  {
    n: "03",
    title: ["SEO", "Expert"],
    desc: "Technical and on-page SEO that gets you ranking — audits, schema, content, and Core Web Vitals tuned to win.",
    href: "/services/seo",
  },
  {
    n: "04",
    title: ["Speed", "Optimization"],
    desc: "Sub-second load times — image, caching, code, and CDN tuning that passes Google's Core Web Vitals.",
    href: "/services/speed-optimization",
  },
];

const POSTS = [
  {
    img: "https://picsum.photos/seed/asif-blog-dev/800/600",
    cat: "Development",
    title: "5 Things Every New Website Must Get Right",
    excerpt: "Launching a site is hard. These five fundamentals set you up for speed, SEO, and conversions from day one.",
    date: "Jun 20, 2026",
  },
  {
    img: "https://picsum.photos/seed/asif-blog-seo/800/600",
    cat: "SEO",
    title: "On-Page SEO: What Actually Moves Rankings",
    excerpt: "Not all SEO is equal. Learn exactly what to optimise — and in what order — to climb Google for real.",
    date: "Jun 12, 2026",
  },
  {
    img: "https://picsum.photos/seed/asif-blog-speed/800/600",
    cat: "Performance",
    title: "How to Make Your Site Load in Under a Second",
    excerpt: "Speed wins. Here's how to build the technical habits that keep your site fast and passing Core Web Vitals.",
    date: "Jun 4, 2026",
  },
];

const FAQS = [
  {
    q: "How long does a website take to build?",
    a: "Most websites take 1–4 weeks depending on scope. A landing page can be a few days; a custom store or web app takes longer. You'll get a clear timeline before we start.",
  },
  {
    q: "How much do you charge?",
    a: "Every project is quoted upfront with a fixed price after a quick chat about what you need. No hidden fees — you'll know the full cost before any work begins.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. I offer flexible maintenance plans for updates, backups, security, and small changes, so your site stays fast and secure long after launch.",
  },
  {
    q: "Will my site be fast and SEO-friendly?",
    a: "Always. Clean code, proper meta tags, schema, and Core Web Vitals tuning are baked into every build — never charged as an extra.",
  },
  {
    q: "Which technologies do you work with?",
    a: "WordPress, Shopify, PHP, Laravel, Python, the MERN stack, and Next.js — plus SEO and speed optimisation. I'll recommend the best fit for your goals.",
  },
  {
    q: "Do you work with clients worldwide?",
    a: "Yes, I work fully remote with clients across every timezone. Communication stays clear and consistent from start to finish.",
  },
];

export default function HireMePage() {
  return (
    <>
    <main className="bg-[#0a0a0a]">
    <section
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(125% 125% at 68% 32%, #ff6a1f 0%, #e0330b 46%, #9d1206 100%)",
      }}
    >
      {/* portrait */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/asif-portrait.png"
        alt="Asif — web developer"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-[72%_38%] opacity-95 sm:object-[70%_40%] lg:w-[52%]"
      />

      {/* left fade so the copy stays readable over the photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #b81c06 0%, rgba(184,28,6,0.78) 30%, rgba(184,28,6,0.15) 58%, transparent 75%)",
        }}
      />
      {/* extra wash on small screens (photo sits behind the text there) */}
      <div className="absolute inset-0 bg-[#9d1206]/55 sm:bg-[#9d1206]/30 lg:hidden" />
      {/* subtle bottom + top shading */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/45 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/25 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 lg:px-10">
        {/* NAV */}
        <HireNav />

        {/* HERO BODY */}
        <div className="flex flex-1 flex-col justify-center py-16 lg:py-24">
          <p className="text-2xl font-medium text-white/95 sm:text-3xl">Hey, I&apos;m a</p>
          <h1 className="-mt-1 font-extrabold leading-[0.86] tracking-tight text-white drop-shadow-sm text-6xl sm:text-7xl lg:text-[8.5rem]">
            Developer
          </h1>

          {/* tagline — placed below the heading, clear of the photo */}
          <div className="mt-8 max-w-md">
            <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
              Great code should feel invisible.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85 sm:text-base">
              From the first line to launch, I build fast, SEO-ready sites that connect and convert.
            </p>
          </div>
        </div>

        {/* BOTTOM SKILLS */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 py-8 sm:grid-cols-4">
          {SKILLS.map((s) => (
            <Link key={s.num} href={s.href} className="group">
              <div className="font-mono text-sm font-semibold tracking-wider text-orange-200">
                <span className="text-orange-300">#</span> {s.num}
              </div>
              <div className="mt-2 text-base font-semibold text-white transition-opacity group-hover:opacity-80 sm:text-lg">
                {s.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ===== ABOUT ME ===== */}
    <section className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#e0330b]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-24">
        {/* LEFT — about me */}
        <div>
          <span className="inline-block rounded-full border border-white/25 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            About Me
          </span>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
            Hi, I&apos;m <span className="text-[#ff5a1e]">Asif</span> — a developer who ships.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
            For the past 5+ years I&apos;ve been building fast, SEO-ready websites, online stores,
            and web apps for clients around the world. From WordPress and Shopify to custom Laravel,
            Python, and Next.js builds — I pick the right tool for the job and ship work that
            actually performs.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            I care about the details that move the needle: clean code, real speed, search rankings,
            and designs that turn visitors into clients. No bloated templates, no hand-off into a
            black box — just clear communication and results you can measure.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
            {[
              ["50+", "Projects shipped"],
              ["5+", "Years experience"],
              ["100%", "Client focus"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-extrabold text-white">{n}</div>
                <div className="mt-1 text-xs text-white/50">{l}</div>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#ff5a1e] py-3 pl-6 pr-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Contact me
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#ff5a1e]">
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        {/* RIGHT — image + floating notifications */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/asif-laptop.png" alt="Asif working" className="w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {NOTIFS.map((n) => (
            <div
              key={n.amount}
              className={`absolute ${n.pos} ${n.show} w-56 rounded-xl border border-white/10 bg-black/70 p-3 shadow-xl shadow-black/40 backdrop-blur-sm`}
            >
              <div className="flex items-center justify-between text-[11px] text-white/45">
                <span>Payment received{n.time ? ` · ${n.time}` : ""}</span>
                <span>•••</span>
              </div>
              <div className="mt-1 text-sm font-semibold text-white">Transfer received</div>
              <div className="text-[11px] leading-snug text-white/55">
                You received a transfer of {n.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== WHAT I OFFER ===== */}
    <section className="bg-black px-6 py-20 text-white lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a1e]">
              <span className="h-2 w-2 rounded-full bg-[#ff5a1e]" />
              What I Offer
            </p>
            <h2 className="mt-5 text-5xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-6xl">
              Services
              <br />
              built to win
            </h2>
          </div>
          <div className="lg:pb-2 lg:text-right">
            <p className="text-white/70 lg:ml-auto lg:max-w-sm">
              Every build is designed with one goal in mind — getting you the results you came here
              for. No fluff, no filler.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 bg-[#ff5a1e] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* cards */}
        <div className="mt-12 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {OFFER.map((o) => (
            <Link
              key={o.n}
              href={o.href}
              className="group flex flex-col border-b border-r border-white/10 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-[#ff5a1e]"
            >
              <span className="font-mono text-sm font-bold text-[#ff5a1e] group-hover:text-white">
                {o.n}
              </span>
              <span className="mt-3 block h-px w-full bg-[#ff5a1e]/40 group-hover:bg-white/50" />
              <h3 className="mt-6 text-2xl font-extrabold uppercase leading-[1.05] text-white">
                {o.title[0]}
                <br />
                {o.title[1]}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55 group-hover:text-white/90">
                {o.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff5a1e] group-hover:text-white">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ===== THIS IS FOR YOU IF ===== */}
    <section className="relative overflow-hidden border-t border-[#ff5a1e]/25 bg-[#0a0604] px-6 py-20 text-white lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-[#ff5a1e]/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          This work is <span className="text-[#ff5a1e]">for you if:</span>
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {QUALIFY.map((card) => (
            <article
              key={card.n}
              className="group flex flex-col rounded-3xl border border-[#ff5a1e]/35 bg-gradient-to-b from-[#1c0e08] to-[#0a0604] p-3 transition-all duration-300 hover:-translate-y-2 hover:border-[#ff5a1e] hover:shadow-[0_24px_70px_-20px_rgba(255,90,30,0.55)]"
            >
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.img}
                  alt=""
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative px-3 pb-6 pt-9">
                <span className="absolute -top-5 left-3 grid h-11 w-11 place-items-center rounded-full bg-[#ff5a1e] text-lg font-extrabold text-white shadow-lg shadow-[#ff5a1e]/40">
                  {card.n}
                </span>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {card.parts.map((p, i) =>
                    p.hl ? (
                      <span key={i} className="font-semibold text-[#ff5a1e]">
                        {p.t}
                      </span>
                    ) : (
                      <span key={i}>{p.t}</span>
                    )
                  )}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#ff5a1e] px-10 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg shadow-[#ff5a1e]/30 transition-all hover:-translate-y-0.5 hover:opacity-95"
          >
            Yes, that&apos;s me!
          </Link>
        </div>
      </div>
    </section>

    {/* ===== BEHIND THE CODE ===== */}
    <section className="bg-[#0a0a0a] px-6 py-20 text-white lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* top: heading + intro */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-lg font-bold tracking-tight text-[#ff5a1e] sm:text-xl">
              Behind the Code
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              Shaping Experiences That Make Life Simpler
            </h2>
          </div>

          <div className="lg:pt-1">
            <p className="text-xl leading-snug text-white/90 sm:text-2xl">
              I&apos;m a web developer focused on building clean, fast interfaces that solve
              real-world problems.
            </p>
            <div className="mt-8 flex items-center justify-between gap-6">
              <p className="text-sm leading-snug text-white/55">
                Let&apos;s build something
                <br />
                meaningful together
              </p>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#ff5a1e] py-2 pl-5 pr-2 text-sm font-bold text-white"
              >
                Get in touch
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#ff5a1e]">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 image cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {CARDS.map((src, i) => (
            <div
              key={src}
              className={`overflow-hidden rounded-3xl bg-white/5 ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== ABOUT / BIO ===== */}
    <section className="relative overflow-hidden bg-[#0a0604] text-white">
      {/* top: image + bio */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-20">
        {/* image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/asif-about.png"
            alt="Asif — web developer"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        {/* bio */}
        <div className="lg:py-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#ff5a1e] sm:text-4xl">Asif</h2>
          <p className="mt-2 text-lg text-white/85">
            Freelance{" "}
            <span className="font-semibold text-white">web developer &amp; SEO specialist</span>.
          </p>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 sm:text-base">
            <p>
              I build <span className="font-semibold text-white">fast, search-optimised websites</span>{" "}
              that rank on Google and turn clicks into customers. Every site I ship is engineered for
              performance, visibility, and growth from the very first line of code — not bolted on
              afterwards.
            </p>
            <p>
              From responsive <span className="font-semibold text-white">WordPress and Shopify</span>{" "}
              stores to custom <span className="font-semibold text-white">Laravel, Python, and Next.js</span>{" "}
              web apps, I pick the right stack for your goals instead of forcing a one-size-fits-all
              template. Clean, semantic code means search engines understand your site — and visitors
              love using it.
            </p>
            <p>
              <span className="font-semibold text-[#ff5a1e]">SEO is built in, never an afterthought.</span>{" "}
              Optimised meta tags, structured data, mobile-first design, and fast{" "}
              <span className="font-semibold text-white">Core Web Vitals</span> help your pages climb
              the rankings and stay there — driving steady organic traffic without paying for every
              single click.
            </p>
            <p>
              Over <span className="font-semibold text-white">5+ years</span> I&apos;ve helped
              businesses across the{" "}
              <span className="font-semibold text-white">US, UK, UAE, and Pakistan</span> grow organic
              traffic by <span className="font-semibold text-[#ff5a1e]">200%+</span> and launch{" "}
              <span className="font-semibold text-white">50+ live websites and stores</span> — with
              clear communication, fixed quotes, and measurable results at every step.
            </p>
          </div>
        </div>
      </div>

      {/* bottom band */}
      <div className="border-t-2 border-[#ff5a1e]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:px-10">
          <h3 className="text-3xl font-extrabold uppercase leading-[1.04] tracking-tight text-[#ff5a1e] sm:text-4xl lg:text-5xl">
            Your first step toward a site that actually works
          </h3>
          <div className="lg:pl-6">
            <p className="text-lg font-bold tracking-tight sm:text-xl">
              Available worldwide · 100% remote
            </p>
            <p className="mt-1 text-white/60">Free, no-obligation consultation — replies within 24 hours.</p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 border border-white/25 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* ===== ORBIT PROJECTS ===== */}
    <section className="orbit-section py-12 text-white lg:py-16">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[#ff5a1e]/12 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="orbit-stage">
          <div className="orbit">
            {ORBIT.map((p, i) => (
              <div
                key={p.url}
                className="orbit-item"
                style={{
                  transform: `rotate(${(360 / ORBIT.length) * i}deg) translateY(calc(var(--orbit-r) * -1))`,
                }}
              >
                <div className="orbit-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={projectShot(p.url, 600, 460)} alt={p.title} loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          <div className="orbit-caption">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Let&apos;s Create Something{" "}
              <span className="bg-gradient-to-r from-[#ff5a1e] to-[#ffb020] bg-clip-text text-transparent">
                Exceptional
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:text-base">
              Let&apos;s collaborate to build a fast, modern website or web app that sets you apart.
              Get in touch!
            </p>
            <Link
              href="/projects"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#ff5a1e] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#ff5a1e]/30 transition-transform hover:scale-105"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* ===== BIG CTA ===== */}
    <section className="relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/cta1.png"
        alt="Asif — let's work together"
        className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-end px-6 pb-14 pt-32 text-center text-white">
        <h2 className="text-4xl font-bold leading-[1.05] tracking-tight drop-shadow-md sm:text-5xl lg:text-6xl">
          Let&apos;s Bring Your
          <br />
          Vision to Life
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
          Ready to create something extraordinary? Whether you need a fresh website, an online
          store, or a site that finally ranks — I&apos;d love to collaborate.
        </p>
        <Link
          href="/contact"
          className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-neutral-900 shadow-xl shadow-black/20 transition-transform hover:scale-105"
        >
          Get in touch
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#ff5a1e] text-white">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </section>

    {/* ===== BLOG / KNOWLEDGE ===== */}
    <section className="bg-[#0a0604] px-6 py-20 text-white lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a1e]">
              <span className="h-2 w-2 rounded-full bg-[#ff5a1e]" />
              Knowledge &amp; Tips
            </p>
            <h2 className="mt-5 text-5xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-6xl">
              Build smarter
              <br />
              sites
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-white/25 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
          >
            All articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <Link
              key={post.title}
              href="/blog"
              className="group flex flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col bg-[#141414] p-6 transition-colors duration-300 group-hover:bg-[#ff5a1e]">
                <span className="w-fit bg-[#ff5a1e] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-white group-hover:text-[#ff5a1e]">
                  {post.cat}
                </span>
                <h3 className="mt-4 text-xl font-bold leading-snug text-white">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55 transition-colors group-hover:text-white/90">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/45 transition-colors group-hover:text-white/80">
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff5a1e] transition-colors group-hover:text-white">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ===== FAQ ===== */}
    <section className="bg-[#0a0604] px-6 py-20 text-white lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* left — heading + description + image */}
        <div>
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a1e]">
            <span className="h-2 w-2 rounded-full bg-[#ff5a1e]" />
            FAQ
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Got questions?
            <br />
            I&apos;ve got answers.
          </h2>
          <p className="mt-4 max-w-md text-white/65">
            Everything you need to know before we start working together. Still unsure about
            something? Just reach out — I reply within 24 hours.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cta2.png"
            alt="Asif — web developer"
            className="mt-8 w-full max-w-sm rounded-2xl object-cover"
          />
        </div>

        {/* right — accordion */}
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group overflow-hidden rounded-xl border border-white/10 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 bg-[#141414] px-5 py-4 text-sm font-semibold text-white transition-colors group-open:bg-[#ff5a1e] sm:text-base">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <div className="bg-black px-5 py-4 text-sm leading-relaxed text-white/85">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* ===== CONTACT ===== */}
    <section className="border-t border-white/10 bg-black px-6 py-20 text-white lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* left — heading + description */}
        <div>
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a1e]">
            <span className="h-2 w-2 rounded-full bg-[#ff5a1e]" />
            Contact
          </p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let&apos;s start
            <br />
            your project
          </h2>
          <p className="mt-5 max-w-md text-white/65">
            Tell me about what you need and I&apos;ll get back to you within 24 hours — with a clear
            plan and a fixed quote. No obligation, just an honest next step.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/70">
            <li>
              <a href="mailto:raoasifriyasat@gmail.com" className="transition-colors hover:text-[#ff5a1e]">
                raoasifriyasat@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+923088663440" className="transition-colors hover:text-[#ff5a1e]">
                0308 8663440
              </a>
            </li>
            <li>Available worldwide — 100% remote</li>
          </ul>
        </div>

        {/* right — form */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <HireContactForm />
        </div>
      </div>
    </section>
    </main>

    {/* ===== FOOTER ===== */}
    <HireFooter />
    </>
  );
}
