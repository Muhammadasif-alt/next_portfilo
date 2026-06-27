import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { PROJECTS, projectShot } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Projects — Asif, Web Developer",
  description:
    "A portfolio of live websites, e-commerce stores, and web apps built by Asif — WordPress, Shopify, Laravel, MERN, and Next.js. Click any project to visit the real site.",
};

const shot = (url: string) => projectShot(url, 900, 675);

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* hero with background image */}
        <section className="relative flex min-h-[55vh] items-center overflow-hidden border-b border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://picsum.photos/seed/asif-projects-bg/1920/1080"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/45" />
          <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-16 lg:pt-40">
            <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              Selected Work
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
              Projects I&apos;ve designed &amp; built.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              Real, live websites and stores — from Shopify e-commerce to custom WordPress builds and
              web apps. Click any project to visit the real site.
            </p>
          </div>
        </section>

        {/* grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/50 transition-colors hover:border-brand/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot(p.url)}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg border border-border bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="font-mono text-xs uppercase tracking-[0.15em] text-brand">{p.tag}</div>
                    <h2 className="mt-2 text-lg font-semibold text-foreground">{p.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Like what you see?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Let&apos;s build something just as good for you. Tell me about your project and I&apos;ll
              reply within 24 hours.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
