# Vishnu Vuttarkar — Personal Portfolio

> Offensive Security Engineer · OSCP+ · CRTO · PNPT

A fully custom portfolio website built from scratch to showcase my cybersecurity work, certifications, research, and writing.

Live at **[vishnuvuttarkar.com](https://vishnuvuttarkar.com)**

---

## Stack

- **Framework** — Next.js 14 (App Router)
- **Styling** — Tailwind CSS (utility classes only)
- **Language** — JavaScript (ES6+)
- **Fonts** — Syne + Share Tech Mono via Google Fonts
- **Images** — Next/Image
- **Deployment** — Custom domain

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero — intro, cert badges, social links |
| `/work` | Security projects and writeups |
| `/blog` | Certification prep guides and research notes |
| `/about` | Profile, education, certifications, stats |
| `/journey` | Interactive timeline of certs, events, education |
| `/skills` | Full tools and technology arsenal |
| `/contact` | Contact links and availability |

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.js           # Home (Hero)
│   ├── work/
│   │   ├── page.js       # Projects listing
│   │   └── [slug]/       # Individual project writeups
│   ├── blog/
│   │   ├── page.js       # Blog listing
│   │   └── [slug]/       # Individual blog posts
│   ├── about/page.js
│   ├── journey/page.js
│   ├── skills/page.js
│   └── contact/page.js
├── components/           # Reusable components
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Footer.js
│   ├── SectionHeader.js
│   └── useReveal.js      # Scroll animation hook
└── data/
    ├── projects/         # One file per project
    │   ├── index.js
    │   ├── mfa-assessment.js
    │   ├── alexa-pentest.js
    │   ├── active-directory.js
    │   ├── honeypot-gcp.js
    │   └── portfolio-website.js
    └── blog/             # One file per post
        ├── index.js
        ├── oscp-prep.js
        └── crto-prep.js
```

---

## Adding Content

**New project** — create a file in `src/data/projects/`, export the object, and add one import line to `src/data/projects/index.js`.

**New blog post** — create a file in `src/data/blog/`, export the object, and add one import line to `src/data/blog/index.js`.


---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Certifications

- OSCP+ — Offensive Security (Jan 2026)
- CRTO — Zero-Point Security (Apr 2026)
- PNPT — TCM Security (Jul 2025)
- Google Cybersecurity Professional (Jul 2025)