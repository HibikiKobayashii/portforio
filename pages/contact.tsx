import React, { useState } from "react";
import Header from "../app/components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("送信中...");

    try {
      const response = await fetch("/api/saveToSheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("送信に成功しました！");
        setFormData({ name: "", email: "", message: "" }); // フォームをリセット
      } else {
        setStatus("送信に失敗しました。");
      }
    } catch (error) {
      console.error(error);
      setStatus("エラーが発生しました。");
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
          .form-container {
            margin-top: 50px;
            background-color: #1a1a2e;
            padding: 20px;
            border-radius: 10px;
            max-width: 600px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .form-group {
            margin-bottom: 20px;
          }
          .form-label {
            display: block;
            font-size: 16px;
            color: #a0d8ef;
            margin-bottom: 8px;
          }
          .form-input,
          .form-textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #7ebeab;
            border-radius: 5px;
            background-color: #08081a;
            color: #a0d8ef;
            font-size: 14px;
          }
          .form-input:focus,
          .form-textarea:focus {
            outline: none;
            border-color: #a0d8ef;
          }
          .form-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #7ebeab;
            color: #08081a;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-align: center;
          }
          .form-button:hover {
            background-color: #a0d8ef;
            color: #08081a;
          }
          .status-message {
            margin-top: 20px;
            font-size: 14px;
            color: #7ebeab;
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
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                お名前 *
              </label>
              <input
                className="form-input"
                type="text"
                id="name"
                placeholder="お名前を入力してください"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                メールアドレス *
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                placeholder="メールアドレスを入力してください"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">
                内容 *
              </label>
              <textarea
                className="form-textarea"
                id="message"
                rows={5}
                placeholder="内容をご入力ください"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="form-button" type="submit">
              送信
            </button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </main>
    </div>
  );
};

export default Contact;
