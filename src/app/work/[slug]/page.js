"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects/index";

const SEVERITY_COLOR = {
  Critical:    "text-red-300 bg-red-500/10 border-red-500/20",
  High:        "text-orange-300 bg-orange-500/10 border-orange-500/20",
  Medium:      "text-yellow-300 bg-yellow-500/10 border-yellow-500/20",
  Low:         "text-blue-300 bg-blue-500/10 border-blue-500/20",
  Info:        "text-white/50 bg-white/5 border-white/10",
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 text-sm mb-4">Project not found</p>
          <Link href="/work" className="text-emerald-400 text-sm hover:underline">
            Back to Work
          </Link>
        </div>
      </main>
    );
  }

  const isCreative = !!project.highlights;

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <Link
          href="/work"
          className="text-white/35 text-sm hover:text-white/65 transition-colors flex items-center gap-2 mb-8"
        >
          Back to Work
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={"text-xs font-semibold px-2.5 py-0.5 rounded-full border " + project.badgeColor}>
              {project.badge}
            </span>
            <span className="text-white/35 text-xs font-mono">{project.category}</span>
            <span className="text-white/35 text-xs font-mono">{project.date}</span>
          </div>
          <h1 className="font-bold text-white leading-tight mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            {project.title}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">{project.subtitle}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-white/[0.07]">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/[0.05] text-white/55 border border-white/[0.08]">
              {tag}
            </span>
          ))}
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-5">Overview</h2>
          <div className="text-white/70 text-base leading-[1.9] whitespace-pre-line">
            {project.overview}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-5">
            {isCreative ? "How It Was Built" : "Methodology"}
          </h2>
          <div className="space-y-4">
            {project.methodology.map((step, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-2 py-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-white text-sm">{step.phase}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights (creative projects) or Findings (security projects) */}
        {isCreative ? (
          <section className="mb-12">
            <h2 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-5">
              What It Includes
            </h2>
            <div className="space-y-3">
              {project.highlights.map((item, i) => (
                <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 flex gap-4">
                  <span className="text-emerald-400 font-mono text-xs shrink-0 mt-0.5 w-24 font-semibold">
                    {item.label}
                  </span>
                  <p className="text-white/65 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="mb-12">
            <h2 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-5">Findings</h2>
            <div className="space-y-3">
              {project.findings.map((finding, i) => (
                <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={"text-[0.62rem] font-bold px-2.5 py-0.5 rounded-full border " + (SEVERITY_COLOR[finding.severity] || SEVERITY_COLOR.Info)}>
                      {finding.severity}
                    </span>
                    <h3 className="font-semibold text-white text-sm">{finding.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{finding.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tools */}
        <section className="mb-12">
          <h2 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-5">
            {isCreative ? "Tech Stack" : "Tools Used"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="text-xs font-medium px-3 py-1.5 rounded-xl bg-white/[0.05] text-white/60 border border-white/[0.08]">
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Remediation (security only) */}
        {!isCreative && project.remediation && project.remediation.length > 0 && (
          <section className="mb-12">
            <h2 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-5">Remediation</h2>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <ul className="space-y-3">
                {project.remediation.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                    <span className="text-emerald-400 shrink-0 mt-0.5">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* References */}
        {project.references && project.references.length > 0 && (
          <section className="mb-16">
            <h2 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-5">References</h2>
            <ul className="space-y-2">
              {project.references.map((ref, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/45">
                  <span className="text-white/20 shrink-0">[{i + 1}]</span>
                  {ref.startsWith("http") ? (
                    <a href={ref} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline break-all">
                      {ref}
                    </a>
                  ) : ref}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Footer nav */}
        <div className="pt-8 border-t border-white/[0.07] flex items-center justify-between">
          <Link href="/work" className="text-white/35 text-sm hover:text-white/65 transition-colors">
            All Projects
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
            Work with me →
          </Link>
        </div>

      </div>
    </main>
  );
}