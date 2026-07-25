// components/sections/About.tsx
import { about } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Counter } from "@/components/ui/Counter";

export function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <Container>
        <SectionHeading index={about.index} title={about.heading} />
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-9 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60">
            {about.stats.map((s) => (
              <div key={s.label} className="bg-background p-6">
                <div className="text-3xl font-medium tracking-tight">
                  <Counter value={s.value} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
