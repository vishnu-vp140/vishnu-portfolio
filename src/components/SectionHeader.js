"use client";

export default function SectionHeader({ label, title }) {
  return (
    <div className="mb-10">
      <p className="text-xs text-white/40 tracking-[0.25em] uppercase mb-3 font-semibold">
        {label}
      </p>
      <h2
        className="font-sans font-bold text-white tracking-tight leading-none"
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)" }}      >
        {title}
      </h2>
    </div>
  );
}