import React from "react";
import Image from "next/image";

interface GazoProps {
  src: string; // 画像のURL
  alt: string; // 画像の説明 (アクセシビリティ用)
  caption?: string; // 画像のキャプション (オプション)
  width?: number; // 画像の幅
  height?: number; // 画像の高さ
}

const Gazo: React.FC<GazoProps> = ({ src, alt, caption, width = 400, height = 900 }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ borderRadius: "8px", display: "block", margin: "0 auto" }}
      />
      {caption && <p style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>{caption}</p>}
    </div>
  );
};

export default Gazo;
