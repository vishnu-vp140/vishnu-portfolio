export const portfolioWebsite = {
  slug: "portfolio-website",
  num: "05",
  badge: "Full Stack",
  badgeColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  title: "Personal Portfolio Website",
  subtitle: "Designed and built from scratch - Next.js, Tailwind CSS, deployed at vishnuvuttarkar.com",
  summary:
    "A fully custom portfolio website built to showcase my cybersecurity work, certifications, and writing. Designed with a dark, minimal aesthetic and built with Next.js App Router, Tailwind CSS, and a scalable content architecture.",
  tags: ["Next.js 14", "Tailwind CSS", "React", "App Router", "JavaScript"],
  date: "2025",
  category: "Full Stack Development",
  overview: `Most cybersecurity professionals use generic templates. I built mine from scratch.

This portfolio was designed and developed entirely without templates or UI libraries - every component, animation, layout decision, and data structure was written by hand. The goal was to build something that reflects both technical depth and design sensibility, standing out to security recruiters who see hundreds of identical sites.

The project involved real engineering decisions: how to structure a multi-page Next.js application, how to separate content from presentation for long-term maintainability, and how to design a UI that feels polished and professional without relying on heavy dependencies.`,
  methodology: [
    {
      phase: "Design Philosophy",
      detail: "Designed a dark, minimal aesthetic inspired by modern developer portfolios. Typography, spacing, and motion were given as much attention as functionality. The goal was a site that communicates confidence and precision - qualities that matter in offensive security.",
    },
    {
      phase: "Architecture",
      detail: "Built on Next.js 14 App Router with a clean src/app directory structure. Each section of the site (Work, Blog, About, Journey, Skills, Contact) is a dedicated page with its own route - making the site scalable and easy to extend without touching unrelated code.",
    },
    {
      phase: "Content Architecture",
      detail: "All content (projects, blog posts) is stored in separate JavaScript modules under src/data/. Each project and blog post lives in its own file, making it trivial to add, edit, or remove content without touching any UI code. This mirrors the kind of separation of concerns that matters in production codebases.",
    },
    {
      phase: "Component Design",
      detail: "Built a library of reusable components entirely with Tailwind utility classes - no external UI libraries. Includes a floating pill navbar with active route detection, scroll reveal animations via IntersectionObserver, certification badge cards with live credential verification links, and a typewriter animation for the hero section.",
    },
    {
      phase: "Performance and Deployment",
      detail: "Deployed at vishnuvuttarkar.com. Next.js Image optimisation, font preloading, and minimal JavaScript bundles keep load times fast. The site scores well on Core Web Vitals out of the box.",
    },
  ],
  highlights: [
    {
      label: "Pages",
      detail: "Home, Work (individual project writeups), Blog (individual post pages), About, Journey (interactive timeline), Skills, Contact",
    },
    {
      label: "Interactions",
      detail: "Typing animation cycling through roles, scroll-triggered reveal animations, hover effects, cert badge verification links, copy-to-clipboard email, resume view and download",
    },
    {
      label: "Content System",
      detail: "Each project and blog post is its own JavaScript module - adding new content takes 2 minutes and requires no UI changes",
    },
    {
      label: "Stack",
      detail: "Next.js 14 (App Router), Tailwind CSS, React, Google Fonts, Next/Image - zero external UI libraries",
    },
    {
      label: "Design",
      detail: "Dark aesthetic with glassmorphism cards, subtle dot-grid backgrounds, green accent system, and consistent typographic scale across all pages",
    },
  ],
  tools: ["Next.js 14", "React", "Tailwind CSS", "JavaScript (ES6+)", "Next/Image", "Google Fonts", "IntersectionObserver API"],
  remediation: [],
  references: [
    "Next.js App Router documentation",
    "Tailwind CSS documentation",
    "Deployed at vishnuvuttarkar.com",
  ],
};