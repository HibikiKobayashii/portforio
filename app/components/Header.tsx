"use client";

import React from "react";

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={logoStyle}>API実習ポートフォリオ</h1>
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <a href="#" style={linkStyle}>
                Home
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="#" style={linkStyle}>
                About me
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

// 修正点: headerStyle に CSSProperties 型を指定
const headerStyle: React.CSSProperties = {
  backgroundColor: "#282c34",
  color: "white",
  padding: "10px 20px",
  position: "sticky", // これで適切に "sticky" が認識される
  top: 0,
  zIndex: 1000,
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
};

const logoStyle = {
  fontSize: "1.5rem",
  margin: 0,
};

const navListStyle = {
  listStyle: "none",
  display: "flex",
  gap: "15px",
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  display: "inline",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.3s ease",
};

export default Header;
