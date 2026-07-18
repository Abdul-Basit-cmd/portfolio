import { projects } from "../data/assets";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <p className="mb-5 font-mono text-[13px] tracking-wide text-muted">{projects.eyebrow}</p>
      <h2 className="max-w-2xl text-[1.9rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.3rem]">
        {projects.heading}
      </h2>

      <div className="mt-14 flex flex-col gap-7">
        {projects.items.map((project, i) => (
          <ProjectCard key={project.title} project={project} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
