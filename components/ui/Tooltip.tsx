// components/ui/Tooltip.tsx
"use client";
import { useRef, useState, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function Tooltip({
  content,
  children,
  side = "top",
}: {
  content: string;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}) {
  const root = useRef<HTMLDivElement>(null);
  const tip = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useGSAP(
    () => {
      const el = tip.current;
      if (!el) return;
      if (visible) {
        gsap.fromTo(
          el,
          { autoAlpha: 0, scale: 0.8, y: side === "top" ? 4 : -4 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(el, { autoAlpha: 0, scale: 0.8, duration: 0.2, ease: "power2.in" });
      }
    },
    { scope: root, dependencies: [visible, side] }
  );

  return (
    <div
      ref={root}
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      <span
        ref={tip}
        className={cn(
          "pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0",
          side === "top" && "bottom-full mb-2 left-1/2 -translate-x-1/2",
          side === "bottom" && "top-full mt-2 left-1/2 -translate-x-1/2"
        )}
      >
        {content}
      </span>
    </div>
  );
}