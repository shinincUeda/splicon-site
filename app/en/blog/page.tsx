import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import BlogList from "./BlogList";
import "./blog.css";

export const metadata: Metadata = {
  title: "Split View Combos for iPad",
  description:
    "Setup guides for the best iPad Split View app pairs — ChatGPT + YouTube, Notion + Slack, and more. Make each one a one-tap shortcut.",
  alternates: {
    canonical: "https://www.splitview.net/en/blog",
    languages: {
      "en": "https://www.splitview.net/en/blog",
      "x-default": "https://www.splitview.net/en/blog",
    },
  },
};

export default function BlogIndex() {
  const posts = getAllPostsMeta("en");

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

      <BlogList posts={posts} />
    </main>
  );
}
