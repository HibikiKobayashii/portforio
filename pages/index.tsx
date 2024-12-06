import React from "react";
import Header from "../app/components/Header";
import Gazo from "../app/components/gazo";

interface BarProps {
  width: number; // 棒の幅
  height: number; // 棒の高さ
  color: string; // 棒の色
  offsetX: number; // 横方向のオフセット
  offsetY: number; // 縦方向のオフセット
}

const HorizontalBar: React.FC<BarProps> = ({ width, height, color, offsetX, offsetY }) => {
  return (
    <div
      style={{
        position: "relative",
        left: `${offsetX}px`,
        top: `${offsetY}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
      }}
    ></div>
  );
};

function Home() {
  return (
    <div style={{ backgroundColor: "#aliceblue", minHeight: "100vh", position: "relative" }}>
      <Header />
      <main style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px", // 横棒と画像の間隔
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px", // Text and bar spacing
            }}
          >
            {/* Text with adjustable font size */}
            <h1
              style={{
                margin: 0,
                fontSize: `${50}px`, // フォントサイズを動的に変更
                textAlign: "center",
                position: "relative",
                left: `${100}px`, // 横方向のオフセット
                top: `${-60}px}`, // 縦方向のオフセット
              }}
            >
              I am an IoT Student !!
            </h1>
           
            {/* Horizontal Bar */}
            <HorizontalBar
              width={700} // 棒の幅
              height={5} // 棒の高さ
              color="black" // 棒の色
              offsetX={100} // 横方向のオフセット
              offsetY={-70} // 縦方向のオフセット
            />
            <h2
              style={{
                margin: 0,
                fontSize: `${30}px`, // フォントサイズを動的に変更
                textAlign: "center",
                position: "relative",
                left: `${100}px`, // 横方向のオフセット
                top: `${-30}px}`, // 縦方向のオフセット
              }}
            >
              <br></br>
              開志専門職大学でIoTを学んでいる小林響と申します！
              <br></br>
              <br></br>
              XR系に力を入れています！
            </h2>
          </div>
          
          {/* 画像 */}
          <Gazo
            src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/hibiki.jpg"
            alt="小林響"
            offsetX={270}
            offsetY={20}
            contrast={50}
          />
        </div>

        {/* 背景画像 */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/hibiki.jpg')", // 背景画像のURL
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1, // 他のコンテンツの後ろに配置
          }}
        ></div>
      </main>
    </div>
  );
}

export default Home;
