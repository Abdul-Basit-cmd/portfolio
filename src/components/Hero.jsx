import { hero, personalInfo } from "../data/assets";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-10 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:pb-32 md:pt-16">
      <div>
        <p className="mb-6 font-mono text-[13px] tracking-wide text-muted">
          {hero.eyebrow}
        </p>
        <h1 className="text-[2.5rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-[3.1rem] md:text-[3.4rem]">
          {hero.heading}
        </h1>
        <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-body">
          {hero.subtext}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-canvas transition-transform hover:-translate-y-0.5"
          >
            {hero.primaryCta.label} <span aria-hidden="true">→</span>
          </a>
          <a
            href={hero.secondaryCta.href}
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-[14px] font-medium text-ink transition-colors hover:border-ink/40"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm md:max-w-none">
        <div className="overflow-hidden rounded-3xl bg-card-gray">
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="aspect-[4/5] w-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
