import React from "react";

const SkillDescription = () => {
  return (
    <div style={{ flex: 1 }}>
       <h1 style={{ marginBottom: "20px", color: "#7ebeab" }}>スキル</h1>
      <h2 style={{ marginBottom: "20px", color: "#7ebeab" }}>スキルの説明</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#7ebeab" }}>
        ここでは、現在私が使える技術とそのレベルを紹介しています。HTMLとCSSは初心者レベルで、
        JavaScriptは中級者として扱えます。ReactとNext.jsは使い始めたばかりですが、
        実際のプロジェクトで学びながら進めています。
      </p>
    </div>
  );
};

export default SkillDescription;

