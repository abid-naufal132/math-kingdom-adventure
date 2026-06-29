/**
 * Math Safari Adventure: Kerajaan Nombor
 * Modular Production-Ready Codebase
 */

/* --- ASSETS & CONSTANTS --- */
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
    badgeNovice: `<svg viewBox="0 0 24 24" fill="#e67e22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path d="M12 6l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z" fill="white"/></svg>`,
    badgeExplorer: `<svg viewBox="0 0 24 24" fill="#2ecc71" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12" stroke="white" stroke-width="2"/></svg>`,
    badgeMaster: `<svg viewBox="0 0 24 24" fill="#f1c40f" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path d="M12 6l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z" fill="white"/></svg>`,
    badgeCollector: `<svg viewBox="0 0 24 24" fill="#9b59b6" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><rect x="7" y="7" width="10" height="10" rx="2" fill="white"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="#00b894" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    cross: `<svg viewBox="0 0 24 24" fill="none" stroke="#d63031" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="#f1c40f" stroke="#f39c12" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    starEmpty: `<svg viewBox="0 0 24 24" fill="none" stroke="#dfe6e9" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
};

/* --- UTILITIES --- */
const formatNum = (num) => {
    return num.toString();
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
        wrong: "Cuba lagi! 🌟",
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
        loading: "Memuat...",
        bgm_toggle: "Muzik Latar",
        bgm_volume: "Volume Muzik",
        sfx_volume: "Volume Kesan Bunyi",
        reduced_motion: "Kurangkan Animasi",
        minutes_label: "min",
        star_balance: "Baki Bintang",
        auto_continue: "Seterusnya dalam",
        congratulations: "Tahniah!",
        replay_all: "MAIN SEMULA",
        practice_mode: "MOD LATIHAN",
        animals_label: "Haiwan",
        badges_label: "Lencana",
        badge_novice: "Permulaan Matematik",
        badge_explorer: "Penjelajah Safari",
        badge_master: "Raja Strategi",
        badge_collector: "Pengumpul Bintang",
        confirm_home_title: "Kembali?",
        confirm_home_msg: "Adakah anda mahu berhenti bermain dan kembali ke menu utama?",
        yes: "YA",
        no: "TIDAK"
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
        wrong: "Try again! 🌟",
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
        loading: "Loading...",
        bgm_toggle: "Background Music",
        bgm_volume: "Music Volume",
        sfx_volume: "SFX Volume",
        reduced_motion: "Reduced Motion",
        minutes_label: "min",
        star_balance: "Star Balance",
        auto_continue: "Next in",
        congratulations: "Congratulations!",
        replay_all: "REPLAY ALL",
        practice_mode: "PRACTICE MODE",
        animals_label: "Animals",
        badges_label: "Badges",
        badge_novice: "Math Novice",
        badge_explorer: "Safari Explorer",
        badge_master: "Streak Master",
        badge_collector: "Star Collector",
        confirm_home_title: "Go Home?",
        confirm_home_msg: "Do you want to stop playing and return to the main menu?",
        yes: "YES",
        no: "NO"
    }
};

/* --- STATE MANAGEMENT --- */
const gameState = {
    selectedAvatar: 'lion',
    selectedLevel: 1,
    unlockedLevels: [1],
    levelRatings: { 1: 0, 2: 0, 3: 0 },
    starCurrency: 0,
    lastRewardDate: null,
    streak: 0,
    animals: [],
    badges: [],

    accessibility: {
        highContrast: false,
        dyslexiaFont: false,
        textSize: 16,
        speechSpeed: 1.0,
        reducedMotion: false,
        bgmVolume: 0.3,
        bgmEnabled: true,
        sfxVolume: 0.5,
        voiceEnabled: true
    },

    currentScore: 0,
    currentQuestionIndex: 0,
    questionsPerLevel: 5,
    isGameActive: false,
    wrongAttempts: 0,
    currentQuestion: null,

    stats: {
        totalQuestions: 0,
        correctAnswers: 0,
        startTime: Date.now(),
        history: []
    },

    levelConfig: {
        1: { max: 10, ops: ['+'] },
        2: { max: 15, ops: ['-'] },
        3: { max: 20, ops: ['+', '-'] }
    },

    currentScreen: 'splash-screen'
};

/* --- MANAGERS --- */
const SaveSystem = {
    KEY: 'mathSafariData_production_v1',
    save() {
        const data = {
            unlockedLevels: gameState.unlockedLevels,
            levelRatings: gameState.levelRatings,
            starCurrency: gameState.starCurrency,
            lastRewardDate: gameState.lastRewardDate,
            selectedAvatar: gameState.selectedAvatar,
            animals: gameState.animals,
            badges: gameState.badges,
            accessibility: gameState.accessibility,
            stats: gameState.stats
        };
        localStorage.setItem(this.KEY, JSON.stringify(data));
    },
    load() {
        const saved = localStorage.getItem(this.KEY);
        if (saved) {
            const data = JSON.parse(saved);
            Object.assign(gameState, data);
            // Apply loaded settings
            this.applySettings();
        }
    },
    applySettings() {
        document.body.classList.toggle('high-contrast', gameState.accessibility.highContrast);
        document.body.classList.toggle('dyslexia-font', gameState.accessibility.dyslexiaFont);
        document.documentElement.style.setProperty('--base-font-size', gameState.accessibility.textSize + 'px');
        if (gameState.accessibility.reducedMotion) {
            document.body.classList.add('reduced-motion');
        } else {
            document.body.classList.remove('reduced-motion');
        }
    }
};

/**
 * LANGUAGE MANAGER
 */
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
        const mainLangToggle = document.getElementById('main-lang-toggle');
        if (mainLangToggle) mainLangToggle.innerText = translations[this.current].lang_btn;

        StarManager.updateBalanceUI();
        GameManager.syncAccessibilityUI();
        if (gameState.currentScreen === 'level-selection-screen') LevelManager.renderLevelList();
        if (gameState.currentScreen === 'game-screen' && gameState.currentQuestion) GameManager.renderQuestion();
    },
    get(key) {
        return translations[this.current][key] || key;
    }
};

/**
 * SPEECH MANAGER
 */
const SpeechManager = {
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
        this.voice = voices.find(v => v.lang.includes('ms-MY')) ||
                     voices.find(v => v.lang.includes('id-ID')) ||
                     voices.find(v => v.lang.includes('ms')) ||
                     voices[0];
    },

    speak(text) {
        if (!gameState.accessibility.voiceEnabled || !this.synth) return;
        this.synth.cancel();

        let speechText = text.toString();

        // Enforce the "kosong" rule in Malay speech
        if (LanguageManager.current === 'ms') {
            speechText = speechText.replace(/\b0\b/g, "kosong");
        }

        const utterance = new SpeechSynthesisUtterance(speechText);
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

/**
 * AUDIO MANAGER
 */
const AudioManager = {
    bgmStarted: false,
    audioCtx: null,

    init() {
        // Initialized on first user interaction to comply with browser policies
    },

    createContext() {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    playSFX(type) {
        if (!gameState.accessibility.sfxVolume) return;
        this.createContext();
        const ctx = this.audioCtx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        let freq = 440;
        let duration = 0.2;
        let type_osc = 'sine';

        if (type === 'correct') { freq = 523.25; duration = 0.3; }
        else if (type === 'wrong') { freq = 196.00; duration = 0.4; type_osc = 'triangle'; }
        else if (type === 'click') { freq = 880; duration = 0.05; }
        else if (type === 'star') { freq = 1046.50; duration = 0.2; }
        else if (type === 'complete') {
            this.playSequence([523, 659, 783, 1046], 0.1);
            return;
        }

        osc.type = type_osc;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(gameState.accessibility.sfxVolume * 0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
    },

    playSequence(freqs, step) {
        this.createContext();
        const ctx = this.audioCtx;
        freqs.forEach((f, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(f, ctx.currentTime + i * step);
            gain.gain.setValueAtTime(gameState.accessibility.sfxVolume * 0.2, ctx.currentTime + i * step);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * step + 0.3);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(ctx.currentTime + i * step);
            osc.stop(ctx.currentTime + i * step + 0.3);
        });
    },

    startBGM() {
        if (this.bgmStarted || !gameState.accessibility.bgmEnabled) return;
        this.createContext();
        this.bgmStarted = true;
        this.playBGMLoop();
    },

    playBGMLoop() {
        const ctx = this.audioCtx;
        const playNote = (freq, time, duration, vol) => {
            if (!gameState.accessibility.bgmEnabled) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, time);
            gain.gain.setValueAtTime(0, time);
            gain.gain.linearRampToValueAtTime(vol * gameState.accessibility.bgmVolume, time + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, time + duration);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(time);
            osc.stop(time + duration);
        };

        const tempo = 120;
        const quarter = 60 / tempo;
        let nextTime = ctx.currentTime + 0.5;

        const loop = () => {
            if (!this.bgmStarted) return;
            const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
            for (let i = 0; i < 8; i++) {
                playNote(notes[i % 4], nextTime + i * quarter, quarter * 0.8, 0.05);
            }
            nextTime += 8 * quarter;
            setTimeout(loop, 8 * quarter * 1000 - 100);
        };
        loop();
    },

    stopBGM() {
        this.bgmStarted = false;
    }
};

/**
 * QUESTION GENERATOR
 */
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
        return { a, b, op, answer, options, text: `${formatNum(a)} ${op} ${formatNum(b)}` };
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

/**
 * STAR MANAGER
 */
const StarManager = {
    addStars(amount) {
        gameState.starCurrency += amount;
        this.updateBalanceUI();
        AudioManager.playSFX('star');
        SaveSystem.save();
    },
    spendStars(amount) {
        if (gameState.starCurrency >= amount) {
            gameState.starCurrency -= amount;
            this.updateBalanceUI();
            SaveSystem.save();
            return true;
        }
        return false;
    },
    updateBalanceUI() {
        document.querySelectorAll('.star-balance-count').forEach(el => {
            el.innerText = formatNum(gameState.starCurrency);
            if (!gameState.accessibility.reducedMotion) {
                el.classList.add('animate-pop');
                setTimeout(() => el.classList.remove('animate-pop'), 300);
            }
        });
    }
};

/**
 * CELEBRATION MANAGER
 */
const CelebrationManager = {
    triggerStars(count = 5) {
        if (gameState.accessibility.reducedMotion) return;
        const container = document.getElementById('app-container');
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'celebration-star';
            star.innerHTML = SVGS.star;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = (Math.random() * 20 + 20) + 'px';
            star.style.animationDelay = (Math.random() * 0.5) + 's';
            container.appendChild(star);
            setTimeout(() => star.remove(), 2000);
        }
    },
    triggerConfetti() {
        if (gameState.accessibility.reducedMotion) return;
        const container = document.getElementById('app-container');
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'confetti';
            p.style.left = Math.random() * 100 + '%';
            p.style.backgroundColor = ['#fdcb6e', '#00b894', '#0984e3', '#e84393'][Math.floor(Math.random() * 4)];
            p.style.width = (Math.random() * 8 + 4) + 'px';
            p.style.height = (Math.random() * 8 + 4) + 'px';
            p.style.animationDelay = (Math.random() * 2) + 's';
            container.appendChild(p);
            setTimeout(() => p.remove(), 4000);
        }
    }
};

/**
 * LEVEL MANAGER
 */
const LevelManager = {
    renderLevelList() {
        const container = document.getElementById('level-list');
        if (!container) return;
        container.innerHTML = '';
        [1, 2, 3].forEach(lv => {
            const isLocked = !gameState.unlockedLevels.includes(lv);
            const card = document.createElement('button');
            card.className = `level-card ${isLocked ? 'locked' : ''}`;
            card.setAttribute('aria-label', `Level ${lv}`);
            if (isLocked) card.setAttribute('disabled', 'true');
            card.innerHTML = `
                <div class="level-badge">${formatNum(lv)}</div>
                <div class="level-info" style="text-align: left;">
                    <h3 data-key="lvl${lv}_title">${LanguageManager.get('lvl'+lv+'_title')}</h3>
                    <p data-key="lvl${lv}_desc">${LanguageManager.get('lvl'+lv+'_desc')}</p>
                </div>
            `;
            if (!isLocked) {
                card.onclick = () => {
                    gameState.selectedLevel = lv;
                    GameManager.showScreen('map-screen');
                    this.renderMap();
                };
            }
            container.appendChild(card);
        });
    },
    renderMap() {
        const container = document.getElementById('safari-path');
        if (!container) return;

        // currentStep is 1-indexed, represents current node
        const currentStep = Math.min(5, gameState.currentQuestionIndex + 1);

        // Check if map nodes already exist, if so just update them
        const nodes = container.querySelectorAll('.node');
        if (nodes.length === 5) {
            nodes.forEach((node, idx) => {
                const i = idx + 1;
                node.className = 'node';
                if (i < currentStep) node.classList.add('completed');
                if (i === currentStep) node.classList.add('current');
            });
        } else {
            container.innerHTML = '';
            for(let i=1; i<=5; i++) {
                const node = document.createElement('div');
                node.className = 'node';
                if (i < currentStep) node.classList.add('completed');
                if (i === currentStep) node.classList.add('current');
                node.innerText = formatNum(i);
                container.appendChild(node);
            }
        }

        // Handle char marker movement
        let char = document.querySelector('.char-marker');
        if (!char) {
            char = document.createElement('div');
            char.className = 'char-marker';
            char.innerHTML = SVGS[gameState.selectedAvatar];
            container.appendChild(char);
        }

        const currentNode = container.querySelectorAll('.node')[currentStep - 1];
        if (currentNode) {
            const containerRect = container.getBoundingClientRect();
            const nodeRect = currentNode.getBoundingClientRect();

            // Calculate relative position within container
            const bottom = containerRect.bottom - nodeRect.bottom + 15;
            const left = nodeRect.left - containerRect.left + (nodeRect.width / 2);
            char.style.bottom = bottom + 'px';
            char.style.left = left + 'px';
            char.style.transform = 'translateX(-50%)';
            char.style.animation = gameState.accessibility.reducedMotion ? 'none' : 'charJump 0.5s ease-in-out infinite alternate';
        }

        StarManager.updateBalanceUI();
    }
};

/**
 * GAME MANAGER
 */
const GameManager = {
    checkDailyReward() {
        const today = new Date().toDateString();
        if (gameState.lastRewardDate !== today) {
            gameState.starCurrency += 20;
            gameState.lastRewardDate = today;
            SaveSystem.save();
            // We can't easily show a popup here yet as UI might not be ready,
            // but the stars will be there when they enter.
        }
    },

    init() {
        SaveSystem.load();
        this.checkDailyReward();
        LanguageManager.init();
        SpeechManager.init();
        this.updateAvatarIcons();
        this.bindEvents();
        this.syncAccessibilityUI();
        this.showScreen('splash-screen');
    },

    syncAccessibilityUI() {
        const acc = gameState.accessibility;
        const contrastBtn = document.getElementById('toggle-contrast');
        const dyslexiaBtn = document.getElementById('toggle-dyslexia');
        const voiceBtn = document.getElementById('toggle-voice-global');
        const bgmToggleBtn = document.getElementById('toggle-bgm');
        const motionBtn = document.getElementById('toggle-motion');
        const bgmSlider = document.getElementById('bgm-slider');
        const sfxSlider = document.getElementById('sfx-slider');

        if (contrastBtn) contrastBtn.innerText = acc.highContrast ? LanguageManager.get('on') : LanguageManager.get('off');
        if (dyslexiaBtn) dyslexiaBtn.innerText = acc.dyslexiaFont ? LanguageManager.get('on') : LanguageManager.get('off');
        if (voiceBtn) voiceBtn.innerText = acc.voiceEnabled ? LanguageManager.get('on') : LanguageManager.get('off');
        if (bgmToggleBtn) bgmToggleBtn.innerText = acc.bgmEnabled ? LanguageManager.get('on') : LanguageManager.get('off');
        if (motionBtn) motionBtn.innerText = acc.reducedMotion ? LanguageManager.get('on') : LanguageManager.get('off');
        if (bgmSlider) bgmSlider.value = acc.bgmVolume;
        if (sfxSlider) sfxSlider.value = acc.sfxVolume;
    },

    updateTheme() {
        const app = document.getElementById('app-container');
        if (app) {
            app.classList.remove('level-1', 'level-2', 'level-3');
            app.classList.add(`level-${gameState.selectedLevel}`);
        }
    },

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const target = document.getElementById(screenId);
        if (target) {
            this.updateTheme();
            target.classList.add('active');
            gameState.currentScreen = screenId;
            if (screenId === 'level-selection-screen') LevelManager.renderLevelList();
            if (screenId === 'map-screen') LevelManager.renderMap();
        }
    },

    handleHomeClick() {
        if (gameState.isGameActive) {
            document.getElementById('confirm-overlay').classList.add('active');
        } else {
            this.goHome();
        }
    },

    goHome() {
        document.getElementById('confirm-overlay').classList.remove('active');
        if (this.autoContinueInterval) clearInterval(this.autoContinueInterval);
        gameState.isGameActive = false;
        this.showScreen('splash-screen');
    },

    startLevel() {
        this.updateTheme();
        gameState.currentScore = 0;
        gameState.currentQuestionIndex = 0;
        gameState.wrongAttempts = 0;
        gameState.streak = 0;
        gameState.isGameActive = true;
        this.nextQuestion();
        this.showScreen('game-screen');
    },

    nextQuestion() {
        if (gameState.currentQuestionIndex >= gameState.questionsPerLevel) {
            this.endLevel();
            return;
        }
        gameState.currentQuestion = QuestionGenerator.generate(gameState.selectedLevel);
        this.renderQuestion();
    },

    renderQuestion() {
        const q = gameState.currentQuestion;
        document.getElementById('question-text').innerText = q.text;
        document.getElementById('level-label').innerText = `${LanguageManager.get('level_label')} ${formatNum(gameState.selectedLevel)}`;
        document.getElementById('progress-bar').style.width = `${(gameState.currentQuestionIndex / gameState.questionsPerLevel) * 100}%`;

        document.getElementById('hint-box').classList.add('hidden');
        const buyHintBtn = document.getElementById('buy-hint-btn');
        if (buyHintBtn) buyHintBtn.disabled = false;

        const container = document.getElementById('options-container');
        container.innerHTML = '';
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.innerText = formatNum(opt);
            btn.onclick = () => this.checkAnswer(opt);
            container.appendChild(btn);
        });

        this.speakQuestion();
    },

    speakQuestion() {
        const q = gameState.currentQuestion;
        const opStr = q.op === '+' ? (LanguageManager.current === 'ms' ? 'tambah' : 'plus') : (LanguageManager.current === 'ms' ? 'tolak' : 'minus');
        const eqStr = LanguageManager.current === 'ms' ? 'sama dengan berapa?' : 'equals what?';
        SpeechManager.speak(`${q.a} ${opStr} ${q.b} ${eqStr}`);
    },

    checkAnswer(val) {
        const isCorrect = val === gameState.currentQuestion.answer;
        const overlay = document.getElementById('feedback-overlay');
        const icon = document.getElementById('feedback-icon');
        const text = document.getElementById('feedback-text');

        if (isCorrect) {
            gameState.currentScore += 10;
            StarManager.addStars(2);
            gameState.streak++;
            if (gameState.streak % 3 === 0) StarManager.addStars(5);

            gameState.stats.correctAnswers++;
            AudioManager.playSFX('correct');
            icon.innerHTML = SVGS.check;
            text.innerText = LanguageManager.get('correct');
            SpeechManager.speak(LanguageManager.get('correct'));
            gameState.currentQuestionIndex++;
            gameState.wrongAttempts = 0;
            CelebrationManager.triggerStars(5);
            this.checkBadges();
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
            if (isCorrect) {
                // Show map after every correct answer to show progression
                this.showScreen('map-screen');

                setTimeout(() => {
                    if (gameState.currentQuestionIndex < gameState.questionsPerLevel) {
                        this.showScreen('game-screen');
                        this.nextQuestion();
                    } else {
                        this.endLevel();
                    }
                }, 1500);
            }
        }, 1200);
    },

    checkBadges() {
        const unlocked = [];
        if (!gameState.badges.includes('novice') && gameState.stats.correctAnswers >= 5) {
            unlocked.push('novice');
        }
        if (!gameState.badges.includes('explorer') && gameState.unlockedLevels.includes(2)) {
            unlocked.push('explorer');
        }
        if (!gameState.badges.includes('master') && gameState.streak >= 5) {
            unlocked.push('master');
        }
        if (!gameState.badges.includes('collector') && gameState.starCurrency >= 100) {
            unlocked.push('collector');
        }

        unlocked.forEach(b => {
            gameState.badges.push(b);
            AudioManager.playSFX('star');
            // Visual notification could be added here
        });
        if (unlocked.length > 0) SaveSystem.save();
    },

    endLevel() {
        const resultStars = Math.min(3, Math.ceil(gameState.currentScore / 16));
        gameState.levelRatings[gameState.selectedLevel] = Math.max(gameState.levelRatings[gameState.selectedLevel], resultStars);

        let bonusStars = resultStars === 3 ? 50 : (resultStars === 2 ? 20 : 10);
        StarManager.addStars(bonusStars);

        const totalLevels = Object.keys(gameState.levelConfig).length;
        const isFinalLevel = gameState.selectedLevel === totalLevels;
        const hasPassed = resultStars >= 1;

        if (hasPassed) {
            const nextLv = gameState.selectedLevel + 1;
            if (nextLv <= totalLevels && !gameState.unlockedLevels.includes(nextLv)) {
                gameState.unlockedLevels.push(nextLv);
            }
            if (resultStars === 3) this.unlockRandomAnimal();
        }

        // Record history
        gameState.stats.history.unshift({
            level: gameState.selectedLevel,
            score: gameState.currentScore,
            stars: resultStars,
            date: new Date().toLocaleDateString()
        });
        if (gameState.stats.history.length > 10) gameState.stats.history.pop();

        this.checkBadges();
        gameState.isGameActive = false;
        SaveSystem.save();

        const resultTitle = document.getElementById('result-title');
        const replayAllBtn = document.getElementById('replay-all-btn');
        const practiceModeBtn = document.getElementById('practice-mode-btn');
        const mapReturnBtn = document.getElementById('map-return-btn');
        const retryBtn = document.getElementById('retry-btn');

        if (isFinalLevel && hasPassed) {
            resultTitle.innerText = LanguageManager.get('congratulations');
            replayAllBtn.classList.remove('hidden');
            practiceModeBtn.classList.remove('hidden');
            mapReturnBtn.classList.add('hidden');
            retryBtn.classList.add('hidden');
        } else {
            resultTitle.innerText = hasPassed ? LanguageManager.get('well_done') : LanguageManager.get('try_again');
            replayAllBtn.classList.add('hidden');
            practiceModeBtn.classList.add('hidden');
            mapReturnBtn.classList.remove('hidden');
            retryBtn.classList.remove('hidden');
        }

        this.renderResultScreen(resultStars);
        this.showScreen('result-screen');
        AudioManager.playSFX('complete');
        if (resultStars >= 1) CelebrationManager.triggerConfetti();
    },

    autoContinueInterval: null,
    renderResultScreen(stars) {
        const starContainer = document.getElementById('result-stars');
        starContainer.innerHTML = '';
        for(let i=0; i<3; i++) {
            const star = document.createElement('div');
            star.innerHTML = i < stars ? SVGS.star : SVGS.starEmpty;
            star.style.width = '50px';
            starContainer.appendChild(star);
        }
        document.getElementById('final-score').innerText = formatNum(gameState.currentScore);

        // Auto-continue logic
        const timerEl = document.getElementById('auto-continue-timer');
        if (this.autoContinueInterval) clearInterval(this.autoContinueInterval);

        const isFinalLevel = gameState.selectedLevel === 3;
        const hasPassed = stars >= 1;

        if (hasPassed && !isFinalLevel) {
            let timeLeft = 5;
            timerEl.innerText = `${LanguageManager.get('auto_continue')} ${timeLeft}s...`;
            this.autoContinueInterval = setInterval(() => {
                timeLeft--;
                timerEl.innerText = `${LanguageManager.get('auto_continue')} ${timeLeft}s...`;
                if (timeLeft <= 0) {
                    clearInterval(this.autoContinueInterval);
                    document.getElementById('map-return-btn').click();
                }
            }, 1000);
        } else {
            timerEl.innerText = '';
        }
    },

    unlockRandomAnimal() {
        const pool = ['lion', 'monkey', 'zebra', 'elephant', 'giraffe', 'parrot', 'turtle', 'rhino', 'hippo'];
        const available = pool.filter(a => !gameState.animals.includes(a));
        if (available.length > 0) {
            const animal = available[Math.floor(Math.random() * available.length)];
            gameState.animals.push(animal);
            const rewardDisplay = document.getElementById('reward-display');
            rewardDisplay.innerHTML = `
                <div class="card" style="display: inline-block; border-color: var(--accent-color); animation: starSpin 0.6s ease-out;">
                    <div style="width: 80px; height: 80px; margin: 0 auto;">${SVGS[animal]}</div>
                    <p style="font-weight: 900; margin-top: 10px; color: var(--accent-shadow);">UNLOCKED!</p>
                </div>
            `;
            AudioManager.playSFX('star');
        }
    },

    updateAvatarIcons() {
        document.querySelectorAll('.avatar-icon-svg').forEach(el => {
            const type = el.dataset.icon;
            if (SVGS[type]) el.innerHTML = SVGS[type];
        });
        const preview = document.getElementById('main-avatar-preview');
        if (preview && SVGS[gameState.selectedAvatar]) {
            preview.innerHTML = SVGS[gameState.selectedAvatar];
            preview.style.width = '120px';
            preview.style.height = '120px';
            preview.style.margin = '0 auto';
        }
    },

    bindEvents() {
        // Keyboard Navigation
        window.onkeydown = (e) => {
            if (gameState.currentScreen === 'game-screen') {
                const key = e.key;
                if (['1', '2', '3', '4'].includes(key)) {
                    const idx = parseInt(key) - 1;
                    const btns = document.querySelectorAll('.opt-btn');
                    if (btns[idx]) btns[idx].click();
                }
                if (key === 'h' || key === 'H') {
                    document.getElementById('buy-hint-btn').click();
                }
                if (key === 'v' || key === 'V') {
                    document.getElementById('replay-voice-btn').click();
                }
            }
        };

        document.getElementById('start-game-btn').onclick = () => {
            AudioManager.startBGM();
            this.showScreen('avatar-screen');
        };
        document.querySelectorAll('.back-to-splash').forEach(b => b.onclick = () => this.showScreen('splash-screen'));
        document.querySelectorAll('.back-to-avatar').forEach(b => b.onclick = () => this.showScreen('avatar-screen'));
        document.querySelectorAll('.back-to-levels').forEach(b => b.onclick = () => this.showScreen('level-selection-screen'));

        document.querySelectorAll('.avatar-choice').forEach(b => {
            b.onclick = () => {
                gameState.selectedAvatar = b.dataset.avatar;
                SaveSystem.save();
                this.updateAvatarIcons();
                this.showScreen('level-selection-screen');
            };
        });

        document.getElementById('lang-toggle').onclick = () => LanguageManager.toggle();
        document.getElementById('main-lang-toggle').onclick = () => LanguageManager.toggle();
        document.getElementById('replay-voice-btn').onclick = () => this.speakQuestion();
        document.getElementById('play-level-btn').onclick = () => this.startLevel();
        document.getElementById('retry-btn').onclick = () => this.startLevel();
        document.getElementById('buy-hint-btn').onclick = () => this.buyHint();
        document.getElementById('map-return-btn').onclick = () => {
            if (this.autoContinueInterval) clearInterval(this.autoContinueInterval);
            const currentLevel = gameState.selectedLevel;
            const nextLevel = currentLevel + 1;
            const totalLevels = Object.keys(gameState.levelConfig).length;

            if (gameState.levelRatings[currentLevel] >= 1 && nextLevel <= totalLevels) {
                // Unlock next level if not already
                if (!gameState.unlockedLevels.includes(nextLevel)) {
                    gameState.unlockedLevels.push(nextLevel);
                }
                gameState.selectedLevel = nextLevel;
                gameState.currentQuestionIndex = 0;
                this.showScreen('map-screen');
                // Automatically transition to the next level after showing the map briefly
                setTimeout(() => {
                    if (gameState.currentScreen === 'map-screen' && gameState.selectedLevel === nextLevel) {
                        this.startLevel();
                    }
                }, 2000);
            } else {
                this.showScreen('level-selection-screen');
            }
        };

        // Unified Home button logic
        document.querySelectorAll('.home-btn').forEach(b => b.onclick = () => this.handleHomeClick());
        document.getElementById('exit-game-btn').onclick = () => this.handleHomeClick();
        document.getElementById('confirm-yes-btn').onclick = () => this.goHome();
        document.getElementById('confirm-no-btn').onclick = () => {
            document.getElementById('confirm-overlay').classList.remove('active');
        };

        document.getElementById('accessibility-btn').onclick = () => this.showScreen('accessibility-screen');
        document.getElementById('toggle-contrast').onclick = () => {
            gameState.accessibility.highContrast = !gameState.accessibility.highContrast;
            SaveSystem.applySettings();
            document.getElementById('toggle-contrast').innerText = gameState.accessibility.highContrast ? LanguageManager.get('on') : LanguageManager.get('off');
            SaveSystem.save();
        };
        document.getElementById('toggle-dyslexia').onclick = () => {
            gameState.accessibility.dyslexiaFont = !gameState.accessibility.dyslexiaFont;
            SaveSystem.applySettings();
            document.getElementById('toggle-dyslexia').innerText = gameState.accessibility.dyslexiaFont ? LanguageManager.get('on') : LanguageManager.get('off');
            SaveSystem.save();
        };
        document.getElementById('text-larger').onclick = () => {
            gameState.accessibility.textSize = Math.min(24, gameState.accessibility.textSize + 2);
            SaveSystem.applySettings();
            SaveSystem.save();
        };
        document.getElementById('text-smaller').onclick = () => {
            gameState.accessibility.textSize = Math.max(12, gameState.accessibility.textSize - 2);
            SaveSystem.applySettings();
            SaveSystem.save();
        };
        document.getElementById('toggle-voice-global').onclick = () => {
            gameState.accessibility.voiceEnabled = !gameState.accessibility.voiceEnabled;
            document.getElementById('toggle-voice-global').innerText = gameState.accessibility.voiceEnabled ? LanguageManager.get('on') : LanguageManager.get('off');
            SaveSystem.save();
        };
        document.getElementById('toggle-bgm').onclick = () => {
            gameState.accessibility.bgmEnabled = !gameState.accessibility.bgmEnabled;
            document.getElementById('toggle-bgm').innerText = gameState.accessibility.bgmEnabled ? LanguageManager.get('on') : LanguageManager.get('off');
            if (gameState.accessibility.bgmEnabled) {
                AudioManager.startBGM();
            } else {
                AudioManager.stopBGM();
            }
            SaveSystem.save();
        };
        document.getElementById('bgm-slider').oninput = (e) => {
            gameState.accessibility.bgmVolume = parseFloat(e.target.value);
            SaveSystem.save();
        };
        document.getElementById('sfx-slider').oninput = (e) => {
            gameState.accessibility.sfxVolume = parseFloat(e.target.value);
            SaveSystem.save();
        };
        document.getElementById('toggle-motion').onclick = () => {
            gameState.accessibility.reducedMotion = !gameState.accessibility.reducedMotion;
            SaveSystem.applySettings();
            document.getElementById('toggle-motion').innerText = gameState.accessibility.reducedMotion ? LanguageManager.get('on') : LanguageManager.get('off');
            SaveSystem.save();
        };

        document.getElementById('open-dashboard-btn').onclick = () => {
            this.renderDashboard();
            this.showScreen('dashboard-screen');
        };
        document.getElementById('reset-progress-btn').onclick = () => {
            if (confirm("Reset all progress?")) {
                localStorage.removeItem(SaveSystem.KEY);
                location.reload();
            }
        };

        document.getElementById('replay-all-btn').onclick = () => {
            gameState.unlockedLevels = [1];
            gameState.selectedLevel = 1;
            gameState.currentQuestionIndex = 0;
            SaveSystem.save();
            this.startLevel();
        };

        document.getElementById('practice-mode-btn').onclick = () => {
            this.showScreen('level-selection-screen');
        };
    },

    buyHint() {
        if (StarManager.spendStars(10)) {
            const hintBox = document.getElementById('hint-box');
            const hintText = document.getElementById('hint-text');
            hintBox.classList.remove('hidden');

            // Visual Star Hint System
            const answer = gameState.currentQuestion.answer;
            const levelMax = gameState.levelConfig[gameState.selectedLevel].max;

            hintText.innerHTML = `
                <div>${LanguageManager.get('star_hint')}${formatNum(answer)}</div>
                <div class="star-hint-container">
                    ${Array.from({length: levelMax}, (_, i) => `
                        <div class="hint-star" style="animation-delay: ${i * 0.05}s">
                            ${i < answer ? SVGS.star : SVGS.starEmpty}
                        </div>
                    `).join('')}
                </div>
            `;

            document.getElementById('buy-hint-btn').disabled = true;
            AudioManager.playSFX('click');
        } else {
            const hintText = document.getElementById('hint-text');
            const hintBox = document.getElementById('hint-box');
            hintBox.classList.remove('hidden');
            hintText.innerText = LanguageManager.get('not_enough_stars');
            setTimeout(() => hintBox.classList.add('hidden'), 2000);
        }
    },

    renderDashboard() {
        const container = document.getElementById('dashboard-content');
        const accuracy = gameState.stats.totalQuestions > 0 ? Math.round((gameState.stats.correctAnswers / gameState.stats.totalQuestions) * 100) : 0;
        const timeMinutes = Math.round((Date.now() - gameState.stats.startTime) / 60000);

        const historyHtml = gameState.stats.history.map(h => `
            <div style="font-size: 0.8rem; padding: 8px; background: #f8f9fa; border-radius: 8px; margin-bottom: 5px; display: flex; justify-content: space-between;">
                <span>Lvl ${h.level} - ${h.date}</span>
                <span>${h.score} pts | ${'★'.repeat(h.stars)}${'☆'.repeat(3-h.stars)}</span>
            </div>
        `).join('');

        container.innerHTML = `
            <div style="display: grid; gap: 15px; text-align: left;">
                <div><strong>${LanguageManager.get('level_label')}:</strong> ${formatNum(gameState.unlockedLevels.length)} / ${formatNum(3)}</div>
                <div><strong>${LanguageManager.get('total_questions')}:</strong> ${formatNum(gameState.stats.totalQuestions)}</div>
                <div><strong>${LanguageManager.get('accuracy')}:</strong> ${formatNum(accuracy)}%</div>
                <div><strong>${LanguageManager.get('time_spent')}:</strong> ${formatNum(timeMinutes)} ${LanguageManager.get('minutes_label')}</div>
                <div><strong>${LanguageManager.get('star_balance')}:</strong> ${formatNum(gameState.starCurrency)}</div>
                <div style="border-top: 1px solid #eee; padding-top: 10px;">
                    <strong>${LanguageManager.get('animals_label')}:</strong>
                    <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                        ${gameState.animals.map(a => `<div style="width: 30px; height: 30px;">${SVGS[a]}</div>`).join('')}
                    </div>
                </div>
                <div style="border-top: 1px solid #eee; padding-top: 10px;">
                    <strong>${LanguageManager.get('badges_label')}:</strong>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 5px;">
                        ${gameState.badges.map(b => `
                            <div style="text-align: center; width: 60px;">
                                <div style="width: 40px; height: 40px; margin: 0 auto;">${SVGS['badge' + b.charAt(0).toUpperCase() + b.slice(1)]}</div>
                                <p style="font-size: 0.6rem; font-weight: 700; margin-top: 4px;">${LanguageManager.get('badge_' + b)}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div style="border-top: 1px solid #eee; padding-top: 10px;">
                    <strong>Recent Sessions:</strong>
                    <div style="margin-top: 10px; max-height: 150px; overflow-y: auto;">
                        ${historyHtml || '<p style="font-size: 0.8rem; color: #999;">No history yet.</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};

window.onload = () => GameManager.init();
