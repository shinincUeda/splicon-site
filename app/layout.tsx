import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const SITE_URL = "https://split-icon.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Splicon — Split View専用アイコンメーカー",
    template: "%s · Splicon",
  },
  description:
    "SpliconはiPad向けSplit Viewランチャーアイコン作成アプリ。2つのアプリアイコンを合成し、ショートカットに設定することでタップ1回でSplit Viewを起動。無料3回、Pro版¥480の買い切り。",
  keywords: [
    "iPad Split View",
    "Split View アイコン",
    "iPad マルチタスク",
    "ショートカット",
    "Splicon",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Splicon — Split View専用アイコンメーカー",
    description:
      "2つのアプリを組み合わせたアイコンを自動生成。ショートカット1タップでSplit Viewを起動。",
    siteName: "Splicon",
    images: [{ url: `${SITE_URL}/images/sp-2.webp` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Splicon — Split View専用アイコンメーカー",
    description:
      "2つのアプリを組み合わせたアイコンを自動生成。ショートカット1タップでSplit Viewを起動。",
    images: [`${SITE_URL}/images/sp-2.webp`],
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
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
