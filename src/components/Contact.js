"use client";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./useReveal";

const LINKS = [
  { label: "Email",    handle: "vishnu0vuttarkar@gmail.com", href: "mailto:vishnu0vuttarkar@gmail.com", external: false },
  { label: "LinkedIn", handle: "/in/vishnuvp2002",           href: "https://linkedin.com/in/vishnuvp2002", external: true },
  { label: "GitHub",   handle: "@vishnu-vp140",           href: "https://github.com", external: true },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.015]">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        <div className="reveal">
          <SectionHeader label="contact" title="Get In Touch" />
        </div>
        <p className="reveal text-white/40 text-[0.95rem] leading-relaxed mb-12">
          Open to offensive security roles, consultancy opportunities, and research
          collaborations. Currently based in Birmingham, UK.
        </p>
        <div className="reveal flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-10">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="bg-white/[0.03] border border-white/[0.07] flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-white/[0.07] hover:border-white/[0.13] transition-all duration-200 group"
            >
              <div className="text-left">
                <p className="text-white font-semibold text-sm">{link.label}</p>
                <p className="text-white/35 text-xs mt-0.5">{link.handle}</p>
              </div>
              {link.external && (
                <span className="text-white/20 group-hover:text-white/50 transition-colors ml-auto">
                  up-right arrow
                </span>
              )}
            </a>
          ))}
        </div>
        <div className="reveal flex items-center justify-center gap-2 text-white/30 text-sm font-medium">
          <span
            className="w-2 h-2 rounded-full bg-emerald-400"
            style={{ animation: "pulseGlow 2s ease-in-out infinite" }}
          />
          Available for new opportunities
        </div>
      </div>
    </section>
  );
}