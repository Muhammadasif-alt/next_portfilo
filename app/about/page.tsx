import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe,
  ShoppingBag,
  Atom,
  Server,
  Braces,
  Search,
  Gauge,
} from "lucide-react";
import { HireNav } from "@/components/portfolio/hire-nav";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { HireHighlights } from "@/components/portfolio/hire-highlights";

export const metadata: Metadata = {
  title: "About Asif — Freelance Web Developer & SEO Specialist",
  description:
    "Get to know Asif — a freelance web developer and SEO specialist building fast, search-ready websites and web apps with WordPress, Shopify, Laravel, Python, and Next.js.",
};

const SKILLS = [
  { num: "01", label: "Web Development", href: "/services/web-development" },
  { num: "02", label: "Marketing & SEO", href: "/services/marketing" },
  { num: "03", label: "E-commerce & Automation", href: "/services/ecommerce" },
  { num: "04", label: "Support & Maintenance", href: "/services/support-maintenance" },
];

const NOTIFS = [
  { pos: "left-0 bottom-[28%] lg:-left-8", amount: "$3,396.00", time: "", show: "" },
  { pos: "right-0 bottom-[32%] lg:-right-8", amount: "$2,800.00", time: "", show: "hidden sm:block" },
  { pos: "left-0 bottom-[3%] lg:-left-6", amount: "$1,250.00", time: "15:24", show: "" },
];

const WORK_SKILLS = [
  { icon: Code2, name: "Web Development", pct: 98 },
  { icon: Globe, name: "WordPress", pct: 97 },
  { icon: ShoppingBag, name: "Shopify", pct: 93 },
  { icon: Atom, name: "React / Next.js", pct: 95 },
  { icon: Server, name: "Laravel / PHP", pct: 92 },
  { icon: Braces, name: "Python", pct: 88 },
  { icon: Search, name: "SEO", pct: 96 },
  { icon: Gauge, name: "Speed Optimization", pct: 94 },
];

export default function AboutPage() {
  return (
    <>
      <main className="bg-[#0a0a0a]">
        {/* ===== HERO ===== */}
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
              <p className="text-2xl font-medium text-white/95 sm:text-3xl">Get to know</p>
              <h1 className="-mt-1 font-extrabold leading-[0.86] tracking-tight text-white drop-shadow-sm text-6xl sm:text-7xl lg:text-[8.5rem]">
                About Me
              </h1>

              {/* tagline — placed below the heading, clear of the photo */}
              <div className="mt-8 max-w-md">
                <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
                  A developer obsessed with results.
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85 sm:text-base">
                  I&apos;m Asif — I turn ideas into fast, SEO-ready websites that rank on Google and
                  win clients. Here&apos;s a little about how I got here.
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
                My Story
              </span>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
                Hi, I&apos;m <span className="text-[#ff5a1e]">Asif</span> — and I&apos;ve been
                building the web since 2018.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
                What started as curiosity quickly became a craft. For the past 5+ years I&apos;ve
                helped businesses, founders, and agencies across the US, UK, UAE, and Pakistan turn
                ideas into fast, reliable websites and web apps — from WordPress and Shopify stores
                to custom Laravel, Python, and Next.js builds.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                I care about the things visitors never see but always feel: clean code, real speed,
                solid SEO, and a structure that&apos;s easy to grow. Every project is built to rank
                on Google and convert visitors into clients — with clear communication and results
                you can measure, not just a pretty portfolio piece.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
                {[
                  ["50+", "Projects shipped"],
                  ["5+", "Years experience"],
                  ["200%+", "Avg. traffic growth"],
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

        {/* ===== MY WORK SKILLS ===== */}
        <section className="relative overflow-hidden border-t border-[#ff5a1e]/25 bg-[#0a0604] px-6 py-20 text-white lg:px-10 lg:py-28">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-[#ff5a1e]/15 blur-[120px]" />
          <div className="relative mx-auto max-w-7xl">
            {/* header */}
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                My Work <span className="text-[#ff5a1e]">Skills</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                The tools and technologies I use every day to build fast, SEO-ready websites and web
                apps — and the level I bring to each one.
              </p>
            </div>

            {/* grid */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {WORK_SKILLS.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.name}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff5a1e]/60 hover:bg-white/[0.05]"
                  >
                    <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl border border-[#ff5a1e]/25 bg-[#ff5a1e]/10 text-[#ff5a1e] transition-colors group-hover:bg-[#ff5a1e] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-white">{s.name}</h3>
                    <div className="mt-4 h-6 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="flex h-full items-center justify-center rounded-full bg-[#ff5a1e] text-[11px] font-bold text-white"
                        style={{ width: `${s.pct}%` }}
                      >
                        {s.pct}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== WHAT DRIVES ME (flip cards) ===== */}
        <HireHighlights />
      </main>

      {/* ===== FOOTER ===== */}
      <HireFooter />
    </>
  );
}
