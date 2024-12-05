import React from "react";

interface GazoProps {
  src: string; // 画像のURL
  alt: string; // 画像の説明 (アクセシビリティ用)
  caption?: string; // 画像のキャプション (オプション)
}

const Gazo: React.FC<GazoProps> = ({ src, alt, caption }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />
      {caption && <p style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>{caption}</p>}
    </div>
  );
};

export default Gazo;
