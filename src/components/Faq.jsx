import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { faq } from "../data/assets";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        className="focus-ring flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[15.5px] font-medium text-ink">{item.question}</span>
        <FiPlus
          className={`shrink-0 text-ink transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          size={18}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-xl text-[14.5px] leading-relaxed text-body">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <p className="mb-5 font-mono text-[13px] tracking-wide text-muted">{faq.eyebrow}</p>
      <h2 className="max-w-2xl text-[1.9rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.3rem]">
        {faq.heading}
      </h2>

      <div className="mt-12 max-w-2xl">
        {faq.items.map((item, i) => (
          <FaqItem
            key={item.question}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
