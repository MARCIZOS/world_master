# API Routes

This folder contains Vercel serverless functions for the World Master backend.

## Endpoints

### `/api/register.js`
**Method:** POST  
**Description:** Register a new user  
**Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```
**Response:**
```json
{
  "success": true
}
```

### `/api/login.js`
**Method:** POST  
**Description:** Authenticate a user  
**Body:**
```json
{
  "username": "string",
  "password": "string"
}
```
**Response:**
```json
{
  "success": true,
  "username": "string"
}
```

### `/api/scores.js`
**Methods:** GET, POST

#### GET - Retrieve Leaderboard
**Description:** Get all scores  
**Response:**
```json
{
  "success": true,
  "scores": [
    {
      "name": "string",
      "score": number
    }
  ]
}
```

#### POST - Submit Score
**Description:** Submit or update a player's score  
**Body:**
```json
{
  "name": "string",
  "score": number
}
```
**Response:**
```json
{
  "success": true
}
```

## Local Testing

Use `vercel dev` to test API routes locally:

```bash
vercel dev
```

Then visit `http://localhost:3000/api/scores.js` to test endpoints.

## Environment Variables

Required environment variables (automatically set by Vercel Postgres):
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

## Database Schema

See `../schema.sql` for the required database tables.
