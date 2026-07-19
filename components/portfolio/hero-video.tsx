"use client";

import { useEffect, useRef } from "react";

/**
 * Background hero video. Kept as a client component so we can force the muted
 * DOM property (React only sets the attribute, which mobile browsers ignore for
 * autoplay) and call play() ourselves, with a first-interaction retry for
 * browsers that still block it.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    tryPlay();

    const onInteract = () => tryPlay();
    document.addEventListener("touchstart", onInteract, { once: true, passive: true });
    document.addEventListener("click", onInteract, { once: true });
    document.addEventListener("scroll", onInteract, { once: true, passive: true });

    return () => {
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("click", onInteract);
      document.removeEventListener("scroll", onInteract);
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
      <source src="/hero-video-combined.mp4" type="video/mp4" />
    </video>
  );
}
