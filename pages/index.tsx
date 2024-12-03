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
      </main>
    </div>
  );
}

export default Home;
