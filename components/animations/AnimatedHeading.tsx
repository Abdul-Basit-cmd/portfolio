// components/animations/AnimatedHeading.tsx
"use client";
import { useRef, type ElementType } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

type RevealBy = "lines" | "words" | "chars";

export function AnimatedHeading({
  children,
  as: Tag = "h2",
  by = "lines",
  className,
  delay = 0,
  start = "top 85%",
}: {
  children: string;
  as?: ElementType;
  by?: RevealBy;
  className?: string;
  delay?: number;
  start?: string;
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const split = new SplitText(el, {
        type: "lines,words",
        linesClass: "split-line",
        mask: "lines",
      });

      const targets =
        by === "words" ? split.words : by === "chars" ? split.chars : split.lines;

      if (reduce) {
        gsap.set(targets, { yPercent: 0, opacity: 1 });
        return () => split.revert();
      }

      gsap.set(targets, { yPercent: 120, opacity: 0 });
      const ctx = gsap.context(() => {
        gsap.to(targets, {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          stagger: by === "chars" ? 0.02 : by === "words" ? 0.06 : 0.12,
          delay,
          scrollTrigger: { trigger: el, start },
        });
      }, root);

      return () => {
        ctx.revert();
        split.revert();
      };
    },
    { scope: root, dependencies: [by, delay, start] },
  );

  return (
    <Tag ref={root as never} className={className}>
      {children}
    </Tag>
  );
}