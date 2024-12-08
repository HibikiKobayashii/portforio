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
        <div style={{ marginTop: "20px" }}>
          <img
            src="/your-image-path.jpg"
            alt="Your Image"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "10px",
              border: "1px solid #333",
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
  );
};

export default Home;
