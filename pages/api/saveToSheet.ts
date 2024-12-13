import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // 入力チェック
    if (!name || !email || !message) {
      return res.status(400).json({ error: "すべてのフィールドを入力してください。" });
    }

    try {
      // SheetDB API にデータを送信
      const response = await fetch("https://sheetdb.io/api/v1/pgotw150b2ot3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: { name, email, message },
        }),
      });

      if (!response.ok) {
        throw new Error("シートへの送信に失敗しました。");
      }

      res.status(200).json({ message: "データが正常に送信されました。" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "内部サーバーエラーが発生しました。" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `メソッド ${req.method} は許可されていません。` });
  }
}
