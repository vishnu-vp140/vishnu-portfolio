"use client";

import { useState } from "react";
import { useReveal } from "@/components/useReveal";

const LINKS = [
  { label: "Email",    handle: "vishnu0vuttarkar@gmail.com",       href: "mailto:vishnu0vuttarkar@gmail.com",            external: false },
  { label: "LinkedIn", handle: "/in/vishnuvp2002",                 href: "https://linkedin.com/in/vishnuvp2002",          external: true  },
  { label: "GitHub",   handle: "@vishnuvuttarkar",                 href: "https://github.com/vishnuvp140",                external: true  },
  { label: "Discord",  handle: "vishnuvp2385",                     href: "https://discord.com/users/761475778084864010",  external: true  },
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

        <div className="reveal mb-14">
          <p className="text-xs text-white/60 tracking-[0.25em] uppercase mb-3 font-semibold">contact</p>
          <h1 className="font-sans font-bold text-white tracking-tight leading-none mb-4" style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)" }}>
            Get In Touch
          </h1>
        </div>

        <div className="reveal space-y-4 mb-10">
          <p className="text-white/85 text-base leading-[1.9]">
            Currently working as an{" "}
            <span className="text-white font-semibold">Associate Security Consultant at Pen Test Partners</span>.
            Based in Birmingham, UK. MSc Cyber Security graduate from the University of Birmingham.
          </p>
          <p className="text-white/85 text-base leading-[1.9]">
            Feel free to reach out for security research discussions, collaboration opportunities,
            or anything cybersecurity related.
          </p>
        </div>

        <div className="reveal space-y-3 mb-8">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between px-6 py-4 bg-white/[0.05] border border-white/10 rounded-2xl hover:bg-white/[0.09] hover:border-white/20 transition-all duration-200 group"
            >
              <div>
                <p className="text-white font-semibold text-base">{link.label}</p>
                <p className="text-white/65 text-sm mt-0.5">{link.handle}</p>
              </div>
              <span className="text-white/35 group-hover:text-white/70 transition-colors text-xl">
                {link.external ? "↗" : "→"}
              </span>
            </a>
          ))}
        </div>

        <div className="reveal">
          <button onClick={copyEmail}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-black font-bold text-base rounded-2xl hover:bg-white/90 transition-all duration-200"
          >
            {copied ? "Email copied to clipboard!" : "Copy email address"}
          </button>
        </div>

      </div>
    </main>
  );
}