"use client";

import Link from "next/link";
import { projects } from "@/data/projects/index";
import { useReveal } from "@/components/useReveal";

export default function WorkPage() {
  const ref = useReveal();

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>

        <div className="reveal mb-20">
          <p className="text-xs text-white/50 tracking-[0.25em] uppercase mb-3 font-semibold">selected work</p>
          <h1 className="font-bold text-white tracking-tight leading-none mb-4" style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)" }}>
            Projects
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-xl">
            Security assessments, vulnerability research, and development projects. Click any project to read the full writeup.
          </p>
        </div>

        <div className="reveal">
          <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-8">
            {projects.length} Projects
          </p>
          <div className="space-y-4">
            {projects.map((project) => (
              <Link key={project.slug} href={"/work/" + project.slug} className="group block">
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/[0.055] hover:border-white/[0.13] transition-all duration-300 hover:-translate-y-0.5">

                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={"text-xs font-semibold px-2.5 py-0.5 rounded-full border " + project.badgeColor}>
                      {project.badge}
                    </span>
                    
                    <span className="text-white/35 text-xs font-mono">{project.category}</span>
                  </div>

                  <h2 className="font-bold text-white text-xl leading-snug mb-1 group-hover:text-emerald-400 transition-colors duration-200">
                    {project.title}
                  </h2>
                  <p className="text-white/40 text-sm mb-3">{project.subtitle}</p>
                  <p className="text-white/65 text-base leading-relaxed mb-5">{project.summary}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/[0.05] text-white/50 border border-white/[0.08]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <span className="text-white/30 text-xs font-mono">{project.num}</span>
                    <span className="text-emerald-400 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
                      Read writeup →
                    </span>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}