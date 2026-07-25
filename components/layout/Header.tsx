// components/layout/Header.tsx
"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { site, nav } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";

export function Header() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Track active section cleanly with IntersectionObserver
  useEffect(() => {
    const sections = nav.map((item) => item.href.substring(1)).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" } // Triggers when section is in the middle of the screen
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.unobserve(el);
    });
  }, []);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      // Hide/Show on scroll
      ScrollTrigger.create({
        start: "100px top",
        onUpdate: (self) => {
          if (self.direction === -1) {
            // Scrolling up
            gsap.to(el, { y: 0, duration: 0.4, ease: "power2.out" });
            el.classList.add("bg-background/60", "backdrop-blur-lg", "border-border/60");
            el.classList.remove("border-transparent");
          } else {
            // Scrolling down
            gsap.to(el, { y: "-110%", duration: 0.4, ease: "power2.in" });
          }
        },
      });
    },
    { scope: root }
  );

  return (
    <>
      <header
        ref={root}
        className="fixed inset-x-0 top-0 z-40 border-b border-transparent transition-colors duration-300"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="text-sm font-medium tracking-tight">
            {site.name}
          </Link>
          
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative text-sm transition-colors duration-300",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  <span 
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-foreground transition-all duration-300 ease-out",
                      isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    )} 
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Magnetic strength={0.3}>
              <Link
                href={`mailto:${site.email}`}
                className="rounded-full border border-border/60 px-5 py-2 text-xs transition-colors hover:bg-foreground/5"
              >
                Let&apos;s Talk →
              </Link>
            </Magnetic>
          </div>

          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="h-px w-6 bg-foreground" />
            <span className="h-px w-6 bg-foreground" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex justify-end p-6">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-2xl">
              ✕
            </button>
          </div>
          <nav className="mt-10 flex flex-col items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-medium tracking-tight"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}