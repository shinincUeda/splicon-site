const APP_STORE_URL_JA =
  "https://apps.apple.com/jp/app/splicon-split-view%E5%B0%82%E7%94%A8%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC/id6762535752";
const APP_STORE_URL_EN =
  "https://apps.apple.com/us/app/splicon-split-view-icon-maker/id6762535752";

export default function Header({ lang = "ja" }: { lang?: "ja" | "en" }) {
  const isEn = lang === "en";
  const appStoreUrl = isEn ? APP_STORE_URL_EN : APP_STORE_URL_JA;

  return (
    <header className="site-header">
      <a href={isEn ? "/en" : "/"} className="site-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.svg"
          alt="Splicon"
          className="site-logo-icon"
          width={28}
          height={28}
        />
        <span className="site-logo-wordmark">Splicon</span>
      </a>

      <nav className="site-nav">
        {isEn ? (
          <>
            <a href="/en#features" className="nav-hide-sp">Features</a>
            <a href="/en#pricing"  className="nav-hide-sp">Pricing</a>
            <a href="/en/guide">Guide</a>
            <a href="/en/blog">Blog</a>
            <a href="/" className="nav-lang">JA</a>
          </>
        ) : (
          <>
            <a href="/#features" className="nav-hide-sp">機能</a>
            <a href="/#pricing"  className="nav-hide-sp">価格</a>
            <a href="/en/blog">Blog</a>
            <a href="/en" className="nav-lang">EN</a>
          </>
        )}
        <a
          href={appStoreUrl}
          className="nav-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store
        </a>
      </nav>
    </header>
  );
}
