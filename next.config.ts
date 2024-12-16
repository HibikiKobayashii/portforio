import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hibikikobayashii.github.io",
        pathname: "/app/components/gazo/hibiki.jpg",
      },
    ],
  },
  env: {
    SHEETDB_ADDRESS: 'https://sheetdb.io/api/v1/pgotw150b2ot3',
  },
};

export default nextConfig;
