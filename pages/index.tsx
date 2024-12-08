import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#08081a", // 背景色を #08081a に
        color: "#a0d8ef", // 文字色を #a0d8ef に
        padding: "10px 20px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>ポートフォリオ</div>
        <div>
          <a href="#home" style={{ margin: "0 10px", color: "#a0d8ef", textDecoration: "none" }}>Home</a>
          <a href="#biography" style={{ margin: "0 10px", color: "#a0d8ef", textDecoration: "none" }}>Biography</a>
          <a href="#contact" style={{ margin: "0 10px", color: "#a0d8ef", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>
    </header>
  );
};

const App = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        backgroundColor: "#08081a", // 背景色を #08081a に
        color: "#a0d8ef", // 文字色を #a0d8ef に
      }}
    >
      {/* CSSリセットを適用 */}
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>

      <Header />
      <main
        style={{
          paddingTop: "70px", // ヘッダー分のスペースを確保
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ margin: "20px 0", color: "#a0d8ef" }}>I am an IoT Student !!</h1>
        <p style={{ fontSize: "18px", color: "#a0d8ef" }}>
          開志専門職大学でIoTを学んでいる小林響と申します！ <br />
          XR系に力を入れています！
        </p>

        {/* 画像の表示 */}
        <div style={{ marginTop: "20px" }}>
          <img
            src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/hibiki.jpg"
            alt="小林響"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "10px",
              border: "1px solid #a0d8ef", // ボーダー色を文字色に合わせる
            }}
          />
        </div>

        {/* スキルセクション */}
        <section id="skills" style={{ marginTop: "50px", padding: "20px", backgroundColor: "#000000", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1, paddingRight: "20px" }}>
            <h2 style={{ marginBottom: "20px", color: "#7ebeab" }}>スキル</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
              <thead>
                <tr>
                  <th style={{ padding: "10px", border: "1px solid #7ebeab", backgroundColor: "#000000", color: "#7ebeab" }}>技術</th>
                  <th style={{ padding: "10px", border: "1px solid #7ebeab", backgroundColor: "#000000", color: "#7ebeab" }}>レベル</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #7ebeab", color: "#7ebeab" }}>HTML</td>
                  <td style={{ padding: "10px", border: "1px solid #7ebeab", color: "#7ebeab" }}>初心者</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #7ebeab", color: "#7ebeab" }}>CSS</td>
                  <td style={{ padding: "10px", border: "1px solid #7ebeab", color: "#7ebeab" }}>初心者</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #7ebeab", color: "#7ebeab" }}>JavaScript</td>
                  <td style={{ padding: "10px", border: "1px solid #7ebeab", color: "#7ebeab" }}>中級者</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #7ebeab", color: "#7ebeab" }}>React</td>
                  <td style={{ padding: "10px", border: "1px solid #7ebeab", color: "#7ebeab" }}>使い始めた</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #7ebeab", color: "#7ebeab" }}>Next.js</td>
                  <td style={{ padding: "10px", border: "1px solid #7ebeab", color: "#7ebeab" }}>使い始めた</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 右側の文字部分 */}
          <div style={{ flex: 1 }}>
            <h2 style={{ marginBottom: "20px", color: "#7ebeab" }}>スキルの説明</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#7ebeab" }}>
              ここでは、現在私が使える技術とそのレベルを紹介しています。HTMLとCSSは初心者レベルで、JavaScriptは中級者として扱えます。ReactとNext.jsは使い始めたばかりですが、実際のプロジェクトで学びながら進めています。
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
