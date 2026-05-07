"use client";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./useReveal";

const ITEMS = [
  { badge: "2nd",  color: "text-yellow-300 bg-yellow-500/10 border-yellow-500/20",   title: "BAE Systems CTF",      desc: "Secured 2nd place out of 10 teams at the BAE Systems CTF, University of Birmingham." },
  { badge: "HTB",  color: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20", title: "Hack The Box",         desc: "50+ machines solved, Dante Pro Lab completed, global rank #938." },
  { badge: "THM",  color: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20", title: "TryHackMe",            desc: "Top 7% globally with 50+ rooms and multiple learning paths completed." },
  { badge: "1st",  color: "text-yellow-300 bg-yellow-500/10 border-yellow-500/20",   title: "E-Sports Champion",    desc: "1st place at B.M.S. College of Engineering inter-college E-Sports competition." },
  { badge: "EVT",  color: "text-blue-300 bg-blue-500/10 border-blue-500/20",          title: "Event Co-ordinator",   desc: "Led a team of 7 for an event with 50+ participants at UTSAV 2023, Bangalore." },
  { badge: "MUS",  color: "text-pink-300 bg-pink-500/10 border-pink-500/20",           title: "Official Guitarist",   desc: "Represented college in inter-college music competitions across Karnataka, India." },
];

export default function Achievements() {
  const ref = useReveal();

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="reveal">
          <SectionHeader label="achievements" title="Highlights" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="reveal bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:bg-white/[0.055] transition-all duration-300 hover:-translate-y-1 group"
            >
              <span className={"inline-block text-[0.65rem] font-bold px-2.5 py-0.5 rounded-full border mb-4 " + item.color}>
                {item.badge}
              </span>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}