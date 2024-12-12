import React from "react";
import Header from "../app/components/Header";
import TextContent from "../app/components/TextContent";
import SkillDescription from "../app/components/SkillDescription";
import Image from "next/image";

const App = () => {
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
        <TextContent />

        <div style={{ marginTop: "20px" }}>
          <img
            src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/hibiki.jpg"
            alt="小林響"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "10px",
              border: "1px solid #a0d8ef",
            }}
          />
        </div>

        <section
          id="image-grid"
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // 横2列
            gap: "20px", // 画像間のスペース
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* 各画像 */}
          <Image
            src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/s.jpg"
            alt="画像1"
            width={400}
            height={300}
            style={{
              borderRadius: "10px",
              border: "1px solid #a0d8ef",
            }}
          />
          <Image
            src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/v.jpg"
            alt="画像2"
            width={400}
            height={300}
            style={{
              borderRadius: "10px",
              border: "1px solid #a0d8ef",
            }}
          />
          <Image
            src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/m.jpg"
            alt="画像3"
            width={400}
            height={300}
            style={{
              borderRadius: "10px",
              border: "1px solid #a0d8ef",
            }}
          />
          <Image
            src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/d.jpg"
            alt="画像4"
            width={400}
            height={300}
            style={{
              borderRadius: "10px",
              border: "1px solid #a0d8ef",
            }}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
