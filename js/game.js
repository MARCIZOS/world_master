/**
 * Geography Explorer Game
 * Full main game logic and functionality
 */

// Game state variables
let gameState = {
    mode: 'countries', // 'countries', 'capitals', 'landmarks'
    difficulty: 'hard', // 'easy', 'medium', 'hard'
    gameType: 'timer', // 'timer', 'lives'
    score: 0,
    lives: 3,
    timeLeft: 60,
    currentLocation: null,
    correctAnswers: 0,
    totalQuestions: 0,
    timer: null,
    options: [],
    map: null,
    marker: null,
    highlightLayer: null
};

// DOM Elements - initialized in initElements
let elements = {};

// Initialize DOM elements
function initElements() {
    console.log("🔎 Initializing DOM elements...");
    elements = {
        screens: {
            start: document.getElementById('start-screen'),
            gameplay: document.getElementById('gameplay-screen'),
            end: document.getElementById('end-screen')
        },
        modeButtons: {
            countries: document.getElementById('countries-mode'),
            capitals: document.getElementById('capitals-mode'),
            landmarks: document.getElementById('landmarks-mode')
        },
        levelButtons: {
            easy: document.getElementById('easy-level'),
            medium: document.getElementById('medium-level'),
            hard: document.getElementById('hard-level')
        },
        gameTypeButtons: {
            timer: document.getElementById('timer-mode'),
            lives: document.getElementById('lives-mode')
        },
        startGameBtn: document.getElementById('start-game'),
        playAgainBtn: document.getElementById('play-again'),
        scoreDisplay: document.getElementById('score'),
        timerDisplay: document.getElementById('timer'),
        timeLeftDisplay: document.getElementById('time-left'),
        livesDisplay: document.getElementById('lives'),
        livesLeftDisplay: document.getElementById('lives-left'),
        question: document.getElementById('question'),
        answerInput: document.getElementById('answer-input'),
        submitAnswerBtn: document.getElementById('submit-answer'),
        autocompleteContainer: document.getElementById('autocomplete-container'),
        multipleChoiceContainer: document.getElementById('multiple-choice-container'),
        optionsContainer: document.getElementById('options-container'),
        feedbackContainer: document.getElementById('feedback-container'),
        answerFeedback: document.getElementById('answer-feedback'),
        locationFact: document.getElementById('location-fact'),
        nextQuestionBtn: document.getElementById('next-question'),
        finalScore: document.getElementById('final-score'),
        accuracy: document.getElementById('accuracy'),
        locationsVisited: document.getElementById('locations-visited'),
        textInputContainer: document.getElementById('text-input-container')
    };

    console.log("✅ Start Game button:", elements.startGameBtn);
    console.log("✅ Submit button:", elements.submitAnswerBtn);

    return elements;
}

// Initialize the game
function initGame() {
    console.log("🚀 Initializing game...");

    initElements();

    if (!elements.submitAnswerBtn || !elements.startGameBtn) {
        console.error("❌ Critical elements missing. DOM may not be ready.");
        setTimeout(initGame, 100);
        return;
    }

    setupEventListeners();

    // Defaults
    selectButton(elements.modeButtons.countries, 'mode-btn');
    selectButton(elements.levelButtons.hard, 'level-btn');
    selectButton(elements.gameTypeButtons.timer, 'type-btn');

    gameState.difficulty = 'hard';

    console.log("✅ Game initialized successfully");
}

// Setup all event listeners
function setupEventListeners() {
    // Mode selection
    for (const mode in elements.modeButtons) {
        if (elements.modeButtons[mode]) {
            elements.modeButtons[mode].addEventListener('click', () => {
                if (!elements.modeButtons[mode].disabled) {
                    selectButton(elements.modeButtons[mode], 'mode-btn');
                    gameState.mode = mode;
                }
            });
        }
    }

    // Difficulty selection
    for (const level in elements.levelButtons) {
        if (elements.levelButtons[level]) {
            elements.levelButtons[level].addEventListener('click', () => {
                selectButton(elements.levelButtons[level], 'level-btn');
                gameState.difficulty = level;
            });
        }
    }

    // Game type
    for (const type in elements.gameTypeButtons) {
        if (elements.gameTypeButtons[type]) {
            elements.gameTypeButtons[type].addEventListener('click', () => {
                selectButton(elements.gameTypeButtons[type], 'type-btn');
                gameState.gameType = type;
            });
        }
    }

    // Start game
    elements.startGameBtn.addEventListener('click', () => {
        console.log("▶️ Start Game button clicked");
        startGame();
    });

    // Submit answer
    if (elements.submitAnswerBtn) {
        elements.submitAnswerBtn.addEventListener('click', () => {
            console.log("📝 Submit button clicked");
            checkAnswer();
        });
    }

    // Enter key
    elements.answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkAnswer();
    });

    // Autocomplete
    elements.answerInput.addEventListener('input', showAutocomplete);

    // Next question
    elements.nextQuestionBtn.addEventListener('click', nextQuestion);

    // Play again
    elements.playAgainBtn.addEventListener('click', resetGame);
}

// Helper: select one button, deselect others
function selectButton(button, className) {
    const buttons = document.getElementsByClassName(className);
    for (let i = 0; i < buttons.length; i++) buttons[i].classList.remove('selected');
    button.classList.add('selected');
}

/* ------------------------
   GAMEPLAY FUNCTIONS
------------------------ */

function startGame() {
    console.log("🎮 Starting game...");

    elements.screens.start.classList.add('hidden');
    elements.screens.gameplay.classList.remove('hidden');

    gameState.score = 0;
    gameState.lives = 3;
    gameState.timeLeft = 60;
    gameState.correctAnswers = 0;
    gameState.totalQuestions = 0;

    elements.scoreDisplay.textContent = gameState.score;

    if (gameState.gameType === 'timer') {
        elements.timerDisplay.classList.remove('hidden');
        elements.livesDisplay.classList.add('hidden');
        startTimer();
    } else {
        elements.timerDisplay.classList.add('hidden');
        elements.livesDisplay.classList.remove('hidden');
        elements.livesLeftDisplay.textContent = gameState.lives;
    }

    initMap();
    setQuestionText();
    generateRandomLocation();
}

function initMap() {
    if (gameState.map) gameState.map.remove();
    gameState.map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(gameState.map);

    console.log(`🗺️ ${gameState.difficulty} mode map loaded`);
}

function setQuestionText() {
    switch (gameState.mode) {
        case 'countries': elements.question.textContent = 'Which country is this?'; break;
        case 'capitals': elements.question.textContent = 'Which capital city is this?'; break;
        case 'landmarks': elements.question.textContent = 'Which landmark is this?'; break;
    }
    const difficultyName = gameState.difficulty.charAt(0).toUpperCase() + gameState.difficulty.slice(1);
    elements.question.textContent += ` (${difficultyName} Mode)`;
}

function generateRandomLocation() {
    let data;
    let randomItem;

    switch (gameState.mode) {
        case 'countries':
            data = countryData[gameState.difficulty];
            randomItem = data[Math.floor(Math.random() * data.length)];
            gameState.currentLocation = randomItem;
            let lat = (randomItem.bounds[0][0] + randomItem.bounds[1][0]) / 2;
            let lng = (randomItem.bounds[0][1] + randomItem.bounds[1][1]) / 2;
            placeMarker([lat, lng]);
            break;

        case 'capitals':
            data = countryData[gameState.difficulty];
            randomItem = data[Math.floor(Math.random() * data.length)];
            gameState.currentLocation = {
                name: randomItem.capital,
                code: randomItem.code,
                country: randomItem.name,
                funFact: randomItem.funFact
            };
            let capitalLat = (randomItem.bounds[0][0] + randomItem.bounds[1][0]) / 2;
            let capitalLng = (randomItem.bounds[0][1] + randomItem.bounds[1][1]) / 2;
            placeMarker([capitalLat, capitalLng]);
            break;

        case 'landmarks':
            data = landmarkData;
            randomItem = data[Math.floor(Math.random() * data.length)];
            gameState.currentLocation = randomItem;
            placeMarker(randomItem.coordinates);
            break;
    }

    generateOptions();

    if (Math.random() > 0.5) {
        elements.textInputContainer.classList.remove('hidden');
        elements.multipleChoiceContainer.classList.add('hidden');
        elements.answerInput.value = '';
        elements.answerInput.focus();
    } else {
        elements.textInputContainer.classList.add('hidden');
        elements.multipleChoiceContainer.classList.remove('hidden');
        displayOptions();
    }

    elements.feedbackContainer.classList.add('hidden');
}

function placeMarker(coordinates) {
    if (gameState.marker) {
        gameState.map.removeLayer(gameState.marker);
    }
    gameState.marker = L.marker(coordinates).addTo(gameState.map);
    gameState.map.setView(coordinates, 5);
}

function generateOptions() {
    const correctAnswer = gameState.currentLocation.name;
    let allOptions = [];

    switch (gameState.mode) {
        case 'countries': allOptions = allCountryNames; break;
        case 'capitals': allOptions = countryData[gameState.difficulty].map(c => c.capital); break;
        case 'landmarks': allOptions = landmarkData.map(l => l.name); break;
    }

    const otherOptions = allOptions.filter(option => option !== correctAnswer);
    const shuffledOptions = otherOptions.sort(() => 0.5 - Math.random()).slice(0, 3);
    gameState.options = [...shuffledOptions, correctAnswer].sort(() => 0.5 - Math.random());
}

function displayOptions() {
    elements.optionsContainer.innerHTML = '';
    gameState.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => {
            checkMultipleChoiceAnswer(option);
        });
        elements.optionsContainer.appendChild(button);
    });
}

function showAutocomplete() {
    const input = elements.answerInput.value.toLowerCase();
    if (input.length < 2) {
        elements.autocompleteContainer.classList.add('hidden');
        return;
    }
    let data;
    switch (gameState.mode) {
        case 'countries': data = allCountryNames; break;
        case 'capitals': data = countryData[gameState.difficulty].map(c => c.capital); break;
        case 'landmarks': data = landmarkData.map(l => l.name); break;
    }
    const matches = data.filter(item => item.toLowerCase().includes(input));
    if (matches.length > 0) {
        elements.autocompleteContainer.innerHTML = '';
        elements.autocompleteContainer.classList.remove('hidden');
        matches.forEach(match => {
            const item = document.createElement('div');
            item.textContent = match;
            item.classList.add('autocomplete-item');
            item.addEventListener('click', () => {
                elements.answerInput.value = match;
                elements.autocompleteContainer.classList.add('hidden');
            });
            elements.autocompleteContainer.appendChild(item);
        });
    } else {
        elements.autocompleteContainer.classList.add('hidden');
    }
}

function checkAnswer() {
    console.log("checkAnswer called");
    if (!elements.answerInput.value.trim()) {
        alert("Please enter an answer before submitting.");
        return;
    }
    const userAnswer = elements.answerInput.value.trim();
    const correctAnswer = gameState.currentLocation.name;
    const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
    processAnswer(isCorrect, userAnswer, correctAnswer);
}

function checkMultipleChoiceAnswer(selectedOption) {
    const correctAnswer = gameState.currentLocation.name;
    const isCorrect = selectedOption === correctAnswer;
    const optionButtons = elements.optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        if (button.textContent === selectedOption) {
            button.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (button.textContent === correctAnswer && !isCorrect) {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    processAnswer(isCorrect, selectedOption, correctAnswer);
}

function processAnswer(isCorrect, userAnswer, correctAnswer) {
    gameState.totalQuestions++;
    if (isCorrect) {
        gameState.correctAnswers++;
        gameState.score += 10;
        elements.scoreDisplay.textContent = gameState.score;
        elements.answerFeedback.textContent = `Correct! ${correctAnswer} is the right answer.`;
        elements.answerFeedback.style.color = '#2ecc71';
    } else {
        gameState.score = Math.max(0, gameState.score - 5);
        elements.scoreDisplay.textContent = gameState.score;
        elements.answerFeedback.textContent = `Wrong! The correct answer is ${correctAnswer}.`;
        elements.answerFeedback.style.color = '#e74c3c';
        if (gameState.gameType === 'lives') {
            gameState.lives--;
            elements.livesLeftDisplay.textContent = gameState.lives;
            if (gameState.lives <= 0) {
                setTimeout(endGame, 2000);
                return;
            }
        }
    }
    elements.locationFact.textContent = gameState.currentLocation.funFact;
    elements.feedbackContainer.classList.remove('hidden');
}

function nextQuestion() {
    console.log("➡️ Next question");
    generateRandomLocation();
}

function startTimer() {
    if (gameState.timer) clearInterval(gameState.timer);
    elements.timeLeftDisplay.textContent = gameState.timeLeft;
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        elements.timeLeftDisplay.textContent = gameState.timeLeft;
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    if (gameState.timer) clearInterval(gameState.timer);
    elements.screens.gameplay.classList.add('hidden');
    elements.screens.end.classList.remove('hidden');
    elements.finalScore.textContent = gameState.score;
    const accuracyValue = gameState.totalQuestions > 0 
        ? Math.round((gameState.correctAnswers / gameState.totalQuestions) * 100) 
        : 0;
    elements.accuracy.textContent = accuracyValue;
    elements.locationsVisited.textContent = gameState.totalQuestions;
    const playerName = prompt("Enter your name for the leaderboard:");
    if (playerName) {
        fetch('backend/scores.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: playerName, score: gameState.score })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) fetchLeaderboard();
        });
    } else {
        fetchLeaderboard();
    }
}

function fetchLeaderboard() {
    fetch('backend/scores.php')
        .then(res => res.json())
        .then(data => {
            if (data.success && Array.isArray(data.scores)) {
                displayLeaderboard(data.scores);
            }
        });
}

function displayLeaderboard(scores) {
    scores.sort((a, b) => b.score - a.score);
    let highest = scores.length > 0 ? scores[0] : null;
    let html = '';
    if (highest) {
        html += `<div id="highest-score-block" style="margin-bottom:20px;padding:15px;background:#f8f8ff;border-radius:10px;border:1px solid #d1d1e0;box-shadow:0 2px 8px rgba(78,84,200,0.08);">
            <h2 style="color:#4e54c8;margin-bottom:10px;">Highest Score</h2>
            <p style="font-size:1.3rem;"><strong>${highest.name}</strong>: <span style="color:#27ae60;">${highest.score}</span></p>
        </div>`;
    }
    html += '<h2>Leaderboard</h2><ol>';
    scores.slice(0, 10).forEach(s => {
        html += `<li><strong>${s.name}</strong>: ${s.score}</li>`;
    });
    html += '</ol>';
    let resultsContainer = document.querySelector('.results-container');
    let leaderboardDiv = document.getElementById('leaderboard');
    if (!leaderboardDiv) {
        leaderboardDiv = document.createElement('div');
        leaderboardDiv.id = 'leaderboard';
        resultsContainer.appendChild(leaderboardDiv);
    }
    leaderboardDiv.innerHTML = html;
}

function resetGame() {
    elements.screens.end.classList.add('hidden');
    elements.screens.start.classList.remove('hidden');
    gameState = {
        mode: gameState.mode,
        difficulty: gameState.difficulty,
        gameType: gameState.gameType,
        score: 0,
        lives: 3,
        timeLeft: 60,
        currentLocation: null,
        correctAnswers: 0,
        totalQuestions: 0,
        timer: null,
        options: [],
        map: gameState.map,
        marker: null,
        highlightLayer: null
    };
}

/* ------------------------
   DOM READY
------------------------ */
document.addEventListener('DOMContentLoaded', () => {
    console.log("🌍 DOM ready - initializing game.js");
    console.log("Data check:", typeof countryData, typeof capitalCitiesData, typeof landmarkData);
    if (typeof countryData === 'undefined') {
        console.error("❌ countryData missing!");
        return;
    }
    initGame();
});
// yess