import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import "../blog.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPostSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "en");
  if (!post) return {};
  const url = `https://www.splitview.net/en/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: url,
      languages: { "en": url, "x-default": url },
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "en");
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: post.title,
    description: post.description,
    step: [
      { "@type": "HowToStep", text: "Pick the two apps inside Splicon." },
      { "@type": "HowToStep", text: "Generate the combined side-by-side icon." },
      { "@type": "HowToStep", text: "Create a Split View shortcut and assign the icon." },
      { "@type": "HowToStep", text: "Add it to the Home Screen." },
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
          <a href="/en/blog">Combos</a> / {post.appA} × {post.appB}
        </p>
        <h1 className="post-h1">{post.title}</h1>
        <p className="post-sub">{post.description}</p>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <div className="post-cta">
          <h2>Make this pair a one-tap shortcut</h2>
          <p>
            Splicon generates the side-by-side icon for {post.appA} and{" "}
            {post.appB} in seconds. Free for your first 3 pairs.
          </p>
          <a
            className="appstore-btn"
            href="https://apps.apple.com/us/app/splicon-split-view-icon-maker/id6762535752"
            target="_blank"
            rel="noopener"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.svg" alt="Splicon" className="appstore-btn-icon" width={44} height={44} />
            <span className="appstore-btn-text">
              <span className="appstore-btn-sub">Download on the</span>
              <span className="appstore-btn-name">App Store</span>
              <span className="appstore-btn-platform">iPad · iPadOS 17+</span>
            </span>
          </a>
        </div>
      </article>
    </main>
  );
}
