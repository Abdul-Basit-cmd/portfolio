// data/portfolio.ts
// ───────────────────────────────────────────────────────────
// Single source of truth. Edit objects here; every section
// updates automatically. No content lives inside components.
// ───────────────────────────────────────────────────────────

export const site = {
  name: "Abdul Basit",
  role: "Full Stack Developer",
  title: "Abdul Basit — Full Stack Developer",
  description:
    "MERN stack developer who just wrapped a 4-month internship at Fossphorus LLC in Karachi. I build clean, quiet interfaces that ship end to end.",
  url: "https://heybasit.vercel.app", // ← set after deploy
  locale: "en_US",
  email: "hello@heybasit.com", // ← replace
  location: "Karachi, Pakistan",
  resumeUrl: "/resume.pdf",
  ogImage: "/og.png",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  badge: "Available for full-time & internship roles",
  eyebrow: "Full Stack Developer",
  headingLines: [
    "Hi, I'm Abdul Basit.",
    "I build beautiful software",
    "that performs as well as it looks.",
  ],
  paragraph:
    "I'm a fresher MERN stack developer who just wrapped a 4-month internship at Fossphorus LLC in Karachi. I care about clean architecture, quiet interfaces, and shipping things that actually work end to end — not just demos.",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Download Resume", href: "/resume.pdf" },
  trustedBy: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
  ],
} as const;

export const about = {
  index: "01",
  heading:
    "A design-minded fresher obsessed with clean code and learning fast.",
  paragraphs: [
    "I'm a MERN stack fresher who spent the last four months as an intern at Fossphorus LLC in Karachi, working alongside a real engineering team on production code instead of tutorials. That stretch taught me more about code review, git discipline, and shipping under real constraints than any course could.",
    "Outside of work, I build full projects end to end — a multi-tenant POS system, an authentication service, a notes app — because I learn fastest by finishing things and putting them in front of people, not by collecting half-built side projects.",
  ],
  stats: [
    { value: "4+", label: "Months internship" },
    { value: "4+", label: "Projects shipped" },
    { value: "MERN", label: "Stack" },
    { value: "Ready", label: "To learn" },
  ],
} as const;

export const skills = {
  index: "02",
  heading: "Everything I've learned how to build with.",
  intro:
    "Picked up across my MERN projects, my Aptech coursework, and the .NET/Laravel work from earlier semesters — this is the full toolbox, not just the stack I ship with most.",
  groups: [
    {
      category: "Languages",
      items: ["JavaScript", "HTML", "CSS", "PHP", "C#", "SQL"],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Angular",
        "Vite",
        "Tailwind CSS",
        "Bootstrap",
        "shadcn/ui",
        "Zustand",
        "Axios",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Laravel",
        ".NET Core",
        ".NET MVC",
        ".NET Web API",
      ],
    },
    { category: "Databases", items: ["MongoDB", "MySQL", "SQL Server"] },
    { category: "Tools", items: ["Git", "GitHub"] },
  ],
} as const;

export const education = {
  index: "03",
  heading: "The classroom side of how I learned to build.",
  items: [
    {
      period: "2025 — Present",
      title: "Advanced Diploma in Software Engineering",
      status: "In Progress",
      place: "Aptech, Shahrah-e-Faisal Center, Karachi",
      description:
        "Structured, project-driven coursework covering full-stack development — from core programming and databases to the .NET and Laravel tracks alongside the MERN work I do outside class.",
    },
    {
      period: "2026",
      title: "Bachelor's Degree",
      status: "Starting 2026",
      place: "Pursuing this year",
      description:
        "Enrolling this year to continue formal studies in software engineering / computer science alongside my ongoing hands-on project work.",
    },
    {
      period: "Earlier",
      title: "Intermediate",
      status: "Completed",
      place: "Karachi, Pakistan",
      description:
        "Completed intermediate studies before moving into software engineering coursework at Aptech.",
    },
  ],
} as const;

export const experience = {
  index: "04",
  heading: "Where I've been building.",
  items: [
    {
      period: "2026",
      role: "Intern — Fossphorus LLC",
      duration: "4-month internship",
      description:
        "Worked on real MERN stack features inside a production codebase — picked up how a real engineering team handles code review, git workflow, and shipping under deadlines rather than tutorial conditions.",
      stack: ["React", "Node.js", "MongoDB", "Express"],
    },
  ],
} as const;

export type Project = {
  index: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
};

export const projects: { index: string; heading: string; items: Project[] } = {
  index: "05",
  heading: "A few products I'm proud to have shipped.",
  items: [
    {
      index: "01",
      category: "Point of Sale System",
      title: "POS Vault",
      description:
        "Multi-tenant POS system where an admin creates stores and sends a secure email link to the store owner to set their own password — no public sign-up.",
      stack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "TanStack Query",
        "Zustand",
        "Axios",
      ],
      liveUrl: "https://posvault.netlify.app", // ← replace
      githubUrl: "https://github.com/Abdul-Basit-cmd/multi-tenant-pos-.git", // ← replace
      image: "/projects/pos.png",
    },
    {
      index: "02",
      category: "Authentication System",
      title: "MERN Auth",
      description:
        "Full-fledged authentication system with register, login, forgot password, OTP verification, and password reset flows.",
      stack: ["React", "Node.js", "Express", "MongoDB", "Zustand", "Axios"],
      liveUrl: "https://basit-mern-auth.netlify.app/",
      image: "/projects/mern-auth.png",
    },
    {
      index: "03",
      category: "Notes App",
      title: "NoteVault",
      description:
        "Secure notes application with full authentication plus complete CRUD — create, read, update, and delete notes.",
      stack: ["React", "Node.js", "Express", "MongoDB", "Zustand", "Axios"],
      liveUrl: "https://notewault.netlify.app",
      image: "/projects/note.png",
    },
    {
      index: "04",
      category: "E-Commerce (Frontend)",
      title: "Forever E-Commerce",
      description:
        "Frontend-only e-commerce storefront built with React and Vite, styled with Tailwind CSS, state managed via Context API.",
      stack: ["React", "Vite", "Tailwind CSS", "Context API"],
      liveUrl: "https://forever-ecommerce.netlify.app/",
      image: "/projects/forever.png",
    },
  ],
};

export const sideWork = {
  index: "06",
  heading: "Open-source experiments & more on GitHub.",
  paragraph:
    "I push most of what I build to GitHub as I go — smaller experiments, in-progress projects, and the occasional weekend build.",
  cta: { label: "Explore more on GitHub", href: "https://github.com/" }, // ← replace
} as const;

export const lookingFor = {
  index: "07",
  heading: "Where I'd like to land next.",
  items: [
    {
      title: "A team that reviews code",
      description:
        "I want to keep learning from people who'll actually tell me what's wrong with my PRs.",
    },
    {
      title: "Real production problems",
      description:
        "Less tutorial, more shipping — I'd rather fix a messy real bug than build a tenth to-do app.",
    },
    {
      title: "Room to go deeper on MERN",
      description:
        "I know the basics well; I want to get properly good at the parts that only show up at scale.",
    },
  ],
} as const;

// data/portfolio.ts (Update the faq object)

export const faq = {
  index: "08",
  heading: "Questions people usually ask.",
  items: [
    {
      q: "What technologies do you use?",
      a: "My core stack is MERN — JavaScript, React, Next.js, Node.js, Express, and MongoDB — plus Tailwind CSS, Zustand, Axios, and shadcn/ui on the frontend. I've also worked with PHP/Laravel, Angular, and the .NET stack (C#, .NET Core, MVC, Web API) with MySQL and SQL Server through my coursework.",
    },
    {
      q: "Are you open to remote work or relocation?",
      a: "Yes, absolutely. I am based in Karachi, Pakistan, but I am fully equipped to work remotely across different time zones. I am also open to relocating for the right opportunity if an employer requires on-site presence.",
    },
    {
      q: "How quickly can you pick up a new technology?",
      a: "Very quickly. My internship and coursework required me to switch contexts frequently — moving from MERN stack projects to .NET and Laravel in the same week. I focus on understanding core programming concepts rather than just memorizing syntax, which makes adapting to new tools or libraries a matter of days rather than weeks.",
    },
    {
      q: "Do you have experience with full-stack development?",
      a: "Yes, most of my shipped projects are full-stack. For example, my NexPOS system and NoteVault both feature complete frontends built in React, backed by RESTful APIs I built in Node.js/Express, connected to MongoDB. I handle everything from UI state management to database schema design.",
    },
    {
      q: "What is your approach to writing clean code?",
      a: "I focus on readability, modularity, and consistent naming conventions. I use tools like ESLint and Prettier to enforce formatting, and I try to keep components small and reusable. The code reviews I received during my internship at Fossphorus really drilled home the importance of writing code that is easy for the next developer to read and maintain.",
    },
  ],
} as const;

export const contact = {
  heading: "Let's build something that ships.",
  paragraph:
    "I'm open to full-time roles, internships, and freelance MERN work. If you've got a real problem to solve, I'd love to hear about it.",
  email: site.email,
  cta: { label: "Let's Talk", href: `mailto:${site.email}` },
} as const;

export const social = [
  { label: "GitHub", href: "https://github.com/" }, // ← replace
  { label: "LinkedIn", href: "https://linkedin.com/" }, // ← replace
  { label: "Email", href: `mailto:${site.email}` },
] as const;

export const footer = {
  note: "Designed & built by Abdul Basit with Next.js, GSAP & Tailwind CSS.",
  builtIn: "Karachi, Pakistan",
} as const;
