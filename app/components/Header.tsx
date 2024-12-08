"use client";

import React from "react";

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
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
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#06131a",
  color: "white",
  padding: "10px 20px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  width: "100%", // ヘッダーを画面全幅に
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto", // 要素を中央揃え
  maxWidth: "1200px", // コンテンツの最大幅を指定
};

const logoStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  margin: 0,
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
};

export default Header;
