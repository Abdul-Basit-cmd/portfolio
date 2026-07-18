import { FiMail, FiLinkedin } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { footer, personalInfo } from "../data/assets";
import "./SocialLinks.css";

const SOCIAL_META = {
  GitHub: {
    key: "github",
    icon: SiGithub,
  },
  LinkedIn: {
    key: "linkedin",
    icon: FiLinkedin,
  },
  Email: {
    key: "email",
    icon: FiMail,
  },
};

const BRAND_COLORS = {
  github: "#24262a",
  linkedin: "#0274b3",
  email: "#ea4335",
};

export default function Footer() {
  return (
    <footer className="rounded-t-3xl bg-ink px-6 pb-8 pt-16 text-canvas md:px-10 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="text-[1.3rem] font-bold tracking-tight">{footer.name}</p>
            <p className="mt-3 max-w-xs text-[14.5px] leading-relaxed text-white/60">
              {footer.tagline}
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="focus-ring mt-6 inline-block text-[14.5px] text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white"
            >
              {personalInfo.email}
            </a>
          </div>

          <div>
            <p className="font-mono text-[12px] tracking-wide text-white/40">
              {footer.navColumn.heading}
            </p>
            <ul className="mt-4 space-y-3">
              {footer.navColumn.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-ring text-[14.5px] text-white/70 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[12px] tracking-wide text-white/40 mb-3">
              {footer.socialColumn.heading}
            </p>
            <ul className="social-icon-list mt-4">
              {footer.socialColumn.links.map((link) => {
                const meta = SOCIAL_META[link.label];
                const Icon = meta?.icon;
                const brandColor = BRAND_COLORS[meta?.key];

                return (
                  <li key={link.href} className="social-icon-content">
                    <a
                      href={link.href}
                      aria-label={link.label}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      style={{ "--hover-bg": brandColor }}
                    >
                      {Icon && <Icon />}
                    </a>
                    {/* Tooltip added back here */}
                    <div className="social-tooltip">{link.label}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-7 text-[13px] text-white/40 md:flex-row">
          <p>{footer.copyright}</p>
          <p>Karachi, Pakistan · Remote-friendly</p>
        </div>
      </div>
    </footer>
  );
}