import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import "../../../en/blog/blog.css";

const SITE = "https://www.splitview.net";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPostSlugs("ja").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "ja");
  if (!post) return {};
  const url = `${SITE}/ja/blog/${post.slug}`;
  const enUrl = `${SITE}/en/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: url,
      languages: {
        "ja": url,
        "en": enUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
    },
  };
}

export default async function JaPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "ja");
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: post.title,
    description: post.description,
    inLanguage: "ja",
    step: [
      { "@type": "HowToStep", text: "Spliconで2つのアプリを選択する。" },
      { "@type": "HowToStep", text: "組み合わせアイコンを生成して写真に保存する。" },
      { "@type": "HowToStep", text: "ショートカットアプリでSplit Viewアクションを作成し、アイコンを設定する。" },
      { "@type": "HowToStep", text: "ホーム画面に追加する。" },
    ],
  };

  return (
    <main className="post">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="post-article">
        <p className="post-breadcrumb">
          <a href="/ja/blog">組み合わせ一覧</a> / {post.appA} × {post.appB}
        </p>
        <h1 className="post-h1">{post.title}</h1>
        <p className="post-sub">{post.description}</p>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <div className="post-cta">
          <h2>{post.appA}と{post.appB}をワンタップで起動</h2>
          <p>
            Spliconなら{post.appA}と{post.appB}の組み合わせアイコンを数秒で作成できます。最初の3ペアは無料。
          </p>
          <a
            className="appstore-btn"
            href="https://apps.apple.com/jp/app/splicon-split-view%E5%B0%82%E7%94%A8%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC/id6762535752"
            target="_blank"
            rel="noopener"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.svg" alt="Splicon" className="appstore-btn-icon" width={44} height={44} />
            <span className="appstore-btn-text">
              <span className="appstore-btn-sub">App Storeで入手</span>
              <span className="appstore-btn-name">Splicon</span>
              <span className="appstore-btn-platform">iPad · iPadOS 17+</span>
            </span>
          </a>
        </div>
      </article>
    </main>
  );
}
