import React from "react";
import Header from "../app/components/Header";

const Profile = () => {
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
          .job-title {
            font-size: 24px;
            color: #a0d8ef;
            margin-bottom: 10px;
            font-weight: bold;
          }
          .job-description {
            font-size: 16px;
            color: #a0d8ef;
            line-height: 1.8;
            margin-bottom: 30px;
            text-align: left;
          }
          .experience-list {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
          }
          .experience-item {
            padding: 20px;
            margin-bottom: 20px;
            background-color: #a0d8ef; /* 背景色を変更 */
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .experience-item h3 {
            font-size: 20px;
            margin: 0;
            color: #08081a; /* テキストが読めるように色を変更 */
          }
          .experience-item p {
            font-size: 16px;
            margin: 5px 0 0;
            color: #08081a; /* テキストが読めるように色を変更 */
          }
          .year {
            font-weight: bold;
            color: #08081a; /* テキストが読めるように色を変更 */
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
          <h1 className="profile-header">Profile.</h1>
          
          {/* 経歴リスト */}
          <ul className="experience-list">
            <li className="experience-item">
              <h3><span className="year">2035 - 現在</span>: エディター</h3>
              <p>テキストの例です。ここをクリックして「テキストを編集」を選択するか、ここをダブルクリックしてテキストを編集してください。文字の色やフォントを変更することもできます。</p>
            </li>

            <li className="experience-item">
              <h3><span className="year">2035 - 2035</span>: 株式会社 Large, ライター</h3>
              <p>テキストの例です。ここをクリックして「テキストを編集」を選択するか、ここをダブルクリックしてテキストを編集してください。文字の色やフォントを変更することもできます。</p>
            </li>

            <li className="experience-item">
              <h3><span className="year">2035 - 2035</span>: インターン</h3>
              <p>テキストの例です。ここをクリックして「テキストを編集」を選択するか、ここをダブルクリックしてテキストを編集してください。文字の色やフォントを変更することもできます。</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Profile;
