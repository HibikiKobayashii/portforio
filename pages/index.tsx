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
    <div style={{ backgroundColor: "#aliceblue", minHeight: "100vh" }}>
      <Header />
      <main style={{ padding: "20px" }}>
        <h1></h1>
        <p></p>

        {/* Gazoコンポーネントをここで使用 */}
        <section style={{ marginTop: "20px" }}>
          <h2></h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px", // 横棒と画像の間隔
            }}
          >
            {/* 横棒 */}
            <HorizontalBar
              width={500} // 棒の幅
              height={5} // 棒の高さ
              color="black" // 棒の色
              offsetX={50} // 横方向のオフセット
              offsetY={-200} // 縦方向のオフセット
            />
            {/* 画像 */}
            <Gazo
              src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/hibiki.jpg"
              alt="小林響"
              caption="小林響"
              offsetX={500} // 横方向のオフセット（なし）
              offsetY={0} // 縦方向のオフセット（なし）
              contrast={50} // コントラスト
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
