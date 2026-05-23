import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import "../blog.css";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  const url = `https://split-icon.vercel.app/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug);
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
          <a href="/blog">Combos</a> / {post.appA} × {post.appB}
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
            {post.appB} in seconds.
          </p>
          <a
            className="btn-primary"
            href="https://apps.apple.com/app/splicon"
            target="_blank"
            rel="noopener"
          >
            Get Splicon on the App Store
          </a>
        </div>
      </article>
    </main>
  );
}
