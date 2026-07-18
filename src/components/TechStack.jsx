import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPhp,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiShadcnui,
  SiAxios,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiDotnet,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { techStack } from "../data/assets";

const ICONS = {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPhp,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiShadcnui,
  SiAxios,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiDotnet,
  SiMongodb,
  SiGit,
  SiGithub,
  "tb:TbBrandCSharp": TbBrandCSharp,
  "di:DiMsqlServer": DiMsqlServer,
};

function resolveIcon(key) {
  if (!key) return null;
  return ICONS[key] || null;
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <p className="mb-5 font-mono text-[13px] tracking-wide text-muted">{techStack.eyebrow}</p>
      <h2 className="max-w-2xl text-[1.9rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.3rem]">
        {techStack.heading}
      </h2>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-body">
        {techStack.description}
      </p>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.categories.map((category) => (
          <div key={category.title} className="rounded-3xl border border-line p-7">
            <p className="font-mono text-[12px] tracking-wide text-muted">{category.title}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {category.items.map((item) => {
                const Icon = resolveIcon(item.icon);
                return (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 rounded-full bg-card-gray px-3.5 py-2 text-[13px] text-ink"
                  >
                    {Icon && <Icon className="shrink-0" size={14} />}
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
