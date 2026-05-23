import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import "./blog.css";

export const metadata: Metadata = {
  title: "Split View Combos for iPad",
  description:
    "Setup guides for the best iPad Split View app pairs — ChatGPT + YouTube, Notion + Slack, and more. Make each one a one-tap shortcut.",
  alternates: { canonical: "https://split-icon.vercel.app/blog" },
};

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <main className="blog-index">
      <header className="blog-index-head">
        <p className="eyebrow-alt">Combo library</p>
        <h1>Split View pairs worth setting up</h1>
        <p className="blog-index-lead">
          Every guide shows you which two apps work well side by side on iPad —
          and how to turn that pair into a single tap on your Home Screen.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="blog-empty">
          No combo guides published yet. They&apos;re coming soon.
        </p>
      ) : (
        <ul className="post-list">
          {posts.map((p) => (
            <li key={p.slug}>
              <a href={`/blog/${p.slug}`}>
                <span className="post-pair">
                  {p.appA} <span className="x">×</span> {p.appB}
                </span>
                <span className="post-title">{p.title}</span>
                <span className="post-desc">{p.description}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
