import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import BlogList from "./BlogList";
import "../../en/blog/blog.css";

const SITE = "https://www.splitview.net";

export const metadata: Metadata = {
  title: "iPad Split View 組み合わせ一覧 | Splicon",
  description:
    "ChatGPT＋YouTube、Notion＋Slackなど、iPadのSplit Viewで便利なアプリ組み合わせガイド。Spliconでアイコンを作りホーム画面にワンタップショートカットを設置しよう。",
  alternates: {
    canonical: `${SITE}/ja/blog`,
    languages: {
      "ja": `${SITE}/ja/blog`,
      "en": `${SITE}/en/blog`,
      "x-default": `${SITE}/en/blog`,
    },
  },
};

export default function JaBlogIndex() {
  const posts = getAllPostsMeta("ja");

  return (
    <main className="blog-index">
      <header className="blog-index-head">
        <p className="eyebrow-alt">組み合わせライブラリ</p>
        <h1>iPad Split View で使える組み合わせガイド</h1>
        <p className="blog-index-lead">
          2つのアプリを横に並べて使う便利な組み合わせと、Spliconでホーム画面にワンタップショートカットを作る方法を紹介します。
        </p>
      </header>

      <BlogList posts={posts} />
    </main>
  );
}
