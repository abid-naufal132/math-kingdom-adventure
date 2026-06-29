/**
 * Math Safari Adventure: Kerajaan Nombor
 * Production-ready Educational Game Logic
 */

const SVGS = {
    lion: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="70" height="70" rx="20" fill="#f39c12"/><path d="M10 10 H90 V40 H10 Z" fill="#e67e22" rx="10"/><circle cx="35" cy="45" r="5" fill="#2d3436"/><circle cx="65" cy="45" r="5" fill="#2d3436"/><rect x="40" y="60" width="20" height="10" rx="5" fill="#2d3436"/></svg>`,
    monkey: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="60" height="60" rx="25" fill="#d35400"/><circle cx="20" cy="50" r="12" fill="#d35400"/><circle cx="80" cy="50" r="12" fill="#d35400"/><rect x="30" y="35" width="40" height="40" rx="15" fill="#edbb99"/><circle cx="40" cy="45" r="4" fill="#2d3436"/><circle cx="60" cy="45" r="4" fill="#2d3436"/><path d="M40 65 Q50 75 60 65" stroke="#2d3436" stroke-width="3" stroke-linecap="round"/></svg>`,
    zebra: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="60" height="70" rx="15" fill="#ffffff" stroke="#2d3436" stroke-width="2"/><path d="M20 30 H50" stroke="#2d3436" stroke-width="6"/><path d="M50 45 H80" stroke="#2d3436" stroke-width="6"/><path d="M20 60 H50" stroke="#2d3436" stroke-width="6"/><path d="M50 75 H80" stroke="#2d3436" stroke-width="6"/><circle cx="35" cy="35" r="4" fill="#2d3436"/><circle cx="65" cy="35" r="4" fill="#2d3436"/></svg>`,
    elephant: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="25" width="70" height="60" rx="20" fill="#95a5a6"/><circle cx="10" cy="45" r="15" fill="#7f8c8d"/><circle cx="90" cy="45" r="15" fill="#7f8c8d"/><rect x="42" y="55" width="16" height="35" rx="8" fill="#7f8c8d"/><circle cx="35" cy="45" r="5" fill="#2d3436"/><circle cx="65" cy="45" r="5" fill="#2d3436"/></svg>`,
    giraffe: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="10" width="40" height="80" rx="15" fill="#f1c40f"/><circle cx="40" cy="30" r="4" fill="#2d3436"/><circle cx="60" cy="30" r="4" fill="#2d3436"/><rect x="35" y="45" width="10" height="10" rx="3" fill="#d35400"/><rect x="55" y="60" width="12" height="12" rx="4" fill="#d35400"/><rect x="40" y="75" width="8" height="8" rx="2" fill="#d35400"/></svg>`,
    parrot: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="20" width="50" height="60" rx="25" fill="#e74c3c"/><rect x="40" y="45" width="20" height="25" rx="10" fill="#f1c40f"/><circle cx="40" cy="35" r="4" fill="#2d3436"/><circle cx="60" cy="35" r="4" fill="#2d3436"/><path d="M75 40 L85 60 L75 80 Z" fill="#3498db"/></svg>`,
    turtle: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="60" height="50" rx="25" fill="#27ae60"/><rect x="35" y="25" width="30" height="20" rx="10" fill="#2ecc71"/><circle cx="42" cy="32" r="3" fill="#2d3436"/><circle cx="58" cy="32" r="3" fill="#2d3436"/><path d="M35 50 H65 M40 60 H60 M45 70 H55" stroke="#1e8449" stroke-width="4" stroke-linecap="round"/></svg>`,
    rhino: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="25" width="70" height="60" rx="20" fill="#bdc3c7"/><path d="M50 45 L50 25 L60 45 Z" fill="#ecf0f1"/><circle cx="35" cy="50" r="5" fill="#2d3436"/><circle cx="65" cy="50" r="5" fill="#2d3436"/></svg>`,
    hippo: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="25" width="70" height="60" rx="30" fill="#9b59b6"/><rect x="30" y="55" width="40" height="25" rx="10" fill="#8e44ad"/><circle cx="35" cy="45" r="5" fill="#2d3436"/><circle cx="65" cy="45" r="5" fill="#2d3436"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="#00b894" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    cross: `<svg viewBox="0 0 24 24" fill="none" stroke="#d63031" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="#f1c40f" stroke="#f39c12" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
};

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
        lang_btn: "BM",
        accessibility: "Aksesibilitas",
        high_contrast: "Kontras Tinggi",
        dyslexia_font: "Font Disleksia",
        text_size: "Saiz Teks",
        voice_toggle: "Suara",
        dashboard_title: "Dashboard Guru",
        star_hint: "Petunjuk Bintang: ",
        buy_hint: "Guna 10 Bintang",
        not_enough_stars: "Bintang tidak cukup!",
        total_questions: "Jumlah Soalan",
        accuracy: "Ketepatan",
        time_spent: "Masa Digunakan",
        reset_data: "RESET DATA",
        stats: "STATISTIK",
        off: "TUTUP",
        on: "BUKA",
        loading: "Memuat..."
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
        lang_btn: "EN",
        accessibility: "Accessibility",
        high_contrast: "High Contrast",
        dyslexia_font: "Dyslexia Font",
        text_size: "Text Size",
        voice_toggle: "Voice",
        dashboard_title: "Teacher Dashboard",
        star_hint: "Star Hint: ",
        buy_hint: "Use 10 Stars",
        not_enough_stars: "Not enough stars!",
        total_questions: "Total Questions",
        accuracy: "Accuracy",
        time_spent: "Time Spent",
        reset_data: "RESET DATA",
        stats: "STATS",
        off: "OFF",
        on: "ON",
        loading: "Loading..."
    }
};

const LanguageManager = {
    current: 'ms',
    init() {
        this.updateUI();
    },
    set(lang) {
        this.current = lang;
        this.updateUI();
    },
    toggle() {
        this.set(this.current === 'ms' ? 'en' : 'ms');
    },
    updateUI() {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[this.current][key]) {
                // Handle complex translations with SVGs or multiple children
                if (key === 'buy_hint') {
                    const span = el.querySelector('span') || el;
                    span.innerText = translations[this.current][key];
                } else {
                    el.innerText = translations[this.current][key];
                }
            }
        });
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) langToggle.innerText = translations[this.current].lang_btn;

        // Update star balance across all screens
        updateStarBalanceUI();

        // Update specific buttons that might not use data-key
        const dashBtn = document.getElementById('open-dashboard-btn');
        if (dashBtn) dashBtn.innerText = this.get('stats');

        const resetBtn = document.getElementById('reset-progress-btn');
        if (resetBtn) resetBtn.innerText = this.get('reset_data');

        // Refresh dynamic components if they are visible
        if (gameState.currentScreen === 'level-selection-screen') renderLevelList();
        if (gameState.currentScreen === 'game-screen' && currentQuestion) renderQuestion();
    },
    get(key) {
        return translations[this.current][key] || key;
    }
};

const SpeechManager = {
    enabled: true,
    synth: window.speechSynthesis,
    voice: null,

    init() {
        this.loadVoices();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = () => this.loadVoices();
        }
    },

    loadVoices() {
        const voices = this.synth.getVoices();
        // Prefer Malaysian Malay
        this.voice = voices.find(v => v.lang.includes('ms-MY')) ||
                     voices.find(v => v.lang.includes('id-ID')) ||
                     voices.find(v => v.lang.includes('ms')) ||
                     voices[0];
    },

    speak(text) {
        if (!this.enabled || !this.synth) return;
        this.synth.cancel();

        // Split text by numbers to speak them individually if needed for better clarity in Malay
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = gameState.accessibility.speechSpeed || 1.0;

        if (LanguageManager.current === 'ms') {
            utterance.voice = this.voice;
            utterance.lang = 'ms-MY';
        } else {
            utterance.lang = 'en-US';
        }
        this.synth.speak(utterance);
    }
};

const AudioManager = {
    enabled: true,
    volume: 0.5,

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    },

    playSFX(type) {
        if (!this.enabled) return;
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            let freq = 440;
            let duration = 0.2;
            let type_osc = 'sine';

            if (type === 'correct') { freq = 523.25; duration = 0.3; } // C5
            else if (type === 'wrong') { freq = 196.00; duration = 0.4; type_osc = 'triangle'; } // G3
            else if (type === 'click') { freq = 880; duration = 0.05; }
            else if (type === 'complete') {
                this.playSequence([523, 659, 783, 1046], 0.1);
                return;
            }

            osc.type = type_osc;
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(this.volume * 0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) { console.error("Audio error", e); }
    },

    playSequence(freqs, step) {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        freqs.forEach((f, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(f, ctx.currentTime + i * step);
            gain.gain.setValueAtTime(this.volume * 0.2, ctx.currentTime + i * step);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * step + 0.3);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(ctx.currentTime + i * step);
            osc.stop(ctx.currentTime + i * step + 0.3);
        });
    }
};

const gameState = {
    selectedAvatar: 'lion',
    selectedLevel: 1,
    unlockedLevels: [1],
    levelRatings: { 1: 0, 2: 0, 3: 0 },
    starCurrency: 0,
    streak: 0,
    animals: [],

    accessibility: {
        highContrast: false,
        dyslexiaFont: false,
        textSize: 16,
        speechSpeed: 1.0,
        reducedAnimation: false
    },

    score: 0,
    currentQuestionIndex: 0,
    questionsPerLevel: 5,
    wrongAttempts: 0,

    stats: {
        totalQuestions: 0,
        correctAnswers: 0,
        startTime: Date.now()
    },

    levelConfig: {
        1: { max: 10, ops: ['+'] },
        2: { max: 15, ops: ['-'] },
        3: { max: 20, ops: ['+', '-'] }
    },

    load() {
        const saved = localStorage.getItem('mathSafariData_v2');
        if (saved) {
            const data = JSON.parse(saved);

            // Migration for old data format
            if (data.stars && !data.levelRatings) {
                data.levelRatings = data.stars;
                delete data.stars;
            }

            // Ensure starCurrency and streak are initialized
            if (data.starCurrency === undefined) data.starCurrency = 0;
            if (data.streak === undefined) data.streak = 0;

            // Migrate animal emojis to keys if necessary
            if (data.animals) {
                const emojiMap = {
                    '🦁': 'lion', '🐒': 'monkey', '🦓': 'zebra', '🐘': 'elephant',
                    '🦒': 'giraffe', '🦜': 'parrot', '🐢': 'turtle', '🦏': 'rhino', '🦛': 'hippo'
                };
                data.animals = data.animals.map(a => emojiMap[a] || a);
            }

            Object.assign(this, data);

            // Apply accessibility settings on load
            document.body.classList.toggle('high-contrast', this.accessibility.highContrast);
            document.body.classList.toggle('dyslexia-font', this.accessibility.dyslexiaFont);
            document.documentElement.style.setProperty('--base-font-size', this.accessibility.textSize + 'px');
            SpeechManager.enabled = this.accessibility.enabled !== undefined ? this.accessibility.enabled : true; // Fallback
            AudioManager.enabled = SpeechManager.enabled;
        }
    },

    save() {
        const data = {
            unlockedLevels: this.unlockedLevels,
            levelRatings: this.levelRatings,
            starCurrency: this.starCurrency,
            selectedAvatar: this.selectedAvatar,
            animals: this.animals,
            accessibility: this.accessibility,
            stats: this.stats
        };
        localStorage.setItem('mathSafariData_v2', JSON.stringify(data));
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
        return { a, b, op, answer, options, text: `${a} ${op} ${b}` };
    },

    generateOptions(correct, max) {
        const options = new Set([correct]);
        while (options.size < 4) {
            let opt = correct + (Math.floor(Math.random() * 7) - 3);
            if (opt >= 0 && opt <= max + 5) options.add(opt);
        }
        return Array.from(options).sort(() => Math.random() - 0.5);
    }
};

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        gameState.currentScreen = screenId;
    }
}

function updateAvatarIcons() {
    document.querySelectorAll('.avatar-icon-svg').forEach(el => {
        const type = el.dataset.icon;
        if (SVGS[type]) el.innerHTML = SVGS[type];
    });

    const preview = document.getElementById('main-avatar-preview');
    if (preview && SVGS[gameState.selectedAvatar]) {
        preview.innerHTML = SVGS[gameState.selectedAvatar];
        preview.className = 'avatar-display mt-20';
        preview.style.width = '120px';
        preview.style.height = '120px';
        preview.style.margin = '0 auto';
    }
}

// Gameplay logic will be expanded in next steps
let currentQuestion = null;

function startLevel() {
    gameState.score = 0;
    gameState.currentQuestionIndex = 0;
    gameState.wrongAttempts = 0;
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
}

function renderQuestion() {
    document.getElementById('question-text').innerText = currentQuestion.text;
    document.getElementById('level-label').innerText = `${LanguageManager.get('level_label')} ${gameState.selectedLevel}`;
    document.getElementById('progress-bar').style.width = `${(gameState.currentQuestionIndex / gameState.questionsPerLevel) * 100}%`;
    // Update star balance display
    updateStarBalanceUI();
    document.getElementById('hint-box').classList.add('hidden');
    const buyHintBtn = document.getElementById('buy-hint-btn');
    if (buyHintBtn) buyHintBtn.disabled = false;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    currentQuestion.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt);
        container.appendChild(btn);
    });

    speakQuestion();
}

function speakQuestion() {
    const op = currentQuestion.op === '+' ? (LanguageManager.current === 'ms' ? 'tambah' : 'plus') : (LanguageManager.current === 'ms' ? 'tolak' : 'minus');
    SpeechManager.speak(`${currentQuestion.a} ${op} ${currentQuestion.b}`);
}

function checkAnswer(val) {
    const isCorrect = val === currentQuestion.answer;
    const overlay = document.getElementById('feedback-overlay');
    const icon = document.getElementById('feedback-icon');
    const text = document.getElementById('feedback-text');

    if (isCorrect) {
        gameState.score += 10;
        gameState.starCurrency += 2;
        gameState.streak++;

        // Streak bonus
        if (gameState.streak > 0 && gameState.streak % 3 === 0) {
            gameState.starCurrency += 5;
        }

        gameState.stats.correctAnswers++;
        AudioManager.playSFX('correct');
        icon.innerHTML = SVGS.check;
        text.innerText = LanguageManager.get('correct');
        SpeechManager.speak(LanguageManager.get('correct'));
        gameState.currentQuestionIndex++;
        gameState.wrongAttempts = 0;
        updateStarBalanceUI();
    } else {
        AudioManager.playSFX('wrong');
        icon.innerHTML = SVGS.cross;
        text.innerText = LanguageManager.get('wrong');
        SpeechManager.speak(LanguageManager.get('wrong'));
        gameState.wrongAttempts++;
        gameState.streak = 0;
    }

    gameState.stats.totalQuestions++;
    overlay.classList.add('active');
    setTimeout(() => {
        overlay.classList.remove('active');
        if (isCorrect) nextQuestion();
    }, 1200);
}

function buyHint() {
    if (gameState.starCurrency >= 10) {
        gameState.starCurrency -= 10;
        updateStarBalanceUI();
        AudioManager.playSFX('click');

        const hintBox = document.getElementById('hint-box');
        const hintText = document.getElementById('hint-text');
        hintBox.classList.remove('hidden');
        hintText.innerText = `${LanguageManager.get('star_hint')}${currentQuestion.answer}`;

        // Disable hint button once used for this question
        const buyHintBtn = document.getElementById('buy-hint-btn');
        if (buyHintBtn) buyHintBtn.disabled = true;
    } else {
        const hintText = document.getElementById('hint-text');
        const hintBox = document.getElementById('hint-box');
        hintBox.classList.remove('hidden');
        hintText.innerText = LanguageManager.get('not_enough_stars');
        setTimeout(() => {
            if (gameState.starCurrency < 10) hintBox.classList.add('hidden');
        }, 2000);
    }
}

function updateStarBalanceUI() {
    const counts = document.querySelectorAll('.star-balance-count');
    counts.forEach(el => {
        el.innerText = gameState.starCurrency;
        el.classList.add('animate-pop');
        setTimeout(() => el.classList.remove('animate-pop'), 300);
    });
}

function endLevel() {
    const resultStars = Math.min(3, Math.ceil(gameState.score / 20));
    const starContainer = document.getElementById('result-stars');
    starContainer.innerHTML = '';
    for(let i=0; i<3; i++) {
        const star = document.createElement('div');
        star.innerHTML = SVGS.star;
        star.style.width = '50px';
        star.style.color = i < resultStars ? 'var(--accent-color)' : '#dfe6e9';
        starContainer.appendChild(star);
    }

    document.getElementById('final-score').innerText = gameState.score;
    gameState.levelRatings[gameState.selectedLevel] = Math.max(gameState.levelRatings[gameState.selectedLevel], resultStars);

    // Star Currency rewards based on performance
    let bonusStars = 0;
    if (resultStars === 1) bonusStars = 10;
    else if (resultStars === 2) bonusStars = 20;
    else if (resultStars === 3) bonusStars = 50;

    gameState.starCurrency += bonusStars;

    if (resultStars >= 1) {
        const nextLv = gameState.selectedLevel + 1;
        if (nextLv <= 3 && !gameState.unlockedLevels.includes(nextLv)) {
            gameState.unlockedLevels.push(nextLv);
        }

        // Auto-unlock an animal if 3 stars
        if (resultStars === 3) {
            const potentialAnimals = ['lion', 'monkey', 'zebra', 'elephant', 'giraffe', 'parrot', 'turtle', 'rhino', 'hippo'];
            const animalKey = potentialAnimals[Math.floor(Math.random() * potentialAnimals.length)];
            if (!gameState.animals.includes(animalKey)) {
                gameState.animals.push(animalKey);
                document.getElementById('reward-display').innerHTML = `
                    <div class="card" style="display: inline-block; animation: popIn 0.5s ease; border-color: var(--accent-color);">
                        <div style="width: 80px; height: 80px; margin: 0 auto;">${SVGS[animalKey]}</div>
                        <p style="font-weight: 900; margin-top: 10px; color: var(--accent-shadow);">UNLOCKED!</p>
                    </div>
                `;
            }
        } else {
            document.getElementById('reward-display').innerHTML = '';
        }
    }

    gameState.save();
    showScreen('result-screen');
    AudioManager.playSFX('complete');
    updateStarBalanceUI();
}

function bindEvents() {
    document.getElementById('start-game-btn').onclick = () => showScreen('avatar-screen');
    document.querySelectorAll('.back-to-splash').forEach(b => b.onclick = () => showScreen('splash-screen'));
    document.querySelectorAll('.back-to-avatar').forEach(b => b.onclick = () => showScreen('avatar-screen'));
    document.querySelectorAll('.back-to-levels').forEach(b => b.onclick = () => {
        renderLevelList();
        showScreen('level-selection-screen');
    });

    document.querySelectorAll('.avatar-choice').forEach(b => {
        b.onclick = () => {
            gameState.selectedAvatar = b.dataset.avatar;
            gameState.save();
            updateAvatarIcons();
            renderLevelList();
            showScreen('level-selection-screen');
        };
    });

    document.getElementById('lang-toggle').onclick = () => LanguageManager.toggle();
    document.getElementById('replay-voice-btn').onclick = () => speakQuestion();
    document.getElementById('play-level-btn').onclick = () => startLevel();
    document.getElementById('retry-btn').onclick = () => startLevel();
    const buyHintBtn = document.getElementById('buy-hint-btn');
    if (buyHintBtn) buyHintBtn.onclick = () => buyHint();
    document.getElementById('map-return-btn').onclick = () => {
        if (gameState.levelRatings[gameState.selectedLevel] >= 1 && gameState.selectedLevel < 3) {
            // Auto transition to next level if current one just completed
            gameState.selectedLevel++;
            showScreen('map-screen');
            renderMap();
        } else {
            renderLevelList();
            showScreen('level-selection-screen');
        }
    };

    // Accessibility
    document.getElementById('accessibility-btn').onclick = () => showScreen('accessibility-screen');

    document.getElementById('toggle-contrast').onclick = () => {
        gameState.accessibility.highContrast = !gameState.accessibility.highContrast;
        document.body.classList.toggle('high-contrast', gameState.accessibility.highContrast);
        document.getElementById('toggle-contrast').innerText = gameState.accessibility.highContrast ? LanguageManager.get('on') : LanguageManager.get('off');
        gameState.save();
    };

    document.getElementById('toggle-dyslexia').onclick = () => {
        gameState.accessibility.dyslexiaFont = !gameState.accessibility.dyslexiaFont;
        document.body.classList.toggle('dyslexia-font', gameState.accessibility.dyslexiaFont);
        document.getElementById('toggle-dyslexia').innerText = gameState.accessibility.dyslexiaFont ? LanguageManager.get('on') : LanguageManager.get('off');
        gameState.save();
    };

    document.getElementById('text-larger').onclick = () => {
        gameState.accessibility.textSize = Math.min(24, gameState.accessibility.textSize + 2);
        document.documentElement.style.setProperty('--base-font-size', gameState.accessibility.textSize + 'px');
        gameState.save();
    };

    document.getElementById('text-smaller').onclick = () => {
        gameState.accessibility.textSize = Math.max(12, gameState.accessibility.textSize - 2);
        document.documentElement.style.setProperty('--base-font-size', gameState.accessibility.textSize + 'px');
        gameState.save();
    };

    document.getElementById('toggle-voice-global').onclick = () => {
        SpeechManager.enabled = !SpeechManager.enabled;
        AudioManager.enabled = SpeechManager.enabled;
        document.getElementById('toggle-voice-global').innerText = SpeechManager.enabled ? LanguageManager.get('on') : LanguageManager.get('off');
        gameState.save();
    };

    // Dashboard
    document.getElementById('open-dashboard-btn').onclick = () => {
        renderDashboard();
        showScreen('dashboard-screen');
    };

    document.getElementById('reset-progress-btn').onclick = () => {
        if (confirm("Reset all progress?")) {
            localStorage.removeItem('mathSafariData_v2');
            location.reload();
        }
    };
}

function renderDashboard() {
    const container = document.getElementById('dashboard-content');
    const accuracy = gameState.stats.totalQuestions > 0
        ? Math.round((gameState.stats.correctAnswers / gameState.stats.totalQuestions) * 100)
        : 0;

    const timeMinutes = Math.round((Date.now() - gameState.stats.startTime) / 60000);

    container.innerHTML = `
        <div style="display: grid; gap: 15px; text-align: left;">
            <div><strong>${LanguageManager.get('level_label')}:</strong> ${gameState.unlockedLevels.length} / 3</div>
            <div><strong>${LanguageManager.get('total_questions')}:</strong> ${gameState.stats.totalQuestions}</div>
            <div><strong>${LanguageManager.get('accuracy')}:</strong> ${accuracy}%</div>
            <div><strong>${LanguageManager.get('time_spent')}:</strong> ${timeMinutes} min</div>
            <div><strong>Star Balance:</strong> ${gameState.starCurrency}</div>
            <div style="border-top: 1px solid #eee; padding-top: 10px;">
                <strong>Animals:</strong>
                <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                    ${gameState.animals.map(a => `<div style="width: 30px; height: 30px;">${SVGS[a]}</div>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderLevelList() {
    const container = document.getElementById('level-list');
    container.innerHTML = '';
    [1, 2, 3].forEach(lv => {
        const isLocked = !gameState.unlockedLevels.includes(lv);
        const card = document.createElement('div');
        card.className = `level-card ${isLocked ? 'locked' : ''}`;
        card.innerHTML = `
            <div class="level-badge">${lv}</div>
            <div class="level-info">
                <h3 data-key="lvl${lv}_title">${LanguageManager.get('lvl'+lv+'_title')}</h3>
                <p data-key="lvl${lv}_desc">${LanguageManager.get('lvl'+lv+'_desc')}</p>
            </div>
        `;
        if (!isLocked) {
            card.onclick = () => {
                gameState.selectedLevel = lv;
                showScreen('map-screen');
                renderMap();
            };
        }
        container.appendChild(card);
    });
}

function renderMap() {
    const container = document.getElementById('safari-path');
    container.innerHTML = '';

    // Level progress step: 0 to 5
    // We use the score/star logic or just a simplified step
    const currentStars = gameState.levelRatings[gameState.selectedLevel] || 0;
    const currentStep = currentStars > 0 ? (currentStars === 3 ? 5 : currentStars * 1.5) : 1;

    for(let i=1; i<=5; i++) {
        const node = document.createElement('div');
        node.className = 'node';
        if (i < currentStep) node.classList.add('completed');
        if (i === Math.floor(currentStep)) node.classList.add('current');
        node.innerText = i;
        container.appendChild(node);

        if (i === Math.floor(currentStep)) {
            const char = document.createElement('div');
            char.className = 'char-marker';
            char.innerHTML = SVGS[gameState.selectedAvatar];
            // Center the character on the node
            char.style.bottom = '10px';
            node.appendChild(char);
        }
    }

    updateStarBalanceUI();
}

window.onload = () => {
    gameState.load();
    LanguageManager.init();
    SpeechManager.init();
    updateAvatarIcons();
    bindEvents();
};
