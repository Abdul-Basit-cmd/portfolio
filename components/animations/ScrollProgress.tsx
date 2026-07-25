// components/animations/ScrollProgress.tsx
"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = bar.current;
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.set(el, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(el, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    },
    { scope: bar }
  );

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div ref={bar} className="h-full w-full bg-foreground/20" />
    </div>
  );
}