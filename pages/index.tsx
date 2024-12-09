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

        {/* hibiki.jpg画像を表示 */}
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
          {/* 左側: スキル表 */}
          <div className="table-container" style={{ width: "65%" }}>
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
                      padding: "15px",
                      border: "1px solid #7ebeab",
                      backgroundColor: "#000000",
                      color: "#7ebeab",
                    }}
                  >
                    技術
                  </th>
                  <th
                    style={{
                      padding: "15px",
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
                      padding: "15px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    HTML
                  </td>
                  <td
                    style={{
                      padding: "15px",
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
                      padding: "15px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    CSS
                  </td>
                  <td
                    style={{
                      padding: "15px",
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
                      padding: "15px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    JavaScript
                  </td>
                  <td
                    style={{
                      padding: "15px",
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
                      padding: "15px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    React(JS)
                  </td>
                  <td
                    style={{
                      padding: "15px",
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
                      padding: "15px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    Next.js(JS)
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      border: "1px solid #7ebeab",
                      color: "#7ebeab",
                    }}
                  >
                    使い始めた
                  </td>
                </tr>
              </tbody>
            </table>
            <SkillDescription />
          </div>

          {/* 右側: ReactとNext.js画像 */}
          <div
            className="image-container"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              width: "30%",
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
          </div>
        </section>

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
          {/* 左側: 画像 */}
          <div
            className="left"
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="URL_OF_IMAGE_HERE"
              alt="新しい画像"
              style={{
                width: "90%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* 右側: テキスト */}
          <div
            className="right"
            style={{
              width: "45%",
              color: "#a0d8ef",
              textAlign: "left",
              lineHeight: "1.6",
            }}
          >
            <h2 style={{ color: "#7ebeab" }}>セクションタイトル</h2>
            <p>ここに文章を記載できます。自由に内容を追加してください。</p>
          </div>
        </section>

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
          {/* 左側: 画像 */}
          <div
            className="left"
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="URL_OF_IMAGE_HERE"
              alt="新しい画像"
              style={{
                width: "90%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* 右側: テキスト */}
          <div
            className="right"
            style={{
              width: "45%",
              color: "#a0d8ef",
              textAlign: "left",
              lineHeight: "1.6",
            }}
          >
            <h2 style={{ color: "#7ebeab" }}>セクションタイトル</h2>
            <p>ここに文章を記載できます。自由に内容を追加してください。</p>
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default App;
