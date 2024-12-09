import Link from "next/link"; // Next.jsのリンクコンポーネントをインポート

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#08081a",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <h1 style={{ color: "#a0d8ef", fontSize: "24px" }}>My Portfolio</h1>
      <nav>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            gap: "20px",
          }}
        >
          <li>
            <Link href="/" style={{ color: "#a0d8ef", textDecoration: "none" }}>
              ホーム
            </Link>
          </li>
          <li>
            <Link
              href="/contact" // contact.tsxへのリンク
              style={{ color: "#a0d8ef", textDecoration: "none" }}
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
