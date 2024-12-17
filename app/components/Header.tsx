import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact"; // お問い合わせアイコン
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import IconButton from "@mui/material/IconButton"; // MUIのIconButton
import { useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState<string | null>(null); // クリック状態管理

  const handleClick = (name: string) => {
    setClicked(name); // クリック時の状態変更
    setTimeout(() => setClicked(null), 300); // 300ms後にリセット（エフェクト時間）
  };

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
      <h1 style={{ color: "#a0d8ef", fontSize: "24px" }}>
        <Link
          href="https://hibikikobayashii.github.io/"
          style={{ textDecoration: "none", color: "#a0d8ef" }}
        >
          My Portfolio
        </Link>
      </h1>

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
          {/* プロフィール */}
          <li>
            <Link href="https://hibikikobayashii.github.io/profile">
              <IconButton
                onClick={() => handleClick("profile")}
                style={{
                  color: clicked === "profile" ? "#7ebeab" : "#a0d8ef",
                  transform: clicked === "profile" ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Link>
          </li>

          {/* お問い合わせ */}
          <li>
            <Link href="https://hibikikobayashii.github.io/contact">
              <IconButton
                onClick={() => handleClick("contact")}
                style={{
                  color: clicked === "contact" ? "#7ebeab" : "#a0d8ef",
                  transform: clicked === "contact" ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
              >
                <ConnectWithoutContactIcon />
              </IconButton>
            </Link>
          </li>

          {/* Instagram */}
          <li>
            <Link href="https://www.instagram.com/mrq_1p?igsh=enljbnM2d25wdnZ6">
              <IconButton
                onClick={() => handleClick("instagram")}
                style={{
                  color: clicked === "instagram" ? "#7ebeab" : "#a0d8ef",
                  transform: clicked === "instagram" ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Link>
          </li>

          {/* YouTube */}
          <li>
            <Link href="https://youtube.com/@futuregame0920?si=X0NHIuS1oiX6TMSl">
              <IconButton
                onClick={() => handleClick("youtube")}
                style={{
                  color: clicked === "youtube" ? "#7ebeab" : "#a0d8ef",
                  transform: clicked === "youtube" ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Link>
          </li>

          {/* Tetris */}
          <li>
            <Link href="https://hibikikobayashii.github.io/Tetris">
              <IconButton
                onClick={() => handleClick("youtube")}
                style={{
                  color: clicked === "youtube" ? "#7ebeab" : "#a0d8ef",
                  transform: clicked === "youtube" ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Link>
          </li>

          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
