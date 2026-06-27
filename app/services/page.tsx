import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Megaphone,
  ShoppingBag,
  Settings,
  Search,
  CalendarCheck,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import { HireHeader } from "@/components/portfolio/hire-header";
import { HireFooter } from "@/components/portfolio/hire-footer";

export const metadata: Metadata = {
  title: "Services — Web Development, SEO, E-commerce & Support | Asif",
  description:
    "Four ways I help your business win online: web development, marketing & SEO, e-commerce & automation, and support & maintenance — all fast, SEO-ready, and built to convert.",
};

const SERVICES = [
  {
    icon: Code2,
    num: "01",
    title: "Web Development",
    desc: "Fast, SEO-ready websites and web apps — built around your goals, not a template.",
    items: ["WordPress & WooCommerce", "Custom PHP & Laravel", "React & Next.js apps", "Clean, scalable code"],
    href: "/services/web-development",
  },
  {
    icon: Megaphone,
    num: "02",
    title: "Marketing & SEO",
    desc: "Get found on Google and turn traffic into real, paying leads — every month.",
    items: ["Technical & on-page SEO", "Meta (Facebook / IG) Ads", "Content & social media", "Analytics & reporting"],
    href: "/services/marketing",
  },
  {
    icon: ShoppingBag,
    num: "03",
    title: "E-commerce & Automation",
    desc: "Stores that sell and systems that run — so you grow without the busywork.",
    items: ["Shopify & WooCommerce", "Checkout & payment setup", "Python automation", "APIs & integrations"],
    href: "/services/ecommerce",
  },
  {
    icon: Settings,
    num: "04",
    title: "Support & Maintenance",
    desc: "Keep your site fast, secure, and always online long after launch.",
    items: ["Speed & Core Web Vitals", "Updates, backups & security", "Bug fixes & small changes", "Contact forms & SMTP"],
    href: "/services/support-maintenance",
  },
];

const STEPS = [
  { icon: Search, title: "Free Audit", desc: "I review your site or idea — honest feedback, no cost." },
  { icon: CalendarCheck, title: "Plan & Quote", desc: "A clear scope, fixed price, and timeline before we start." },
  { icon: Rocket, title: "Design & Launch", desc: "Clean, fast, SEO-ready build — shipped and indexed." },
  { icon: LifeBuoy, title: "Ongoing Support", desc: "Updates, backups, and changes whenever you need them." },
];

export default function ServicesPage() {
  return (
    <>
      <HireHeader />
      <main className="bg-[#0a0a0a] text-white">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 lg:px-10 lg:py-28">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[760px] -translate-x-1/2 rounded-full bg-[#ff5a1e]/15 blur-[130px]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a1e]">
              <span className="h-2 w-2 rounded-full bg-[#ff5a1e]" />
              Services
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              Everything your business needs to{" "}
              <span className="text-[#ff5a1e]">win online</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Four focused services — from the first line of code to long-term support. Fast,
              SEO-ready, and built to turn visitors into clients.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#ff5a1e] px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

        {/* ===== 4 SERVICE CARDS ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.num}
                  href={s.href}
                  className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff5a1e]/60 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-xl border border-[#ff5a1e]/25 bg-[#ff5a1e]/10 text-[#ff5a1e] transition-colors group-hover:bg-[#ff5a1e] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-sm font-bold text-white/30">/ {s.num}</span>
                  </div>
                  <h2 className="mt-6 text-2xl font-extrabold tracking-tight">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{s.desc}</p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-white/75">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a1e]" />
                        {it}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff5a1e]">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ===== HOW I WORK ===== */}
        <section className="border-t border-white/10 bg-black px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a1e]">
                <span className="h-2 w-2 rounded-full bg-[#ff5a1e]" />
                How it works
              </p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                A simple, transparent process
              </h2>
              <p className="mt-4 text-white/65">
                From first hello to launch and beyond — you always know what&apos;s next.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#ff5a1e]/25 bg-[#ff5a1e]/10 text-[#ff5a1e]">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </span>
                      <span className="font-mono text-xs font-bold text-white/30">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#ff5a1e]/30 bg-gradient-to-b from-[#1c0e08] to-[#0a0604] p-10 text-center sm:p-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/65">
              Tell me what you&apos;re trying to achieve and I&apos;ll point you in the right
              direction — with a clear plan and a fixed quote, free.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#ff5a1e] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>
      <HireFooter />
    </>
  );
}
