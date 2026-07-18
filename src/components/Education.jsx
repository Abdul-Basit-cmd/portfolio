import { education } from "../data/assets";

const statusTone = {
  "In Progress": "bg-ink text-canvas",
  "Starting 2026": "border border-ink/15 text-ink",
  Completed: "bg-card-gray text-body",
};

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <p className="mb-5 font-mono text-[13px] tracking-wide text-muted">{education.eyebrow}</p>
      <h2 className="max-w-2xl text-[1.9rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.3rem]">
        {education.heading}
      </h2>

      <div className="mt-14 divide-y divide-line">
        {education.entries.map((entry) => (
          <div
            key={entry.degree}
            className="grid grid-cols-1 gap-4 py-9 md:grid-cols-[140px_1fr]"
          >
            <div className="font-mono text-[13px] text-muted">{entry.dateRange}</div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-[1.15rem] font-semibold text-ink">{entry.degree}</h3>
                <span
                  className={`rounded-full px-3 py-1 font-mono text-[10.5px] tracking-wide ${
                    statusTone[entry.status] || "bg-card-gray text-body"
                  }`}
                >
                  {entry.status.toUpperCase()}
                </span>
              </div>
              <p className="mt-1.5 text-[14px] text-body">{entry.institute}</p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-body">
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
