// components/sections/Experience.tsx
import { experience } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-28 md:py-40">
      <Container>
        <SectionHeading index={experience.index} title={experience.heading} />
        <div className="mt-16">
          <ol className="relative border-l border-border/40 pl-8">
            {experience.items.map((item, i) => (
              <Reveal as="li" key={item.role} className="mb-12 last:mb-0" delay={i * 0.1}>
                <span className="absolute -left-[9px] mt-2 flex size-4 items-center justify-center rounded-full border border-border bg-background ring-4 ring-background">
                  <span className="size-1.5 rounded-full bg-foreground" />
                </span>
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-medium tracking-tight text-foreground">{item.role}</h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {item.period} · {item.duration}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((t) => (
                    <span key={t} className="rounded-full bg-foreground/[0.04] px-3 py-1 text-xs text-foreground/80 transition-colors hover:bg-foreground/10">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}