"use client";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./useReveal";

const GROUPS = [
  { title: "Web App Pentesting",  skills: ["Burp Suite", "sqlmap", "Fuzzing", "Postman", "OWASP Top 10", "WSTG"] },
  { title: "Active Directory",    skills: ["BloodHound", "Mimikatz", "Impacket", "NetExec", "Responder", "PowerView", "Kerberos"] },
  { title: "Network Analysis",    skills: ["Nmap", "Netcat", "Wireshark", "Tcpdump", "Nessus"] },
  { title: "Reverse Engineering", skills: ["Ghidra", "dnSpy", "Frida", "gdb"] },
  { title: "C2 and Frameworks",   skills: ["Metasploit", "Cobalt Strike", "MITRE ATT&CK", "PTES", "NIST"] },
  { title: "Cloud and Infra",     skills: ["GCP", "Linux", "Docker", "T-Pot", "iptables"] },
  { title: "Programming",         skills: ["Python", "Bash", "C", "JavaScript", "Java", "x86 Assembly"] },
  { title: "Forensics",           skills: ["Autopsy", "ELK Stack", "Volatility"] },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="reveal">
          <SectionHeader label="tools and skills" title="Arsenal" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {GROUPS.map((group, i) => (
            <div
              key={i}
              className="reveal bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:bg-white/[0.055] transition-all duration-300"
            >
              <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-4 pb-3 border-b border-white/[0.06]">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[0.68rem] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] text-white/45 border border-white/[0.07] hover:text-white/70 hover:bg-white/[0.07] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}