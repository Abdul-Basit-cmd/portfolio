import { goals } from "../data/assets";

export default function Goals() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <p className="mb-5 font-mono text-[13px] tracking-wide text-muted">{goals.eyebrow}</p>
      <h2 className="max-w-2xl text-[1.9rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.3rem]">
        {goals.heading}
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {goals.cards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-line p-7">
            <h3 className="text-[1.05rem] font-semibold text-ink">{card.title}</h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-body">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
