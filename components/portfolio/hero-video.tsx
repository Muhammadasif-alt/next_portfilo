"use client";

import { useEffect, useRef } from "react";

/**
 * Background hero video. Client component so we can force the muted DOM
 * property (React only sets the attribute, which mobile browsers ignore for
 * autoplay), drive play() from several signals (mount, ready, in-view, first
 * interaction), and re-arm the loop if a browser ever stops it.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;

    const play = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    // Try as soon as possible and whenever the browser has enough data.
    play();
    v.addEventListener("loadeddata", play);
    v.addEventListener("canplay", play);
    // Belt-and-suspenders loop: some mobile browsers drop the loop attribute.
    v.addEventListener("ended", play);

    // Play once it scrolls into view (covers tabs that defer offscreen media).
    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && play()),
        { threshold: 0.1 }
      );
      io.observe(v);
    }

    // Last resort: kick it off on the first user gesture.
    const onInteract = () => play();
    document.addEventListener("touchstart", onInteract, { once: true, passive: true });
    document.addEventListener("click", onInteract, { once: true });
    document.addEventListener("scroll", onInteract, { once: true, passive: true });
    document.addEventListener("visibilitychange", play);

    return () => {
      v.removeEventListener("loadeddata", play);
      v.removeEventListener("canplay", play);
      v.removeEventListener("ended", play);
      io?.disconnect();
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("click", onInteract);
      document.removeEventListener("scroll", onInteract);
      document.removeEventListener("visibilitychange", play);
    };
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero-poster.webp"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_30%]"
    >
      <source src="/hero-video-mobile.mp4" type="video/mp4" />
    </video>
  );
}
