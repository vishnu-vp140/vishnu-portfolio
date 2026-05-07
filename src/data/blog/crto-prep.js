export const crtoPrep = {
  slug: "crto-preparation-guide",
  title: "How I Prepared for CRTO 2026",
  subtitle: "A full breakdown of my 4 month preparation journey, resources, and exam strategy",
  date: "April 2026",
  readTime: "8 min read",
  category: "Certification",
  badge: "CRTO",
  badgeColor: "text-yellow-300 bg-yellow-500/10 border-yellow-500/20",
  badgeImage: "/certs/crto.png",
  status: "published",
  excerpt:
    "An honest account of my CRTO journey - failed first attempt, passed second with 100 points, and everything I learned about OPSEC the hard way.",
  content: [
    {
      heading: "Background",
      body: `I studied my Masters in Cybersecurity from the University of Birmingham, a Russell Group university, and the course ended in October. After a brief break following my OSCP, I decided to go for CRTO as my next certification. At that point I already held the Google Cybersecurity Professional certificate, OSCP+, and PNPT.

I started the Red Team Ops course on 12th February.

By no means does completing the course take this long - there was constant procrastination and indecision on my side before taking the exam. I could have taken this exam a lot sooner than I actually did.`,
    },
    {
      heading: "Introduction to CRTO",
      body: `The course itself is extremely resourceful. It covers the theory behind almost all of the important concepts in Active Directory and walks you through every stage of an AD engagement in sequential order - starting from the very basics of Active Directory and Cobalt Strike.

Personally, this course helped me understand Kerberos like no other resource had before. It also covers different aspects such as MSSQL server compromise, ADCS, and Cross Domain Trusts.

What sets this course apart is that it does not just teach you how to attack Active Directory - it teaches you how to be stealthy about it. The OPSEC content in this course is genuinely excellent and something I have not seen covered this well elsewhere.`,
    },
    {
      heading: "Labs",
      body: `Although the lab time is limited and you might initially feel it is not enough, with enough practice you will realise that you do not need more time than that to complete the required objectives. The labs are well designed and all the tools you need are provided within the environment.

The exam environment itself is very similar to the lab - so similar that just following the labs will build enough muscle memory to operate through your exam seamlessly. An instance of Cobalt Strike is provided as well.`,
    },
    {
      heading: "First Attempt - Failed (67 Points)",
      body: `As unfortunate as it is, I failed my first attempt with 67 points. I actually completed the objective of the exam, but I will only say one word without spoiling it - **OPSEC**.

The exam is genuinely fun and I enjoyed it despite the outcome. The failure was entirely on me for not giving OPSEC the respect it deserved.`,
    },
    {
      heading: "Second Attempt - Passed (100 Points)",
      body: `Second time around I passed with 100 points. The mistakes from my first attempt sent me back into the course to focus on the aspects I had neglected. This time I did everything deliberately, with Operational Security given extreme importance at every step.

The difference between my first and second attempts was not technical knowledge - it was discipline and patience.`,
    },
    {
      heading: "Tips for Passing",
      body: `**1. Take it slow and remain calm.**
With calmness comes presence of mind - the kind where you do not miss things that are right in front of you. Without it, you will overlook a lot and it will cost you significant time.

**2. Practice the labs thoroughly - more than twice if needed.**
It will help you in the exam more than anything else. The muscle memory you build is directly applicable.

**3. Take detailed notes, even during the exam.**
As a cybersecurity aspirant you already know the importance of this. But it bears repeating.

**4. Complete every module before attempting the exam.**
Do not rush. You will need concepts from modules you would not expect to be relevant. Take as much time as you need in the course.`,
    },
    {
      heading: "Useful Resources",
      body: `Two resources I found particularly helpful during preparation:

**AnonUday's CRTO Cheatsheet** - a comprehensive reference covering key commands and techniques for the exam.
→ https://github.com/An0nUD4Y/CRTO-Notes/blob/main/CRTO%20-%20Cheatsheet.md

**Sneh Bharava's CRTO 2026 Review** - an excellent review and prep guide from someone who went through the same process recently.
→ https://snehbavarva.medium.com/crto-2026-review-and-preparation-guide-6bbcc9077828`,
    },
    {
      heading: "Conclusion",
      body: `The course is genuinely excellent and I would recommend it highly to anyone looking to move into red teaming after OSCP or PNPT. The Zero-Point Security Discord, Rasta, and the wider community were all incredibly helpful throughout my preparation.

A huge thank you to Sneh Bharava whose blog helped me significantly - you should definitely check it out.

If you are on the fence about CRTO, stop waiting. Take it.`,
    },
  ],
};