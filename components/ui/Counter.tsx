// components/ui/Counter.tsx
"use client";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function Counter({ value, className }: { value: string; className?: string }) {
  const root = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = root.current;
    if (!el) return;

    // Extract numeric part (e.g., "4+" -> 4)
    const match = value.match(/(\d+)/);
    if (!match) return; // If it's text like "MERN", do nothing

    const targetNum = parseInt(match[1], 10);
    const suffix = value.replace(match[1], ""); // Get the "+" or other text

    const obj = { val: 0 };

    gsap.to(obj, {
      val: targetNum,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
      onUpdate: () => {
        el.textContent = Math.floor(obj.val) + suffix;
      },
    });
  }, { scope: root });

  // If it's a text value, just render it
  if (!value.match(/(\d+)/)) {
    return <span className={className}>{value}</span>;
  }

  return <span ref={root} className={className}>0</span>;
}