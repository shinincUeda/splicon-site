#!/usr/bin/env node
/**
 * generate-post.mjs
 * ------------------------------------------------------------
 * Splicon の Split View 組み合わせ記事を Claude API で自動生成し、
 * content/{lang}/blog/ に Markdown ファイルとして書き出す。
 *
 * 使い方:
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-post.mjs "ChatGPT" "YouTube"
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-post.mjs --lang ja "ChatGPT" "YouTube"
 *
 * 生成後は git add → commit → push すれば Vercel が自動再ビルドして公開。
 * ------------------------------------------------------------
 */

import fs from "fs";
import path from "path";

// .env.local から環境変数を読み込む（process.env に未設定の場合のみ）
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([^#=\s][^=]*)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = "claude-sonnet-4-6";

// --lang フラグのパース（デフォルト: en）
const args = process.argv.slice(2);
let lang = "en";
const langIdx = args.indexOf("--lang");
if (langIdx !== -1) {
  lang = args[langIdx + 1];
  args.splice(langIdx, 2);
}

const [appA, appB] = args;

if (!appA || !appB) {
  console.error('使い方: node scripts/generate-post.mjs [--lang en|ja] "AppA" "AppB"');
  process.exit(1);
}
if (!["en", "ja"].includes(lang)) {
  console.error(`--lang は "en" または "ja" を指定してください。`);
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

const prompts = {
  en: `You are writing an SEO- and AIO-optimized English blog post for "Splicon", an iPad app that turns two-app Split View combinations into one-tap Home Screen shortcuts with custom side-by-side icons.

Write a focused, genuinely useful guide about using **${appA} + ${appB}** together in Split View on iPad.

Requirements:
- 500-700 words, natural native English, no fluff or AI cliches (avoid "seamless", "unlock", "revolutionize", "in today's fast-paced world").
- FIRST SENTENCE must directly answer the implicit search query: "How do I use ${appA} and ${appB} in Split View on iPad?" — one clear sentence before expanding. This helps AI Overviews extract a snippet.
- Concrete: explain WHY this specific pair is useful side by side, give 2-3 real workflows as a bulleted list.
- Setup section (H2 titled "How to set it up with Splicon"):
  - FIRST: one sentence prompting the reader to download Splicon if they haven't yet, with this exact markdown link: [Download Splicon free from the App Store](https://apps.apple.com/us/app/splicon-split-view-icon-maker/id6762535752)
  - THEN: numbered steps — (1) Open Splicon and search for ${appA} and ${appB}, select them as a pair. (2) Choose a split style and generate the icon — save it to Photos. (3) Open the Shortcuts app, add a "Open App" action set to Split View, and assign the Splicon icon. (4) Add the shortcut to your Home Screen.
- Do NOT include the page title as an H1 (the site adds it). Start directly with the answer sentence.
- Do NOT invent fake statistics or fake user quotes.

Return ONLY a valid JSON object, no markdown fences, in exactly this shape:
{
  "title": "string, <= 60 chars, includes both app names and the phrase Split View",
  "description": "string, 120-155 chars, meta description answering the search intent directly",
  "keywords": ["5-8 lowercase keyword phrases"],
  "markdown": "the full article body in markdown"
}`,

  ja: `あなたは「Splicon」という iPad アプリの SEO・AIO 最適化された日本語ブログ記事を書いています。Splicon は 2 つのアプリの Split View の組み合わせを、カスタムアイコン付きのホーム画面ショートカットにワンタップで起動できるようにするアプリです。

**${appA} + ${appB}** を iPad の Split View で一緒に使う、実用的なガイドを書いてください。

要件:
- 500〜700 字（日本語）、自然な日本語、AI 的な決まり文句を避ける（「シームレスに」「革命的な」など禁止）。
- 冒頭の1文は「iPad で ${appA} と ${appB} を Split View で使うには？」への直接回答にする。AI Overview がスニペットとして抜粋しやすくするため。
- 具体的に: この組み合わせが横に並べて使うと便利な理由、2〜3 つの実際のワークフローを箇条書きで説明する。
- セットアップの H2（「Splicon でセットアップする方法」）:
  - まずアプリ未インストールの読者向けにダウンロードを促す一文を入れる。このリンクをそのまま使う: [Splicon を App Store から無料でダウンロード](https://apps.apple.com/us/app/splicon-split-view-icon-maker/id6762535752)
  - その後に番号付き手順: (1) Splicon を開き ${appA} と ${appB} を検索してペアを選ぶ (2) スタイルを選んでアイコンを生成→写真に保存 (3) ショートカットアプリで Split View アクションを追加し Splicon アイコンを設定 (4) ホーム画面に追加
- H1（ページタイトル）は含めない。本文から直接始める。
- 架空の統計やユーザーの声を作らない。

有効な JSON オブジェクトのみを返してください（マークダウンフェンスなし）:
{
  "title": "string, 30 字以内, 両アプリ名と「Split View」を含む",
  "description": "string, 60〜80 字, メタ description",
  "keywords": ["5〜8 個の小文字キーワードフレーズ"],
  "markdown": "Markdown 形式の本文全体"
}`,
};

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
      messages: [{ role: "user", content: prompts[lang] }],
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

  // iTunes Search API でアプリアイコン URL を取得
  async function fetchIcon(appName) {
    try {
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(appName)}&entity=software&limit=1`;
      const r = await fetch(url);
      const d = await r.json();
      return d.results?.[0]?.artworkUrl512 ?? d.results?.[0]?.artworkUrl100 ?? "";
    } catch {
      return "";
    }
  }
  const [iconA, iconB] = await Promise.all([fetchIcon(appA), fetchIcon(appB)]);

  const today = new Date().toISOString().slice(0, 10);
  const frontmatter = [
    "---",
    `title: ${JSON.stringify(parsed.title)}`,
    `description: ${JSON.stringify(parsed.description)}`,
    `date: "${today}"`,
    `appA: ${JSON.stringify(appA)}`,
    `appB: ${JSON.stringify(appB)}`,
    `iconA: ${JSON.stringify(iconA)}`,
    `iconB: ${JSON.stringify(iconB)}`,
    `keywords: ${JSON.stringify(parsed.keywords)}`,
    "---",
    "",
  ].join("\n");

  const outDir = path.join(process.cwd(), "content", lang, "blog");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${slug}.md`);
  fs.writeFileSync(outPath, frontmatter + parsed.markdown + "\n", "utf8");

  console.log(`✓ 生成完了: content/${lang}/blog/${slug}.md`);
  console.log(`  title: ${parsed.title}`);
}

main();
