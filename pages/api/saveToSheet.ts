import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "必要なフィールドが不足しています。" });
    }

    try {
      // SHEETDB_API_URL 環境変数を使用
      const sheetDbUrl = process.env.SHEETDB_API_URL;

      if (!sheetDbUrl) {
        throw new Error("SHEETDB_API_URL が設定されていません。");
      }

      const response = await fetch(sheetDbUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: { name, email, message },
        }),
      });

      if (response.ok) {
        res.status(200).json({ message: "データが正常に送信されました。" });
      } else {
        const error = await response.json();
        res.status(500).json({ error: `SheetDB API エラー: ${error}` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "サーバーエラーが発生しました。" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
