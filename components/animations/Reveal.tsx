// components/animations/Reveal.tsx
"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
  start = "top 85%",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  start?: string;
  as?: ElementType;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay,
          scrollTrigger: { trigger: el, start },
        },
      );
    },
    { scope: root, dependencies: [y, delay, start] },
  );

  return (
    <Tag ref={root as never} className={className}>
      {children}
    </Tag>
  );
}