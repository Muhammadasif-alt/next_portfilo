"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Search,
  CalendarCheck,
  FileText,
  Code2,
  Rocket,
  LifeBuoy,
  Check,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import "./process.css";

const STEPS = [
  {
    icon: Search,
    title: "Free Audit",
    tagline: "Honest review of your site or idea — free.",
    desc: "Share your site or idea and I'll review it completely free. You get honest feedback on what's holding you back and where the quick wins are — no commitment required.",
    points: ["No cost, no obligation", "Quick wins & blockers spotted", "Clear written feedback"],
  },
  {
    icon: CalendarCheck,
    title: "Discovery Call",
    tagline: "We talk goals, scope, and timeline.",
    desc: "We jump on a quick call or meeting to talk through your goals, scope, and timeline. Book a slot that suits you — no pressure, no jargon, just a real conversation.",
    points: ["Book a slot that suits you", "Plain talk, no jargon", "Goals & scope agreed"],
  },
  {
    icon: FileText,
    title: "Proposal & Fixed Quote",
    tagline: "Clear plan, fixed price, no surprises.",
    desc: "You get a clear plan with a fixed price and timeline before any work begins. No hidden fees, no surprises — you know exactly what you're paying and what you're getting.",
    points: ["Fixed price upfront", "No hidden fees", "Defined timeline"],
  },
  {
    icon: Code2,
    title: "Design & Build",
    tagline: "Clean code, SEO & speed baked in.",
    desc: "I design and build your site with clean code, SEO, and speed baked in from day one. You see progress along the way and give feedback as we go — nothing is a black box.",
    points: ["SEO & speed from day one", "Progress shared as we go", "Your feedback built in"],
  },
  {
    icon: Rocket,
    title: "Launch",
    tagline: "Go live — fast, secure, indexed.",
    desc: "We go live. I handle deployment, final testing, and make sure everything is fast, secure, and properly indexed by Google from the very start.",
    points: ["Deployment handled for you", "Final testing & QA", "Indexed by Google"],
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    tagline: "Updates, backups & changes, anytime.",
    desc: "Updates, backups, security, and small changes whenever you need them. Your site stays fast, safe, and in good hands long after launch.",
    points: ["Updates & backups", "Security monitoring", "Small changes anytime"],
  },
];

const AUTO_MS = 5000;
const TICK = 50;

export function Process() {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const pausedRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setProgress((p) => {
        const next = p + TICK;
        if (next >= AUTO_MS) {
          setIdx((i) => (i + 1) % STEPS.length);
          return 0;
        }
        return next;
      });
    }, TICK);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => (pausedRef.current = !e.isIntersecting)),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const select = (i: number) => {
    setIdx(i);
    setProgress(0);
    pausedRef.current = false;
  };

  const active = STEPS[idx];
  const ActiveIcon = active.icon;
  const tickPct = (progress / AUTO_MS) * 100;

  return (
    <section id="process" className="pr-sec" ref={sectionRef}>
      <div className="pr-glow" />
      <div className="pr-wrap">
        <div className="pr-eyebrow">How it works</div>
        <h2>From “hello” to launch — and beyond</h2>
        <p className="pr-sub">
          A simple, transparent process so you always know what&apos;s happening next. It starts
          with a free audit — no commitment required.
        </p>

        <div className="pr-grid">
          {/* LEFT — step list */}
          <div className="pr-cards">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className={`pr-card${i === idx ? " active" : ""}`}
                  onClick={() => select(i)}
                  onMouseEnter={() => (pausedRef.current = true)}
                  onMouseLeave={() => (pausedRef.current = false)}
                >
                  <div className="pr-top">
                    <span className="pr-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="pr-ico">
                      <Icon strokeWidth={1.75} />
                    </span>
                    <div className="pr-info">
                      <h3>{s.title}</h3>
                      <p>{s.tagline}</p>
                    </div>
                    <ArrowUpRight className="pr-arrow" />
                  </div>
                  <span className="pr-tick" style={{ width: i === idx ? `${tickPct}%` : 0 }} />
                </article>
              );
            })}
          </div>

          {/* RIGHT — detail panel */}
          <div className="pr-panel">
            <div className="pr-media" key={`media-${idx}`}>
              <ActiveIcon className="pr-glyph" strokeWidth={1} />
              <span className="pr-media-tag">Step {String(idx + 1).padStart(2, "0")}</span>
            </div>
            <div className="pr-pico" key={`ico-${idx}`}>
              <ActiveIcon strokeWidth={1.75} />
            </div>
            <h4 key={`title-${idx}`} className="pr-fade">
              {active.title}
            </h4>
            <p className="pr-desc pr-fade" key={`desc-${idx}`}>
              {active.desc}
            </p>
            <div className="pr-feats" key={`feats-${idx}`}>
              {active.points.map((f, i) => (
                <div className="pr-feat" key={i}>
                  <span className="pr-ck">
                    <Check strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Link className="pr-link" href="/contact">
              Book a free call
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
