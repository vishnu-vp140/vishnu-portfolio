"use client";

import { useReveal } from "@/components/useReveal";

const GROUPS = [
  { title: "Web App Pentesting",  skills: ["Burp Suite", "sqlmap", "Fuzzing", "Postman", "OWASP Top 10", "WSTG"] },
  { title: "Active Directory",    skills: ["BloodHound", "Mimikatz", "Impacket", "NetExec", "Responder", "PowerView", "Kerberos", "Rubeus"] },
  { title: "Network Analysis",    skills: ["Nmap", "Netcat", "Wireshark", "Tcpdump", "Nessus"] },
  { title: "Reverse Engineering", skills: ["Ghidra", "dnSpy", "Frida", "gdb"] },
  { title: "C2 and Frameworks",   skills: ["Metasploit", "Cobalt Strike", "MITRE ATT&CK", "PTES", "NIST"] },
  { title: "Cloud and Infra",     skills: ["GCP", "Linux", "Docker", "T-Pot", "iptables"] },
  { title: "Programming",         skills: ["Python", "Bash", "C", "JavaScript", "Java", "x86 Assembly"] },
  { title: "Forensics",           skills: ["Autopsy", "ELK Stack", "Volatility"] },
];

export default function SkillsPage() {
  const ref = useReveal();

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <div className="reveal mb-14">
          <p className="text-xs text-white/50 tracking-[0.25em] uppercase mb-3 font-semibold">tools and skills</p>
          <h1 className="font-sans font-bold text-white tracking-tight leading-none mb-4" style={{ fontSize: "clamp(2rem, 3.5vw, 2.6rem)" }}>
            Arsenal
          </h1>
          <p className="text-white/65 text-base leading-relaxed">
            Tools and technologies I use regularly across offensive security engagements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {GROUPS.map((group, i) => (
            <div key={i} className="reveal bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:bg-white/[0.07] transition-all duration-300">
              <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-4 pb-3 border-b border-white/[0.08]">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="text-xs font-medium px-2.5 py-1.5 rounded-lg bg-white/[0.05] text-white/65 border border-white/[0.09] hover:text-white/90 hover:bg-white/[0.09] transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}