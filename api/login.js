// api/login.js - User login endpoint
import { sql } from '@vercel/postgres';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ success: false, error: 'Missing username or password.' });
    }

    const trimmedUsername = username.trim();

    if (trimmedUsername === '' || password === '') {
      return res.status(400).json({ success: false, error: 'All fields required.' });
    }

    // Find user
    const result = await sql`
      SELECT id, username, password 
      FROM users 
      WHERE username = ${trimmedUsername}
    `;

    if (result.rows.length === 0) {
      return res.status(401).json({ 
        success: false, 
        error: 'Invalid username or password.' 
      });
    }

    const user = result.rows[0];

    // Verify password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ 
        success: false, 
        error: 'Invalid username or password.' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      username: user.username 
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Database error: ' + error.message 
    });
  }
}
