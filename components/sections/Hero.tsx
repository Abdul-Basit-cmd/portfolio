// components/sections/Hero.tsx
"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { hero } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Marquee } from "@/components/animations/Marquee";
import { Magnetic } from "@/components/ui/Magnetic";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      // Using fromTo prevents the invisible-on-load bug
      tl.fromTo("[data-hero='badge']", 
          { y: 12, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6 }
        )
        .fromTo(
          "[data-hero='line']",
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, stagger: 0.12, duration: 1.1 },
          "-=0.2"
        )
        .fromTo("[data-hero='paragraph']", 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8 }, 
          "-=0.6"
        )
        .fromTo(
          "[data-hero='cta']",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.7 },
          "-=0.5"
        )
        .fromTo("[data-hero='scroll']", 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.8 }, 
          "-=0.2"
        );
    },
    { scope: root }
  );

  return (
    <section ref={root} id="top" className="relative flex min-h-[100svh] flex-col">
      <Container className="flex flex-1 flex-col justify-center pt-32 pb-20">
        <span
          data-hero="badge"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
          {hero.badge}
        </span>

        <h1 className="mt-8 text-balance font-sans text-[clamp(2.75rem,7vw,6rem)] font-medium leading-[0.98] tracking-[-0.03em]">
          {hero.headingLines.map((line) => (
            <span key={line} className="block overflow-hidden">
              <span data-hero="line" className="block">
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          data-hero="paragraph"
          className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          {hero.paragraph}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {/* Added Magnetic interaction to the primary CTA */}
          <Magnetic strength={0.4} className="inline-block" data-hero="cta">
            <ArrowLink href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </ArrowLink>
          </Magnetic>
          
          <div data-hero="cta" className="inline-block">
            <ArrowLink href={hero.secondaryCta.href} variant="ghost" download>
              {hero.secondaryCta.label}
            </ArrowLink>
          </div>
        </div>
      </Container>

      <Marquee items={hero.trustedBy} />

      <div
        data-hero="scroll"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground"
      >
        Scroll ↓
      </div>
    </section>
  );
}