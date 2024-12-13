import React, { useState } from "react";
import Header from "../app/components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); // Error message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    setError(null);

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setError(errorData?.error || "送信に失敗しました");
        setStatus("error");
      }
    } catch (error) {
      setError("ネットワークエラーが発生しました。再試行してください。");
      setStatus("error");
    } finally {
      setIsSubmitting(false);
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
            <button className="form-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "送信中..." : "送信"}
            </button>
            {status === "success" && <p style={{ color: "green" }}>送信が成功しました！</p>}
            {status === "error" && error && (
              <p style={{ color: "red" }}>
                {error || "送信に失敗しました。もう一度お試しください。"}
              </p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
