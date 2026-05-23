"use client";

import { useReveal } from "@/components/useReveal";

const STATS = [
  { num: "4",      label: "Certifications"      },
  { num: "2nd",    label: "BAE Systems CTF"     },
  { num: "#890",   label: "HTB Global Rank"     },
  { num: "50+",    label: "HTB Machines Pwned"  },
  { num: "50+",    label: "TryHackMe Rooms"     },
  { num: "Top 7%", label: "TryHackMe Ranking"   },
];

const CERTS = [
  { code: "OSCP+", name: "Offensive Security Certified Professional", issuer: "Offensive Security", date: "Jan 2026", color: "text-red-300 border-red-500/25 bg-red-500/[0.08]" },
  { code: "CRTO",  name: "Certified Red Team Operator",               issuer: "Zero-Point Security", date: "Apr 2026", color: "text-yellow-300 border-yellow-500/25 bg-yellow-500/[0.08]" },
  { code: "PNPT",  name: "Practical Network Penetration Tester",      issuer: "TCM Security",        date: "Jul 2025", color: "text-orange-300 border-orange-500/25 bg-orange-500/[0.08]" },
  { code: "GCP",   name: "Google Cybersecurity Professional",         issuer: "Google / Coursera",   date: "Jul 2025", color: "text-blue-300 border-blue-500/25 bg-blue-500/[0.08]" },
];

export default function AboutPage() {
  const ref = useReveal();

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <div className="reveal mb-14">
          <p className="text-xs text-white/60 tracking-[0.25em] uppercase mb-3 font-semibold">about me</p>
          <h1 className="font-sans font-bold text-white tracking-tight leading-none mb-4" style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)" }}>
            Profile
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div className="space-y-6 reveal">
            <p className="text-white/85 text-base leading-[1.9]">
              I am an{" "}
              <span className="text-white font-semibold">Assosiate Security Consultant at Pen Test Partners</span>{" "}
              with an MSc in Cyber Security from the{" "}
              <span className="text-white font-semibold">University of Birmingham</span>{" "}
              (Russell Group). I hold{" "}
              <span className="text-red-300 font-semibold">OSCP+</span>,{" "}
              <span className="text-yellow-300 font-semibold">CRTO</span>, and{" "}
              <span className="text-orange-300 font-semibold">PNPT</span>{" "}
              certifications, with hands-on experience in web application and infrastructure
              penetration testing, Active Directory attack chains, red team operations,
              C2 frameworks, and responsible disclosure.
            </p>
            <p className="text-white/85 text-base leading-[1.9]">
              Strong grounding in{" "}
              <span className="text-white font-semibold">OWASP Top 10</span>,{" "}
              <span className="text-white font-semibold">MITRE ATT&CK</span>,{" "}
              <span className="text-white font-semibold">NIST frameworks</span>, and
              professional report writing for both technical and non-technical audiences.
            </p>
            <p className="text-white/85 text-base leading-[1.9]">
              I am a passionate learner with a high drive towards growth. I have attended
              various technical conferences involving cybersecurity and computing. I enjoy
              penetration testing across all domains and am a prolific CTF player, having
              participated in numerous contests, scoring significant points, and winning a CTF.
              I also write technical blogs covering offensive security research and certification prep.
            </p>

            <div className="pt-2 p-4 bg-emerald-500/[0.08] border border-emerald-500/25 rounded-2xl flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 mt-1" style={{ animation: "pulseGlow 2s ease-in-out infinite" }} />
              <p className="text-emerald-200 text-sm font-medium leading-relaxed">
                Currently working as a{" "}
                <span className="text-emerald-100 font-semibold">Associate Security Consultant at Pen Test Partners</span>{" "}
              , one of the UK's most respected cybersecurity consultancies.
              </p>
            </div>

            <div className="pt-2 space-y-4">
              <h3 className="text-white/60 text-xs uppercase tracking-widest font-semibold">Certifications</h3>
              <div className="grid grid-cols-1 gap-3">
                {CERTS.map((cert) => (
                  <div key={cert.code} className={"flex items-center justify-between px-4 py-3 rounded-xl border " + cert.color}>
                    <div className="flex items-center gap-3">
                      <span className={"font-mono text-xs font-bold tracking-widest " + cert.color.split(" ")[0]}>{cert.code}</span>
                      <div>
                        <p className="text-white font-semibold text-sm">{cert.name}</p>
                        <p className="text-white/65 text-xs">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="text-white/55 text-xs font-mono shrink-0 ml-4">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-4">
              <h3 className="text-white/60 text-xs uppercase tracking-widest font-semibold">Education</h3>
              <div className="space-y-3">
                {[
                  { degree: "MSc Cyber Security", school: "University of Birmingham (Russell Group)", period: "2024 - 2025", grade: "Merit (2:1)" },
                  { degree: "BE Computer Science & Engineering", school: "B.M.S.C.E, Bangalore", period: "2020 - 2024", grade: "First Class" },
                ].map((e) => (
                  <div key={e.degree} className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 flex justify-between items-start gap-4">
                    <div>
                      <p className="text-white font-semibold text-sm">{e.degree}</p>
                      <p className="text-white/70 text-xs mt-1">{e.school}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-white/55 text-xs">{e.period}</p>
                      <p className="text-emerald-400 text-xs mt-1 font-semibold">{e.grade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <h3 className="text-white/60 text-xs uppercase tracking-widest font-semibold">Relevant Modules</h3>
              <div className="flex flex-wrap gap-2">
                {["Forensics", "Malware & Penetration Testing", "Governance & Risk", "Network Security", "Cryptography", "Secure Hardware & Software", "Intelligent Data Analysis"].map((m) => (
                  <span key={m} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.07] text-white/80 border border-white/[0.12]">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 reveal">
            <h3 className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-6">By the numbers</h3>
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300 group">
                  <div className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">{s.num}</div>
                  <div className="text-sm text-white/70 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 mt-2">
              <h3 className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-5">Beyond Security</h3>
              <div className="space-y-4">
                {[
                  { icon: "🎸", title: "Official Guitarist",   desc: "Represented college in inter-college competitions across Karnataka, India" },
                  { icon: "🏆", title: "E-Sports Champion",    desc: "1st place at B.M.S.C.E inter-college competition" },
                  { icon: "🎪", title: "Event Co-ordinator",   desc: "Led UTSAV 2023 with 50+ participants, team of 7" },
                  { icon: "✍️", title: "Technical Blogger",    desc: "Writes about offensive security research and cert prep" },
                  { icon: "🚩", title: "CTF Player",           desc: "Prolific competitor, won a CTF with significant points across multiple contests" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-white/70 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}