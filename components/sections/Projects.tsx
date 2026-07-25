// components/sections/Projects.tsx
import { projects } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/animations/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="py-28 md:py-40">
      <Container>
        <SectionHeading index={projects.index} title={projects.heading} />
        <div className="mt-16 flex flex-col gap-24 md:gap-36">
          {projects.items.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              align={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}