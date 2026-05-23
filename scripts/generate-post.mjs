#!/usr/bin/env node
/**
 * generate-post.mjs
 * ------------------------------------------------------------
 * Splicon の Split View 組み合わせ記事を Claude API で自動生成し、
 * content/blog/ に Markdown ファイルとして書き出す。
 *
 * 使い方:
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-post.mjs "ChatGPT" "YouTube"
 *
 * 生成後は git add → commit → push すれば Vercel が自動再ビルドして公開。
 * GAS から定期実行する場合は、組み合わせリストをループしてこのロジックを回す。
 * ------------------------------------------------------------
 */

import fs from "fs";
import path from "path";

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = "claude-opus-4-7"; // 必要に応じて claude-sonnet 等に変更可

const [, , appA, appB] = process.argv;

if (!appA || !appB) {
  console.error('使い方: node scripts/generate-post.mjs "AppA" "AppB"');
  process.exit(1);
}
if (!API_KEY) {
  console.error("環境変数 ANTHROPIC_API_KEY が設定されていません。");
  process.exit(1);
}

const slug = `${appA}-${appB}`
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const prompt = `You are writing an SEO-optimized English blog post for "Splicon", an iPad app that turns two-app Split View combinations into one-tap Home Screen shortcuts with custom side-by-side icons.

Write a focused, genuinely useful guide about using **${appA} + ${appB}** together in Split View on iPad.

Requirements:
- 450-650 words, natural native English, no fluff or AI cliches (avoid "seamless", "unlock", "revolutionize", "in today's fast-paced world").
- Concrete: explain WHY this specific pair is useful side by side, give 2-3 real workflows.
- Include a short H2 section on how to set it up (pick apps in Splicon, generate icon, create Shortcuts Split View shortcut, assign icon, add to Home Screen).
- Use markdown: a couple of H2 headings, short paragraphs, one bulleted list.
- Do NOT include the page title as an H1 (the site adds it). Start directly with the intro paragraph.
- Do NOT invent fake statistics or fake user quotes.

Return ONLY a valid JSON object, no markdown fences, in exactly this shape:
{
  "title": "string, <= 60 chars, includes both app names and the phrase Split View",
  "description": "string, 120-155 chars, meta description",
  "keywords": ["5-8 lowercase keyword phrases"],
  "markdown": "the full article body in markdown"
}`;

async function main() {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    console.error("API error:", res.status, await res.text());
    process.exit(1);
  }

  const data = await res.json();
  const text = data.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("")
    .replace(/```json|```/g, "")
    .trim();

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (e) {
    console.error("JSON parse failed. Raw output:\n", text);
    process.exit(1);
  }

  const today = new Date().toISOString().slice(0, 10);
  const frontmatter = [
    "---",
    `title: ${JSON.stringify(parsed.title)}`,
    `description: ${JSON.stringify(parsed.description)}`,
    `date: "${today}"`,
    `appA: ${JSON.stringify(appA)}`,
    `appB: ${JSON.stringify(appB)}`,
    `keywords: ${JSON.stringify(parsed.keywords)}`,
    "---",
    "",
  ].join("\n");

  const outDir = path.join(process.cwd(), "content/blog");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${slug}.md`);
  fs.writeFileSync(outPath, frontmatter + parsed.markdown + "\n", "utf8");

  console.log(`✓ 生成完了: content/blog/${slug}.md`);
  console.log(`  title: ${parsed.title}`);
}

main();
