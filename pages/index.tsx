import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#333",
        color: "#fff",
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
          <a href="#home" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Home</a>
          <a href="#biography" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Biography</a>
          <a href="#contact" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Contact</a>
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
          backgroundColor: "#f0f0f0",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ margin: "20px 0" }}>I am an IoT Student !!</h1>
        <p style={{ fontSize: "18px" }}>
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
              border: "1px solid #333",
            }}
          />
        </div>

        {/* スキルセクション */}
        <section id="skills" style={{ marginTop: "50px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1, paddingRight: "20px" }}>
            <h2 style={{ marginBottom: "20px" }}>スキル</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
              <thead>
                <tr>
                  <th style={{ padding: "10px", border: "1px solid #ddd", backgroundColor: "#f4f4f4" }}>技術</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd", backgroundColor: "#f4f4f4" }}>レベル</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>HTML</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>初心者</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>CSS</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>初心者</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>JavaScript</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>中級者</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>React</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>使い始めた</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>Next.js</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>使い始めた</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 右側の文字部分 */}
          <div style={{ flex: 1 }}>
            <h2 style={{ marginBottom: "20px" }}>スキルの説明</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
              ここでは、現在私が使える技術とそのレベルを紹介しています。HTMLとCSSは初心者レベルで、JavaScriptは中級者として扱えます。ReactとNext.jsは使い始めたばかりですが、実際のプロジェクトで学びながら進めています。
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
              これらの技術は、今後さらに深めていきたい分野であり、特にReactとNext.jsは次のステップとして重視しています。
            </p>
          </div>
        </section>

        {/* 趣味セクション */}
        <section id="hobbies" style={{ marginTop: "50px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <h2 style={{ marginBottom: "20px" }}>趣味</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>スマートフォン</li>
            <li>ガジェット</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
