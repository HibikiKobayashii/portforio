import React from "react";
import Header from "../app/components/Header";

const Contact = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        backgroundColor: "#08081a",
        color: "#a0d8ef",
      }}
    >
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
          }
          * {
            box-sizing: border-box;
          }
          .profile-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 40px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          .profile-header {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 30px;
            color: #a0d8ef;
            text-align: center;
          }
        `}
      </style>

      <Header />
      <main
        style={{
          paddingTop: "70px",
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <div className="profile-container">
          <h1 className="profile-header">Contact.</h1>
        </div>
        {/* 新しいセクション */}
        <section
          id="new-section"
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#1a1a2e",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div style={{ color: "#a0d8ef" }}>左側のコンテンツ</div>
          <div style={{ color: "#a0d8ef" }}>右側のコンテンツ</div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
