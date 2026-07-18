import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import DeviceMockup from "./DeviceMockup";

const toneClasses = {
  gray: "bg-card-gray",
  blue: "bg-card-blue",
  charcoal: "bg-card-charcoal",
  warm: "bg-card-warm",
};

export default function ProjectCard({ project, reverse }) {
  const dark = project.cardTone === "charcoal";

  return (
    <div
      className={`grid grid-cols-1 items-center gap-10 rounded-3xl p-8 md:grid-cols-2 md:gap-14 md:p-14 ${
        toneClasses[project.cardTone]
      }`}
    >
      <div className={`flex justify-center ${reverse ? "md:order-2" : ""}`}>
        <DeviceMockup type={project.deviceType} dark={dark} />
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <p
          className={`font-mono text-[12px] tracking-wide ${
            dark ? "text-white/50" : "text-muted"
          }`}
        >
          {project.category}
        </p>
        <h3
          className={`mt-3 text-[1.6rem] font-bold tracking-tight ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mt-3 max-w-md text-[15px] leading-relaxed ${
            dark ? "text-white/70" : "text-body"
          }`}
        >
          {project.description}
        </p>

        <p className={`mt-4 max-w-md font-mono text-[11.5px] leading-relaxed ${dark ? "text-white/50" : "text-muted"}`}>
          {project.tags.join("  ·  ")}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={`focus-ring inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13.5px] font-medium transition-transform hover:-translate-y-0.5 ${
              dark ? "bg-white text-ink" : "bg-ink text-canvas"
            }`}
          >
            Visit Live <FiArrowUpRight />
          </a>
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className={`focus-ring inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 text-[13.5px] font-medium ${
                dark ? "border-white/20 text-white" : "border-ink/15 text-ink"
              }`}
            >
              View Code <FiGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
