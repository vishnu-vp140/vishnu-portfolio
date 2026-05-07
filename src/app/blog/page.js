"use client";

import Link from "next/link";
import { posts } from "@/data/blog/index";
import { useReveal } from "@/components/useReveal";

export default function BlogPage() {
  const ref = useReveal();

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>

        <div className="reveal mb-16">
          <p className="text-xs text-white/30 tracking-[0.25em] uppercase mb-3 font-medium">writing</p>
          <h1 className="font-sans font-bold text-white tracking-tight leading-none" style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)" }}>
            Blog
          </h1>
          <p className="text-white/35 text-sm mt-4 leading-relaxed">
            Certification prep guides, security research notes, and learning logs.
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            post.status === "published" ? (
              <Link key={post.slug} href={"/blog/" + post.slug} className="group block">
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/[0.055] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-0.5 reveal">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={"text-[0.62rem] font-semibold px-2.5 py-0.5 rounded-full border " + post.badgeColor}>
                      {post.badge}
                    </span>
                    <span className="text-white/25 text-xs font-mono">{post.date}</span>
                    <span className="text-white/25 text-xs font-mono">{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-white text-xl leading-snug mb-2 group-hover:text-emerald-400 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-white/35 text-sm mb-4 leading-relaxed">{post.subtitle}</p>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <span className="text-white/25 text-xs">{post.category}</span>
                    <span className="text-emerald-400 text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <div key={post.slug} className="reveal bg-white/[0.015] border border-white/[0.05] border-dashed rounded-2xl p-6 opacity-60">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={"text-[0.62rem] font-semibold px-2.5 py-0.5 rounded-full border " + post.badgeColor}>
                    {post.badge}
                  </span>
                  <span className="text-[0.62rem] font-semibold px-2.5 py-0.5 rounded-full border text-white/30 bg-white/5 border-white/10">
                    Draft
                  </span>
                  <span className="text-white/20 text-xs font-mono">{post.date}</span>
                </div>
                <h2 className="font-bold text-white/50 text-xl leading-snug mb-2">{post.title}</h2>
                <p className="text-white/25 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            )
          ))}
        </div>

      </div>
    </main>
  );
}