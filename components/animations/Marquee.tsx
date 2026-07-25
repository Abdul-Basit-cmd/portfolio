// components/animations/Marquee.tsx
"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function Marquee({ items }: { items: readonly string[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.to(el, { xPercent: -50, repeat: -1, duration: 40, ease: "none" });
    },
    { scope: root }
  );

  const row = [...items, ...items];
  
  return (
    <div className="relative overflow-hidden border-y border-border/40 py-6 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div ref={root} className="flex w-max items-center gap-16 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="text-sm uppercase tracking-[0.25em] text-muted-foreground/60 transition-colors duration-300 hover:text-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}