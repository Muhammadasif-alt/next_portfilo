import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/",
    path: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0Z",
  },
  {
    label: "X",
    href: "https://twitter.com/",
    path: "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z",
  },
];

export function HireFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#ff5a1e]/30 px-6 py-14 text-white lg:px-10">
      {/* background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/footer.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/82" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* brand */}
          <div className="max-w-sm">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              Asif<span className="text-[#ff5a1e]">.dev</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Freelance web developer building fast, SEO-ready websites and stores that turn
              visitors into clients.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-white/60 transition-colors hover:border-[#ff5a1e] hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/40">Explore</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  ["Home", "/"],
                  ["About", "/about"],
                  ["Projects", "/projects"],
                  ["Services", "/services"],
                  ["Blog", "/blog"],
                ].map(([l, h]) => (
                  <li key={l}>
                    <Link href={h} className="text-white/65 transition-colors hover:text-[#ff5a1e]">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/40">Services</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  ["Web Development", "/services/web-development"],
                  ["Marketing & SEO", "/services/marketing"],
                  ["E-commerce", "/services/ecommerce"],
                  ["Support", "/services/support-maintenance"],
                ].map(([l, h]) => (
                  <li key={l}>
                    <Link href={h} className="text-white/65 transition-colors hover:text-[#ff5a1e]">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/40">Get in touch</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                <li>
                  <a href="mailto:raoasifriyasat@gmail.com" className="flex items-center gap-2.5 transition-colors hover:text-[#ff5a1e]">
                    <Mail className="h-4 w-4 shrink-0 text-white/40" />
                    raoasifriyasat@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+923088663440" className="flex items-center gap-2.5 transition-colors hover:text-[#ff5a1e]">
                    <Phone className="h-4 w-4 shrink-0 text-white/40" />
                    03088663440
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-white/40" />
                  Available worldwide — remote
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Asif — Web Development. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
