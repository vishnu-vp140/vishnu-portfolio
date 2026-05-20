"use client";

import { useReveal } from "@/components/useReveal";

const TIMELINE = [
  {
    date: "Jul 2025",type: "event",dot: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]",
    title: "Joined Pen Test Partners - PTP Academy",org: "Pen Test Partners",
    desc: "Joined PTP Academy at Pen Test Partners, one of the UK's leading penetration testing consultancies. Starting my professional career in offensive security.",
    tags: ["Penetration Testing", "Consultancy", "PTP Academy"],highlight: true,
},
  {
    date: "Apr 2026", type: "cert", dot: "bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]",
    title: "CRTO - Certified Red Team Operator", org: "Zero-Point Security",
    desc: "Completed the Red Team Ops course and passed the CRTO exam, covering Cobalt Strike C2, red team infrastructure, OPSEC tradecraft, and advanced Active Directory attacks including persistence and evasion techniques.",
    tags: ["Cobalt Strike", "C2 Infrastructure", "OPSEC", "Red Teaming", "AD Attacks"], highlight: true,
  },
  {
    date: "Feb 2026", type: "cert", dot: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]",
    title: "HTB Pro Labs - Dante", org: "Hack The Box",
    desc: "Completed the Dante Pro Lab, an advanced network penetration testing environment simulating a real enterprise. Achieved global rank #890.",
    tags: ["Active Directory", "Pivoting", "Post-Exploitation"],
  },
  {
    date: "Jan 2026", type: "cert", dot: "bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.8)]",
    title: "OSCP+ Certified", org: "Offensive Security",
    desc: "Passed the 48-hour hands-on OSCP exam, compromising multiple machines in an isolated network under exam conditions.",
    tags: ["Exploit Dev", "Priv Esc", "Reporting"], highlight: true,
  },
  {
    date: "Jul 2025", type: "cert", dot: "bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.7)]",
    title: "PNPT Certified", org: "TCM Security",
    desc: "Earned the Practical Network Penetration Tester cert covering network pentesting, Active Directory attacks, and professional report writing.",
    tags: ["Network Pentesting", "AD Attacks", "Report Writing"],
  },
  {
    date: "Jul 2025", type: "cert", dot: "bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]",
    title: "Google Cybersecurity Professional", org: "Google",
    desc: "Completed Google Cybersecurity Professional Certificate covering SOC operations, incident response, and network security fundamentals.",
    tags: ["SOC", "Incident Response", "Networking"],
  },
  {
    date: "May 2025", type: "event", dot: "bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]",
    title: "BAE Systems CTF - 2nd Place", org: "University of Birmingham",
    desc: "Competed as part of a team, securing 2nd place out of 10 teams in the BAE Systems Capture the Flag competition.",
    tags: ["CTF", "Team Competition", "Birmingham"],
  },
  {
    date: "2024–2025", type: "edu", dot: "bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.7)]",
    title: "MSc Cyber Security", org: "University of Birmingham",
    desc: "Commenced postgraduate degree covering Forensics, Malware and Penetration Testing, Governance, Risk and Compliance, Network Security, and Cryptography.",
    tags: ["MSc", "Birmingham", "Merit 2:1"],
  },
  {
    date: "2023–2024", type: "event", dot: "bg-white/40",
    title: "Security Conferences and Events", org: "India and United Kingdom",
    desc: "Attended multiple industry conferences and cybersecurity events across India and the UK covering offensive security, threat intelligence, and emerging attack vectors.",
    tags: ["Networking", "Industry Events", "Learning"],
  },
  {
    date: "2023", type: "event", dot: "bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.7)]",
    title: "UTSAV 2023 - Event Co-ordinator", org: "B.M.S.C.E, Bangalore",
    desc: "Led a team of 7 to organise and deliver an event with 50+ participants as part of one of Bangalore's largest inter-college cultural festivals.",
    tags: ["Leadership", "Team of 7", "50+ Participants"],
  },
  {
    date: "2020–2024", type: "edu", dot: "bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.7)]",
    title: "BE Computer Science and Engineering", org: "B.M.S.C.E, Bangalore",
    desc: "Started undergraduate degree covering cryptography, networking, system programming, object-oriented programming, and microprocessors.",
    tags: ["BE", "First Class", "Bangalore"],
  },
];

const TYPE_BADGE = {
  cert:  "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  edu:   "text-purple-300 bg-purple-500/10 border-purple-500/20",
  event: "text-amber-300 bg-amber-500/10 border-amber-500/20",
};
const TYPE_LABEL = { cert: "Certification", edu: "Education", event: "Event" };

export default function JourneyPage() {
  const ref = useReveal();

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>

        <div className="reveal mb-14">
          <p className="text-xs text-white/40 tracking-[0.25em] uppercase mb-3 font-semibold">journey</p>
          <h1 className="font-sans font-bold text-white tracking-tight leading-none mb-4" style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)" }}>
            Timeline
          </h1>
          <p className="text-white/60 text-base leading-relaxed">
            Certifications, education, competitions and events - in reverse chronological order.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-0 w-px bg-gradient-to-b from-white/15 via-white/08 to-transparent" />
          <div className="flex flex-col">
            {TIMELINE.map((item, i) => (
              <div key={i} className="reveal relative flex gap-6 pb-9 group">
                <div className="relative z-10 mt-2 shrink-0">
                  <div className={"w-3.5 h-3.5 rounded-full border-2 border-[#0a0c0f] transition-transform duration-200 group-hover:scale-125 " + item.dot} />
                </div>
                <div className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:bg-white/[0.07] transition-all duration-300 group-hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-white/40 tracking-wider">{item.date}</span>
                    <span className={"text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full border " + TYPE_BADGE[item.type]}>
                      {TYPE_LABEL[item.type]}
                    </span>
                    {item.highlight && (
                      <span className="text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full bg-yellow-500/15 text-yellow-300 border border-yellow-500/20">
                        Key Achievement
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-white text-lg leading-snug">{item.title}</h3>
                  <p className="text-white/45 text-sm font-medium mt-0.5 mb-3">{item.org}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/[0.05] text-white/50 border border-white/[0.08]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}