// ═══════════════════════════════════════════════════════════════
// Single source of truth for all site content.
// Every component imports from here — no hardcoded copy in JSX.
// ═══════════════════════════════════════════════════════════════

import heroImage from "../assets/img/hero.jpg";

export const personalInfo = {
  name: "Abdul Basit",
  shortName: "Abdul Basit",
  role: "Fresher MERN Stack Developer",
  tagline: "Fresher MERN Stack Developer building real-world projects",
  email: "abasit20062006@gmail.com",
  github: "https://github.com/Abdul-Basit-cmd",
  linkedin: "https://www.linkedin.com/in/abdul-basit-a1074a403",
  resumeUrl: "#",
  location: "Karachi, Pakistan",
  photo: heroImage,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "• FULL STACK DEVELOPER",
  heading:
    "Hi, I'm Abdul Basit. I build beautiful software that performs as well as it looks.",
  subtext:
    "I'm a fresher MERN stack developer who just wrapped a 4-month internship at Fossphorus LLC in Karachi. I care about clean architecture, quiet interfaces, and shipping things that actually work end to end — not just demos.",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Download Resume", href: "#" },
};

export const techLogos = [
  { name: "React", icon: "SiReact" },
  { name: "Next.js", icon: "SiNextdotjs" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "Express", icon: "SiExpress" },
  { name: "MongoDB", icon: "SiMongodb" },
  { name: "Tailwind CSS", icon: "SiTailwindcss" },
  { name: "HTML5", icon: "SiHtml5" },
  { name: "CSS3", icon: "SiCss" },
  { name: "JavaScript", icon: "SiJavascript" },
  { name: "Git", icon: "SiGit" },
  { name: "GitHub", icon: "SiGithub" },
  { name: "Vercel", icon: "SiVercel" },
  { name: "Netlify", icon: "SiNetlify" },
];

export const about = {
  eyebrow: "(01) ABOUT",
  heading:
    "A design-minded fresher obsessed with clean code and learning fast.",
  paragraphs: [
    "I'm a MERN stack fresher who spent the last four months as an intern at Fossphorus LLC in Karachi, working alongside a real engineering team on production code instead of tutorials. That stretch taught me more about code review, git discipline, and shipping under real constraints than any course could.",
    "Outside of work, I build full projects end to end — a multi-tenant POS system, an authentication service, a notes app — because I learn fastest by finishing things and putting them in front of people, not by collecting half-built side projects.",
  ],
  stats: [
    { value: "4+", label: "MONTHS INTERNSHIP" },
    { value: "4+", label: "PROJECTS SHIPPED" },
    { value: "MERN", label: "STACK" },
    { value: "FRESHER", label: "READY TO LEARN" },
  ],
  stackHeading: "THE STACK",
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Zustand",
    "Axios",
    "TanStack Query",
  ],
};

export const techStack = {
  eyebrow: "(02) TECH STACK",
  heading: "Everything I've learned how to build with.",
  description:
    "Picked up across my MERN projects, my Aptech coursework, and the .NET/Laravel work from earlier semesters — this is the full toolbox, not just the stack I ship with most.",
  categories: [
    {
      title: "Languages",
      items: [
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "HTML", icon: "SiHtml5" },
        { name: "CSS", icon: "SiCss" },
        { name: "PHP", icon: "SiPhp" },
        { name: "C#", icon: "tb:TbBrandCSharp" },
        { name: "SQL", icon: "SiMysql" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", icon: "SiReact" },
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "Angular", icon: "SiAngular" },
        { name: "Vite", icon: "SiVite" },
        { name: "Tailwind CSS", icon: "SiTailwindcss" },
        { name: "Bootstrap", icon: "SiBootstrap" },
        { name: "shadcn/ui", icon: "SiShadcnui" },
        { name: "Zustand", icon: null },
        { name: "Axios", icon: "SiAxios" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "Express.js", icon: "SiExpress" },
        { name: "Laravel", icon: "SiLaravel" },
        { name: ".NET Core", icon: "SiDotnet" },
        { name: ".NET MVC", icon: "SiDotnet" },
        { name: ".NET Web API", icon: "SiDotnet" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", icon: "SiMongodb" },
        { name: "MySQL", icon: "SiMysql" },
        { name: "SQL Server", icon: "di:DiMsqlServer" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: "SiGit" },
        { name: "GitHub", icon: "SiGithub" },
      ],
    },
  ],
};

export const education = {
  eyebrow: "(03) EDUCATION",
  heading: "The classroom side of how I learned to build.",
  entries: [
    {
      status: "In Progress",
      dateRange: "2025 — Present",
      degree: "Advance Diploma in Software Engineering",
      institute: "Aptech, Shahrah-e-Faisal Center, Karachi",
      description:
        "Structured, project-driven coursework covering full-stack development — from core programming and databases to the .NET and Laravel tracks alongside the MERN work I do outside class.",
    },
    {
      status: "Starting 2026",
      dateRange: "2026",
      degree: "Bachelor's Degree",
      institute: "Pursuing this year",
      description:
        "Enrolling this year to continue formal studies in software engineering / computer science alongside my ongoing hands-on project work.",
    },
    {
      status: "Completed",
      dateRange: "Earlier",
      degree: "Intermediate",
      institute: "Karachi, Pakistan",
      description:
        "Completed intermediate studies before moving into software engineering coursework at Aptech.",
    },
  ],
};

export const experience = {
  eyebrow: "(04) EXPERIENCE",
  heading: "Where I've been building.",
  entries: [
    {
      dateRange: "2026",
      role: "Intern",
      company: "Fossphorus LLC",
      duration: "4-month internship",
      description:
        "Worked on real MERN stack features inside a production codebase — picked up how a real engineering team handles code review, git workflow, and shipping under deadlines rather than tutorial conditions.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
    },
  ],
};

export const projects = {
  eyebrow: "(05) SELECTED WORK",
  heading: "A few products I'm proud to have shipped.",
  items: [
    {
      category: "POINT OF SALE SYSTEM",
      title: "NexPOS",
      description:
        "Multi-tenant POS system where an admin creates stores and sends a secure email link to the store owner to set their own password — no public sign-up.",
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "TanStack Query",
        "Zustand",
        "Axios",
      ],
      liveUrl: "https://nexposs.netlify.app/",
      codeUrl: null,
      cardTone: "gray",
      deviceType: "monitor",
    },
    {
      category: "AUTHENTICATION SYSTEM",
      title: "MERN Auth",
      description:
        "Full-fledged authentication system with register, login, forgot password, OTP verification, and password reset flows.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Zustand", "Axios"],
      liveUrl: "https://basit-mern-auth.netlify.app/",
      codeUrl: null,
      cardTone: "blue",
      deviceType: "tablet",
    },
    {
      category: "NOTES APP",
      title: "NoteVault",
      description:
        "Secure notes application with full authentication plus complete CRUD — create, read, update, and delete notes.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Zustand", "Axios"],
      liveUrl: "https://notewault.netlify.app/",
      codeUrl: null,
      cardTone: "charcoal",
      deviceType: "desktop",
    },
    {
      category: "E-COMMERCE (FRONTEND)",
      title: "Forever E-Commerce",
      description:
        "Frontend-only e-commerce storefront built with React and Vite, styled with Tailwind CSS, state managed via Context API.",
      tags: ["React", "Vite", "Tailwind CSS", "Context API"],
      liveUrl: "https://forever-ecommerce.netlify.app/",
      codeUrl: null,
      cardTone: "warm",
      deviceType: "phone",
    },
  ],
};

export const openSource = {
  eyebrow: "(06) ON THE SIDE",
  heading: "Open-source experiments & more on GitHub.",
  description:
    "I push most of what I build to GitHub as I go — smaller experiments, in-progress projects, and the occasional weekend build.",
  cta: { label: "Explore more on GitHub", href: personalInfo.github },
};

export const goals = {
  eyebrow: "(07) WHAT I'M LOOKING FOR",
  heading: "Where I'd like to land next.",
  cards: [
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
};

export const faq = {
  eyebrow: "(08) FAQ",
  heading: "Questions people usually ask.",
  items: [
    {
      question: "What technologies do you use?",
      answer:
        "My core stack is MERN — JavaScript, React, Next.js, Node.js, Express, and MongoDB — plus Tailwind CSS, Zustand, Axios, and shadcn/ui on the frontend. I've also worked with PHP/Laravel, Angular, and the .NET stack (C#, .NET Core, MVC, Web API) with MySQL and SQL Server through my coursework.",
    },
    {
      question: "Are you available for internships/junior roles?",
      answer:
        "Yes — I'm actively looking for an internship or junior developer role, on-site or remote.",
    },
    {
      question: "Do you work remotely?",
      answer:
        "Yes, I'm comfortable working remotely and have a solid async workflow with Git and clear documentation.",
    },
    {
      question: "Can you join an existing team quickly?",
      answer:
        "Yes — I'm adaptable and a fast learner, and I'm used to picking up an existing codebase's conventions quickly.",
    },
  ],
};

export const contact = {
  eyebrow: "(09) CONTACT",
  heading: "Got a role or a project in mind? Let's talk.",
  description:
    "Send a message straight to my inbox — no middleman, this form emails me directly.",
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@email.com" },
    message: {
      label: "Message",
      placeholder: "What are you looking to build / hire for?",
    },
  },
  submitLabel: "Send Message",
  submittingLabel: "Sending...",
  successMessage:
    "Thanks — your message just landed in my inbox. I'll reply soon.",
  errorMessage:
    "Something went wrong sending that. Try again, or email me directly below.",
};

export const footer = {
  name: personalInfo.name,
  tagline: personalInfo.tagline,
  navColumn: {
    heading: "NAVIGATION",
    links: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
  socialColumn: {
    heading: "SOCIAL",
    links: [
      { label: "GitHub", href: personalInfo.github },
      { label: "LinkedIn", href: personalInfo.linkedin },
      { label: "Email", href: `mailto:${personalInfo.email}` },
    ],
  },
  copyright: `© 2026 ${personalInfo.name}. All rights reserved.`,
};
