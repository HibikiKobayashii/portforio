import React from "react";
import Header from "../app/components/Header";
import Gazo from "../app/components/gazo";

function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <h1>API実習ポートフォリオ</h1>
        <p>This is a basic Next.js site with a TypeScript header.</p>
        {/* Gazo コンポーネントの追加 */}
        <div style={{ marginTop: "20px" }}>
          <h2>Photo Gallery</h2>
          {/* ここに画像を指定 */}
          <Gazo
            src="https://via.placeholder.com/400" // ここに画像を指定
            alt="Sample photo"
            caption="Sample image caption"
          />
          {/* ここに画像を指定 */}
          <Gazo
            src="https://via.placeholder.com/400/0000FF/808080" // ここに画像を指定
            alt="Another sample photo"
            caption="Another sample image caption"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
