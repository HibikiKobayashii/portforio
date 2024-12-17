import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link"; 
import IconButton from '@mui/material/IconButton'; // IconButtonをインポート


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
      {/* My Portfolioをクリックでホームに飛ぶように変更 */}
      <h1 style={{ color: "#a0d8ef", fontSize: "24px" }}>
        <Link href="https://hibikikobayashii.github.io/" style={{ textDecoration: "none", color: "#a0d8ef" }}>
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
          {/* プロフィールリンク */}
          <li>
            <IconButton 
              href="https://hibikikobayashii.github.io/profile" 
              aria-label="profile"
            >
              <AccountCircleIcon  /> 
            </IconButton>
          </li>
          
          {/* お問い合わせリンク */}
          <li>
            <IconButton 
              href="https://hibikikobayashii.github.io/contact" 
              aria-label="contact"
            >
              <ConnectWithoutContactIcon /> 
            </IconButton>
          </li>
          
          {/* インスタグラムリンク */}
          <li>
            <IconButton 
              href="https://www.instagram.com/mrq_1p?igsh=enljbnM2d25wdnZ6" 
              aria-label="instagram"
            >
              <InstagramIcon /> 
            </IconButton>
          </li>

          {/* YouTubeリンク */}
          <li>
            <IconButton 
              href="https://youtube.com/@futuregame0920?si=X0NHIuS1oiX6TMSl" 
              aria-label="youtube"
            >
              <YouTubeIcon /> 
            </IconButton>
          </li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
