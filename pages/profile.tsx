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
          }
          .profile-header {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #a0d8ef;
          }
          .job-title {
            font-size: 24px;
            color: #a0d8ef;
            margin-bottom: 10px;
          }
          .job-description {
            font-size: 16px;
            color: #a0d8ef;
            line-height: 1.8;
            margin-bottom: 30px;
            max-width: 800px;
            text-align: left;
          }
          .experience-list {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
          }
          .experience-item {
            padding: 10px;
            margin-bottom: 10px;
            background-color: #121212;
            border-radius: 8px;
          }
          .experience-item h3 {
            font-size: 20px;
            margin: 0;
            color: #a0d8ef;
          }
          .experience-item p {
            font-size: 16px;
            margin: 5px 0 0;
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
              <h3>2035 - 現在: エディター</h3>
              <p>テキストの例です。ここをクリックして「テキストを編集」を選択するか、ここをダブルクリックしてテキストを編集してください。文字の色やフォントを変更することもできます。</p>
            </li>

            <li className="experience-item">
              <h3>2035 - 2035: 株式会社 Large, ライター</h3>
              <p>テキストの例です。ここをクリックして「テキストを編集」を選択するか、ここをダブルクリックしてテキストを編集してください。文字の色やフォントを変更することもできます。</p>
            </li>

            <li className="experience-item">
              <h3>2035 - 2035: インターン</h3>
              <p>テキストの例です。ここをクリックして「テキストを編集」を選択するか、ここをダブルクリックしてテキストを編集してください。文字の色やフォントを変更することもできます。</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Profile;
