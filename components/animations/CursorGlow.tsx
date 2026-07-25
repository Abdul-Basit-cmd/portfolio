// components/animations/CursorGlow.tsx
"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function CursorGlow() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // Skip on touch

    gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });

    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      gsap.to(el, { opacity: 1, duration: 0.3 });
    };

    const onLeave = () => {
      gsap.to(el, { opacity: 0, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, { scope: root });

  return (
    <div
      ref={root}
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[400px] w-[400px] rounded-full opacity-0 mix-blend-soft-light"
      style={{
        background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
      }}
    />
  );
}