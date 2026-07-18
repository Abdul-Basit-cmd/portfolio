import { experience } from "../data/assets";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <p className="mb-5 font-mono text-[13px] tracking-wide text-muted">{experience.eyebrow}</p>
      <h2 className="max-w-2xl text-[1.9rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.3rem]">
        {experience.heading}
      </h2>

      <div className="mt-14 divide-y divide-line">
        {experience.entries.map((entry) => (
          <div
            key={entry.company}
            className="grid grid-cols-1 gap-4 py-9 md:grid-cols-[140px_1fr]"
          >
            <div className="font-mono text-[13px] text-muted">{entry.dateRange}</div>

            <div>
              <h3 className="text-[1.15rem] font-semibold text-ink">
                {entry.role} — {entry.company}
              </h3>
              <p className="mt-1 font-mono text-[12px] tracking-wide text-muted">
                {entry.duration}
              </p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-body">
                {entry.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-card-gray px-3 py-1 font-mono text-[11.5px] text-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
