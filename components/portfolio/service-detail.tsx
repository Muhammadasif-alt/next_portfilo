import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export type ServiceDetail = {
  slug: string;
  name: string;
  meta: { title: string; description: string };
  hero: { small: string; title: string; taglineTitle: string; taglineText: string };
  /** intro.body may contain \n\n to split into paragraphs */
  intro: { heading: string; body: string };
  included: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  tech: string[];
  packages: {
    name: string;
    price: string;
    period: string;
    tagline: string;
    features: string[];
    featured: boolean;
    cta: string;
  }[];
  faqs: { q: string; a: string }[];
  cta: { heading: string; body: string };
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a1e]">
      <span className="h-2 w-2 rounded-full bg-[#ff5a1e]" />
      {children}
    </p>
  );
}

export function ServiceDetailPage({ data }: { data: ServiceDetail }) {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: data.name,
            description: data.meta.description,
            slug: data.slug,
          }),
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: data.name, path: `/services/${data.slug}` },
          ]),
        ]}
      />
      <HireHero
        small={data.hero.small}
        title={data.hero.title}
        taglineTitle={data.hero.taglineTitle}
        taglineText={data.hero.taglineText}
        primaryCta={{ label: "Start your project", href: "/contact" }}
        secondaryCta={{ label: "All services", href: "/services" }}
      />

      <main className="bg-[#0a0a0a] text-white">
        {/* ===== INTRO ===== */}
        <section className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {data.intro.heading}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {data.intro.body.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHAT'S INCLUDED ===== */}
        <section className="border-b border-white/10 bg-black px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <Eyebrow>What&apos;s included</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Everything in a {data.name} project
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.included.map((it) => (
                <div key={it.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#ff5a1e]/25 bg-[#ff5a1e]/10 text-[#ff5a1e]">
                    <Check className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                  <h3 className="mt-4 text-base font-bold">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BENEFITS ===== */}
        <section className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>What you get</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Results, not just deliverables
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="font-mono text-sm font-bold text-[#ff5a1e]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section className="border-b border-white/10 bg-black px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                A clear path from start to launch
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.process.map((s, i) => (
                <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="font-mono text-xl font-extrabold text-[#ff5a1e]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TECH ===== */}
        <section className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Tools I use</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Built on tools that scale
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {data.tech.map((t) => (
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

        {/* ===== PACKAGES ===== */}
        <section className="border-b border-white/10 bg-black px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Simple, transparent packages
              </h2>
              <p className="mt-4 text-white/65">
                Starting prices — the final quote depends on scope. No hidden fees.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {data.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`flex flex-col rounded-3xl border p-8 ${
                    pkg.featured
                      ? "border-[#ff5a1e] bg-gradient-to-b from-[#1c0e08] to-[#0a0604] shadow-[0_24px_70px_-30px_rgba(255,90,30,0.6)]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {pkg.featured && (
                    <span className="mb-4 w-fit rounded-full bg-[#ff5a1e] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold">{pkg.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-[#ff5a1e]">{pkg.price}</span>
                    <span className="text-sm text-white/50">{pkg.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-white/60">{pkg.tagline}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff5a1e]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:scale-105 ${
                      pkg.featured
                        ? "bg-[#ff5a1e] text-white"
                        : "border border-white/25 text-white hover:bg-white/10"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Common questions
              </h2>
            </div>
            <div className="mt-12 space-y-3">
              {data.faqs.map((f) => (
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
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#ff5a1e]/30 bg-gradient-to-b from-[#1c0e08] to-[#0a0604] p-10 text-center sm:p-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{data.cta.heading}</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/65">{data.cta.body}</p>
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
