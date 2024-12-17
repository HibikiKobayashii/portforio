const client = require('../pages/lib/sheetdb.js'); // 修正済み

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      const data = {
        B: name,    // B列に名前
        D: email,   // D列にメールアドレス
        E: message  // E列に内容
      };

      await client.create(data);
      res.status(200).json({ message: 'Data saved successfully!' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Failed to save data.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
