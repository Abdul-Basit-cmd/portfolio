// components/animations/GsapProvider.tsx
"use client";
import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";

export function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(t);
    };
  }, []);
  return <>{children}</>;
}