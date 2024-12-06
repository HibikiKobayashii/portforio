import React from "react";
import Header from "../app/components/Header";
import Gazo from "../app/components/gazo";

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
            <div
              style={{
                width: "500px", // 棒の太さ
                height: "5px", // 画像と同じ高さに設定
                backgroundColor: "black", // 棒の色
              }}
            ></div>
            {/* 画像 */}
            <Gazo
              src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/hibiki.jpg"
              alt="小林響"
              caption="小林響"
              offsetX={500} // 横方向のオフセット（なし）
              offsetY={-100}// 縦方向のオフセット（なし）
              contrast={50} // コントラスト
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
