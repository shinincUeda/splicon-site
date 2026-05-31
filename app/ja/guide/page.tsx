import type { Metadata } from "next";
import "../../en/blog/blog.css";
import "../../en/guide/guide.css";

const SITE = "https://www.splitview.net";
const URL_JA = `${SITE}/ja/guide`;
const URL_EN = `${SITE}/en/guide`;

export const metadata: Metadata = {
  title: "iPad Split Viewを5分でワンタップ起動する設定ガイド | Splicon",
  description:
    "毎回ドックからドラッグするのはもう終わり。SpliconでSplit View専用アイコンを作れば、ホーム画面のタップ1回でアプリを2画面同時に起動できます。",
  keywords: [
    "iPad Split View 設定",
    "Split View ワンタップ",
    "iPad マルチタスク 設定方法",
    "Splicon 使い方",
    "iPad 生産性 ショートカット",
    "iPadOS ガイド",
  ],
  alternates: {
    canonical: URL_JA,
    languages: {
      "ja": URL_JA,
      "en": URL_EN,
      "x-default": URL_EN,
    },
  },
  openGraph: {
    type: "article",
    url: URL_JA,
    title: "iPad Split Viewを5分でワンタップ起動する設定ガイド | Splicon",
    description:
      "毎回の面倒な操作をゼロに。SpliconでSplit View専用アイコンを作り、ホーム画面からタップ1回で2アプリを起動しよう。",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "SpliconでiPad Split Viewをワンタップ起動する方法",
  description:
    "組み合わせアイコンとiOSショートカットを作成し、ホーム画面のタップ1回でSplit Viewを起動する手順を解説します。",
  inLanguage: "ja",
  totalTime: "PT5M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Spliconをダウンロード",
      text: "App StoreでSpliconを検索し、無料でダウンロードします。",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "2つのアプリを選択",
      text: "並べて使いたい2つのアプリを検索して選択します。",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "組み合わせアイコンを生成",
      text: "Spliconが両アプリのアイコンを自動合成し、並列アイコンを生成します。",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "写真に保存",
      text: "生成したアイコン画像をiPadの写真ライブラリに保存します。",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "ショートカットを設定",
      text: "ショートカットアプリでSplit Viewアクションを作成し、保存したアイコンをホーム画面アイコンとして設定します。",
    },
  ],
};

export default function JaGuidePage() {
  return (
    <main className="post">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="post-article guide-article">
        <p className="post-breadcrumb"><a href="/ja/blog">組み合わせ一覧</a> / ガイド</p>

        <h1 className="post-h1">
          iPad Split Viewを5分でワンタップ起動する設定ガイド
        </h1>
        <p className="post-sub">
          毎回の面倒なドラッグ操作をゼロに。Spliconで専用アイコンを作れば、ホーム画面のタップ1回で2アプリが即起動します。
        </p>

        {/* Chapter 1 */}
        <h2>Chapter 1：Split Viewを使いこなせていますか？</h2>
        <p>
          多くのiPadユーザーがSplit Viewの存在を知っています。2つのアプリを画面に並べて同時に使えるiPadOSの強力な機能です。
        </p>
        <p>
          しかし実際には、<em>「存在は知っているけど、毎回設定するのが面倒でつい1アプリだけ使ってしまう」</em>という声が多いのも事実です。
        </p>
        <p>
          通常の操作手順を思い出してみてください——最初のアプリを開き、Dockを呼び出して2つ目のアプリをドラッグし、ちょうどいい位置にドロップして比率を調整する。これを毎回繰り返すのは、シングルアプリを使い続けるよりかえって面倒だと感じさせます。
        </p>
        <p>
          このガイドを読み終える頃には、Split Viewを「日常の習慣」に変える仕組みが完成します。最初の5分だけセットアップすれば、あとはホーム画面のタップ1回で好きな組み合わせが即起動します。
        </p>

        {/* Chapter 2 */}
        <h2>Chapter 2：iPadが「ながら作業」最強ツールである理由</h2>
        <p>
          なぜSplit Viewがこれほど重要なのか。それは、軽量なマルチタスクにおいて、iPadはPCともスマホとも異なる独自のポジションを持っているからです。
        </p>
        <h3>PCでもスマホでもない、iPadだけの甘い場所</h3>
        <p>
          ノートPCは強力ですが、バッグから取り出してブート待ちをする心理的ハードルがあります。「本格的な作業用」というイメージが、ベッドでのメモ書きや電車内での読書×Slack確認には重すぎます。一方スマホは携帯性は最高ですが、画面が小さくてデュアルウィンドウの実用性がありません。
        </p>
        <p>
          iPadは<strong>携帯性・画面サイズ・Split View性能</strong>の3つを完璧に両立しています。摩擦ゼロで即効果が出るタスクが得意です：
        </p>
        <ul>
          <li>ソファでオンライン講座を見ながらApple Notesにメモを取る。</li>
          <li>カフェでZoomをしながらNotionに議事録を書く。</li>
          <li>就寝前にKindleで本を読みながらObsidianに気づきを書き出す。</li>
          <li>米国株チャートを見ながらXでマーケット情報を追う。</li>
        </ul>
        <p>
          PCでもできるけれど、PCだと大袈裟。iPadならカバーを開けば即座に作業に入れます。Split Viewにスムーズにアクセスできるかどうかが、あなたのiPadが真の実力を発揮するかを左右します。
        </p>

        {/* Chapter 3 */}
        <h2>Chapter 3：Split Viewをホーム画面に固定する</h2>
        <p>
          解決策はシンプルです——毎回手動で設定するのをやめる。<strong>Splicon</strong>を使って、Split View専用アイコンをホーム画面に一度だけ配置します。
        </p>
        <p>
          Spliconは2つのアプリアイコンを合成して、横並びの1枚の画像を生成するiPad専用アプリです。
        </p>
        <p>
          Appleの純正ショートカットアプリでもSplit Viewの自動化はできますが、アイコンは絵文字や汎用グリフしか選べません。「Safari × Notes」と「Zoom × Notes」を並べて配置しても、見た目がほぼ同じで混乱します。Spliconなら両アプリが一目でわかる直感的なアイコンが完成します。
        </p>

        {/* Before / After */}
        <div className="guide-compare">
          <div className="guide-compare-col guide-compare-before">
            <p className="guide-compare-label">Before（毎回の面倒な手順）</p>
            <ol>
              <li>アプリAを開く</li>
              <li>Dockを呼び出す</li>
              <li>アプリBを探す</li>
              <li>ドラッグして画面端に置く</li>
              <li>分割比率を手動で調整する</li>
            </ol>
            <p className="guide-compare-result">→ 毎回5ステップの手間</p>
          </div>
          <div className="guide-compare-col guide-compare-after">
            <p className="guide-compare-label">After Splicon（ゼロ摩擦）</p>
            <ol>
              <li>ホーム画面のアイコンをタップ</li>
            </ol>
            <p className="guide-compare-result">→ 完了。即作業開始。</p>
          </div>
        </div>

        <h3>視覚的な手がかりの心理学</h3>
        <p>
          行動科学の研究では、人間の行動は意志の力よりも「目の前の環境」に大きく左右されることが証明されています。ワークフローを表すアイコンがホーム画面に鎮座していれば、脳は自然にタップを促します。毎回ドラッグが必要なら、脳は楽な道（シングルアプリ）を選びます。
        </p>

        {/* Chapter 4 */}
        <h2>Chapter 4：5分でできるセットアップ手順</h2>
        <p>Spliconの使い方はとてもシンプルです：</p>
        <ol className="guide-steps">
          <li>
            <strong>Spliconをダウンロード</strong> — App Storeで「Splicon」を検索してインストール。最初の3ペアは無料です。<br />
            <a href="https://apps.apple.com/jp/app/splicon-split-view%E5%B0%82%E7%94%A8%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC/id6762535752" target="_blank" rel="noopener">→ App Storeで無料ダウンロード</a>
          </li>
          <li>
            <strong>2つのアプリを選択</strong> — 並べて使いたいアプリを検索してペアを作ります。
          </li>
          <li>
            <strong>アイコンを生成</strong> — Spliconが2つのロゴを自動合成してアイコン画像を生成します。
          </li>
          <li>
            <strong>写真に保存</strong> — 生成した画像をiPadの写真ライブラリに書き出します。
          </li>
          <li>
            <strong>ショートカットを設定</strong> — ショートカットアプリを開き、Split Viewアクションを追加。保存したアイコンをホーム画面アイコンとして設定します。
          </li>
          <li>
            <strong>ホーム画面に追加</strong> — 作成したショートカットをホーム画面の目立つ場所またはDockに配置します。
          </li>
        </ol>
        <p>
          <em>※ Spliconはこれらの手順を自動化するアプリ内ガイドも搭載しています。iPadOS 17以降に対応。</em>
        </p>

        {/* Chapter 5 */}
        <h2>Chapter 5：まず試したい定番の組み合わせ12選</h2>
        <p>
          仕事・学習・AI活用・日常生活など、シーン別に厳選した組み合わせガイドを用意しています。それぞれのガイドで「なぜこのペアが便利か」「どうセットアップするか」を詳しく解説しています。
        </p>
        <p>
          すべての組み合わせガイドは{" "}
          <a href="/ja/blog"><strong>組み合わせライブラリ</strong></a>
          でご覧いただけます。
        </p>

        {/* Chapter 6 */}
        <h2>Chapter 6：マルチタスクを習慣化する3つのコツ</h2>
        <p>一度に何十個も作る必要はありません。続けるための3つのルールを守ってください：</p>
        <ol>
          <li>
            <strong>まず一番使う組み合わせを1つ作る：</strong>毎日使いそうなペア（ChatGPT×YouTubeやKindle×メモ帳など）を1つだけ無料版で作ってみましょう。
          </li>
          <li>
            <strong>ホーム画面の一等地に置く：</strong>DockかホーPage画面の最上段に配置します。「見える場所 ＝ 使う場所」です。
          </li>
          <li>
            <strong>Pro版でさらに広げる：</strong>1つのアイコンで生産性が変わった実感を得たら、Pro版にアップグレードを。買い切り¥480で無制限に使えます。
          </li>
        </ol>

        {/* Chapter 7 */}
        <h2>Chapter 7：「iPad First」な作業環境を設計する</h2>
        <p>
          iPadの真の力は、「大きなスマホ」として使うのをやめて、マルチウィンドウのダッシュボードとして設計したときに開花します。今日たった5分セットアップするだけで、来週のiPadの使い方が大きく変わるはずです。
        </p>

        <div className="bonus-section" style={{ padding: "20px", border: "1px solid rgba(255,255,255,.15)", borderRadius: "12px", marginTop: "30px", background: "rgba(255,255,255,.04)" }}>
          <h3>💡 特集：米国株投資家のための最強環境</h3>
          <p>
            米国株を分析するなら、<strong>iPad mini × Split View</strong> は最強の組み合わせかもしれません。
          </p>
          <p>
            米国市場は日本時間の深夜〜早朝に開きます。ベッドやソファで相場を追うとき、ノートPCは大袈裟でスマホ画面は狭すぎます。iPad miniはその中間を埋める絶妙なサイズです。
          </p>
          <p>
            <strong>TradingView × X（旧Twitter）</strong>のアイコンをSpliconで作成してホーム画面に置けば、リアルタイムのチャートを見ながらマーケットセンチメントを確認する環境が、タップ1回で整います。
          </p>
        </div>

        {/* CTA */}
        <div className="post-cta">
          <h2>まず最初の組み合わせを作ってみよう</h2>
          <p>
            最初の3ペアは無料。その後は買い切り¥480のPro版で無制限に使えます。
          </p>
          <a
            className="appstore-btn"
            href="https://apps.apple.com/jp/app/splicon-split-view%E5%B0%82%E7%94%A8%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC/id6762535752"
            target="_blank"
            rel="noopener"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.svg" alt="Splicon" className="appstore-btn-icon" width={44} height={44} />
            <span className="appstore-btn-text">
              <span className="appstore-btn-sub">App Storeで入手</span>
              <span className="appstore-btn-name">Splicon</span>
              <span className="appstore-btn-platform">iPad · iPadOS 17+</span>
            </span>
          </a>
        </div>
      </article>
    </main>
  );
}
