import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

import { techLogos } from "../data/assets";

const SiIcons = {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
};

export default function TechStrip() {
  // Duplicate the array for seamless infinite scrolling
  const logos = [...techLogos, ...techLogos];

  return (
    <section className="border-y border-line/70 py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="mb-8 text-center font-mono text-[12px] tracking-[0.3em] text-muted">
          TRUSTED BY TEAMS BUILDING AT
        </p>

        <div className="relative overflow-hidden">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="marquee flex w-max items-center gap-12 grayscale opacity-70">
            {logos.map((tech, index) => {
              const Icon = SiIcons[tech.icon];
              if (!Icon) return null;

              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex h-12 w-12 shrink-0 items-center justify-center"
                >
                  <Icon
                    title={tech.name}
                    aria-label={tech.name}
                    className="h-7 w-7 text-ink/70 transition-all duration-300 hover:scale-110 hover:opacity-100"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}