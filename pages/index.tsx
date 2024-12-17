import React from "react";
import Header from "../app/components/Header";
import TextContent from "../app/components/TextContent";
import SkillDescription from "../app/components/SkillDescription";
import Image from "next/image";
import Typed from 'react-typed';
import { useInView } from 'react-intersection-observer';

const TypingEffect = () => (
  <div style={{ fontSize: "24px", color: "#a0d8ef", marginTop: "30px" }}>
    <Typed
      strings={["Web開発を学んでいる!", "ReactとNext.jsでアプリを作った!", "日々成長しています!"]}
      typeSpeed={100}
      backSpeed={50}
      backDelay={1000}
      loop
    />
  </div>
);

const ScrollEffect = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: 'opacity 1s ease-out',
        marginTop: "50px",
      }}
    >
      <h2 style={{ color: "#7ebeab", textAlign: "center" }}>スクロールで現れるエフェクト</h2>
      <p style={{ color: "#a0d8ef", textAlign: "center" }}>
        このセクションはスクロールに基づいて表示されます。
      </p>
    </div>
  );
};

const App = () => {
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
        <TextContent />
        <TypingEffect /> {/* 追加したタイピングエフェクト */}
        {/* 既存コンテンツ */}

        <button className="button-hover" style={{ marginTop: "30px" }}>
          詳細を見る
        </button>

        <ScrollEffect /> {/* 追加したスクロールエフェクト */}

        {/* 既存のスキルセクションや新しいセクション */}
      </main>
    </div>
  );
};

export default App;
