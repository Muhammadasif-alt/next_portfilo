"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, projectShot, type ProjectCategory } from "@/lib/projects-data";

const shot = (url: string) => projectShot(url);

const TABS: ("All" | ProjectCategory)[] = [
  "All",
  "Web Development",
  "E-commerce",
  "Web Apps",
  "SEO and Growth",
];

export function ProjectsFilter() {
  const [active, setActive] = useState<(typeof TABS)[number]>("All");

  const shown = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div>
      {/* filter tabs */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {TABS.map((t) => {
          const on = t === active;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                on
                  ? "border-[#ff5a1e] bg-[#ff5a1e] text-white"
                  : "border-white/15 bg-white/[0.03] text-white/70 hover:border-[#ff5a1e]/50 hover:text-white"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-center text-sm text-white/50">
        Tap a category to see the projects that fit what you need.
      </p>

      {/* grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff5a1e]/60"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#141414]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot(p.url)}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg border border-white/15 bg-black/70 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="w-fit rounded-full bg-[#ff5a1e]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ff5a1e]">
                {p.category}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-white/60">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[11px] text-white/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ff5a1e]">
                View live site
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
