// lib/gsap.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Register animation plugins once, client-side only.
// NOTE: useGSAP is a hook — never pass it to registerPlugin.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

// Linear/Stripe-like global defaults
gsap.defaults({ duration: 0.9, ease: "power3.out" });
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, SplitText, useGSAP };