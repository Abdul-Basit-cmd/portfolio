// components/sections/SideWork.tsx
import { sideWork } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function SideWork() {
  return (
    <section id="side-work" className="scroll-mt-24 py-28 md:py-40">
      <Container>
        <div className="rounded-2xl border border-border/60 bg-card p-10 md:p-16">
          <SectionHeading index={sideWork.index} title={sideWork.heading} />
          <Reveal className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            <p>{sideWork.paragraph}</p>
          </Reveal>
          <Reveal className="mt-10" delay={0.1}>
            <ArrowLink href={sideWork.cta.href} variant="primary">
              {sideWork.cta.label}
            </ArrowLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}