"use client";

import React from "react";

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* logoStyle に位置調整用のプロパティを追加 */}
        <h1 style={logoStyle}>ポートフォリオ</h1>
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <a href="#" style={linkStyle}>
                Home
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="#" style={linkStyle}>
                Biography
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="#" style={linkStyle}>
                contact
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="#" style={linkStyle}>
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#282c34",
  color: "white",
  padding: "10px 20px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  width: "100%", // ヘッダーをページ全体に広げる
  margin: 0, // 余白をゼロにする
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
};

const logoStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  margin: 0,
  position: "relative", // 相対位置を設定
  top: "0px", // 下に10px移動
  left: "-100px", // 右に20px移動
};

const navListStyle: React.CSSProperties = {
  listStyle: "none",
  display: "flex",
  gap: "15px",
  margin: 0,
  padding: 0,
};

const navItemStyle: React.CSSProperties = {
  display: "inline",
};

const linkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.3s ease",
  position: "relative", // 相対位置を設定
  top: "0px", // 下に5px移動
  left: "80px", // 右に10px移動
};

export default Header;
