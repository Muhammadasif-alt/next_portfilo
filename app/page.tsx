import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Rocket,
  Code2,
  ShieldCheck,
  Headphones,
  Check,
  Megaphone,
  ShoppingBag,
  Settings,
} from "lucide-react";
import { PROJECTS, projectShot, type Project } from "@/lib/projects-data";
import { getSortedPosts } from "@/lib/blog-data";
import { HireContactForm } from "@/components/portfolio/hire-contact-form";
import { HeroVideo } from "@/components/portfolio/hero-video";
import { HireNav } from "@/components/portfolio/hire-nav";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { personSchema, businessSchema, websiteSchema, faqSchema } from "@/lib/schema";

/* Three featured builds. Names and categories come from the real projects data. */
const FEATURED: { headline: string; project: Project }[] = [
  { url: "https://ideadigital.services/", headline: "Rank Higher, Win Clients" },
  { url: "https://epicworkshops.com.sg", headline: "Book Workshops Online" },
  { url: "https://peelmaster.ae", headline: "Built For Pure Speed" },
].flatMap((f) => {
  const project = PROJECTS.find((p) => p.url === f.url);
  return project ? [{ headline: f.headline, project }] : [];
});

export const metadata: Metadata = {
  title: "Freelance Web Developer & SEO Specialist | Asif.dev",
  description:
    "I build fast, SEO-ready websites and stores in WordPress, Shopify and Next.js that rank on Google and turn clicks into clients. Freelance, worldwide, replies in 24h.",
  alternates: { canonical: "/" },
  openGraph: {
    images: ["/og.jpg"],
    title: "Freelance Web Developer & SEO Specialist",
    description:
      "I build fast, SEO-ready websites and stores in WordPress, Shopify and Next.js that rank on Google and turn clicks into clients. Freelance, worldwide, replies in 24h.",
  },
};

const SKILLS = [
  { num: "01", label: "Web Development", href: "/services/web-development" },
  { num: "02", label: "Marketing & SEO", href: "/services/marketing" },
  { num: "03", label: "E-commerce & Automation", href: "/services/ecommerce" },
  { num: "04", label: "Support & Maintenance", href: "/services/support-maintenance" },
];

// Shown in the hero on mobile (desktop shows the skills grid instead).
const HERO_STATS = [
  { icon: Rocket, num: "50+", label: "Projects Completed" },
  { icon: Code2, num: "5+", label: "Years of Experience" },
  { icon: ShieldCheck, num: "100%", label: "Client Satisfaction" },
  { icon: Headphones, num: "24/7", label: "Support & Maintenance" },
];

/* Real builds shown in the "Behind the Code" section, kept in sync with projects data. */
const CARDS: Project[] = [
  "https://dehleezstudio.com",
  "https://triokids.com.sg",
  "https://ridgerocklandscaping.com",
].flatMap((url) => {
  const p = PROJECTS.find((x) => x.url === url);
  return p ? [p] : [];
});

const NOTIFS = [
  { pos: "left-0 bottom-[28%] lg:-left-8", amount: "$3,396.00", time: "", show: "" },
  { pos: "right-0 bottom-[32%] lg:-right-8", amount: "$2,800.00", time: "", show: "hidden sm:block" },
  { pos: "left-0 bottom-[3%] lg:-left-6", amount: "$1,250.00", time: "15:24", show: "" },
];

type Part = { t: string; hl?: boolean };
const QUALIFY: { img: string; n: string; title: string; parts: Part[] }[] = [
  {
    img: "/card1-asif.webp",
    n: "1",
    title: "Rank and get noticed",
    parts: [
      { t: "You want a " },
      { t: "fast, modern website", hl: true },
      { t: " that ranks on Google and puts your business in front of the right people." },
    ],
  },
  {
    img: "/card2-asif-1.webp",
    n: "2",
    title: "Win clients every month",
    parts: [
      { t: "You dream of a site that turns visitors into " },
      { t: "real clients and sales", hl: true },
      { t: " — consistently, every single month, with results you can measure." },
    ],
  },
  {
    img: "/card3-asif-1.webp",
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
    desc: "Fast, SEO-ready websites and web apps in WordPress, Shopify, Laravel, and Next.js, built around your goals.",
    href: "/services/web-development",
  },
  {
    n: "02",
    title: ["Marketing", "& SEO"],
    desc: "Technical and on-page SEO plus Meta and Google campaigns. Audits, schema, content, and reporting that bring in real leads.",
    href: "/services/marketing",
  },
  {
    n: "03",
    title: ["E-commerce", "& Automation"],
    desc: "Online stores built to sell in Shopify and WooCommerce, plus automation that saves you hours every week.",
    href: "/services/ecommerce",
  },
  {
    n: "04",
    title: ["Support", "& Maintenance"],
    desc: "Updates, backups, security, and speed tuning. Sub-second load times that keep passing Core Web Vitals long after launch.",
    href: "/services/support-maintenance",
  },
];

/* Entry prices. These mirror the Starter tier on each service detail page. */
const PRICING: {
  icon: typeof Code2;
  name: string;
  price: string;
  period: string;
  tagline: string;
  points: string[];
  href: string;
}[] = [
  {
    icon: Code2,
    name: "Web Development",
    price: "From $499",
    period: "one-time",
    tagline: "A clean, fast professional site to get you online.",
    points: ["Custom, mobile-first design", "SEO-ready from day one", "Speed tuned before launch"],
    href: "/services/web-development",
  },
  {
    icon: Megaphone,
    name: "Marketing & SEO",
    price: "From $299",
    period: "/mo",
    tagline: "Get the foundations right and start climbing.",
    points: ["Technical and on-page SEO", "Content and schema", "Monthly reporting"],
    href: "/services/marketing",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce & Automation",
    price: "From $799",
    period: "one-time",
    tagline: "Get selling fast with a clean, solid store.",
    points: ["Shopify or WooCommerce", "Products and payments set up", "Automation that follows up"],
    href: "/services/ecommerce",
  },
  {
    icon: Settings,
    name: "Support & Maintenance",
    price: "From $99",
    period: "/mo",
    tagline: "Keep the lights on and the basics covered.",
    points: ["Updates and backups", "Security monitoring", "Small changes handled"],
    href: "/services/support-maintenance",
  },
];

/* The three newest real articles, straight from the blog. */
const POSTS = getSortedPosts().slice(0, 3);

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
    <JsonLd data={[personSchema(), businessSchema(), websiteSchema(), faqSchema(FAQS)]} />
    <main className="bg-[#0a0a0a]">
    <section
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(125% 125% at 68% 32%, #ff6a1f 0%, #e0330b 46%, #9d1206 100%)",
      }}
    >
      {/* full-bleed background video */}
      <HeroVideo />

      {/* light left fade so the copy stays readable, letting the video show through */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(24,6,3,0.78) 0%, rgba(60,12,5,0.34) 30%, rgba(90,18,7,0.08) 50%, transparent 66%)",
        }}
      />
      {/* mobile: a gentle overall darken so the copy stays readable over the centred subject */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to right, rgba(18,5,2,0.72) 0%, rgba(18,5,2,0.5) 48%, rgba(18,5,2,0.38) 100%)",
        }}
      />
      {/* subtle bottom + top shading */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/45 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/25 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 lg:px-10">
        {/* NAV */}
        <HireNav />

        {/* HERO BODY — kept in the left zone so the heading never runs over the face */}
        <div className="flex flex-1 flex-col justify-center py-16 lg:max-w-[680px] lg:py-24 xl:max-w-[820px]">
          <p className="text-2xl font-medium text-white/95 sm:text-3xl">Hey, I&apos;m Asif</p>
          <h1 className="-mt-1 font-extrabold leading-[0.9] tracking-tight text-white drop-shadow-sm text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem]">
            Web Developer
            <br />
            &amp; SEO Specialist
          </h1>

          {/* tagline — placed below the heading, clear of the photo */}
          <div className="mt-8 max-w-md">
            <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
              Great code should feel invisible.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              From the first line to launch, I build fast, SEO-ready websites and stores that rank on
              Google and turn clicks into paying clients.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-900 shadow-lg shadow-black/10 transition-transform hover:scale-105"
              >
                Start your project
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#e0330b] text-white">
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                View services
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM — mobile: stats list */}
        <div className="border-t border-white/15 py-4 lg:hidden">
          <div className="divide-y divide-white/10">
            {HERO_STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-4 py-3.5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#ff5a1e] text-white shadow-lg shadow-[#ff5a1e]/30">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <div className="text-2xl font-extrabold leading-none text-white">{s.num}</div>
                    <div className="mt-1 text-sm text-white/75">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM — desktop: skills grid */}
        <div className="hidden border-t border-white/15 py-8 lg:grid lg:grid-cols-4 lg:gap-x-6">
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
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-24">
        {/* LEFT — about me */}
        <div>
          <span className="inline-block rounded-full border border-white/25 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            About Me
          </span>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
            Hi, I&apos;m <span className="text-[#ff5a1e]">Asif</span>, a developer who ships.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
            For the past 5+ years I have built fast, SEO-ready websites, online stores, and web apps
            for clients across the US, UK, UAE, and Pakistan. From WordPress and Shopify to custom
            Laravel, Python, and Next.js builds, I pick the right stack for the job and ship work that
            performs in the real world.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            I care about the things that move the needle: clean code, real speed, search rankings, and
            designs that turn visitors into clients. No bloated templates, no handing your project
            into a black box. Just clear communication and results you can measure.
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
            <img src="/asif-laptop.webp" alt="Asif working" className="w-full object-cover" />
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
      <div className="mx-auto max-w-[1440px]">
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
      <div className="relative mx-auto max-w-[1440px]">
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
      <div className="mx-auto max-w-[1440px]">
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

        {/* 3 real builds */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {CARDS.map((p, i) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-colors hover:border-[#ff5a1e]/60 ${
                i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={projectShot(p.url)}
                alt={`${p.title} website, built by Asif`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-14">
                <div className="text-sm font-bold text-white">{p.title}</div>
                <div className="mt-0.5 text-xs text-[#ff5a1e]">{p.category}</div>
              </div>
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/60 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* ===== ABOUT / BIO ===== */}
    <section className="relative overflow-hidden bg-[#0a0604] text-white">
      {/* top: image + bio */}
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-20">
        {/* image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/asif-about.webp"
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
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:px-10">
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

    {/* ===== FEATURED PROJECTS ===== */}
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] px-6 py-20 text-white lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[#ff5a1e]/12 blur-[130px]" />
      <div className="relative mx-auto max-w-[1440px]">
        {/* header row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a1e]">
            <span className="h-2 w-2 rounded-full bg-[#ff5a1e]" />
            Featured Projects
          </p>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
          >
            View all projects
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20 transition-colors group-hover:border-[#ff5a1e] group-hover:bg-[#ff5a1e] group-hover:text-white">
              <Plus className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>

        <h2 className="mt-6 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Work that ships and <span className="text-[#ff5a1e]">performs</span>
        </h2>

        {/* cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {FEATURED.map(({ headline, project }) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#1c0e08] to-[#0a0604] p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff5a1e]/60"
            >
              {/* screenshot */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141414]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={projectShot(project.url)}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* body */}
              <div className="flex flex-1 items-end justify-between gap-4 px-3 pb-2 pt-5">
                <div>
                  <h3 className="text-xl font-extrabold leading-tight">{headline}</h3>
                  <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ff5a1e]">
                    {project.title}
                  </div>
                  <div className="mt-1 text-xs text-white/50">{project.category}</div>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-colors group-hover:border-[#ff5a1e] group-hover:bg-[#ff5a1e]">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* ===== PRICING ===== */}
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-20 text-white lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[#ff5a1e]/10 blur-[130px]" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a1e]">
            <span className="h-2 w-2 rounded-full bg-[#ff5a1e]" />
            Pricing
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Simple pricing, <span className="text-[#ff5a1e]">no surprises</span>
          </h2>
          <p className="mt-4 text-white/65">
            Starting prices for each service. Every project gets a fixed quote after a quick chat, so
            you know the full cost before any work begins.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff5a1e]/60"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#ff5a1e]/25 bg-[#ff5a1e]/10 text-[#ff5a1e]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[#ff5a1e]">{p.price}</span>
                  <span className="text-xs text-white/45">{p.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{p.tagline}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-white/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff5a1e]" strokeWidth={2.5} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors group-hover:border-[#ff5a1e] group-hover:bg-[#ff5a1e]"
                >
                  See packages
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* reassurance strip */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-[#ff5a1e]/25 bg-[#ff5a1e]/5 px-6 py-5 text-sm text-white/75">
          <span className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-[#ff5a1e]" strokeWidth={2.5} />
            Fixed quote upfront
          </span>
          <span className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-[#ff5a1e]" strokeWidth={2.5} />
            No hidden fees
          </span>
          <span className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-[#ff5a1e]" strokeWidth={2.5} />
            SEO and speed included
          </span>
          <span className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-[#ff5a1e]" strokeWidth={2.5} />
            Reply within 24 hours
          </span>
        </div>

        <p className="mt-8 text-center text-sm text-white/50">
          Not sure which one fits?{" "}
          <Link href="/contact" className="font-semibold text-[#ff5a1e] hover:underline">
            Tell me your goal
          </Link>{" "}
          and I will point you the right way.
        </p>
      </div>
    </section>

    {/* ===== BIG CTA ===== */}
    <section className="relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/cta1.webp"
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
      <div className="mx-auto max-w-[1440px]">
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
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.cover}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col bg-[#141414] p-6 transition-colors duration-300 group-hover:bg-[#ff5a1e]">
                <span className="w-fit bg-[#ff5a1e] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-white group-hover:text-[#ff5a1e]">
                  {post.category}
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
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
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
            src="/cta2.webp"
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
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
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
