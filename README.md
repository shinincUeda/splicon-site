# Splicon Site — LP + 英語SEOブログ

Next.js (App Router) + Markdown 方式。LP と `/blog` を1プロジェクトに同梱。
記事は `content/blog/*.md` を置くだけで自動的にページ化・サイトマップ登録される。

## セットアップ

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 本番ビルド
```

## 記事を自動生成する（本命ワークフロー）

```bash
ANTHROPIC_API_KEY=sk-... npm run new-post "ChatGPT" "YouTube"
# → content/blog/chatgpt-youtube.md が生成される
git add content/ && git commit -m "add combo: chatgpt x youtube" && git push
# → Vercel が自動再ビルドして公開
```

GAS から回す場合は、組み合わせリストをループして同じ Claude API 呼び出しを実行し、
生成した Markdown を GitHub Contents API でコミットすればよい。
既存の AIニュース自動生成パイプライン（GAS + Claude + WordPress）とほぼ同じ構造。

## 記事を手で追加する場合

`content/blog/` に `スラッグ.md` を置く。フロントマター例:

```
---
title: "Notion + Slack in Split View on iPad"
description: "120〜155字のメタdescription"
date: "2026-05-23"
appA: "Notion"
appB: "Slack"
keywords: ["notion slack split view", "..."]
---
（ここから本文 markdown。H1は書かない）
```

## デプロイ

GitHub に push → Vercel で Import するだけ。
記事生成はローカル/GAS側で実行するので、Vercel 側に API キーは不要。

## カスタマイズが必要な箇所

- `app/layout.tsx` と各 `generateMetadata`：`https://split-icon.vercel.app` を実ドメインに
- App Store リンク：`https://apps.apple.com/app/splicon` を実URLに（全ファイル一括置換）
- ロゴ：現状はCSSで簡易表現。実アイコンができたら `public/` に置いて差し替え

## ディレクトリ

```
app/
  page.tsx          LP本体
  home.css          LP用スタイル
  layout.tsx        共通ヘッダ/フッタ + SEOメタ
  blog/
    page.tsx        記事一覧
    [slug]/page.tsx 個別記事（JSON-LD構造化データ付き）
    blog.css
  sitemap.ts        自動サイトマップ
  robots.ts
content/blog/        ← 記事Markdownを置く場所
lib/posts.ts         Markdown読み込みロジック
scripts/generate-post.mjs  Claude APIで記事自動生成
```
