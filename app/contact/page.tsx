import type { Metadata } from "next";
import { Mail, MapPin, Clock, Phone, Plus } from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { ContactForm } from "@/components/portfolio/contact-form";

const EMAIL = "raoasifriyasat@gmail.com";
const PHONE = "03088663440";
const PHONE_HREF = "+923088663440";

export const metadata: Metadata = {
  title: "Contact Asif — Let's Build Something",
  description:
    "Get in touch with Asif for web development — WordPress, Shopify, Laravel, MERN, Next.js, and SEO. Fast replies within 24 hours.",
};

const INFO = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE_HREF}` },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
  { icon: MapPin, label: "Location", value: "Remote — worldwide" },
];

const FAQ = [
  {
    q: "How long does a project take?",
    a: "Most websites take 1–4 weeks depending on scope. A landing page can be a few days; a custom web app or store takes longer. I'll give you a clear timeline before we start.",
  },
  {
    q: "How much do you charge?",
    a: "Every project is different, so I quote a fixed price after a quick chat about what you need. No hidden fees — you'll know the full cost upfront.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. I offer flexible maintenance plans for updates, backups, security, and small changes — so your site stays fast and secure long after launch.",
  },
  {
    q: "Which platforms and technologies do you work with?",
    a: "WordPress, Shopify, PHP, Laravel, Python, the MERN stack, and Next.js — plus SEO and speed optimisation. I'll recommend the best fit for your goals.",
  },
  {
    q: "Will my site be SEO-friendly and fast?",
    a: "Always. Clean code, proper meta tags, schema, and Core Web Vitals tuning are baked into every build — not charged as an extra.",
  },
  {
    q: "Do you work with clients worldwide?",
    a: "Yes, I work fully remote with clients across every timezone. Communication is clear and consistent from start to finish.",
  },
];

export default function ContactPage() {
  return (
    <>
      <HireHero small="Let's talk" title="Contact" taglineTitle="Tell me about your project." taglineText="I'll get back to you within 24 hours with a clear plan and a fixed quote." />
      <main>
        {/* info + form */}
        <section className="border-b border-border py-20">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-16">
            {/* left — info */}
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Contact details
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Prefer email or want the quick details? Here&apos;s everything you need to reach me.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {INFO.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-brand/40">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
                        <div className="mt-1 text-sm font-medium text-foreground">{item.value}</div>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* right — form */}
            <div className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">I&apos;ll get back to you within 24 hours.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-10 text-center">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand">FAQ</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="space-y-3">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-border bg-card/50 p-5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-medium text-foreground">
                    {item.q}
                    <Plus className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <HireFooter />
    </>
  );
}
