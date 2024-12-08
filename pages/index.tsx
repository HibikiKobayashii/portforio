import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "15px 20px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "22px", fontWeight: "bold" }}>Hibiki's Portfolio</div>
        <div>
          <a href="#home" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Home</a>
          <a href="#biography" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Biography</a>
          <a href="#contact" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Contact</a>
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
        backgroundColor: "#f7f7f7",
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
          paddingTop: "80px", // ヘッダー分のスペースを確保
          textAlign: "center",
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
        }}
      >
        <section id="home" style={{ padding: "50px 20px" }}>
          <h1 style={{ marginBottom: "20px" }}>I am Hibiki Kobayashi</h1>
          <p style={{ fontSize: "18px", color: "#555" }}>
            開志専門職大学でIoTを学んでいる学生です。<br />
            XR技術に力を入れています！
          </p>
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
        </section>

        <section id="skills" style={{ padding: "50px 20px", backgroundColor: "#f0f0f0" }}>
          <h2>My Skills</h2>
          <p style={{ fontSize: "18px", color: "#555" }}>
            IoT, XR, ソフトウェア開発に関するスキルがあります。<br />
            以下の技術を使ってさまざまなプロジェクトを進めています。
          </p>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li style={{ margin: "10px 0", fontSize: "16px" }}>- IoTデバイス開発</li>
            <li style={{ margin: "10px 0", fontSize: "16px" }}>- XRアプリケーション開発</li>
            <li style={{ margin: "10px 0", fontSize: "16px" }}>- プログラミング言語: Python, C++, JavaScript</li>
          </ul>
        </section>

        <section id="projects" style={{ padding: "50px 20px" }}>
          <h2>Featured Projects</h2>
          <p style={{ fontSize: "18px", color: "#555" }}>
            以下は私が関わった主要なプロジェクトです。
          </p>
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
            <div style={{ width: "30%" }}>
              <h3>Project 1</h3>
              <p>IoTを活用したスマートホームシステムの開発。</p>
            </div>
            <div style={{ width: "30%" }}>
              <h3>Project 2</h3>
              <p>XR技術を使った仮想現実トレーニングプログラム。</p>
            </div>
            <div style={{ width: "30%" }}>
              <h3>Project 3</h3>
              <p>PythonとIoTを使った環境モニタリングシステム。</p>
            </div>
          </div>
        </section>

        <section id="contact" style={{ padding: "50px 20px", backgroundColor: "#f0f0f0" }}>
          <h2>Contact Me</h2>
          <p style={{ fontSize: "18px", color: "#555" }}>
            お問い合わせは以下の方法でお願いします。
          </p>
          <div style={{ marginTop: "20px" }}>
            <p>Email: hibiki@example.com</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/hibiki" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/hibiki</a></p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
