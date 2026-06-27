"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function HireNav() {
  const [open, setOpen] = useState(false);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="relative flex items-center justify-between py-7">
      <Link
        href="/"
        onClick={() => setOpen(false)}
        className="text-2xl font-extrabold tracking-tight"
      >
        Asif<span className="text-white/60">.dev</span>
      </Link>

      {/* desktop links */}
      <div className="hidden items-center gap-9 text-sm font-medium md:flex">
        {LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="text-white/90 transition-colors hover:text-white"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* desktop CTA */}
      <Link
        href="/contact"
        className="group hidden items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-bold text-neutral-900 shadow-lg shadow-black/10 md:inline-flex"
      >
        Get in touch
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e0330b] text-white">
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>

      {/* mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:hidden"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* mobile panel */}
      {open && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 origin-top rounded-2xl border border-white/15 bg-[#9d1206]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-md md:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-white py-3 text-sm font-bold text-neutral-900"
            >
              Get in touch
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e0330b] text-white">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
