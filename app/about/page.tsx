import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { Button } from "@/components/ui/button";
import { SERVICE_LIST } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "About Asif — Freelance Web Developer",
  description:
    "I'm Asif, a freelance web developer building fast, SEO-ready websites and web apps with WordPress, Laravel, the MERN stack, Next.js, and more.",
};

const APPROACH = [
  "Clean, maintainable code — never copy-paste spaghetti",
  "SEO and speed baked in from the first line, not bolted on later",
  "Clear communication and honest timelines, start to finish",
  "Support after launch — I don't disappear once you go live",
];

const STATS: [string, string][] = [
  ["50+", "Projects delivered"],
  ["5+", "Years of experience"],
  ["8", "Technologies mastered"],
  ["24h", "Average reply time"],
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* intro */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-brand/5 blur-[130px]" />
          <div className="mx-auto max-w-5xl px-6 pb-16 pt-32 lg:pt-40">
            <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              About me
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Hi, I&apos;m Asif — a freelance web developer who builds for speed, SEO, and results.
            </h1>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                For the past few years I&apos;ve helped businesses, founders, and agencies turn ideas
                into fast, reliable websites and web apps. I work across the full stack — from
                content-managed WordPress and Shopify stores to custom PHP, Laravel, Python, and
                modern JavaScript apps with the MERN stack and Next.js.
              </p>
              <p>
                I care about the things your visitors never see but always feel: clean code, quick
                load times, solid security, and a structure that&apos;s easy to grow. Every project I
                ship is built to rank on Google and convert visitors into clients — not just to look
                good in a portfolio.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/#contact">Work with me</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent text-foreground hover:bg-accent hover:text-foreground"
              >
                <Link href="/#work">See my work</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-20 px-6 py-20">
          {/* stats */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map(([n, l]) => (
              <div key={l} className="rounded-xl border border-border bg-card/50 p-5">
                <div className="text-3xl font-extrabold text-foreground">{n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>

          {/* approach */}
          <section>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand">How I work</span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              My approach
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {APPROACH.map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-foreground/80">{a}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* skills */}
          <section>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand">What I work with</span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Skills & services
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICE_LIST.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-brand/50"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-medium text-foreground">{s.name.replace(" Development", "").replace(" Optimization", "")}</span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* CTA */}
          <div className="rounded-2xl border border-border bg-card/50 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">Let&apos;s build something great</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <Button asChild size="lg" className="mt-7 rounded-full">
              <Link href="/#contact">
                Get in touch <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
