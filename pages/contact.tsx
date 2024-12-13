import React, { useState } from "react";
import Header from "../app/components/Header";
import Image from "next/image"; // Imageコンポーネントのインポート

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
            background-color: #1a1a2e;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .experience-item h3 {
            font-size: 20px;
            margin: 0;
            color: #7ebeab;
            text-align: left;
          }
          .experience-item p {
            font-size: 16px;
            margin: 5px 0 0;
            color: #a0d8ef;
          }
          .year {
            font-weight: bold;
            color: #7ebeab;
            display: inline-block;
            margin-right: 10px;
          }
          /* 新しいセクションのスタイル */
          #new-section {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #1a1a2e;
            padding: 20px;
            border-radius: 10px;
          }
          .form-input {
            padding: 10px;
            margin: 10px 0;
            width: 100%;
            border-radius: 8px;
            border: 1px solid #7ebeab;
            background-color: #121212;
            color: #a0d8ef;
          }
          .form-textarea {
            padding: 10px;
            margin: 10px 0;
            width: 100%;
            height: 150px;
            border-radius: 8px;
            border: 1px solid #7ebeab;
            background-color: #121212;
            color: #a0d8ef;
          }
          .form-button {
            background-color: #7ebeab;
            color: #08081a;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
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

          {/* 経歴リスト */}
          <ul className="experience-list">
            <li className="experience-item">
              <h3>
                <span className="year">2023/04 - 現在</span>私立開志専門職大学　在学
              </h3>
              <p>情報学部所属。XR、IoTの分野を学んでいる。</p>
            </li>

            <li className="experience-item">
              <h3>
                <span className="year">2020/04 - 2023/03</span>私立新潟青陵高等学校　在学
              </h3>
              <p>普通科進学コース所属。</p>
            </li>

            <li className="experience-item">
              <h3>
                <span className="year">2017/04 - 2020/03</span>新潟市立白根北中学校　在学
              </h3>
              <p></p>
            </li>

            <li className="experience-item">
              <h3>
                <span className="year">2011/04 - 2017/03</span>新潟市立根岸小学校　在学
              </h3>
              <p></p>
            </li>
          </ul>

          {/* 新しいセクション */}
          <div id="new-section">
            <form>
              <div>
                <label htmlFor="name">お名前 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="お名前を入力"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="メールアドレスを入力"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">内容 *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-textarea"
                  placeholder="内容をご入力ください"
                  required
                />
              </div>
              <button type="submit" className="form-button">
                送信
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
