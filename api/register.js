// api/register.js - User registration endpoint
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
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, error: 'Missing fields.' });
    }

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();

    if (trimmedUsername === '' || trimmedEmail === '' || password === '') {
      return res.status(400).json({ success: false, error: 'All fields required.' });
    }

    // Check if user already exists
    const existingUser = await sql`
      SELECT id FROM users 
      WHERE username = ${trimmedUsername} OR email = ${trimmedEmail}
    `;

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'Username or email already exists.' 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await sql`
      INSERT INTO users (username, email, password, created_at) 
      VALUES (${trimmedUsername}, ${trimmedEmail}, ${hashedPassword}, NOW())
    `;

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Database error: ' + error.message 
    });
  }
}
