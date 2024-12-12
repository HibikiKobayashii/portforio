<section
  id="new-section"
  style={{
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
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
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", // 横2つ縦2つに配置
      gap: "20px",
      justifyItems: "center",
      width: "80%", // セクション幅を制限
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
</section>

<section
  id="skills"
  style={{
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#03090d",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // 表を中央揃え
  }}
>
  <div className="table-container" style={{ width: "90%", maxWidth: "600px" }}>
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
      <thead>
        <tr>
          <th
            style={{
              padding: "15px",
              border: "1px solid #7ebeab",
              backgroundColor: "#000000",
              color: "#7ebeab",
            }}
          >
            技術
          </th>
          <th
            style={{
              padding: "15px",
              border: "1px solid #7ebeab",
              backgroundColor: "#000000",
              color: "#7ebeab",
            }}
          >
            レベル
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style={{
              padding: "15px",
              border: "1px solid #7ebeab",
              color: "#7ebeab",
            }}
          >
            HTML
          </td>
          <td
            style={{
              padding: "15px",
              border: "1px solid #7ebeab",
              color: "#7ebeab",
            }}
          >
            初心者
          </td>
        </tr>
        {/* 他のスキル行もここに含まれます */}
      </tbody>
    </table>
  </div>

  {/* 画像部分 */}
  <div
    className="image-container"
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "20px",
      width: "100%",
      maxWidth: "600px",
    }}
  >
    <Image
      src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/react.jpg"
      alt="React"
      width={150}
      height={150}
      style={{
        borderRadius: "10px",
        border: "1px solid #7ebeab",
      }}
    />
    <Image
      src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/nextjs.jpg"
      alt="Next.js"
      width={150}
      height={150}
      style={{
        borderRadius: "10px",
        border: "1px solid #7ebeab",
      }}
    />
  </div>
</section>
