export const oscpPrep = {
  slug: "oscp-preparation-guide",
  title: "OSCP review",
  subtitle: "A full breakdown of my 4 month preparation journey, resources, and exam strategy",
  date: "February 2026",
  readTime: "10 min read",
  category: "Certification",
  badge: "OSCP+",
  badgeColor: "text-red-300 bg-red-500/10 border-red-500/20",
  badgeImage: "/certs/oscp.png",
  status: "published",
  excerpt:
    "Everything I knew before starting OSCP, from choosing the right labs to managing the 48-hour exam. An honest account of what worked, what did not, and how I passed.",
  content: [
    {
      heading: "Resources I Used",
      body: `- Offensive Security Proving Grounds
- Hack The Box Academy
- Hack The Box Machines
- TCM Security's Practical Ethical Hacking (PEH) Course
- LainKusanagi's OSCP-like boxes list
- 0xdf's walkthroughs
- IppSec's YouTube videos
- S1REN's YouTube videos`,
    },
    {
      heading: "Background",
      body: `I studied my Masters in Cybersecurity from the University of Birmingham, a Russell Group university, and the course ended in October. Immediately after it ended, I started preparing for OSCP on 8th September. At that point I also held TCM Security's PNPT.

The preparation lasted 4 months, during which I studied for as long as I could - ranging from 5 to 10 hours a day, with a few days skipped in the middle due to me being human (lol).

The exam was scheduled to start on 4th January at 6 in the morning. I ended the exam with 70 points at 10 that night - about 16 hours in total. The following evening, I submitted the report.`,
    },
    {
      heading: "Preparation",
      body: `For the duration of my preparation I studied from numerous resources. I started with HTB Academy where I enrolled in the Penetration Tester Job Role Path and almost finished it, while simultaneously working through machines from LainKusanagi's OSCP-like list. Although I did complete Dante from HTB Pro Labs, it was not until a few days after OSCP.

From LainKusanagi's list I completed all of the HackTheBox and Proving Grounds boxes, with very few from TryHackMe. And trust me - I got stuck more times than I can remember. I came close to giving up on certain boxes, and almost actually gave up on a few, only to revisit them later and root them.

Whenever I got stuck, I would go through walkthroughs - ideally ones with videos. I would watch IppSec's videos only after genuinely attempting a box for a while, and I absorbed his methodology like a sponge. S1REN's walkthroughs are a different experience entirely - each one is like watching a movie.

As time passed I came across different methods and learned a huge amount along the way. HTB Academy taught me a significant share of what I needed for the exam. Importantly, I did not buy the PEN-200 course - all I bought was two OSCP+ attempts.

I would not suggest going down this path. The PEN-200 course is a more natural way to prepare - it is specifically designed to build the skills and confidence you need for the exam. My path had its virtues (freedom of time and resources) and its shortcomings (missing the structured PEN-200 material). Go in with eyes open if you choose the same route.`,
    },
    {
      heading: "Reporting",
      body: `Having already completed PNPT, I knew how to structure a pentest report. But let me be direct about something - **do not neglect screenshots**.

There was a moment after my exam ended where panic struck when I thought I had missed the initial screenshot of one of the standalone machines. I went back to the browser on my VM and found the page still sitting open on a tab - relief rushed through me like nothing else. It was genuinely terrifying.

Always take screenshots at every stage of the exam. No matter how many. It is always better to be safe than sorry - missing one could cost you an entire attempt.

I followed the official OffSec report template. The report should be written such that any other pentester could replicate the full attack chain following your steps, along with clear recommendations on how to mitigate each finding.`,
    },
    {
      heading: "Tips for Passing",
      body: `**1. Develop a methodology for organising your findings.**
I had separate folders for each standalone box and a common folder for the AD set. Structure your notes from the start - not after.

**2. Your arsenal should contain multiple tools for the same outcome.**
There is a real possibility that a tool that worked perfectly in labs will let you down in the exam. Always have a backup.

**3. Take thorough, organised notes.**
This should go without saying. But it bears repeating every single time.

**4. Pivoting is not that complex.**
It is just three boxes in an AD chain. Learn ligolo-ng - it is a god-tier pivoting tool and one you can put 100 percent of your trust in during the exam.

**5. NetExec is superior to CrackMapExec.**
It is the updated and maintained version. Use it.

**6. Know the Impacket toolkit inside and out.**
You will use it more than you expect.

**7. Have multiple wordlists for bruteforcing.**
Different purposes, different lists. Do not rely on rockyou alone.

**8. Take breaks.**
This is an underrated exam tip. Stepping away will do more for you than grinding through fatigue. It calms your nerves and gives you fresh eyes.`,
    },
  ],
};