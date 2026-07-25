// components/sections/Faq.tsx
"use client";
import { useRef, useState } from "react";
import { faq } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-28 md:py-40">
      <Container>
        <SectionHeading index={faq.index} title={faq.heading} />
        <div className="mt-16 max-w-3xl">
          <div className="border-t border-border/40">
            {faq.items.map((item, i) => (
              <FaqItem 
                key={item.q} 
                item={item} 
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaqItem({ item, isOpen, onToggle }: { item: { q: string; a: string }, isOpen: boolean, onToggle: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = content.current;
    if (!el) return;
    
    if (isOpen) {
      gsap.to(el, { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" });
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power3.in" });
    }
  }, [isOpen]);

  return (
    <Reveal className="border-b border-border/40">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className={cn("text-lg font-medium transition-colors duration-300", isOpen ? "text-foreground" : "text-muted-foreground")}>
          {item.q}
        </span>
        <div className={cn("flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300", isOpen ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground")}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={cn("transition-transform duration-300", isOpen && "rotate-45")}>
            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </button>
      <div ref={content} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <p className="pb-6 pr-12 leading-relaxed text-muted-foreground">
          {item.a}
        </p>
      </div>
    </Reveal>
  );
}