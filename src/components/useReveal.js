"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll(".reveal");
            if (children.length > 0) {
              children.forEach((child, i) => {
                setTimeout(() => child.classList.add("visible"), i * 90);
              });
            } else {
              entry.target.classList.add("visible");
            }
          }
        });
      },
      { threshold: 0.08 }
    );

    const reveals = el.querySelectorAll(".reveal");
    if (reveals.length > 0) {
      reveals.forEach((r) => observer.observe(r));
    } else {
      el.classList.add("reveal");
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}