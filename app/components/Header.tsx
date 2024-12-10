import HomeIcon from '@mui/icons-material/Home'; // ホームアイコンをインポート
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'; // お問い合わせアイコンをインポート
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
          {/* ホームリンク */}
          <li>
            <Link 
              href="https://hibikikobayashii.github.io/" // ホームリンク
              style={{ color: "#a0d8ef", textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <HomeIcon style={{ marginRight: "8px" }} />
            </Link>
          </li>

          {/* お問い合わせリンク */}
          <li>
            <Link 
              href="https://hibikikobayashii.github.io/contact" // お問い合わせリンク
              style={{ color: "#a0d8ef", textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <ConnectWithoutContactIcon style={{ marginRight: "8px" }} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
