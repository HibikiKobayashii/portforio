import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export"     // 静的サイトとしてエクスポートする
     // URL末尾にスラッシュを追加する
  // 他の設定も必要に応じて追加できます
};

export default nextConfig;