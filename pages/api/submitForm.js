export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "すべてのフィールドを入力してください。" });
    }

    try {
      const response = await fetch(process.env.SHEETDB_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [{ name, email, message }],
        }),
      });

      if (response.ok) {
        return res.status(200).json({ success: true });
      } else {
        const errorData = await response.json();
        return res.status(response.status).json({ error: errorData });
      }
    } catch (error) {
      return res.status(500).json({ error: "内部エラーが発生しました。" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
