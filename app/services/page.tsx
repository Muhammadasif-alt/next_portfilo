import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { SERVICE_GROUPS, SERVICES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services — Asif, Web Developer",
  description:
    "Web development, digital marketing, and support services by Asif — WordPress, PHP, Laravel, Next.js, MERN, Shopify, Python, SEO, speed optimisation, maintenance, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand/10 blur-[130px]" />
          <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-16 lg:pt-40">
            <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              Services
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
              Everything you need, under one roof.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Three simple areas — web development, digital marketing, and ongoing support. Pick any
              service to see what I deliver, the errors I fix, and how I make it rank.
            </p>
          </div>
        </section>

        {/* groups */}
        <div className="mx-auto max-w-7xl space-y-20 px-6 py-20">
          {SERVICE_GROUPS.map((group) => {
            const GroupIcon = group.icon;
            return (
              <section key={group.key} id={group.key} className="scroll-mt-28">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                    <GroupIcon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                      {group.title}
                    </h2>
                    <p className="mt-1 text-muted-foreground">{group.subtitle}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items
                    .filter((item) => item.slug && SERVICES[item.slug])
                    .map((item) => {
                    const svc = SERVICES[item.slug as string];
                    const Icon = svc.icon;
                    return (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className="group relative flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-brand/50"
                      >
                        <div className="flex items-start justify-between">
                          <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                            <Icon className="h-5 w-5" strokeWidth={1.75} />
                          </span>
                          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-foreground">{svc.name}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {svc.tagline}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {svc.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
