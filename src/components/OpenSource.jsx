import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { openSource } from "../data/assets";

export default function OpenSource() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <p className="mb-5 font-mono text-[13px] tracking-wide text-muted">{openSource.eyebrow}</p>
      <h2 className="max-w-2xl text-[1.9rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.3rem]">
        {openSource.heading}
      </h2>
      <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-body">
        {openSource.description}
      </p>

      <a
        href={openSource.cta.href}
        target="_blank"
        rel="noreferrer"
        className="focus-ring mt-10 flex items-center justify-between gap-6 rounded-3xl bg-card-gray p-8 transition-colors hover:bg-black/[0.06] md:p-10"
      >
        <span className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-canvas">
            <FiGithub size={20} />
          </span>
          <span className="text-[1.05rem] font-semibold text-ink">{openSource.cta.label}</span>
        </span>
        <FiArrowUpRight className="shrink-0 text-ink" size={22} />
      </a>
    </section>
  );
}
