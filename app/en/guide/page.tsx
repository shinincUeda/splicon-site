import type { Metadata } from "next";
import "../blog/blog.css";
import "./guide.css";

const SITE = "https://www.splitview.net";
const URL = `${SITE}/en/guide`;

export const metadata: Metadata = {
  title: "How to Launch Split View in One Tap on iPad — Splicon Guide",
  description:
    "Set up a one-tap Split View shortcut for any two iPad apps in 5 minutes. Splicon generates a custom icon and automates the Shortcut so you never have to drag from the Dock again.",
  keywords: [
    "iPad Split View one tap",
    "Split View shortcut iPad",
    "iPad multitasking tip",
    "Splicon guide",
    "how to use Split View iPad",
    "iPad productivity",
  ],
  alternates: {
    canonical: URL,
    languages: { en: URL, "x-default": URL },
  },
  openGraph: {
    type: "article",
    url: URL,
    title: "How to Launch Split View in One Tap on iPad — Splicon Guide",
    description:
      "Set up a one-tap Split View shortcut for any two iPad apps in 5 minutes.",
  },
};

const COMBOS = [
  {
    label: "ChatGPT × YouTube",
    slug: "chatgpt-youtube",
    desc: "Watch while you wait for AI responses",
  },
  {
    label: "Gmail × Google Calendar",
    slug: "gmail-google-calendar",
    desc: "Check your inbox and schedule at the same time",
  },
  {
    label: "Slack × Notion",
    slug: "slack-notion",
    desc: "Turn chat into documentation without switching apps",
  },
  {
    label: "YouTube × GoodNotes",
    slug: "goodnotes-youtube",
    desc: "Take notes while watching a lecture",
  },
  {
    label: "Kindle × Obsidian",
    slug: "kindle-obsidian",
    desc: "Build a reading log as you go",
  },
  {
    label: "ChatGPT × Notion",
    slug: "chatgpt-notion",
    desc: "Draft, refine, and save ideas in one view",
  },
  {
    label: "Zoom × GoodNotes",
    slug: "zoom-goodnotes",
    desc: "Handwrite meeting notes during a call",
  },
  {
    label: "Duolingo × YouTube",
    slug: "duolingo-youtube",
    desc: "Language practice with native content side by side",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Launch Split View in One Tap on iPad",
  description:
    "Use Splicon to create a custom icon and Shortcut that opens any two iPad apps in Split View with a single tap from your Home Screen.",
  totalTime: "PT5M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Download Splicon",
      text: "Install Splicon from the App Store — free for your first 3 pairs.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Pick your two apps",
      text: "Select any two apps you want to use in Split View.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Generate the icon",
      text: "Splicon combines both app icons into a single side-by-side image.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Save and set up the Shortcut",
      text: "Save the icon to Photos, then use the Shortcuts app to assign it as a Home Screen icon.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add to Home Screen",
      text: "Place the shortcut icon in a prominent spot. One tap now opens both apps in Split View.",
    },
  ],
};

export default function GuidePage() {
  return (
    <main className="post">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="post-article guide-article">

        <p className="post-breadcrumb"><a href="/en/blog">Combos</a> / Guide</p>
        <h1 className="post-h1">
          How to launch Split View in one tap on iPad
        </h1>
        <p className="post-sub">
          Set up a custom Home Screen shortcut for any app pair in 5 minutes —
          no dragging from the Dock ever again.
        </p>

        {/* Problem */}
        <h2>The problem with Split View</h2>
        <p>
          Split View on iPad is genuinely useful. Two apps, side by side, no
          context-switching. But almost nobody uses it regularly — because
          opening it every time is a pain.
        </p>
        <p>
          The standard flow: open app A, swipe up from the Dock to find app B,
          drag it to the edge, hope it lands right. Do that ten times a day and
          you stop bothering.
        </p>

        {/* Solution */}
        <h2>The fix: a one-tap Home Screen icon</h2>
        <p>
          <strong>Splicon</strong> turns any app pair into a permanent Home
          Screen shortcut. You set it up once — it takes about 5 minutes — and
          from then on it&apos;s one tap.
        </p>
        <p>
          The key difference from a plain Shortcuts icon: Splicon generates a
          combined image using the actual app icons of both apps, side by side.
          You can glance at your Home Screen and instantly know which pair each
          icon launches, without reading any text.
        </p>

        {/* Before / After */}
        <div className="guide-compare">
          <div className="guide-compare-col guide-compare-before">
            <p className="guide-compare-label">Before</p>
            <ol>
              <li>Open app A</li>
              <li>Swipe up to reveal the Dock</li>
              <li>Find app B</li>
              <li>Drag it to the side</li>
              <li>Adjust the split ratio</li>
            </ol>
            <p className="guide-compare-result">→ 6 steps, every single time</p>
          </div>
          <div className="guide-compare-col guide-compare-after">
            <p className="guide-compare-label">After Splicon</p>
            <ol>
              <li>Tap the icon on your Home Screen</li>
            </ol>
            <p className="guide-compare-result">→ Done</p>
          </div>
        </div>

        {/* Setup */}
        <h2>5-minute setup</h2>
        <ol className="guide-steps">
          <li>
            <strong>Download Splicon</strong> — free for your first 3 pairs.{" "}
            <a
              href="https://apps.apple.com/us/app/splicon-split-view-icon-maker/id6762535752"
              target="_blank"
              rel="noopener"
            >
              Get it on the App Store
            </a>
          </li>
          <li>
            <strong>Pick two apps</strong> — choose any two you want open side
            by side.
          </li>
          <li>
            <strong>Generate the icon</strong> — Splicon combines both app icons
            into one image automatically.
          </li>
          <li>
            <strong>Save to Photos</strong> — the combined icon image is saved
            to your photo library.
          </li>
          <li>
            <strong>Create the Shortcut</strong> — open the Shortcuts app, add
            a new shortcut, set the Home Screen icon to the image you just
            saved.
          </li>
          <li>
            <strong>Add to Home Screen</strong> — put it somewhere visible.
            Front page or Dock works best.
          </li>
        </ol>
        <p>
          That&apos;s it. The next time you want those two apps open together,
          tap the icon once.
        </p>

        {/* Why it works */}
        <h2>Why a visible icon matters</h2>
        <p>
          Behavior research consistently shows that visual cues drive action far
          more reliably than intention. If the shortcut is on your Home Screen
          where you see it, you use it. If it&apos;s buried in the Shortcuts
          app, you don&apos;t.
        </p>
        <p>
          The combined icon does two things: it acts as that visual trigger, and
          it tells you exactly what will happen when you tap it. No guessing.
        </p>

        {/* Combos */}
        <h2>Pairs worth setting up first</h2>
        <p>
          The best Split View pairs are the ones you&apos;d use every day if
          they were easier to open. Here are eight that consistently make the
          difference:
        </p>
        <ul className="guide-combo-list">
          {COMBOS.map((c) => (
            <li key={c.slug}>
              <a href={`/en/blog/${c.slug}`}>
                <strong>{c.label}</strong>
              </a>{" "}
              — {c.desc}
            </li>
          ))}
        </ul>
        <p>
          Each link above has a dedicated setup guide with step-by-step
          instructions for that specific pair.
        </p>

        {/* CTA */}
        <div className="post-cta">
          <h2>Set up your first pair</h2>
          <p>
            Free for your first 3 pairs. Pro unlocks unlimited pairs with a
            one-time purchase.
          </p>
          <a
            className="appstore-btn"
            href="https://apps.apple.com/us/app/splicon-split-view-icon-maker/id6762535752"
            target="_blank"
            rel="noopener"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt="Splicon"
              className="appstore-btn-icon"
              width={44}
              height={44}
            />
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
