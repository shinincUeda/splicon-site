import { getAllPostsMeta } from "@/lib/posts";
import "./home.css";

export default function HomePage() {
  const combos = getAllPostsMeta().slice(0, 6);

  return (
    <main>
      {/* ============ HERO : 左寄せ・非対称 ============ */}
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">iPad · iPadOS 15+</p>
          <h1 className="hero-title">
            One tap.
            <br />
            Two apps.
            <br />
            <span className="hero-title-accent">Every time.</span>
          </h1>
          <p className="hero-lead">
            iPad Shortcuts can launch Split View — but the only icon you get is
            a random emoji. Splicon builds a clean side-by-side icon from both
            apps, so a row of shortcuts finally makes sense at a glance.
          </p>
          <div className="hero-actions">
            <a
              className="btn-primary"
              href="https://apps.apple.com/app/splicon"
              target="_blank"
              rel="noopener"
            >
              Get Splicon on the App Store
            </a>
            <a className="btn-ghost" href="#how">
              See how it works ↓
            </a>
          </div>
        </div>

        {/* ホーム画面のBefore/Afterを模した装飾 */}
        <div className="hero-visual" aria-hidden="true">
          <div className="phone-grid">
            <div className="ic ic-pair">
              <span className="ic-half a" />
              <span className="ic-half b" />
            </div>
            <div className="ic ic-pair">
              <span className="ic-half c" />
              <span className="ic-half d" />
            </div>
            <div className="ic ic-pair">
              <span className="ic-half e" />
              <span className="ic-half f" />
            </div>
            <div className="ic ic-pair">
              <span className="ic-half g" />
              <span className="ic-half h" />
            </div>
          </div>
          <p className="phone-caption">Four pairs. Zero guessing.</p>
        </div>
      </section>

      {/* ============ PROBLEM : 大きな引用文・1カラム ============ */}
      <section className="manifesto">
        <blockquote>
          You open App A. You drag App B from the Dock. You nudge the divider.
          You start working.
          <span className="manifesto-turn">
            Then tomorrow you do the whole thing again.
          </span>
        </blockquote>
      </section>

      {/* ============ HOW : 非対称2カラム・実手順なので連番OK ============ */}
      <section className="how" id="how">
        <div className="how-head">
          <h2>Five minutes, once. Then never again.</h2>
          <p>
            Splicon makes the icon. The Shortcuts app does the launching. You do
            this setup a single time per pair.
          </p>
        </div>
        <ol className="how-steps">
          <li>
            <span className="step-n">1</span>
            <div>
              <h3>Pick two apps</h3>
              <p>Search inside Splicon and choose the pair you keep opening together.</p>
            </div>
          </li>
          <li>
            <span className="step-n">2</span>
            <div>
              <h3>Get a combined icon</h3>
              <p>A clean side-by-side icon is generated from both real app icons.</p>
            </div>
          </li>
          <li>
            <span className="step-n">3</span>
            <div>
              <h3>Save &amp; assign</h3>
              <p>Save to Photos, create a Split View shortcut, and set the icon.</p>
            </div>
          </li>
          <li>
            <span className="step-n">4</span>
            <div>
              <h3>Add to Home Screen</h3>
              <p>Now a single tap opens both apps, side by side. Done forever.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* ============ COMBOS : 不揃いグリッド ============ */}
      <section className="combos">
        <div className="combos-head">
          <p className="eyebrow-alt">The pairs people actually use</p>
          <h2>Need ideas? Start with these.</h2>
        </div>
        {combos.length > 0 ? (
          <div className="combo-grid">
            {combos.map((c, i) => (
              <a
                key={c.slug}
                href={`/blog/${c.slug}`}
                className={`combo-card ${i === 0 ? "combo-card--lead" : ""}`}
              >
                <span className="combo-pair">
                  {c.appA} <span className="x">×</span> {c.appB}
                </span>
                <span className="combo-title">{c.title}</span>
                <span className="combo-read">Read the setup →</span>
              </a>
            ))}
          </div>
        ) : (
          <p className="combos-empty">
            Combo guides are on the way. Check back soon.
          </p>
        )}
      </section>

      {/* ============ CTA : 余白小さめ ============ */}
      <section className="cta">
        <h2>Stop rebuilding Split View every day.</h2>
        <a
          className="btn-primary btn-lg"
          href="https://apps.apple.com/app/splicon"
          target="_blank"
          rel="noopener"
        >
          Get Splicon — free for your first 3 pairs
        </a>
      </section>
    </main>
  );
}
