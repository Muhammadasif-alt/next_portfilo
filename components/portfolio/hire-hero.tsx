import Link from "next/link";
import { HireNav } from "@/components/portfolio/hire-nav";

const SKILLS = [
  { num: "01", label: "Web Development", href: "/services/web-development" },
  { num: "02", label: "Marketing & SEO", href: "/services/marketing" },
  { num: "03", label: "E-commerce & Automation", href: "/services/ecommerce" },
  { num: "04", label: "Support & Maintenance", href: "/services/support-maintenance" },
];

type Props = {
  /** small line above the big heading */
  small: string;
  /** the big hero heading */
  title: string;
  /** optional bold tagline under the heading */
  taglineTitle?: string;
  /** optional supporting line under the tagline */
  taglineText?: string;
};

/* The home-style orange hero — reused across every page. */
export function HireHero({ small, title, taglineTitle, taglineText }: Props) {
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
          <p className="text-2xl font-medium text-white/95 sm:text-3xl">{small}</p>
          <h1 className="-mt-1 font-extrabold leading-[0.9] tracking-tight text-white drop-shadow-sm text-5xl sm:text-7xl lg:text-[7.5rem]">
            {title}
          </h1>

          {(taglineTitle || taglineText) && (
            <div className="mt-8 max-w-md">
              {taglineTitle && (
                <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
                  {taglineTitle}
                </h2>
              )}
              {taglineText && (
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85 sm:text-base">
                  {taglineText}
                </p>
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
