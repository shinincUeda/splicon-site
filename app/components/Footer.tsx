const APP_STORE_URL =
  "https://apps.apple.com/jp/app/splicon-split-view%E5%B0%82%E7%94%A8%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC/id6762535752";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} shin-inc. All rights reserved.</p>
      <div className="site-footer-links">
        <a href="/blog">Blog</a>
        <a href="/support">サポート</a>
        <a href="/privacy-policy">プライバシーポリシー</a>
        <a href="/en">English</a>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          App Store
        </a>
      </div>
    </footer>
  );
}
