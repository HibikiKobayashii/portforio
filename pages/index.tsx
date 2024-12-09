import React from "react";
import Header from "../app/components/Header"; // Headerコンポーネント
import TextContent from "../app/components/TextContent"; // TextContentコンポーネント
import SkillDescription from "../app/components/SkillDescription"; // SkillDescriptionコンポーネント
import Image from "next/image"; // Next.jsのImageコンポーネント

const App = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        backgroundColor: "#08081a", // 背景色
        color: "#a0d8ef", // 文字色
      }}
    >
      {/* CSSリセット */}
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

      <Header /> {/* ヘッダー */}
      <main
        style={{
          paddingTop: "70px",
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <TextContent /> {/* 文章コンポーネント */}

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
            alignItems: "center", // 中央揃え
          }}
        >
          {/* 左側: 画像 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Image
              src="/gazo/react.jpg" // publicフォルダ内の画像
              alt="React"
              width={150}
              height={150}
              style={{
                borderRadius: "10px",
                border: "1px solid #7ebeab",
              }}
            />
            <Image
              src="/gazo/nextjs.jpg" // publicフォルダ内の画像
              alt="Next.js"
              width={150}
              height={150}
              style={{
                borderRadius: "10px",
                border: "1px solid #7ebeab",
              }}
            />
          </div>

          {/* 右側: スキル表と説明 */}
          <div style={{ width: "60%" }}>
            <h1
              style={{
                marginBottom: "20px",
                color: "#7ebeab",
                textAlign: "center",
              }}
            >
              スキル
            </h1>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "20px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "10px",
                      border: "1px solid #7ebeab",
                      backgroundColor: "#000000",
                      color: "#7ebeab",
                    }}
                  >
                    技術
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      border: "1px solid #7ebeab",
                      backgroundColor: "#000000",
                      color: "#7ebeab",
                    }}
                  >
                    レベル
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    HTML
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    初心者
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    CSS
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    初心者
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    JavaScript
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    中級者
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    React(JS)
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    使い始めた
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    Next.js(JS)
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    使い始めた
                  </td>
                </tr>
              </tbody>
            </table>
            <SkillDescription /> {/* スキル説明を表示 */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
