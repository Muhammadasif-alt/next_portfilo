import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HireNav } from "@/components/portfolio/hire-nav";

const SKILLS = [
  { num: "01", label: "Web Development", href: "/services/web-development" },
  { num: "02", label: "Marketing & SEO", href: "/services/marketing" },
  { num: "03", label: "E-commerce & Automation", href: "/services/ecommerce" },
  { num: "04", label: "Support & Maintenance", href: "/services/support-maintenance" },
];

type Cta = { label: string; href: string };

type Props = {
  /** small line above the big heading */
  small: string;
  /** the big hero heading */
  title: string;
  /** optional bold tagline under the heading */
  taglineTitle?: string;
  /** optional supporting line under the tagline */
  taglineText?: string;
  /** optional primary (filled) button */
  primaryCta?: Cta;
  /** optional secondary (outline) button */
  secondaryCta?: Cta;
};

/* The home-style orange hero — reused across every page. */
export function HireHero({ small, title, taglineTitle, taglineText, primaryCta, secondaryCta }: Props) {
  return (
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
        src="/asif-hero-section.png"
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
      {/* mobile: keep the left solid so the copy is fully readable and the photo sits on the right */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to right, #9d1206 0%, rgba(157,18,6,0.94) 40%, rgba(157,18,6,0.4) 74%, rgba(157,18,6,0.08) 100%)",
        }}
      />
      {/* subtle bottom + top shading */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/45 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/25 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 lg:px-10">
        {/* NAV */}
        <HireNav />

        {/* HERO BODY — kept in the left zone so long titles never run over the face */}
        <div className="flex flex-1 flex-col justify-center py-16 lg:max-w-[680px] lg:py-24 xl:max-w-[820px]">
          <p className="text-2xl font-medium text-white/95 sm:text-3xl">{small}</p>
          <h1 className="-mt-1 font-extrabold leading-[0.9] tracking-tight text-white drop-shadow-sm text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem]">
            {title}
          </h1>

          {(taglineTitle || taglineText || primaryCta || secondaryCta) && (
            <div className="mt-8 max-w-md">
              {taglineTitle && (
                <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
                  {taglineTitle}
                </h2>
              )}
              {taglineText && (
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                  {taglineText}
                </p>
              )}

              {(primaryCta || secondaryCta) && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {primaryCta && (
                    <Link
                      href={primaryCta.href}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-900 shadow-lg shadow-black/10 transition-transform hover:scale-105"
                    >
                      {primaryCta.label}
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#e0330b] text-white">
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  )}
                  {secondaryCta && (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                    >
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              )}
            </div>
          )}
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
  );
}
