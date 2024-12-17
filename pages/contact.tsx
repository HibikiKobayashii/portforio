import React from "react";
import Header from "../app/components/Header";

const Contact = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,　
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("../pages/api/DB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("フォームが送信されました！");
        (event.target as HTMLFormElement).reset(); // フォームのリセット
      } else {
        const errorData = await response.json();
        alert(`エラーが発生しました: ${errorData.error}`);
      }
    } catch (error) {
      console.error("送信エラー:", error);
      alert("送信中にエラーが発生しました。");
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
                name="name"
                placeholder="お名前を入力してください"
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
                name="email"
                placeholder="メールアドレスを入力してください"
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
                name="message"
                rows={5}
                placeholder="内容をご入力ください"
                required
              ></textarea>
            </div>
            <button className="form-button" type="submit">
              送信
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
