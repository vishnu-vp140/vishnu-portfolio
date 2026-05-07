"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { posts } from "@/data/blog/index";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post || post.status !== "published") {
    return (
      <main className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 text-sm mb-4">Post not found or not yet published</p>
          <Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link>
        </div>
      </main>
    );
  }

  const renderBody = (body) => {
    const lines = body.split("\n");
    return lines.map((line, i) => {
      // URL lines → clickable link
      if (line.trim().startsWith("→ http")) {
        const url = line.trim().replace("→ ", "");
        return (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-emerald-400 text-sm hover:text-emerald-300 hover:underline transition-colors mt-1 mb-3 break-all"
          >
            {url} ↗
          </a>
        );
      }

      // Numbered tips → styled block
      if (/^\*\*\d+\./.test(line.trim())) {
        const content = line.trim().replace(/^\*\*(\d+\.\s.*?)\*\*/, "$1");
        return (
          <p key={i} className="text-white font-semibold text-base mt-4 mb-1">
            {content}
          </p>
        );
      }

      // Bold text inline
      if (line.includes("**")) {
        const parts = line.split(/(\*\*[^*]+\*\*)/);
        return (
          <p key={i} className="text-white/70 text-base leading-[1.9] mb-2">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**")
                ? <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>
                : part
            )}
          </p>
        );
      }

      // Empty line → spacer
      if (line.trim() === "") return <div key={i} className="h-2" />;

      // Default paragraph
      return (
        <p key={i} className="text-white/70 text-base leading-[1.9] mb-2">
          {line}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">

        <div className="mb-10">
          <Link href="/blog" className="text-white/35 text-sm hover:text-white/65 transition-colors flex items-center gap-2 mb-8">
            ← Back to Blog
          </Link>

          {/* Badge image if present */}
          {post.badgeImage && (
            <div className="flex justify-center mb-8">
              <div className="relative w-28 h-28">
                <Image
                  src={post.badgeImage}
                  alt={post.badge + " badge"}
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={"text-xs font-semibold px-2.5 py-0.5 rounded-full border " + post.badgeColor}>
              {post.badge}
            </span>
            <span className="text-white/35 text-xs font-mono">{post.date}</span>
            <span className="text-white/35 text-xs font-mono">{post.readTime}</span>
          </div>

          <h1 className="font-bold text-white leading-tight mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            {post.title}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">{post.subtitle}</p>
        </div>

        <div className="pb-10 mb-10 border-b border-white/[0.07]">
          <p className="text-white/60 text-base leading-[1.9] italic">
            {post.excerpt}
          </p>
        </div>

        <div className="space-y-10">
          {post.content.map((section, i) => (
            <section key={i}>
              <h2 className="font-bold text-white text-xl mb-5">{section.heading}</h2>
              <div>{renderBody(section.body)}</div>
            </section>
          ))}
        </div>

        <div className="pt-12 mt-12 border-t border-white/[0.07] flex items-center justify-between">
          <Link href="/blog" className="text-white/35 text-sm hover:text-white/65 transition-colors">
            ← All Posts
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
            Get in touch →
          </Link>
        </div>

      </div>
    </main>
  );
}