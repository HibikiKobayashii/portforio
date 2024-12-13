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
            background-color: #1a1a2e;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .experience-item h3 {
            font-size: 20px;
            margin: 0;
            color: #7ebeab; /* 文字色を変更 */
            text-align: left; /* 左寄せ */
          }
          .experience-item p {
            font-size: 16px;
            margin: 5px 0 0;
            color: #a0d8ef;
          }
          .year {
            font-weight: bold;
            color: #7ebeab; /* 年代の色を変更 */
            display: inline-block;
            margin-right: 10px; /* 年代とテキストの間隔調整 */
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
          <h1 className="profile-header">History.</h1>
          
          {/* 経歴リスト */}
          <ul className="experience-list">
            <li className="experience-item">
              <h3>
                <span className="year">2023/04 - 現在</span>私立開志専門職大学　在学
              </h3>
              <p></p>
            </li>

            <li className="experience-item">
              <h3>
                <span className="year">2020/04 - 2023/03</span>私立新潟青陵高等学校　在学
              </h3>
              <p></p>
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
        </div>
      </main>
    </div>
  );
};

export default Profile;
