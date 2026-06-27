"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./preloader.css";

const MIN_SHOW_MS = 1500; // minimum time the loader stays visible

export function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);
  const pathname = usePathname();
  const orange = pathname === "/";

  // hide after the page has loaded, but keep it on screen at least MIN_SHOW_MS
  useEffect(() => {
    const start = performance.now();
    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_SHOW_MS - elapsed);
      window.setTimeout(() => setHidden(true), wait);
    };

    if (document.readyState === "complete") finish();
    else {
      window.addEventListener("load", finish, { once: true });
      // safety fallback if `load` never fires
      const fallback = window.setTimeout(finish, 4000);
      return () => {
        window.removeEventListener("load", finish);
        window.clearTimeout(fallback);
      };
    }
  }, []);

  // unmount after the fade-out transition completes
  useEffect(() => {
    if (!hidden) return;
    const t = window.setTimeout(() => setRemoved(true), 650);
    return () => window.clearTimeout(t);
  }, [hidden]);

  // lock scroll while visible
  useEffect(() => {
    if (removed) return;
    document.body.style.overflow = hidden ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden, removed]);

  if (removed) return null;

  return (
    <div
      className={`pl-root ${orange ? "pl-orange" : ""} ${hidden ? "pl-hide" : ""}`}
      aria-hidden={hidden}
      role="status"
    >
      <div className="pl-spinner">
        <div className="pl-dots">
          <span />
          <span />
        </div>
        <div className="pl-dashed" />
        <div className="pl-core">
          <span>A</span>
        </div>
      </div>
      <div className="pl-text">LOADING...</div>
    </div>
  );
}
