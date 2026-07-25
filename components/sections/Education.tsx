// components/sections/Education.tsx
import { education } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-28 md:py-40">
      <Container>
        <SectionHeading index={education.index} title={education.heading} />
        <div className="mt-16">
          <ol className="relative border-l border-border/40 pl-8">
            {education.items.map((item, i) => (
              <Reveal as="li" key={item.title} className="mb-12 last:mb-0" delay={i * 0.1}>
                <span className="absolute -left-[9px] mt-2 flex size-4 items-center justify-center rounded-full border border-border bg-background ring-4 ring-background">
                  <span className="size-1.5 rounded-full bg-foreground" />
                </span>
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-medium tracking-tight text-foreground">{item.title}</h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-emerald-500/90">{item.status}</p>
                <p className="mt-1 text-sm text-muted-foreground/80">{item.place}</p>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}