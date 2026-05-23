import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://split-icon.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Splicon — Split View Icon Maker for iPad",
    template: "%s · Splicon",
  },
  description:
    "Turn your favorite app pairs into one-tap Split View shortcuts on iPad — with custom icons you can actually tell apart.",
  keywords: [
    "iPad Split View",
    "split screen shortcut",
    "app pair icon",
    "iPad multitasking",
    "home screen shortcut",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Splicon — Split View Icon Maker for iPad",
    description:
      "One tap. Two apps. Every time. Make custom Split View shortcut icons for iPad.",
    siteName: "Splicon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Splicon — Split View Icon Maker for iPad",
    description:
      "One tap. Two apps. Every time. Make custom Split View shortcut icons for iPad.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a href="/" className="logo">
            <span className="logo-mark">
              <span />
              <span />
            </span>
            Splicon
          </a>
          <nav className="site-nav">
            <a href="/#how">How it works</a>
            <a href="/blog">Combos</a>
            <a
              className="nav-cta"
              href="https://apps.apple.com/app/splicon"
              target="_blank"
              rel="noopener"
            >
              Get the app
            </a>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div>© {new Date().getFullYear()} Splicon. Built for iPad multitaskers.</div>
          <div style={{ display: "flex", gap: "1.4rem" }}>
            <a href="/blog">Combos</a>
            <a href="/#how">How it works</a>
            <a href="https://apps.apple.com/app/splicon" target="_blank" rel="noopener">
              App Store
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
