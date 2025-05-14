// Vercel serverless function for /api/users
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ user: 'John Doe', age: 30 });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
