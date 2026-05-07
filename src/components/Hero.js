"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const TYPING_LINES = [
  "Offensive Security Consultant.",
  "Penetration Tester.",
  "Red Team Operator.",
];

const CERTS = [
  {
    id: "oscp",
    code: "OSCP+",
    name: "Offensive Security Certified Professional",
    issuer: "Offensive Security",
    date: "Jan 2026",
    image: "/certs/oscp.png",
    link: "https://credentials.offsec.com/fc57a640-27d5-4a8d-8e16-48283f2cd5a0#acc.8X3T6xsr",
    accent: "rgba(220,80,40,0.12)",
    border: "rgba(220,80,40,0.22)",
    label: "text-red-300",
  },
  {
    id: "crto",
    code: "CRTO",
    name: "Certified Red Team Operator",
    issuer: "Zero-Point Security",
    date: "Apr 2026",
    image: "/certs/crto.png",
    link: "https://eu.badgr.com/public/assertions/your-crto-link",
    accent: "rgba(250,204,21,0.08)",
    border: "rgba(250,204,21,0.20)",
    label: "text-yellow-300",
  },
  {
    id: "pnpt",
    code: "PNPT",
    name: "Practical Network Penetration Tester",
    issuer: "TCM Security",
    date: "Jul 2025",
    image: "/certs/pnpt.png",
    link: "https://certified.tcm-sec.com/04ffd441-4944-453d-9391-a5742d2fb581#acc.2ByCNQSU",
    accent: "rgba(220,40,40,0.10)",
    border: "rgba(220,40,40,0.20)",
    label: "text-red-400",
  },
  {
    id: "google",
    code: "GCP",
    name: "Google Cybersecurity Professional",
    issuer: "Google / Coursera",
    date: "Jul 2025",
    image: "/certs/google.png",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/HFT8TLTU43UP",
    accent: "rgba(66,133,244,0.10)",
    border: "rgba(66,133,244,0.22)",
    label: "text-blue-400",
  },
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const current = TYPING_LINES[lineIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 65);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setLineIndex((i) => (i + 1) % TYPING_LINES.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, lineIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText("vishnu0vuttarkar@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">

        {/* Top badges */}
        <div
          className="flex flex-wrap gap-3 mb-8"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.5s ease 0.1s" }}
        >
          <span className="text-sm font-medium text-white/60 border border-white/10 px-4 py-1.5 rounded-full bg-white/[0.03]">
            Available for hire
          </span>
          <span className="text-sm font-medium text-white/60 border border-white/10 px-4 py-1.5 rounded-full bg-white/[0.03]">
            Based in Birmingham, UK
          </span>
          <span className="text-sm font-medium text-emerald-400/80 border border-emerald-500/20 px-4 py-1.5 rounded-full bg-emerald-500/[0.06] flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              style={{ animation: "pulseGlow 2s ease-in-out infinite" }}
            />
            OSCP+ · PNPT · CRTO · Google Certified
          </span>
        </div>

        {/* ── NAME — tall, thin, elegant ── */}
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.6s ease 0.25s",
          }}
        >
          {/* Static name — tall, light weight */}
          <h1
            className="font-sans text-white tracking-tight leading-[1.05] mb-3"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            Hello, I am{" "}
            <span style={{ fontWeight: 600 }}>Vishnu Vuttarkar.</span>
          </h1>

          {/* Typing line — fixed height, muted */}
          <div
            className="mb-8"
            style={{ height: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            <span
              className="font-sans tracking-tight"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.25)",
                lineHeight: 1.1,
              }}
            >
              {displayed}
              <span
                className="inline-block w-[2px] h-[0.8em] bg-white/25 ml-1 align-middle"
                style={{ animation: "blink 1s step-end infinite" }}
              />
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p
          className="text-white/45 text-base max-w-xl leading-relaxed mb-10"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.45s" }}
        >
          I break systems.{" "}
          <span className="text-white/70 font-semibold">Then I help fix them.</span>{" "}
          Specialising in Web App Penetration Testing, Active Directory attacks, and offensive security research.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3 mb-12"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.6s" }}
        >
          <a
            href="https://docs.google.com/document/d/1QyjRSeS6Lfj8KudIS6XVzwWhILkEvGezWwxycXyYnYk/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5"
          >
            View Resume ↗
          </a>
          <a
            href="https://docs.google.com/document/d/1QyjRSeS6Lfj8KudIS6XVzwWhILkEvGezWwxycXyYnYk/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/[0.06] border border-white/10 text-white/70 text-sm font-semibold rounded-full hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            Download Resume ↓
          </a>
          <a
            href="/work"
            className="px-6 py-3 bg-white/[0.04] border border-white/[0.08] text-white/50 text-sm font-semibold rounded-full hover:bg-white/[0.07] hover:text-white/70 transition-all duration-200"
          >
            View Work
          </a>
          <button
            onClick={copyEmail}
            className="px-6 py-3 bg-white/[0.04] border border-white/[0.08] text-white/50 text-sm font-semibold rounded-full hover:bg-white/[0.07] hover:text-white/70 transition-all duration-200"
          >
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>

        {/* ── CERT BADGES ── */}
        <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.75s" }}>
          <p className="text-xs text-white/25 uppercase tracking-[0.2em] font-medium mb-4">
            Verified Certifications — click to verify
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {CERTS.map((cert) => (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 rounded-2xl p-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                style={{ background: cert.accent, borderColor: cert.border }}
              >
                {/* Badge image */}
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src={cert.image}
                    alt={cert.code + " badge"}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className={"font-mono text-[0.6rem] font-bold tracking-widest " + cert.label}>
                      {cert.code}
                    </span>
                    <span className="text-white/15 text-xs group-hover:text-white/40 transition-colors">↗</span>
                  </div>
                  <p className="text-white/70 font-semibold text-xs leading-snug">{cert.name}</p>
                  <p className="text-white/25 text-[0.6rem] mt-0.5">{cert.date}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-2xl bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Verify ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── BENTO SOCIAL GRID ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.95s" }}
        >
          {/* Open to work */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:bg-white/[0.05] transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-4">
              <div className="w-4 h-4 rounded-full border-2 border-white/30" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-2 h-2 rounded-full bg-emerald-400"
                style={{ animation: "pulseGlow 2s ease-in-out infinite" }}
              />
            </div>
            <p className="text-white font-bold text-base">Open to Work</p>
            <p className="text-white/35 text-sm mt-0.5">Available for hire</p>
          </div>

          {/* Social links 2x2 */}
          <div className="sm:col-span-2 grid grid-cols-2 gap-3">
            {[
              { label: "GitHub",         handle: "@vishnuvuttarkar",           href: "https://github.com/vishnuvuttarkar",    external: true  },
              { label: "LinkedIn",       handle: "/in/vishnuvp2002",           href: "https://linkedin.com/in/vishnuvp2002",  external: true  },
              { label: "Email",          handle: "vishnu0vuttarkar@gmail.com", href: "mailto:vishnu0vuttarkar@gmail.com",     external: false },
              { label: "Discord",        handle: "vishnu2385",        href: "https://discord.com/users/761475778084864010",external: true  },
              { label: "Birmingham, UK", handle: "Open to relocation",         href: null,                                    external: false },
            ].map((card) =>
              card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 flex items-center justify-between hover:bg-white/[0.06] hover:border-white/[0.13] transition-all duration-200 group"
                >
                  <div>
                    <p className="text-white/80 font-semibold text-sm">{card.label}</p>
                    <p className="text-white/35 text-xs mt-0.5">{card.handle}</p>
                  </div>
                  <span className="text-white/20 group-hover:text-white/50 transition-colors text-lg">↗</span>
                </a>
              ) : (
                <div key={card.label} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4">
                  <p className="text-white/80 font-semibold text-sm">{card.label}</p>
                  <p className="text-white/35 text-xs mt-0.5">{card.handle}</p>
                </div>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}