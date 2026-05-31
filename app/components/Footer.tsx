const APP_STORE_URL_JA =
  "https://apps.apple.com/jp/app/splicon-split-view%E5%B0%82%E7%94%A8%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC/id6762535752";
const APP_STORE_URL_EN =
  "https://apps.apple.com/us/app/splicon-split-view-icon-maker/id6762535752";

export default function Footer({ lang = "ja" }: { lang?: "ja" | "en" }) {
  const isEn = lang === "en";
  const appStoreUrl = isEn ? APP_STORE_URL_EN : APP_STORE_URL_JA;

  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} shin-inc. All rights reserved.</p>
      <div className="site-footer-links">
        <a href={isEn ? "/en/blog" : "/ja/blog"}>{isEn ? "Blog" : "ブログ"}</a>
        <a href={isEn ? "/en/support" : "/support"}>
          {isEn ? "Support" : "サポート"}
        </a>
        <a href={isEn ? "/en/privacy-policy" : "/privacy-policy"}>
          {isEn ? "Privacy Policy" : "プライバシーポリシー"}
        </a>
        <a href={isEn ? "/" : "/en"}>{isEn ? "日本語" : "English"}</a>
        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
          App Store
        </a>
      </div>
    </footer>
  );
}
