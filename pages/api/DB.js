export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // SheetDB に挿入するデータ
      const data = {
        B: name,  // B列に名前
        D: email, // D列にメールアドレス
        E: message // E列に内容
      };

      await client.create(data); // SheetDBへデータ送信
      res.status(200).json({ message: 'Data saved successfully!' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Failed to save data.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
