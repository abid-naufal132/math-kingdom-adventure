/**
 * Math Safari Adventure: Kerajaan Nombor
 * Production-ready Educational Game Logic
 */

const translations = {
    ms: {
        choose_avatar: "Pilih Hero",
        select_level: "Pilih Tahap",
        lvl1_title: "Hutan Tambah",
        lvl1_desc: "Tambah 0 - 10",
        lvl2_title: "Lembah Tolak",
        lvl2_desc: "Tolak 0 - 15",
        lvl3_title: "Gunung Nombor",
        lvl3_desc: "Tambah & Tolak 0 - 20",
        play: "MAIN",
        well_done: "Hebat!",
        try_again: "Cuba Lagi!",
        score: "Skor",
        continue: "TERUSKAN",
        retry: "CUBA LAGI",
        correct: "BETUL!",
        wrong: "SALAH!",
        level_label: "TAHAP",
        lang_btn: "BM"
    },
    en: {
        choose_avatar: "Choose Hero",
        select_level: "Select Level",
        lvl1_title: "Addition Forest",
        lvl1_desc: "Addition 0 - 10",
        lvl2_title: "Subtraction Valley",
        lvl2_desc: "Subtraction 0 - 15",
        lvl3_title: "Number Mountain",
        lvl3_desc: "Mix 0 - 20",
        play: "PLAY",
        well_done: "Well Done!",
        try_again: "Try Again!",
        score: "Score",
        continue: "CONTINUE",
        retry: "RETRY",
        correct: "CORRECT!",
        wrong: "WRONG!",
        level_label: "LEVEL",
        lang_btn: "EN"
    }
};

const LanguageManager = {
    current: 'ms',
    set(lang) {
        this.current = lang;
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });
        document.getElementById('lang-toggle').innerText = translations[lang].lang_btn;
    },
    toggle() {
        this.set(this.current === 'ms' ? 'en' : 'ms');
    },
    get(key) {
        return translations[this.current][key] || key;
    }
};

const AudioManager = {
    enabled: true,
    synth: window.speechSynthesis,

    toggle() {
        this.enabled = !this.enabled;
        const icon = document.getElementById('sound-icon');
        if (this.enabled) {
            icon.innerHTML = '<path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.01,19.86 21,16.28 21,12C21,7.72 18.01,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />';
        } else {
            icon.innerHTML = '<path d="M12,4L9.91,6.09L12,8.18V4M14,9.25C15.19,9.89 16,11.13 16,12.5C16,13.25 15.77,13.94 15.39,14.5L16.84,15.95C17.58,14.97 18,13.79 18,12.5C18,8.83 15.14,5.82 11.5,5.29V7.35C12.57,7.76 13.5,8.41 14,9.25M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.52C15.58,18.04 14.83,18.45 14,18.7V20.76C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73L4.27,3M12,1.5V1L10.5,2.5L12,4V1.5Z" />';
        }
    },

    playSFX(type) {
        if (!this.enabled) return;
        const frequencies = {
            correct: [523.25, 659.25, 783.99], // C5, E5, G5
            wrong: [220.00, 196.00], // A3, G3
            click: [440.00], // A4
            complete: [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6
        };

        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        frequencies[type].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
            gain.gain.setValueAtTime(0.1, ctx.currentTime + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(ctx.currentTime + i * 0.1);
            osc.stop(ctx.currentTime + i * 0.1 + 0.3);
        });
    },

    speak(text) {
        if (!this.enabled || !this.synth) return;
        this.synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = LanguageManager.current === 'ms' ? 'ms-MY' : 'en-US';
        this.synth.speak(utterance);
    }
};

const gameState = {
    screens: ['splash-screen', 'avatar-screen', 'level-selection-screen', 'map-screen', 'game-screen', 'result-screen'],
    currentScreen: 'splash-screen',
    selectedAvatar: 'lion',
    selectedLevel: 1,
    unlockedLevels: [1],
    stars: { 1: 0, 2: 0, 3: 0 },
    totalStars: 0,

    currentQuestionIndex: 0,
    questionsPerLevel: 5,
    score: 0,

    levelConfig: {
        1: { max: 10, ops: ['+'] },
        2: { max: 15, ops: ['-'] },
        3: { max: 20, ops: ['+', '-'] }
    },

    load() {
        const saved = localStorage.getItem('mathSafariData');
        if (saved) {
            const data = JSON.parse(saved);
            this.unlockedLevels = data.unlockedLevels || [1];
            this.stars = data.stars || { 1: 0, 2: 0, 3: 0 };
            this.totalStars = data.totalStars || 0;
            this.selectedAvatar = data.selectedAvatar || 'lion';
        }
    },

    save() {
        const data = {
            unlockedLevels: Array.from(new Set(this.unlockedLevels)),
            stars: this.stars,
            totalStars: this.totalStars,
            selectedAvatar: this.selectedAvatar
        };
        localStorage.setItem('mathSafariData', JSON.stringify(data));
    },

    updateStars(level, count) {
        if (count > this.stars[level]) {
            this.stars[level] = count;
            this.calculateTotalStars();
            this.save();
        }
    },

    calculateTotalStars() {
        this.totalStars = Object.values(this.stars).reduce((a, b) => a + b, 0);
    }
};

const QuestionGenerator = {
    generate(level) {
        const config = gameState.levelConfig[level];
        const op = config.ops[Math.floor(Math.random() * config.ops.length)];
        let a, b, answer;

        if (op === '+') {
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
            a, b, op, answer, options,
            text: `${a} ${op} ${b}`
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

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    gameState.currentScreen = screenId;
}

// --- Gameplay Logic ---
let currentQuestion = null;

function startLevel() {
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    updateGameUI();
    nextQuestion();
    showScreen('game-screen');
}

function nextQuestion() {
    if (gameState.currentQuestionIndex >= gameState.questionsPerLevel) {
        endLevel();
        return;
    }

    currentQuestion = QuestionGenerator.generate(gameState.selectedLevel);
    renderQuestion();
    updateProgressBar();
}

function renderQuestion() {
    const qText = currentQuestion.text;
    document.getElementById('question-text').innerText = qText;
    document.getElementById('level-label').innerText = `${LanguageManager.get('level_label')} ${gameState.selectedLevel}`;

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    currentQuestion.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt);
        container.appendChild(btn);
    });

    // TTS for question
    const opWord = currentQuestion.op === '+' ? (LanguageManager.current === 'ms' ? 'tambah' : 'plus') : (LanguageManager.current === 'ms' ? 'tolak' : 'minus');
    AudioManager.speak(`${currentQuestion.a} ${opWord} ${currentQuestion.b}`);
}

function checkAnswer(selected) {
    const isCorrect = selected === currentQuestion.answer;
    const overlay = document.getElementById('feedback-overlay');
    const icon = document.getElementById('feedback-icon');
    const text = document.getElementById('feedback-text');

    if (isCorrect) {
        gameState.score += 10;
        AudioManager.playSFX('correct');
        icon.innerText = '✅';
        text.innerText = LanguageManager.get('correct');
        AudioManager.speak(LanguageManager.get('correct'));
    } else {
        AudioManager.playSFX('wrong');
        icon.innerText = '❌';
        text.innerText = LanguageManager.get('wrong');
        AudioManager.speak(LanguageManager.get('wrong'));
    }

    overlay.classList.add('active');

    setTimeout(() => {
        overlay.classList.remove('active');
        if (isCorrect) {
            gameState.currentQuestionIndex++;
            updateGameUI();
            nextQuestion();
        }
    }, 1500);
}

function updateGameUI() {
    document.getElementById('game-score-count').innerText = gameState.score;
}

function updateProgressBar() {
    const progress = (gameState.currentQuestionIndex / gameState.questionsPerLevel) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function endLevel() {
    const starsEarned = Math.ceil((gameState.score / (gameState.questionsPerLevel * 10)) * 5); // 5 stars max for the map steps
    const resultStars = Math.ceil((gameState.score / (gameState.questionsPerLevel * 10)) * 3); // 3 stars UI

    // Level progression
    if (resultStars >= 1) {
        if (gameState.selectedLevel < 3) {
            gameState.unlockedLevels.push(gameState.selectedLevel + 1);
        }
        gameState.updateStars(gameState.selectedLevel, starsEarned);
    }

    document.getElementById('result-title').innerText = resultStars >= 2 ? LanguageManager.get('well_done') : LanguageManager.get('try_again');
    document.getElementById('final-score').innerText = gameState.score;

    const starContainer = document.getElementById('result-stars');
    starContainer.innerHTML = '';
    for(let i=0; i<3; i++) {
        const star = document.createElement('span');
        star.innerHTML = '<svg viewBox="0 0 24 24" style="width: 60px; fill: ' + (i < resultStars ? '#f1c40f' : '#dfe6e9') + ';"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>';
        starContainer.appendChild(star);
    }

    AudioManager.playSFX('complete');
    updateLevelSelectionUI();
    showScreen('result-screen');
}

// --- Event Listeners & UI Binding ---
function bindEvents() {
    // Navigation
    document.getElementById('start-game-btn').onclick = () => {
        AudioManager.playSFX('click');
        showScreen('avatar-screen');
    };

    document.querySelectorAll('.back-to-splash').forEach(btn => {
        btn.onclick = () => {
            AudioManager.playSFX('click');
            showScreen('splash-screen');
        };
    });

    document.querySelectorAll('.back-to-avatar').forEach(btn => {
        btn.onclick = () => {
            AudioManager.playSFX('click');
            showScreen('avatar-screen');
        };
    });

    document.querySelectorAll('.back-to-levels').forEach(btn => {
        btn.onclick = () => {
            AudioManager.playSFX('click');
            showScreen('level-selection-screen');
        };
    });

    // Avatar Selection
    document.querySelectorAll('.avatar-choice').forEach(btn => {
        btn.onclick = () => {
            gameState.selectedAvatar = btn.dataset.avatar;
            gameState.save();
            AudioManager.playSFX('click');
            updateAvatarPreviews();
            showScreen('level-selection-screen');
        };
    });

    // Level Selection
    document.querySelectorAll('.level-card').forEach(card => {
        card.onclick = () => {
            const lv = parseInt(card.dataset.level);
            if (gameState.unlockedLevels.includes(lv)) {
                gameState.selectedLevel = lv;
                AudioManager.playSFX('click');
                renderMap();
                showScreen('map-screen');
            }
        };
    });

    // Settings
    document.getElementById('lang-toggle').onclick = () => {
        AudioManager.playSFX('click');
        LanguageManager.toggle();
    };

    document.getElementById('sound-toggle').onclick = () => {
        AudioManager.toggle();
        AudioManager.playSFX('click');
    };

    // Game Actions
    document.getElementById('play-level-btn').onclick = () => {
        AudioManager.playSFX('click');
        startLevel();
    };

    document.getElementById('exit-game-btn').onclick = () => {
        AudioManager.playSFX('click');
        showScreen('level-selection-screen');
    };

    document.getElementById('retry-btn').onclick = () => {
        AudioManager.playSFX('click');
        startLevel();
    };

    document.getElementById('map-return-btn').onclick = () => {
        AudioManager.playSFX('click');
        showScreen('map-screen');
    };
}

function updateAvatarPreviews() {
    const avatars = {
        lion: '🦁',
        monkey: '🐒',
        zebra: '🦓',
        elephant: '🐘'
    };
    const emoji = avatars[gameState.selectedAvatar] || '🦁';
    document.getElementById('main-avatar-preview').innerHTML = `<div style="font-size: 8rem;">${emoji}</div>`;
}

function updateLevelSelectionUI() {
    document.querySelectorAll('.level-card').forEach(card => {
        const lv = parseInt(card.dataset.level);
        if (gameState.unlockedLevels.includes(lv)) {
            card.classList.remove('locked');
            const lock = card.querySelector('.lock-status');
            if (lock) lock.style.display = 'none';
        } else {
            card.classList.add('locked');
            const lock = card.querySelector('.lock-status');
            if (lock) lock.style.display = 'block';
        }
    });
}

function renderMap() {
    const container = document.getElementById('safari-path');
    container.innerHTML = '';

    // Each level has 5 steps
    const totalSteps = 5;
    const currentStep = gameState.stars[gameState.selectedLevel] || 0; // Simplified step logic

    for (let i = 1; i <= totalSteps; i++) {
        const node = document.createElement('div');
        node.className = 'node';
        if (i <= currentStep) node.classList.add('completed');
        if (i === currentStep + 1) node.classList.add('current');
        node.innerText = i;

        if (i === currentStep + 1) {
            const avatar = document.createElement('div');
            avatar.className = 'map-avatar';
            const avatars = { lion: '🦁', monkey: '🐒', zebra: '🦓', elephant: '🐘' };
            avatar.innerHTML = `<div style="font-size: 3rem; position: absolute; bottom: 0;">${avatars[gameState.selectedAvatar]}</div>`;
            node.appendChild(avatar);
        }

        container.appendChild(node);
    }

    document.getElementById('map-stars-count').innerText = gameState.totalStars;

    const playBtn = document.getElementById('play-level-btn');
    if (currentStep >= totalSteps) {
        playBtn.innerText = LanguageManager.get('well_done');
        playBtn.disabled = true;
    } else {
        playBtn.innerText = LanguageManager.get('play');
        playBtn.disabled = false;
    }
}

// Initialization
window.onload = () => {
    gameState.load();
    LanguageManager.set('ms');
    updateAvatarPreviews();
    updateLevelSelectionUI();
    bindEvents();
};
