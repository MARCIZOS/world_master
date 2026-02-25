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

1. Clone the repository
2. Open index.html in a web browser
3. No additional installation required - all dependencies are loaded via CDN

## Backend Integration (PHP)

A simple PHP backend is included for saving and retrieving scores (leaderboard).

### Setup
1. Make sure you have PHP installed and a local server (e.g., XAMPP, WAMP, MAMP).
2. Place the `backend/` folder in your project root.
3. Start your local server and access the game via `http://localhost/WorldMaster/index.html`.

### How it Works
- When the game ends, you will be prompted to enter your name. Your score is sent to `backend/scores.php` and saved in `scores.json`.
- The leaderboard is displayed on the end screen, showing the top scores.

### Files
- `backend/scores.php`: Handles saving and retrieving scores.
- `backend/scores.json`: Stores the scores data.

No database setup is required; scores are stored in a JSON file.

## Credits

- Map tiles provided by OpenStreetMap
- Leaflet.js for map functionality
- Geographic data compiled from various open sources