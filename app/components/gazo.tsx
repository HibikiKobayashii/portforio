import React from "react";
import Image from "next/image";

interface GazoProps {
  src: string; // 画像のURL
  alt: string; // 画像の説明 (アクセシビリティ用)
  caption?: string; // 画像のキャプション (オプション)
  width?: number; // 画像の幅
  height?: number; // 画像の高さ
  offsetX?: number; // 横方向のオフセット
  offsetY?: number; // 縦方向のオフセット
  contrast?: number; // コントラストの調整（デフォルトは100）
}

const Gazo: React.FC<GazoProps> = ({
  src,
  alt,
  caption,
  width = 459,
  height = 816,
  offsetX = 0,
  offsetY = 0,
  contrast = 100, // デフォルトは100%
}) => {
  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <div
        style={{
          position: "relative",
          left: `${offsetX}px`, // 横方向の調整
          top: `${offsetY}px`,  // 縦方向の調整
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{
            borderRadius: "8px",
            display: "block",
            margin: "0 auto",
            filter: `contrast(${contrast}%)`, // コントラストを変更
          }}
        />
      </div>
      {caption && (
        <p style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>{caption}</p>
      )}
    </div>
  );
};

export default Gazo;
