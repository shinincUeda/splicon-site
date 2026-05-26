import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export type Lang = "en" | "ja";

const getPostsDir = (lang: Lang) =>
  path.join(process.cwd(), "content", lang, "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  appA: string;
  appB: string;
  iconA: string;
  iconB: string;
  keywords: string[];
};

export type Post = PostMeta & {
  contentHtml: string;
};

function ensureDir(lang: Lang) {
  const dir = getPostsDir(lang);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function getAllPostSlugs(lang: Lang = "en"): string[] {
  ensureDir(lang);
  return fs
    .readdirSync(getPostsDir(lang))
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPostsMeta(lang: Lang = "en"): PostMeta[] {
  ensureDir(lang);
  const slugs = getAllPostSlugs(lang);
  const posts = slugs.map((slug) => {
    const fullPath = path.join(getPostsDir(lang), `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      appA: data.appA ?? "",
      appB: data.appB ?? "",
      iconA: data.iconA ?? "",
      iconB: data.iconB ?? "",
      keywords: data.keywords ?? [],
    } as PostMeta;
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(
  slug: string,
  lang: Lang = "en"
): Promise<Post | null> {
  ensureDir(lang);
  const fullPath = path.join(getPostsDir(lang), `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    appA: data.appA ?? "",
    appB: data.appB ?? "",
    iconA: data.iconA ?? "",
    iconB: data.iconB ?? "",
    keywords: data.keywords ?? [],
    contentHtml,
  };
}
