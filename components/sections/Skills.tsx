// components/sections/Skills.tsx
import { skills } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-28 md:py-40">
      <Container>
        <SectionHeading index={skills.index} title={skills.heading} />
        <Reveal className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          <p>{skills.intro}</p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-12">
          {skills.groups.map((group, i) => (
            <Reveal 
              key={group.category} 
              delay={i * 0.05}
              className="grid grid-cols-1 items-start gap-6 border-t border-border/40 pt-8 md:grid-cols-4"
            >
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3 md:col-span-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-full bg-foreground/[0.04] px-4 py-2 text-sm text-foreground/80 transition-all duration-300 hover:bg-foreground/10 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}