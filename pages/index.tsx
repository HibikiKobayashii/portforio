import React, { useEffect, useRef } from "react";
import Header from "../app/components/Header";
import TextContent from "../app/components/TextContent";
import SkillDescription from "../app/components/SkillDescription";
import Image from "next/image";

const App = () => {
  const typingEffectRef = useRef(null);
  const interactiveBtnRef = useRef(null);

  useEffect(() => {
    const text = "This is a typing effect.";
    const element = typingEffectRef.current;
    let i = 0;

    function typeWriter() {
      if (element && i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }

    if (element) {
      typeWriter();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInteractiveBtnClick = () => {
    if (interactiveBtnRef.current) {
      interactiveBtnRef.current.classList.toggle("active");
    }
  };

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

            /* ホバーエフェクト */
            .btn {
              background-color: #4CAF50; /* Green */
              border: none;
              color: white;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              transition: background-color 0.3s ease;
            }

            .btn:hover {
              background-color: #3e8e41; /* Darker green */
            }

            /* インタラクティブなボタン */
            .interactive-btn {
              background-color: #008CBA; /* Blue */
              border: none;
              color: white;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              transition: background-color 0.3s ease;
            }

            .interactive-btn.active {
              background-color: #005b8f; /* Darker blue */
            }

            /* スクロールでフェードイン */
            .fade-in {
              opacity: 0;
              transition: opacity 0.5s ease;
            }

            .fade-in.show {
              opacity: 1;
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
          <Image
            src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/hibiki.jpg"
            alt="小林響"
            width={300}
            height={300}
            style={{
              borderRadius: "10px",
              border: "1px solid #a0d8ef",
            }}
          />
        </div>

        <section
          id="skills"
          style={{
            marginTop: "50px",
            padding: "20px",
            backgroundColor: "#03090d",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
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
          <div
            className="left fade-in"
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Image
              src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/s.jpg"
              alt=""
              width={400} // 適切な幅を指定
              height={300} // 適切な高さを指定
              style={{
                borderRadius: "10px",
              }}
            />
            <Image
              src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/m.jpg"
              alt=""
              width={400} // 適切な幅を指定
              height={300} // 適切な高さを指定
              style={{
                borderRadius: "10px",
              }}
            />
          </div>

          <div
            className="right fade-in"
            style={{
              width: "45%",
              color: "#a0d8ef",
              textAlign: "left",
              lineHeight: "1.6",
            }}
          >
            <h2 style={{ color: "#7ebeab" }}>
              React,Next.jsでのWebアプリケーション開発
            </h2>
            <p>
              臨時実務実習（インターン）で、Iotデバイスからデータを取り込み、Webで可視化をしました。1ヶ月という短い期間の中で,Next.jsの開発技術を習得しました。
            </p>
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
          <div
            className="left fade-in"
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/mirai.jpg"
              alt=""
              width={500} // 適切な幅を指定
              height={300} // 適切な高さを指定
              style={{
                borderRadius: "10px",
              }}
            />
          </div>

          <div
            className="right fade-in"
            style={{
              width: "45%",
              color: "#a0d8ef",
              textAlign: "left",
              lineHeight: "1.6",
            }}
          >
            <h2 style={{ color: "#7ebeab" }}>SNS活動</h2>
            <p>
              Youtube、Twitchでの配信活動を行っています。現在は収益化等は出来ていませんが、将来奇跡が起きることを信じて努力しています。
            </p>
          </div>
        </section>

        <p ref={typingEffectRef} style={{ marginTop: "50px" }}></p>

        <button className="btn" style={{ marginTop: "20px" }}>
          Hover me
        </button>

        <button
          className="interactive-btn"
          style={{ marginTop: "20px" }}
          onClick={handleInteractiveBtnClick}
          ref={interactiveBtnRef}
        >
          Click me
        </button>
      </main>
    </div>
  );
};

export default App;
