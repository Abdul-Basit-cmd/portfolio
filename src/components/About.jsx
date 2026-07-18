import { about } from "../data/assets";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <p className="mb-5 font-mono text-[13px] tracking-wide text-muted">{about.eyebrow}</p>
      <h2 className="max-w-3xl text-[1.9rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.3rem]">
        {about.heading}
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-14">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-body">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-2 gap-y-10 border-y border-line py-10 sm:grid-cols-4">
        {about.stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-[2rem] font-bold tracking-tight text-ink">{stat.value}</div>
            <div className="mt-1 font-mono text-[11px] tracking-wide text-muted">{stat.label}</div>
          </div>
        ))}
      </div>

    </section>
  );
}
