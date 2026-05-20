"use client";

import { useState } from "react";
import { useReveal } from "@/components/useReveal";

const LINKS = [
  { label: "Email",    handle: "vishnu0vuttarkar@gmail.com",       href: "mailto:vishnu0vuttarkar@gmail.com", external: false },
  { label: "LinkedIn", handle: "/in/vishnuvp2002",                 href: "https://linkedin.com/in/vishnuvp2002", external: true },
  { label: "GitHub",   handle: "@vishnuvuttarkar",                 href: "https://github.com", external: true },
  { label: "Discord",  handle: "vishnuvp2385",                     href: "https://discord.com/users/761475778084864010", external: true },
];

export default function ContactPage() {
  const ref = useReveal();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vishnu0vuttarkar@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto" ref={ref}>

        <div className="reveal mb-16">
          <p className="text-xs text-white/30 tracking-[0.25em] uppercase mb-3 font-medium">contact</p>
          <h1 className="font-sans font-bold text-white tracking-tight leading-none" style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)" }}>
            Get In Touch
          </h1>
        </div>

        <div className="reveal space-y-4 mb-12">
          <p className="text-white/50 text-[0.95rem] leading-[1.9]">
            Open to{" "}
            <span className="text-white font-semibold">offensive security roles</span>,
            consultancy opportunities, and research collaborations.
            Currently based in Birmingham, UK. MSc Cyber Security graduate from the University of Birmingham(Russel Group).
          </p>
          <p className="text-white/50 text-[0.95rem] leading-[1.9]">
            Whether you are looking for a penetration tester, a security researcher, or want to
            discuss a project, feel free to reach out directly.
          </p>
        </div>

        <div className="reveal flex items-center gap-3 mb-10 p-4 bg-emerald-500/[0.06] border border-emerald-500/20 rounded-2xl">
          <span
            className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"
            style={{ animation: "pulseGlow 2s ease-in-out infinite" }}
          />
          <p className="text-emerald-400/80 text-sm font-medium">
            Available for new opportunities — actively looking for roles in offensive security
          </p>
        </div>

        <div className="reveal space-y-3 mb-10">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between px-6 py-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl hover:bg-white/[0.06] hover:border-white/[0.13] transition-all duration-200 group"
            >
              <div>
                <p className="text-white font-semibold text-sm">{link.label}</p>
                <p className="text-white/35 text-xs mt-0.5">{link.handle}</p>
              </div>
              <span className="text-white/20 group-hover:text-white/50 transition-colors text-lg">
                {link.external ? "↗" : "→"}
              </span>
            </a>
          ))}
        </div>

        <div className="reveal">
          <button
            onClick={copyEmail}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-black font-bold text-sm rounded-2xl hover:bg-white/90 transition-all duration-200"
          >
            {copied ? "Email copied to clipboard!" : "Copy email address"}
          </button>
        </div>

      </div>
    </main>
  );
}