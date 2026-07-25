// components/animations/ProjectCard.tsx
"use client";
import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { Reveal } from "@/components/animations/Reveal";
import { Tag } from "@/components/ui/Tag";
import { ArrowLink } from "@/components/ui/ArrowLink";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";

export function ProjectCard({
  project,
  align = "left",
}: {
  project: Project;
  align?: "left" | "right";
}) {
  const card = useRef<HTMLDivElement>(null);
  const imgWrap = useRef<HTMLDivElement>(null);
  const spotlight = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = card.current;
      const img = imgWrap.current;
      if (!el || !img) return;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      const xTo = gsap.quickTo(img, "x", { duration: 0.8, ease: "power3.out" });
      const yTo = gsap.quickTo(img, "y", { duration: 0.8, ease: "power3.out" });
      const sXTo = gsap.quickTo(spotlight.current, "x", {
        duration: 0.1,
        ease: "power3.out",
      });
      const sYTo = gsap.quickTo(spotlight.current, "y", {
        duration: 0.1,
        ease: "power3.out",
      });

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Image Parallax
        xTo(((rect.width / 2 - x) / rect.width) * 20);
        yTo(((rect.height / 2 - y) / rect.height) * 20);

        // Spotlight
        sXTo(x - 150); // 150 is half of spotlight width
        sYTo(y - 150);
      };

      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);

      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: card },
  );

  return (
    <Reveal
      className={cn(
        "grid items-center gap-8 md:grid-cols-12",
        align === "right" && "md:[direction:rtl]",
      )}
    >
      <div className="md:col-span-7 [direction:ltr]">
        <div
          ref={card}
          className="group relative overflow-hidden rounded-xl border border-border/60 bg-card"
        >
          {/* Spotlight */}
          <div
            ref={spotlight}
            className="pointer-events-none absolute z-10 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <div ref={imgWrap} className="will-change-transform">
            <Image
              src={project.image}
              alt={project.title}
              width={1280}
              height={800}
              sizes="(min-width: 768px) 60vw, 100vw"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 via-background/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="translate-y-4 p-8 transition-transform duration-500 group-hover:translate-y-0">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-5 [direction:ltr]">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>{project.index}</span>
          <span>·</span>
          <span>{project.category}</span>
        </div>
        <h3 className="mt-4 text-3xl font-medium tracking-tight">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Magnetic strength={0.3}>
            <ArrowLink href={project.liveUrl} variant="primary">
              Visit Live
            </ArrowLink>
          </Magnetic>
          {project.githubUrl && (
            <Magnetic strength={0.3}>
              <ArrowLink href={project.githubUrl} variant="ghost">
                GitHub
              </ArrowLink>
            </Magnetic>
          )}
        </div>
      </div>
    </Reveal>
  );
}
