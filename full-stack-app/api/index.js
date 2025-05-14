// Vercel serverless function for /api/index
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'API endpoint hit' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
