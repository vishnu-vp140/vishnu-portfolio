"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/",        label: "Home"    },
  { href: "/work",    label: "Work"    },
  { href: "/about",   label: "About"   },
  { href: "/journey", label: "Journey" },
  { href: "/blog",    label: "Blog"    },
  { href: "/contact", label: "Contact" },
];

function getGreeting() {
  const h = new Date().getHours();
  if (h >= 0 && h < 5) return "Up Late?";
  if (h < 12) return "Good Morning";
  if (h < 17) return "Good Afternoon";
  return "Good Evening";
}

export default function Navbar() {
  const pathname = usePathname();
  const [greeting, setGreeting] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkClass = (href) => {
    if (isActive(href)) {
      return "px-4 py-1.5 rounded-full text-sm font-semibold bg-white text-black transition-all duration-200";
    }
    return "px-4 py-1.5 rounded-full text-sm font-semibold text-white/55 hover:text-white hover:bg-white/[0.07] transition-all duration-200";
  };

  const mobileLinkClass = (href) => {
    if (isActive(href)) {
      return "block px-4 py-2.5 rounded-xl text-sm font-semibold bg-white text-black";
    }
    return "block px-4 py-2.5 rounded-xl text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.07] transition-colors";
  };

  return (
    <>
      <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full border border-white/[0.08] bg-[#0f0f0f]/85 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6)]">

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block w-px h-5 bg-white/10 mx-2" />

          <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07]">
            <span
              className="w-2 h-2 rounded-full bg-emerald-400"
              style={{ animation: "pulseGlow 2s ease-in-out infinite" }}
            />
            <span className="text-sm text-white/60 font-medium">{greeting}</span>
          </div>

          <button
            className="md:hidden px-3 py-1.5 text-white/70 hover:text-white transition-colors text-sm font-medium"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-[72px] left-4 right-4 z-40 bg-[#111]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 md:hidden shadow-2xl">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass(link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 px-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-white/40 font-medium">{greeting}</span>
          </div>
        </div>
      )}
    </>
  );
}