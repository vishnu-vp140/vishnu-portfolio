"use client";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./useReveal";

const CERTS = [
  { code: "OSCP+", name: "Offensive Security Certified Professional", issuer: "Offensive Security", date: "Jan 2026", status: "active" },
  { code: "PNPT",  name: "Practical Network Penetration Tester",      issuer: "TCM Security",        date: "Jul 2025", status: "active" },
  { code: "CRTO",  name: "Certified Red Team Operator",               issuer: "Zero-Point Security", date: "In Progress", status: "ongoing" },
  { code: "GCP",   name: "Google Cybersecurity Professional",         issuer: "Google",              date: "Jul 2025", status: "active" },
  { code: "HTB",   name: "Pro Labs - Dante",                          issuer: "Hack The Box",        date: "Feb 2026", status: "active" },
  { code: "HTB",   name: "Pro Labs - Zephyr",                         issuer: "Hack The Box",        date: "In Progress", status: "ongoing" },
];

export default function Certifications() {
  const ref = useReveal();

  return (
    <section id="certs" className="py-24 px-6 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="reveal">
          <SectionHeader label="certifications" title="Credentials" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map((cert, i) => (
            <div
              key={i}
              className="reveal bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex gap-4 items-start hover:bg-white/[0.055] hover:border-white/[0.13] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="font-mono text-[0.65rem] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-2 py-1.5 tracking-widest shrink-0">
                {cert.code}
              </div>
              <div>
                <div className="font-semibold text-white text-sm leading-snug">{cert.name}</div>
                <div className="font-mono text-[0.7rem] text-white/30 mt-1">{cert.issuer} - {cert.date}</div>
                <span className={"inline-block font-mono text-[0.62rem] px-2 py-0.5 rounded-full mt-2 " + (cert.status === "active" ? "text-emerald-300 bg-emerald-500/10 border border-emerald-500/20" : "text-yellow-300 bg-yellow-500/10 border border-yellow-500/20")}>
                  {cert.status === "active" ? "Active" : "Ongoing"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}