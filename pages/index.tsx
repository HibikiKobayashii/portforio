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
  {/* 左側: 画像 */}
  <div
    className="left"
    style={{
      display: "grid", // グリッドレイアウトを使用
      gridTemplateColumns: "repeat(2, 1fr)", // 横に2列
      gap: "20px", // 各画像の間隔
      width: "50%",
      alignItems: "center",
    }}
  >
    <img
      src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/s.jpg"
      alt=""
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "10px",
      }}
    />
    <img
      src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/v.jpg"
      alt=""
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "10px",
      }}
    />
    <img
      src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/m.jpg"
      alt=""
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "10px",
      }}
    />
    <img
      src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/d.jpg"
      alt=""
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "10px",
      }}
    />
  </div>

  {/* 右側: テキスト */}
  <div
    className="right"
    style={{
      width: "45%",
      color: "#a0d8ef",
      textAlign: "left",
      lineHeight: "1.6",
    }}
  >
    <h2 style={{ color: "#7ebeab" }}>React, Next.jsでのWebアプリケーション開発</h2>
    <p>臨時実務実習（インターン）で、Iotデバイスからデータを取り込み、Webで可視化をしました。1ヶ月という短い期間の中で、Next.jsの開発技術を習得しました。</p>
  </div>
</section>

{/* スキルセクション修正版 */}
<section
  id="skills"
  style={{
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#03090d",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column", // レスポンシブ対応
    alignItems: "center", // 中央揃え
  }}
>
  {/* スキル表 */}
  <div
    className="table-container"
    style={{
      width: "90%", // 別端末での幅調整
      margin: "0 auto", // 真ん中に配置
    }}
  >
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
      {/* 表の内容はそのまま */}
    </table>
  </div>

  {/* 画像 */}
  <div
    className="image-container"
    style={{
      display: "flex",
      gap: "20px", // 画像間隔
      justifyContent: "center", // 中央揃え
      marginTop: "20px",
      width: "90%",
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
