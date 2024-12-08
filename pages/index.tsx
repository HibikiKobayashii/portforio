import React from "react";
import Header from "../app/components/Header";
import Image from "next/image";  // next/image をインポート

const HorizontalBar: React.FC<{ width: string; height: string; color: string }> = ({
  width,
  height,
  color,
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: color,
        margin: "0 auto", // 棒を中央揃え
      }}
    ></div>
  );
};

const Home = () => {
  return (
    <div style={{ backgroundColor: "#aliceblue", minHeight: "100vh", position: "relative" }}>
      <Header />
      <main
        style={{
          padding: "20px",
          textAlign: "center",
          paddingTop: "80px", // ヘッダーの高さ分のスペースを確保 (調整が必要な場合は変更)
        }}
      >
        <div>
          <h1 style={{ fontSize: "calc(2rem + 1vw)", marginBottom: "10px" }}>
            I am an IoT Student !!
          </h1>
          <HorizontalBar width="80%" height="5px" color="black" />
          <h2 style={{ fontSize: "calc(1rem + 0.5vw)", marginTop: "20px" }}>
            開志専門職大学でIoTを学んでいる小林響と申します！
            <br />
            XR系に力を入れています！
          </h2>
        </div>
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
          {/* next/image を使用して画像を最適化 */}
          <Image
            src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/hibiki.jpg"
            alt="小林響"
            width={300}
            height={400}
            style={{
              borderRadius: "10px",
              border: "1px solid #333",
            }}
          />
        </div>
        {/* 背景画像 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "url('https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></div>
      </main>
    </div>
  );
};

export default Home;
