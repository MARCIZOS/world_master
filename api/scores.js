// api/scores.js - Leaderboard endpoint
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // POST - Save/update score
    if (req.method === 'POST') {
      const { name, score } = req.body;

      if (!name || score === undefined) {
        return res.status(400).json({ 
          success: false, 
          error: 'Missing name or score' 
        });
      }

      // Check if user already has a score
      const existingScore = await sql`
        SELECT score FROM scores WHERE name = ${name}
      `;

      if (existingScore.rows.length > 0) {
        // Update only if new score is higher
        const currentScore = existingScore.rows[0].score;
        if (score > currentScore) {
          await sql`
            UPDATE scores 
            SET score = ${score}, updated_at = NOW() 
            WHERE name = ${name}
          `;
        }
      } else {
        // Insert new score
        await sql`
          INSERT INTO scores (name, score, created_at, updated_at) 
          VALUES (${name}, ${score}, NOW(), NOW())
        `;
      }

      return res.status(200).json({ success: true });
    }

    // GET - Retrieve all scores
    if (req.method === 'GET') {
      const result = await sql`
        SELECT name, score 
        FROM scores 
        ORDER BY score DESC
      `;

      return res.status(200).json({ 
        success: true, 
        scores: result.rows 
      });
    }

    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });

  } catch (error) {
    console.error('Scores error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Database error: ' + error.message 
    });
  }
}
