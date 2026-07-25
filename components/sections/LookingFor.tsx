// components/sections/LookingFor.tsx
import { lookingFor } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

export function LookingFor() {
  return (
    <section id="looking-for" className="scroll-mt-24 py-28 md:py-40">
      <Container>
        <SectionHeading index={lookingFor.index} title={lookingFor.heading} />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {lookingFor.items.map((item, i) => (
            <Reveal
              key={item.title}
              className="rounded-xl border border-border/60 bg-card p-8"
              delay={i * 0.1}
            >
              <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}