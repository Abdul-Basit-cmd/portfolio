import { useEffect, useState } from "react";
import { personalInfo, navLinks } from "../data/assets";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-canvas/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="text-[15px] font-semibold tracking-tight text-ink">
          {personalInfo.shortName}
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.slice(0, -1).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring rounded text-[14px] text-body transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-canvas transition-transform hover:-translate-y-0.5"
        >
          Let's Talk <span aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  );
}
