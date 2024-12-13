import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* 未使用のImageインポートを削除 */}
      <section id="new-section" style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1a1a2e",  
        padding: "20px",
        borderRadius: "10px"
      }}>
        <div>
          <h2 style={{ color: "#a0d8ef" }}>Contact Us</h2>
          <form>
            <label htmlFor="name" style={{ color: "#a0d8ef" }}>お名前*</label>
            <input type="text" id="name" required placeholder="お名前をご入力ください" style={{ marginBottom: "10px" }} />

            <label htmlFor="email" style={{ color: "#a0d8ef" }}>メールアドレス</label>
            <input type="email" id="email" required placeholder="メールアドレスをご入力ください" style={{ marginBottom: "10px" }} />

            <label htmlFor="message" style={{ color: "#a0d8ef" }}>内容*</label>
            <textarea id="message" rows={5} placeholder="内容をご入力ください" required style={{ marginBottom: "10px" }}></textarea>

            <button type="submit" style={{
              backgroundColor: "#7ebeab",
              color: "#08081a",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px"
            }}>
              送信
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
