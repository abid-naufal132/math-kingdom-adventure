/**
 * Math Safari Adventure: Kerajaan Nombor
 * Production-ready Educational Game Logic
 */

const SVGS = {
    lion: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><circle cx="12" cy="12" r="3"/><path d="M12 7v2m0 6v2m-5-5h2m6 0h2m-7.1-4.9.7.7m4.8 4.8.7.7m-6.2 0-.7.7m4.8-4.8-.7.7"/></svg>`,
    monkey: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/><path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M8 15h8"/><path d="M12 15v1"/></svg>`,
    zebra: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 7h18M3 11h18M3 15h18M3 19h18"/></svg>`,
    elephant: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="#00b894" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    cross: `<svg viewBox="0 0 24 24" fill="none" stroke="#d63031" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
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
        hint_prefix: "Petunjuk: ",
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
        hint_prefix: "Hint: ",
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
                el.innerText = translations[this.current][key];
            }
        });
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) langToggle.innerText = translations[this.current].lang_btn;

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
    stars: { 1: 0, 2: 0, 3: 0 },
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
            stars: this.stars,
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
    document.getElementById('game-score-count').innerText = gameState.score;
    document.getElementById('hint-box').classList.add('hidden');

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
        gameState.stats.correctAnswers++;
        AudioManager.playSFX('correct');
        icon.innerHTML = SVGS.check;
        text.innerText = LanguageManager.get('correct');
        SpeechManager.speak(LanguageManager.get('correct'));
        gameState.currentQuestionIndex++;
        gameState.wrongAttempts = 0;
    } else {
        AudioManager.playSFX('wrong');
        icon.innerHTML = SVGS.cross;
        text.innerText = LanguageManager.get('wrong');
        SpeechManager.speak(LanguageManager.get('wrong'));
        gameState.wrongAttempts++;
        if (gameState.wrongAttempts >= 2) {
            showHint();
        }
    }

    gameState.stats.totalQuestions++;
    overlay.classList.add('active');
    setTimeout(() => {
        overlay.classList.remove('active');
        if (isCorrect) nextQuestion();
    }, 1200);
}

function showHint() {
    const hintBox = document.getElementById('hint-box');
    const hintText = document.getElementById('hint-text');
    hintBox.classList.remove('hidden');
    hintText.innerText = `${LanguageManager.get('hint_prefix')}${currentQuestion.answer}`;
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
    gameState.stars[gameState.selectedLevel] = Math.max(gameState.stars[gameState.selectedLevel], resultStars);

    if (resultStars >= 1) {
        const nextLv = gameState.selectedLevel + 1;
        if (nextLv <= 3 && !gameState.unlockedLevels.includes(nextLv)) {
            gameState.unlockedLevels.push(nextLv);
        }

        // Auto-unlock an animal if 3 stars
        if (resultStars === 3) {
            const potentialAnimals = ['🦒', '🐘', '🦓', '🐒', '🦁', '🦒', '🦏', '🦛'];
            const animal = potentialAnimals[Math.floor(Math.random() * potentialAnimals.length)];
            if (!gameState.animals.includes(animal)) {
                gameState.animals.push(animal);
                document.getElementById('reward-display').innerHTML = `
                    <div class="card" style="display: inline-block; animation: popIn 0.5s ease;">
                        <div style="font-size: 3rem;">${animal}</div>
                        <p style="font-weight: 900;">UNLOCKED!</p>
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
    document.getElementById('map-return-btn').onclick = () => {
        if (gameState.stars[gameState.selectedLevel] >= 1 && gameState.selectedLevel < 3) {
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
            <div><strong>Stars:</strong> ${Object.values(gameState.stars).reduce((a,b)=>a+b, 0)}</div>
            <div style="border-top: 1px solid #eee; padding-top: 10px;">
                <strong>${LanguageManager.get('choose_avatar')}:</strong> ${gameState.animals.join(' ')}
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
    const currentStars = gameState.stars[gameState.selectedLevel] || 0;
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

    document.getElementById('map-stars-count').innerText = Object.values(gameState.stars).reduce((a, b) => a + b, 0);
}

window.onload = () => {
    gameState.load();
    LanguageManager.init();
    SpeechManager.init();
    updateAvatarIcons();
    bindEvents();
};
