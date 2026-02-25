# Geography Explorer Game

## Overview
Geography Explorer is an interactive web-based game that tests your knowledge of world geography. Players are shown a random location on a world map and must guess the correct country, capital, or landmark.

## Features

### Game Modes
- **Countries Mode**: Guess which country is shown on the map
- **Capitals Mode**: Identify capital cities around the world
- **Landmarks Mode**: (Coming soon) Recognize famous landmarks globally

### Difficulty Levels
- **Easy**: Only large/obvious countries (India, USA, Australia, etc.)
- **Medium**: All countries included
- **Hard**: More challenging locations

### Game Types
- **Timer Mode**: Guess as many locations as possible in 60 seconds
- **Lives Mode**: You have 3 lives; game ends after 3 wrong answers

### Gameplay Features
- Interactive world map using Leaflet.js
- Random pin generator that places markers on the map
- Two answer methods: text input with auto-complete or multiple-choice options
- Scoring system: +10 points for correct answers, -5 for incorrect
- Fun facts about each location after answering
- End-game statistics showing score, accuracy, and locations visited

## Technical Implementation

### Technologies Used
- HTML5, CSS3, JavaScript
- Leaflet.js for interactive maps
- GeoJSON for world borders (simplified implementation)

### Project Structure
```
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Styling for the game
├── js/
│   ├── data.js         # Country, capital, and landmark data
│   └── game.js         # Game logic and functionality
└── README.md           # Project documentation
```

## How to Play

1. Select a game mode (Countries or Capitals)
2. Choose a difficulty level (Easy, Medium, Hard)
3. Select a game type (Timer or Lives)
4. Click "Start Game"
5. A pin will appear on the map
6. Guess the location by typing in the answer or selecting from multiple choice options
7. Get feedback and a fun fact about the location
8. Continue to the next question
9. Game ends when time runs out or you lose all lives
10. View your final score and statistics

## Future Enhancements

- Landmarks Mode implementation
- More detailed country highlighting using GeoJSON
- Leaderboard functionality
- Additional game modes (e.g., flags, regions)
- Mobile-responsive design improvements

## Setup and Installation

### Option 1: Deploy to Vercel (Recommended for Production)

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions.

Quick steps:
1. Push your code to GitHub
2. Connect to Vercel
3. Create a Postgres database in Vercel
4. Deploy!

### Option 2: Local Development

#### Using Vercel Dev (Recommended)
```bash
npm install
vercel dev
```

#### Using PHP (Legacy - Local Only)
1. Install XAMPP/WAMP/MAMP
2. Place project in web server directory
3. Start server and access via `http://localhost/WorldMaster/`

## Backend Architecture

### Current (Vercel-Ready)
- **API Routes**: Node.js serverless functions in `/api` folder
- **Database**: Vercel Postgres (PostgreSQL)
- **Files**:
  - `api/register.js`: User registration endpoint
  - `api/login.js`: User authentication endpoint
  - `api/scores.js`: Leaderboard management
  - `schema.sql`: Database schema

### Legacy (PHP - Deprecated)
- PHP files in `/backend` folder still exist for reference
- Use Vercel deployment for production
- MySQL database replaced with Postgres

## Credits

- Map tiles provided by OpenStreetMap
- Leaflet.js for map functionality
- Geographic data compiled from various open sources