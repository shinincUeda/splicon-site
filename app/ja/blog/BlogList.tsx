"use client";

import { useState } from "react";
import type { PostMeta } from "@/lib/posts";

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? posts.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.appA.toLowerCase().includes(q) ||
          p.appB.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q)
        );
      })
    : posts;

  return (
    <>
      <div className="blog-search-wrap">
        <input
          className="blog-search"
          type="search"
          placeholder="アプリ名で絞り込む…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="記事を絞り込む"
        />
        {query && (
          <span className="blog-search-count">
            {filtered.length} 件
          </span>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="blog-empty">「{query}」に一致する組み合わせはありません。</p>
      ) : (
        <ul className="post-grid">
          {filtered.map((p) => (
            <li key={p.slug}>
              <a href={`/ja/blog/${p.slug}`} className="post-card">
                <div className="post-card-icons">
                  {p.iconA ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.iconA} alt={p.appA} className="app-icon" width={52} height={52} />
                  ) : (
                    <span className="app-icon app-icon-fallback">{p.appA[0]}</span>
                  )}
                  <span className="icon-x">×</span>
                  {p.iconB ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.iconB} alt={p.appB} className="app-icon" width={52} height={52} />
                  ) : (
                    <span className="app-icon app-icon-fallback">{p.appB[0]}</span>
                  )}
                </div>
                <span className="post-card-pair">
                  {p.appA} × {p.appB}
                </span>
                <span className="post-card-title">{p.title}</span>
                <span className="post-card-desc">{p.description}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
