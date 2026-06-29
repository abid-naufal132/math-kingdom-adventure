/**
 * Math Safari Adventure: Kerajaan Nombor
 * Modular Game Logic for PPKI Students
 */

const gameState = {
    currentScreen: 'splash-screen',
    selectedLevel: 1,
    unlockedLevels: [1],
    currentScore: 0,
    totalStars: 0,
    questionsPerLevel: 5,
    currentQuestionIndex: 0,
    currentQuestion: null,
    levelConfig: {
        1: { max: 10, operations: ['+'], name: 'Hutan Tambah (0-10)' },
        2: { max: 15, operations: ['+', '-'], name: 'Lembah Tolak (0-15)' },
        3: { max: 20, operations: ['+', '-'], name: 'Gunung Nombor (0-20)' }
    }
};

// --- DOM Elements ---
const screens = document.querySelectorAll('.screen');
const overlayCorrect = document.getElementById('overlay-correct');
const overlayWrong = document.getElementById('overlay-wrong');

// --- Navigation ---
function showScreen(screenId) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    gameState.currentScreen = screenId;

    if (screenId === 'map-screen') {
        renderMap();
        document.getElementById('map-stars').innerText = `⭐ ${gameState.totalStars}`;
    }
}

// --- Question Generator ---
const QuestionGenerator = {
    generate(level) {
        const config = gameState.levelConfig[level];
        const operation = config.operations[Math.floor(Math.random() * config.operations.length)];
        let a, b, answer;

        if (operation === '+') {
            answer = Math.floor(Math.random() * (config.max + 1));
            a = Math.floor(Math.random() * (answer + 1));
            b = answer - a;
        } else {
            a = Math.floor(Math.random() * (config.max + 1));
            b = Math.floor(Math.random() * (a + 1));
            answer = a - b;
        }

        const options = this.generateOptions(answer, config.max);

        return {
            text: `${a} ${operation} ${b} = ?`,
            answer: answer,
            options: options
        };
    },

    generateOptions(correct, max) {
        const options = new Set();
        options.add(correct);

        while (options.size < 4) {
            let offset = Math.floor(Math.random() * 5) + 1;
            let opt = Math.random() > 0.5 ? correct + offset : correct - offset;
            if (opt >= 0 && opt <= max + 5) {
                options.add(opt);
            }
        }

        return Array.from(options).sort(() => Math.random() - 0.5);
    }
};

// --- Game Logic ---
function startLevel(level) {
    gameState.selectedLevel = level;
    gameState.currentQuestionIndex = 0;
    gameState.currentScore = 0;
    updateGameUI();
    nextQuestion();
    showScreen('game-screen');
}

function nextQuestion() {
    if (gameState.currentQuestionIndex >= gameState.questionsPerLevel) {
        endGame();
        return;
    }

    gameState.currentQuestion = QuestionGenerator.generate(gameState.selectedLevel);
    renderQuestion();
    updateProgressBar();
}

function renderQuestion() {
    document.getElementById('question-text').innerText = gameState.currentQuestion.text;
    document.getElementById('level-tag').innerText = `Tahap ${gameState.selectedLevel}`;

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    gameState.currentQuestion.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt);
        container.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const isCorrect = selected === gameState.currentQuestion.answer;

    if (isCorrect) {
        gameState.currentScore += 10;
        showFeedback(true);
    } else {
        showFeedback(false);
    }
}

function showFeedback(isCorrect) {
    const overlay = isCorrect ? overlayCorrect : overlayWrong;
    overlay.classList.remove('hidden');

    setTimeout(() => {
        overlay.classList.add('hidden');
        if (isCorrect) {
            gameState.currentQuestionIndex++;
            updateGameUI();
            nextQuestion();
        }
    }, 1200);
}

function updateGameUI() {
    document.getElementById('game-score').innerText = `⭐ ${gameState.currentScore}`;
}

function updateProgressBar() {
    const progress = (gameState.currentQuestionIndex / gameState.questionsPerLevel) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function endGame() {
    const stars = Math.ceil((gameState.currentScore / (gameState.questionsPerLevel * 10)) * 3);
    gameState.totalStars += stars;

    document.getElementById('result-title').innerText = stars >= 2 ? "Hebat!" : "Cuba Lagi!";
    document.getElementById('result-stars-display').innerText = "⭐".repeat(stars) + "🌑".repeat(3 - stars);
    document.getElementById('final-score').innerText = gameState.currentScore;

    // Unlock next level if passed with at least 1 star
    if (stars >= 1 && gameState.selectedLevel < 3) {
        const nextLevel = gameState.selectedLevel + 1;
        if (!gameState.unlockedLevels.includes(nextLevel)) {
            gameState.unlockedLevels.push(nextLevel);
            updateLevelSelectionUI();
        }
    }

    showScreen('result-screen');
}

// --- Map Management ---
function renderMap() {
    const path = document.getElementById('safari-path');
    path.innerHTML = '';

    // Create 5 nodes for the map
    for (let i = 1; i <= 5; i++) {
        const node = document.createElement('div');
        node.className = 'map-node';
        node.innerText = i;

        if (i === 1) {
             node.classList.add('active');
             const avatar = document.createElement('span');
             avatar.className = 'avatar-marker';
             avatar.innerText = '🦁';
             node.appendChild(avatar);
        }

        path.appendChild(node);
    }
}

function updateLevelSelectionUI() {
    document.querySelectorAll('.level-card').forEach(card => {
        const lv = parseInt(card.dataset.level);
        if (gameState.unlockedLevels.includes(lv)) {
            card.classList.remove('locked');
            card.disabled = false;
            const lockIcon = card.querySelector('.lock-icon');
            if (lockIcon) lockIcon.remove();
        }
    });
}

// --- Event Listeners ---
document.getElementById('start-game-btn').onclick = () => showScreen('level-selection-screen');

document.querySelectorAll('.back-btn').forEach(btn => {
    btn.onclick = () => {
        if (gameState.currentScreen === 'level-selection-screen') showScreen('splash-screen');
        if (gameState.currentScreen === 'map-screen') showScreen('level-selection-screen');
    };
});

document.querySelectorAll('.level-card').forEach(card => {
    card.onclick = () => {
        const lv = parseInt(card.dataset.level);
        if (gameState.unlockedLevels.includes(lv)) {
            gameState.selectedLevel = lv;
            showScreen('map-screen');
        }
    };
});

document.getElementById('safari-path').onclick = (e) => {
    if (e.target.classList.contains('map-node') || e.target.closest('.map-node')) {
        startLevel(gameState.selectedLevel);
    }
};

document.getElementById('exit-game-btn').onclick = () => showScreen('level-selection-screen');
document.getElementById('retry-btn').onclick = () => startLevel(gameState.selectedLevel);
document.getElementById('map-return-btn').onclick = () => showScreen('map-screen');

// Initialize
window.onload = () => {
    updateLevelSelectionUI();
};
