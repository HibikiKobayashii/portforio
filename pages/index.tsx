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

          /* レスポンシブデザイン */
          @media (max-width: 768px) {
            #skills {
              flex-direction: column; /* 縦に配置 */
              align-items: center;
            }
            #skills .table-container {
              width: 90%; /* 幅を縮小 */
              margin-bottom: 20px;
            }
            #skills .image-container {
              width: 90%; /* 幅を縮小 */
            }
            #new-section {
              flex-direction: column; /* 縦に配置 */
            }
            #new-section .left,
            #new-section .right {
              width: 100%;
            }
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

        {/* スキルセクション */}
        <section
          id="skills"
          style={{
            marginTop: "50px",
            padding: "20px",
            backgroundColor: "#03090d",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "space-between", // 左右に分割
            alignItems: "flex-start",
          }}
        >
          {/* 左側: 画像 */}
          <div
            className="image-container"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "flex-start",
              width: "30%", // 左側に画像を集める
            }}
          >
            <Image
              src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/react.jpg"
              alt="React"
              width={200}
              height={200}
              style={{
                borderRadius: "10px",
                border: "1px solid #7ebeab",
              }}
            />
            <Image
              src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/nextjs.jpg"
              alt="Next.js"
              width={200}
              height={200}
              style={{
                borderRadius: "10px",
                border: "1px solid #7ebeab",
              }}
            />
            <img
              src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/s.jpg"
              alt=""
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
            <img
              src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/v.jpg"
              alt=""
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* 右側: テキスト */}
          <div
            className="text-container"
            style={{
              color: "#a0d8ef",
              textAlign: "left",
              lineHeight: "1.6",
              width: "65%", // 右側にテキストを広げる
              paddingLeft: "20px",
            }}
          >
            <h2 style={{ color: "#7ebeab" }}>SNS活動</h2>
            <p>
              Youtube、Twitchでの配信活動を行っています。現在は収益化等は出来ていませんが、将来奇跡が起きることを信じて努力しています。
            </p>
            <SkillDescription />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
