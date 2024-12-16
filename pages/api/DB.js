// pages/api/saveToSheet.js

import { sheetDB } from 'sheetdb-node';

const client = sheetDB({
  address: process.env.SHEETDB_ADDRESS,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body; 

      // SheetDB に挿入するデータを整形
      const data = {
        B: name,  // B列に名前
        D: email, // D列にメールアドレス
        E: message // E列に内容
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
