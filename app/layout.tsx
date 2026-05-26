import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.splitview.net";
const GTM_ID = "GTM-TRLRD4MN";

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
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
