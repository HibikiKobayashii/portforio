import React from "react";
import Header from "../app/components/Header";

const Contact = () => {
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
          .contact-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 40px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            padding: 20px;
            background-color: #1a1a2e;
            border-radius: 10px;
          }
          .contact-header {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 30px;
            color: #a0d8ef;
            text-align: center;
          }
          .form-group {
            margin-bottom: 20px;
            width: 100%;
          }
          label {
            display: block;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #a0d8ef;
          }
          input, textarea {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            color: #08081a;
            background-color: #e0e0e0;
            border: none;
            border-radius: 5px;
            resize: none;
          }
          input:focus, textarea:focus {
            outline: 2px solid #7ebeab;
          }
          button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #7ebeab;
            color: #08081a;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          button:hover {
            background-color: #66a792;
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
        <div className="contact-container">
          <h1 className="contact-header">Contact.</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">お名前 *</label>
              <input type="text" id="name" placeholder="お名前をご入力ください" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">メールアドレス *</label>
              <input type="email" id="email" placeholder="メールアドレスをご入力ください" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">内容 *</label>
              <textarea
                id="message"
                rows="5"
                placeholder="内容をご入力ください"
                required
              ></textarea>
            </div>
            <button type="submit">送信</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
