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
    starEmpty: `<svg viewBox="0 0 24 24" fill="none" stroke="#dfe6e9" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    guide: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="35" r="25" fill="#ffeaa7"/><path d="M50 60 L20 90 H80 Z" fill="#fab1a0"/><rect x="40" y="25" width="20" height="10" rx="5" fill="#55efc4"/><circle cx="40" cy="35" r="3" fill="#2d3436"/><circle cx="60" cy="35" r="3" fill="#2d3436"/><path d="M45 45 Q50 50 55 45" stroke="#2d3436" stroke-width="2" stroke-linecap="round"/></svg>`
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
        accessibility: "Aksesibiliti",
        high_contrast: "Kontras Tinggi",
        dyslexia_font: "Fon Mesra Disleksia",
        text_size: "Saiz Teks",
        voice_toggle: "Suara Narasi",
        dashboard_title: "Papan Pemuka Guru",
        star_hint: "Petunjuk Bintang: ",
        buy_hint: "Guna 10 Bintang",
        not_enough_stars: "Bintang tidak cukup!",
        total_questions: "Jumlah Soalan",
        accuracy: "Ketepatan",
        time_spent: "Masa Digunakan",
        reset_data: "SET SEMULA DATA",
        stats: "STATISTIK",
        off: "MATI",
        on: "HIDUP",
        loading: "Sila tunggu...",
        collection: "Buku Koleksi",
        unlocked: "DIBUKA",
        locked: "TERKUNCI",
        completed: "SELESAI",
        play: "MAIN",
        treasure_found: "Tahniah! Anda jumpa peti harta karun!",
        bgm_toggle: "Muzik Latar",
        bgm_volume: "Volume Muzik",
        sfx_volume: "Volume Kesan Bunyi",
        narration_volume: "Volume Narasi",
        speech_speed: "Kelajuan Suara",
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
        no: "TIDAK",
        learning_title: "Mari Belajar",
        start_quiz: "MULA KUIZ",
        next: "SETERUSNYA",
        prev: "KEMBALI",
        replay_audio: "DENGAR LAGI",
        lets_practice: "Mari Cuba!",
        practice_correct: "Bagus! Jawapan yang betul.",
        practice_wrong: "Cuba lagi! Perhatikan betul-betul.",
        wp_add_1: "Ada {a} epal, tambah {b} epal. Berapa semuanya?",
        wp_add_2: "Ibu beri {a} guli, ayah beri {b} guli. Berapa semuanya?",
        wp_sub_1: "Ada {a} burung, {b} terbang jauh. Berapa yang tinggal?",
        wp_sub_2: "Ada {a} biskut, kita makan {b} biskut. Berapa yang tinggal?",
        lvl1_obj: "Hari ini kita akan belajar menambah nombor 0 hingga 10!",
        lvl1_learn_1: "Menambah bermaksud kita mengumpulkan semua benda menjadi lebih banyak.",
        lvl1_learn_2: "Mari kira singa yang comel ini. 1 singa tambah 2 singa jadi berapa ya?",
        lvl1_learn_3: "Gunakan garis nombor! Dari nombor 2, kita lompat 3 langkah ke depan. Sekarang kita di nombor 5!",
        lvl1_practice_1: "Ada 1 epal, tambah lagi 1 epal. Berapa semuanya?",
        lvl1_practice_2: "Ada 3 guli, tambah lagi 2 guli. Berapa semuanya?",
        lvl2_obj: "Hari ini kita akan belajar menolak nombor 0 hingga 15!",
        lvl2_learn_1: "Menolak bermaksud kita membuang atau mengurangkan benda menjadi sedikit.",
        lvl2_learn_2: "Mari kira monyet ini. Ada 5 monyet, 2 monyet sudah pergi. Tinggal berapa?",
        lvl2_learn_3: "Gunakan garis nombor! Dari nombor 10, kita lompat 4 langkah ke belakang. Sekarang kita di nombor 6!",
        lvl2_practice_1: "Ada 2 roti, makan 1 roti. Tinggal berapa?",
        lvl2_practice_2: "Ada 5 pensel, hilang 3 pensel. Tinggal berapa?",
        lvl3_obj: "Hari ini kita akan belajar tambah dan tolak nombor 0 hingga 20!",
        lvl3_learn_1: "Ingat ya kawan-kawan! Tambah itu kumpul semua, tolak itu buang sedikit.",
        lvl3_learn_2: "Mari cuba soalan tambah besar. 10 tambah 5 jadi berapa?",
        lvl3_learn_3: "Mari cuba soalan tolak pula. 15 tolak 5 tinggal berapa?",
        lvl3_practice_1: "Ibu beli 10 telur, ayah beli lagi 10 telur. Berapa telur semuanya?",
        lvl3_practice_2: "Ada 20 burung, 10 burung terbang jauh. Berapa burung yang tinggal?"
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
        collection: "Collection Book",
        unlocked: "UNLOCKED",
        locked: "LOCKED",
        completed: "COMPLETED",
        play: "PLAY",
        treasure_found: "Congratulations! You found a treasure chest!",
        bgm_toggle: "Background Music",
        bgm_volume: "Music Volume",
        sfx_volume: "SFX Volume",
        narration_volume: "Narration Volume",
        speech_speed: "Speech Speed",
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
        no: "NO",
        learning_title: "Let's Learn",
        start_quiz: "START QUIZ",
        next: "NEXT",
        prev: "PREV",
        replay_audio: "REPLAY",
        lets_practice: "Let's Try!",
        practice_correct: "Great! That's correct.",
        practice_wrong: "Try again! Look closely.",
        wp_add_1: "There are {a} apples, add {b} apples. How many in total?",
        wp_add_2: "Mom gives {a} marbles, Dad gives {b} marbles. How many in total?",
        wp_sub_1: "There are {a} birds, {b} fly away. How many are left?",
        wp_sub_2: "There are {a} cookies, eat {b} cookies. How many are left?",
        lvl1_obj: "Today we will learn how to add numbers from 0 to 10!",
        lvl1_learn_1: "Adding means putting things together to get more.",
        lvl1_learn_2: "Let's count these cute lions. 1 lion plus 2 lions equals how many?",
        lvl1_learn_3: "Look at the number line. From 2, we jump 3 steps forward. We reach number 5!",
        lvl1_practice_1: "There is 1 apple, add 1 more apple. How many apples now?",
        lvl1_practice_2: "There are 3 marbles, add 2 more marbles. How many marbles now?",
        lvl2_obj: "Today we will learn how to subtract numbers from 0 to 15!",
        lvl2_learn_1: "Subtracting means taking things away to get less.",
        lvl2_learn_2: "Let's count these monkeys. There are 5 monkeys, 2 monkeys went away. How many are left?",
        lvl2_learn_3: "Look at the number line. From 10, we jump 4 steps backward. We reach number 6!",
        lvl2_practice_1: "There are 2 buns, eat 1 bun. How many are left?",
        lvl2_practice_2: "There are 5 pencils, lose 3 pencils. How many are left?",
        lvl3_obj: "Today we will learn addition and subtraction from 0 to 20!",
        lvl3_learn_1: "Remember friends! Plus means more, minus means less.",
        lvl3_learn_2: "Let's try a big addition. What is 10 plus 5?",
        lvl3_learn_3: "Now for a big subtraction. What is 15 minus 5?",
        lvl3_practice_1: "Mom buys 10 eggs, Dad buys 10 more. How many eggs in total?",
        lvl3_practice_2: "There are 20 birds, 10 birds fly away. How many birds left?"
    }
};

/* --- STATE MANAGEMENT --- */
const gameState = {
    selectedAvatar: 'lion',
    selectedLevel: 1,
    unlockedLevels: [1],
    levelRatings: { 1: 0, 2: 0, 3: 0 },
    starCurrency: 0,
    completedLearning: [],
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
        voiceEnabled: true,
        narrationVolume: 1.0
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

    learningConfig: {
        1: [
            { type: 'objective', textKey: 'lvl1_obj' },
            { type: 'text', textKey: 'lvl1_learn_1' },
            { type: 'counting', textKey: 'lvl1_learn_2', animal: 'lion', a: 1, b: 2, op: '+' },
            { type: 'guided', textKey: 'lvl1_practice_1', a: 1, b: 1, op: '+', answer: 2 },
            { type: 'numberline', textKey: 'lvl1_learn_3', start: 2, steps: 3, op: '+' },
            { type: 'practice', textKey: 'lvl1_practice_1', a: 1, b: 1, op: '+', answer: 2, options: [1, 2, 3, 4] },
            { type: 'practice', textKey: 'lvl1_practice_2', a: 3, b: 2, op: '+', answer: 5, options: [4, 5, 6, 7] }
        ],
        2: [
            { type: 'objective', textKey: 'lvl2_obj' },
            { type: 'text', textKey: 'lvl2_learn_1' },
            { type: 'counting', textKey: 'lvl2_learn_2', animal: 'monkey', a: 5, b: 2, op: '-' },
            { type: 'guided', textKey: 'lvl2_practice_1', a: 2, b: 1, op: '-', answer: 1 },
            { type: 'numberline', textKey: 'lvl2_learn_3', start: 10, steps: 4, op: '-' },
            { type: 'practice', textKey: 'lvl2_practice_1', a: 2, b: 1, op: '-', answer: 1, options: [0, 1, 2, 3] },
            { type: 'practice', textKey: 'lvl2_practice_2', a: 5, b: 3, op: '-', answer: 2, options: [1, 2, 3, 4] }
        ],
        3: [
            { type: 'objective', textKey: 'lvl3_obj' },
            { type: 'text', textKey: 'lvl3_learn_1' },
            { type: 'counting', textKey: 'lvl3_learn_2', animal: 'zebra', a: 10, b: 5, op: '+' },
            { type: 'guided', textKey: 'lvl3_practice_1', a: 10, b: 10, op: '+', answer: 20 },
            { type: 'counting', textKey: 'lvl3_learn_3', animal: 'zebra', a: 15, b: 5, op: '-' },
            { type: 'guided', textKey: 'lvl3_practice_2', a: 20, b: 10, op: '-', answer: 10 },
            { type: 'practice', textKey: 'lvl3_practice_1', a: 10, b: 10, op: '+', answer: 20, options: [10, 15, 18, 20] },
            { type: 'practice', textKey: 'lvl3_practice_2', a: 20, b: 10, op: '-', answer: 10, options: [5, 10, 15, 20] }
        ]
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
            completedLearning: gameState.completedLearning,
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
            // Safe merge to preserve new default settings
            if (data.accessibility) {
                Object.assign(gameState.accessibility, data.accessibility);
                delete data.accessibility;
            }
            if (data.stats) {
                Object.assign(gameState.stats, data.stats);
                delete data.stats;
            }
            Object.assign(gameState, data);
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
        const savedLang = localStorage.getItem('selectedLanguage');
        if (savedLang) {
            this.current = savedLang;
        }
        this.updateUI();
    },
    set(lang) {
        this.current = lang;
        localStorage.setItem('selectedLanguage', lang);
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

        // Enforce the "kosong" rule in Malay speech and "zero" in English
        if (LanguageManager.current === 'ms') {
            speechText = speechText.replace(/(^|[^0-9])0([^0-9]|$)/g, "$1kosong$2");
        } else {
            speechText = speechText.replace(/(^|[^0-9])0([^0-9]|$)/g, "$1zero$2");
        }

        const utterance = new SpeechSynthesisUtterance(speechText);
        utterance.rate = gameState.accessibility.speechSpeed || 1.0;
        utterance.volume = gameState.accessibility.narrationVolume !== undefined ? gameState.accessibility.narrationVolume : 1.0;
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
    audioCtx: null,
    bgmGain: null,
    masterSfxGain: null,
    currentBgmType: null,
    bgmInterval: null,
    isFading: false,

    init() {
        // Initialized on first user interaction
    },

    createContext() {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            this.bgmGain = this.audioCtx.createGain();
            this.bgmGain.connect(this.audioCtx.destination);
            this.updateBgmVolume();

            this.masterSfxGain = this.audioCtx.createGain();
            this.masterSfxGain.connect(this.audioCtx.destination);
        }
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    },

    updateBgmVolume() {
        if (this.bgmGain && this.audioCtx) {
            const targetVol = gameState.accessibility.bgmEnabled ? gameState.accessibility.bgmVolume * 0.4 : 0;
            this.bgmGain.gain.setTargetAtTime(targetVol, this.audioCtx.currentTime, 0.1);
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

        osc.connect(this.masterSfxGain);
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
            osc.connect(this.masterSfxGain);
            osc.start(ctx.currentTime + i * step);
            osc.stop(ctx.currentTime + i * step + 0.3);
        });
    },

    fadeToTrack(type) {
        if (this.currentBgmType === type || this.isFading) return;
        this.createContext();

        this.isFading = true;
        const fadeTime = 1.0;

        // Fade out
        if (this.bgmGain) {
            this.bgmGain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + fadeTime);
        }

        setTimeout(() => {
            if (this.bgmInterval) clearInterval(this.bgmInterval);
            this.currentBgmType = type;
            this.startBgmLoop(type);

            // Fade in
            if (this.bgmGain) {
                const targetVol = gameState.accessibility.bgmEnabled ? gameState.accessibility.bgmVolume * 0.4 : 0;
                this.bgmGain.gain.exponentialRampToValueAtTime(Math.max(0.001, targetVol), this.audioCtx.currentTime + fadeTime);
            }
            this.isFading = false;
        }, fadeTime * 1000);
    },

    startBgmLoop(type) {
        const tracks = {
            menu: { notes: [261.63, 329.63, 392.00, 349.23], tempo: 110, type: 'sine' }, // C4, E4, G4, F4
            learning: { notes: [329.63, 392.00, 440.00, 329.63], tempo: 90, type: 'triangle' }, // E4, G4, A4, E4
            quiz: { notes: [392.00, 440.00, 523.25, 493.88], tempo: 130, type: 'sine' }, // G4, A4, C5, B4
            celebration: { notes: [523.25, 659.25, 783.99, 1046.50], tempo: 150, type: 'sine' } // C5, E5, G5, C6
        };

        const config = tracks[type] || tracks.menu;
        const ctx = this.audioCtx;
        const quarter = 60 / config.tempo;

        const playNote = (freq, time) => {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = config.type;
            osc.frequency.setValueAtTime(freq, time);
            g.gain.setValueAtTime(0, time);
            g.gain.linearRampToValueAtTime(0.1, time + 0.1);
            g.gain.exponentialRampToValueAtTime(0.001, time + quarter * 0.9);
            osc.connect(g);
            g.connect(this.bgmGain);
            osc.start(time);
            osc.stop(time + quarter);
        };

        let nextTime = ctx.currentTime + 0.1;
        const schedule = () => {
            for (let i = 0; i < 4; i++) {
                playNote(config.notes[i], nextTime + i * quarter);
            }
            nextTime += 4 * quarter;
        };

        schedule();
        this.bgmInterval = setInterval(() => {
            if (ctx.currentTime > nextTime - quarter * 2) {
                schedule();
            }
        }, quarter * 2000);
    },

    startBGM() {
        if (this.currentBgmType || !gameState.accessibility.bgmEnabled) return;
        this.fadeToTrack('menu');
    },

    stopBGM() {
        if (this.bgmGain && this.audioCtx) {
            this.bgmGain.gain.setTargetAtTime(0, this.audioCtx.currentTime, 0.5);
        }
        setTimeout(() => {
            if (this.bgmInterval) clearInterval(this.bgmInterval);
            this.currentBgmType = null;
        }, 600);
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

        // Randomly decide if it's a word problem (30% chance for level 2+, 0% for level 1)
        const isWordProblem = level > 1 && Math.random() < 0.3;
        let text = `${formatNum(a)} ${op} ${formatNum(b)}`;
        let narration = text;

        if (isWordProblem) {
            const key = op === '+' ? `wp_add_${Math.floor(Math.random() * 2) + 1}` : `wp_sub_${Math.floor(Math.random() * 2) + 1}`;
            const template = LanguageManager.get(key);
            text = template.replace('{a}', formatNum(a)).replace('{b}', formatNum(b));
            narration = text;
        }

        return { a, b, op, answer, options, text, narration, isWordProblem };
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
 * LEARNING MANAGER
 */
const LearningManager = {
    currentLevel: 1,
    currentStepIndex: 0,
    steps: [],

    start(level) {
        this.currentLevel = level;
        this.currentStepIndex = 0;
        this.steps = gameState.learningConfig[level];
        CelebrationManager.clearAll();
        GameManager.showScreen('learning-screen');
        this.renderStep();
    },

    renderStep() {
        const step = this.steps[this.currentStepIndex];
        const container = document.getElementById('learning-content-area');
        const nextBtn = document.getElementById('next-learn-btn');
        const startQuizBtn = document.getElementById('start-quiz-btn');
        const progressBar = document.getElementById('learning-progress-bar');

        if (!container) return;

        progressBar.style.width = `${((this.currentStepIndex + 1) / this.steps.length) * 100}%`;

        let html = `<h2 style="font-size: 1.5rem; margin-bottom: 20px; color: var(--secondary-color); line-height: 1.4;">${LanguageManager.get(step.textKey)}</h2>`;

        if (step.type === 'objective') {
            html = `
                <div class="objective-card text-center" style="animation: popIn 0.5s ease-out;">
                    <div style="width: 100px; height: 100px; margin: 0 auto 20px;">${SVGS.badgeExplorer}</div>
                    <h2 style="font-size: 1.8rem; color: var(--primary-color);">${LanguageManager.get(step.textKey)}</h2>
                </div>
            `;
        } else if (step.type === 'counting') {
            html += this.generateCountingHtml(step);
        } else if (step.type === 'numberline') {
            html += this.generateNumberLineHtml(step);
        } else if (step.type === 'guided') {
            html += this.generateGuidedHtml(step);
        } else if (step.type === 'practice') {
            html += this.generatePracticeHtml(step);
        }

        container.innerHTML = html;

        // Navigation logic
        const isLastStep = this.currentStepIndex === this.steps.length - 1;
        if (isLastStep) {
            nextBtn.classList.add('hidden');
            startQuizBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            startQuizBtn.classList.add('hidden');
        }

        document.getElementById('prev-learn-btn').disabled = this.currentStepIndex === 0;

        this.playNarration();
    },

    generateCountingHtml(step) {
        let html = '<div class="animal-counting-area" style="text-align: center;">';

        // First group
        html += '<div class="animal-group">';
        for (let i = 0; i < step.a; i++) {
            html += `<div class="animal-item" style="animation-delay: ${i * 0.1}s">${SVGS[step.animal]}</div>`;
        }
        html += '</div>';

        // Operator & Numbers
        html += `
            <div style="display: flex; justify-content: center; align-items: center; gap: 20px; font-size: 2.5rem; font-weight: 900; margin: 15px 0;">
                <span>${step.a}</span>
                <span style="color: var(--danger-color);">${step.op}</span>
                <span>${step.b}</span>
            </div>
        `;

        // Second group
        html += '<div class="animal-group">';
        for (let i = 0; i < step.b; i++) {
            html += `<div class="animal-item" style="animation-delay: ${(step.a + i) * 0.1}s">${SVGS[step.animal]}</div>`;
        }
        html += '</div>';

        html += '</div>';
        return html;
    },

    generateNumberLineHtml(step) {
        const max = gameState.levelConfig[this.currentLevel].max;
        let marksHtml = '';
        for (let i = 0; i <= max; i++) {
            marksHtml += `<div class="nl-mark">${i}</div>`;
        }

        const startPerc = (step.start / max) * 100;
        const endValue = step.op === '+' ? step.start + step.steps : step.start - step.steps;
        const endPerc = (endValue / max) * 100;

        const left = Math.min(startPerc, endPerc);
        const width = Math.abs(startPerc - endPerc);

        return `
            <div class="number-line-container">
                <div class="nl-jump-container">
                    <div class="nl-jump-arc" style="left: ${left}%; width: ${width}%; height: 60px; top: -50px; border-color: var(--secondary-color);"></div>
                </div>
                <div class="number-line-marks">
                    ${marksHtml}
                </div>
                <div style="margin-top: 30px; font-weight: 900; font-size: 1.5rem;">
                    ${step.start} ${step.op} ${step.steps} = ${endValue}
                </div>
            </div>
        `;
    },

    generateGuidedHtml(step) {
        return `
            <div class="guided-area text-center">
                <div style="font-size: 3rem; font-weight: 900; margin-bottom: 20px;">
                    ${step.a} ${step.op} ${step.b} = <span style="color: var(--success-color); animation: pulse 1s infinite;">${step.answer}</span>
                </div>
                <div class="card" style="background: #e3f2fd; border-color: #2196f3;">
                    <p style="font-size: 1.2rem; font-weight: 700;">${LanguageManager.get('lets_practice')}</p>
                    <div style="display: flex; justify-content: center; gap: 10px; margin-top: 15px;">
                        ${Array.from({length: step.answer}, (_, i) => `<div class="hint-star" style="width: 30px; height: 30px; animation-delay: ${i * 0.1}s;">${SVGS.star}</div>`).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    generatePracticeHtml(step) {
        let optionsHtml = '';
        step.options.forEach(opt => {
            optionsHtml += `<button class="practice-opt-btn" onclick="LearningManager.checkPractice(${opt})">${opt}</button>`;
        });

        return `
            <div class="practice-area">
                <h3 data-key="lets_practice" style="margin-bottom: 15px; color: var(--primary-color);">${LanguageManager.get('lets_practice')}</h3>
                <div style="font-size: 2.5rem; font-weight: 900; margin-bottom: 20px; background: #f8f9fa; padding: 15px; border-radius: 15px;">
                    ${step.a} ${step.op} ${step.b} = ?
                </div>
                <div class="practice-grid">
                    ${optionsHtml}
                </div>
                <div id="practice-feedback" class="practice-feedback hidden"></div>
            </div>
        `;
    },

    checkPractice(val) {
        const step = this.steps[this.currentStepIndex];
        const feedback = document.getElementById('practice-feedback');
        const isCorrect = val === step.answer;

        feedback.classList.remove('hidden', 'correct', 'wrong');
        if (isCorrect) {
            feedback.innerText = LanguageManager.get('practice_correct');
            feedback.classList.add('correct');
            AudioManager.playSFX('correct');
            SpeechManager.speak(LanguageManager.get('practice_correct'));
            CelebrationManager.triggerStars(3);
        } else {
            feedback.innerText = LanguageManager.get('practice_wrong');
            feedback.classList.add('wrong');
            AudioManager.playSFX('wrong');
            SpeechManager.speak(LanguageManager.get('practice_wrong'));
        }
    },

    nextStep() {
        if (this.currentStepIndex < this.steps.length - 1) {
            this.currentStepIndex++;
            this.renderStep();
        }
    },

    prevStep() {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.renderStep();
        }
    },

    playNarration() {
        const step = this.steps[this.currentStepIndex];
        SpeechManager.speak(LanguageManager.get(step.textKey));
    }
};

/**
 * GUIDE MANAGER
 */
const GuideManager = {
    speak(textKey, containerId = 'app-container') {
        const text = LanguageManager.get(textKey);
        this.showBubble(text, containerId);
        SpeechManager.speak(text);
    },

    showBubble(text, containerId) {
        this.hideBubble();
        const container = document.getElementById(containerId);
        if (!container) return;
        const bubble = document.createElement('div');
        bubble.id = 'guide-bubble-container';
        bubble.className = 'guide-bubble-anim';
        bubble.innerHTML = `
            <div class="guide-character">${SVGS.guide}</div>
            <div class="guide-bubble">
                <p>${text}</p>
            </div>
        `;
        container.appendChild(bubble);
        if (!gameState.accessibility.reducedMotion) {
            setTimeout(() => bubble.classList.add('active'), 50);
        } else {
            bubble.classList.add('active');
        }
    },

    hideBubble() {
        const existing = document.getElementById('guide-bubble-container');
        if (existing) existing.remove();
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
    },
    clearAll() {
        document.querySelectorAll('.confetti, .celebration-star').forEach(el => el.remove());
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
        const levelCount = Object.keys(gameState.levelConfig).length;
        for (let lv = 1; lv <= levelCount; lv++) {
            const isLocked = !gameState.unlockedLevels.includes(lv);
            const isCompleted = gameState.levelRatings[lv] > 0;
            const card = document.createElement('button');
            card.className = `level-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`;
            card.setAttribute('aria-label', `${LanguageManager.get('level_label')} ${lv}`);
            if (isLocked) card.setAttribute('disabled', 'true');

            const badgeContent = isCompleted ? SVGS.check : formatNum(lv);
            const statusLabel = isLocked ? LanguageManager.get('locked') : (isCompleted ? LanguageManager.get('completed') : LanguageManager.get('play'));

            card.innerHTML = `
                <div class="level-badge">${badgeContent}</div>
                <div class="level-info" style="text-align: left; flex-grow: 1;">
                    <div style="font-size: 0.8rem; font-weight: 900; color: var(--secondary-color);">${LanguageManager.get('level_label')} ${lv}</div>
                    <h3 data-key="lvl${lv}_title">${LanguageManager.get('lvl'+lv+'_title')}</h3>
                    <p data-key="lvl${lv}_desc" style="font-size: 0.9rem; opacity: 0.8;">${LanguageManager.get('lvl'+lv+'_desc')}</p>
                </div>
                <div class="level-status-tag" style="font-size: 0.7rem; font-weight: 900; padding: 4px 8px; border-radius: 10px; background: #dfe6e9;">${statusLabel}</div>
            `;
            if (!isLocked) {
                card.onclick = () => {
                    gameState.selectedLevel = lv;
                    LearningManager.start(lv);
                };
            }
            container.appendChild(card);
        }
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

                if (i === 3 || i === 5) {
                    node.innerHTML = `<div class="chest-icon" style="width: 40px; height: 40px; animation: bounce 1s infinite alternate;">${SVGS.badgeCollector}</div>`;
                } else {
                    node.innerText = formatNum(i);
                }
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
        const narrationSlider = document.getElementById('narration-slider');
        const speechSpeedSlider = document.getElementById('speech-speed-slider');

        if (contrastBtn) contrastBtn.innerText = acc.highContrast ? LanguageManager.get('on') : LanguageManager.get('off');
        if (dyslexiaBtn) dyslexiaBtn.innerText = acc.dyslexiaFont ? LanguageManager.get('on') : LanguageManager.get('off');
        if (voiceBtn) voiceBtn.innerText = acc.voiceEnabled ? LanguageManager.get('on') : LanguageManager.get('off');
        if (bgmToggleBtn) bgmToggleBtn.innerText = acc.bgmEnabled ? LanguageManager.get('on') : LanguageManager.get('off');
        if (motionBtn) motionBtn.innerText = acc.reducedMotion ? LanguageManager.get('on') : LanguageManager.get('off');
        if (bgmSlider) bgmSlider.value = acc.bgmVolume;
        if (sfxSlider) sfxSlider.value = acc.sfxVolume;
        if (narrationSlider) narrationSlider.value = acc.narrationVolume || 1.0;
        if (speechSpeedSlider) speechSpeedSlider.value = acc.speechSpeed || 1.0;
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

            // Handle BGM transitions
            if (screenId === 'learning-screen') {
                AudioManager.fadeToTrack('learning');
            } else if (screenId === 'game-screen' || screenId === 'map-screen') {
                AudioManager.fadeToTrack('quiz');
            } else if (screenId === 'result-screen') {
                AudioManager.fadeToTrack('celebration');
            } else {
                AudioManager.fadeToTrack('menu');
            }

            if (screenId === 'level-selection-screen') LevelManager.renderLevelList();
            if (screenId === 'map-screen') {
                LevelManager.renderMap();
                const playBtn = document.getElementById('play-level-btn');
                if (playBtn) playBtn.classList.toggle('hidden', gameState.isGameActive);
            }
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
        if (typeof GuideManager !== 'undefined') GuideManager.hideBubble();
        this.showScreen('splash-screen');
    },

    proceedToNextLevel() {
        if (this.autoContinueInterval) clearInterval(this.autoContinueInterval);
        const currentLevel = gameState.selectedLevel;
        const nextLevel = currentLevel + 1;
        const totalLevels = Object.keys(gameState.levelConfig).length;

        if (gameState.levelRatings[currentLevel] >= 1 && nextLevel <= totalLevels) {
            // Unlock next level persistently
            if (!gameState.unlockedLevels.includes(nextLevel)) {
                gameState.unlockedLevels.push(nextLevel);
            }
            gameState.selectedLevel = nextLevel;
            gameState.currentQuestionIndex = 0;
            SaveSystem.save();
            this.updateTheme();
            LearningManager.start(nextLevel);
        } else {
            this.showScreen('level-selection-screen');
        }
    },

    startLevel() {
        this.updateTheme();
        CelebrationManager.clearAll();
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
        if (q.isWordProblem) {
            SpeechManager.speak(q.narration);
        } else {
            const opStr = q.op === '+' ? (LanguageManager.current === 'ms' ? 'tambah' : 'plus') : (LanguageManager.current === 'ms' ? 'tolak' : 'minus');
            const eqStr = LanguageManager.current === 'ms' ? 'sama dengan berapa?' : 'equals what?';
            SpeechManager.speak(`${q.a} ${opStr} ${q.b} ${eqStr}`);
        }
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

            // Treasure Chest Reward
            if (gameState.currentQuestionIndex === 3 || gameState.currentQuestionIndex === 5) {
                const bonus = gameState.currentQuestionIndex === 3 ? 10 : 25;
                StarManager.addStars(bonus);
            }
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
        const newlyUnlocked = [];
        if (!gameState.badges.includes('novice') && gameState.stats.correctAnswers >= 5) {
            newlyUnlocked.push('novice');
        }
        if (!gameState.badges.includes('explorer') && gameState.unlockedLevels.includes(2)) {
            newlyUnlocked.push('explorer');
        }
        if (!gameState.badges.includes('master') && gameState.streak >= 5) {
            newlyUnlocked.push('master');
        }
        if (!gameState.badges.includes('collector') && gameState.starCurrency >= 100) {
            newlyUnlocked.push('collector');
        }

        newlyUnlocked.forEach(b => {
            gameState.badges.push(b);
            AudioManager.playSFX('star');
        });
        if (newlyUnlocked.length > 0) SaveSystem.save();
        return newlyUnlocked;
    },

    endLevel() {
        const resultStars = Math.min(3, Math.ceil(gameState.currentScore / 16));
        gameState.levelRatings[gameState.selectedLevel] = Math.max(gameState.levelRatings[gameState.selectedLevel], resultStars);

        let bonusStars = resultStars === 3 ? 50 : (resultStars === 2 ? 20 : 10);
        StarManager.addStars(bonusStars);

        const totalLevels = Object.keys(gameState.levelConfig).length;
        const hasPassed = resultStars >= 1;

        if (hasPassed) {
            const nextLv = gameState.selectedLevel + 1;
            if (nextLv <= totalLevels && !gameState.unlockedLevels.includes(nextLv)) {
                gameState.unlockedLevels.push(nextLv);
            }
            if (resultStars === 3) this.unlockRandomAnimal();
        }

        const isFinalLevel = gameState.selectedLevel === totalLevels;

        // Record history
        gameState.stats.history.unshift({
            level: gameState.selectedLevel,
            score: gameState.currentScore,
            stars: resultStars,
            date: new Date().toLocaleDateString()
        });
        if (gameState.stats.history.length > 10) gameState.stats.history.pop();

        const newlyUnlocked = this.checkBadges();
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

        this.renderResultScreen(resultStars, newlyUnlocked);
        this.showScreen('result-screen');
        AudioManager.playSFX('complete');
        if (resultStars >= 1) CelebrationManager.triggerConfetti();
    },

    autoContinueInterval: null,
    renderResultScreen(stars, newlyUnlocked = []) {
        const starContainer = document.getElementById('result-stars');
        starContainer.innerHTML = '';
        for(let i=0; i<3; i++) {
            const star = document.createElement('div');
            star.innerHTML = i < stars ? SVGS.star : SVGS.starEmpty;
            star.style.width = '50px';
            starContainer.appendChild(star);
        }
        document.getElementById('final-score').innerText = formatNum(gameState.currentScore);

        // Achievement Display
        const rewardDisplay = document.getElementById('reward-display');
        if (newlyUnlocked.length > 0) {
            let badgeHtml = `<div style="margin-top: 10px; font-weight: 700; color: var(--secondary-color);">${LanguageManager.get('badges_label')}!</div><div style="display: flex; justify-content: center; gap: 15px; margin-top: 10px;">`;
            newlyUnlocked.forEach(b => {
                badgeHtml += `
                    <div style="text-align: center; animation: starSpin 0.6s ease-out;">
                        <div style="width: 50px; height: 50px; margin: 0 auto;">${SVGS['badge' + b.charAt(0).toUpperCase() + b.slice(1)]}</div>
                        <p style="font-size: 0.7rem; font-weight: 900;">${LanguageManager.get('badge_' + b)}</p>
                    </div>
                `;
            });
            badgeHtml += '</div>';
            rewardDisplay.innerHTML += badgeHtml;
        }

        // Auto-continue logic
        const timerEl = document.getElementById('auto-continue-timer');
        if (this.autoContinueInterval) clearInterval(this.autoContinueInterval);

        const totalLevels = Object.keys(gameState.levelConfig).length;
        const isFinalLevel = gameState.selectedLevel === totalLevels;
        const hasPassed = stars >= 1;

        if (hasPassed && !isFinalLevel) {
            let timeLeft = 5;
            timerEl.innerText = `${LanguageManager.get('auto_continue')} ${timeLeft}s...`;
            this.autoContinueInterval = setInterval(() => {
                timeLeft--;
                timerEl.innerText = `${LanguageManager.get('auto_continue')} ${timeLeft}s...`;
                if (timeLeft <= 0) {
                    clearInterval(this.autoContinueInterval);
                    this.proceedToNextLevel();
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
                    <p style="font-weight: 900; margin-top: 10px; color: var(--accent-shadow);">${LanguageManager.get('unlocked')}!</p>
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
        document.getElementById('play-level-btn').onclick = () => LearningManager.start(gameState.selectedLevel);
        document.getElementById('retry-btn').onclick = () => LearningManager.start(gameState.selectedLevel);

        document.getElementById('next-learn-btn').onclick = () => LearningManager.nextStep();
        document.getElementById('prev-learn-btn').onclick = () => LearningManager.prevStep();
        document.getElementById('replay-learn-audio-btn').onclick = () => LearningManager.playNarration();
        document.getElementById('exit-learning-btn').onclick = () => this.handleHomeClick();
        document.getElementById('start-quiz-btn').onclick = () => {
            if (!gameState.completedLearning.includes(gameState.selectedLevel)) {
                gameState.completedLearning.push(gameState.selectedLevel);
                SaveSystem.save();
            }
            this.startLevel();
        };
        document.getElementById('buy-hint-btn').onclick = () => this.buyHint();
        document.getElementById('map-return-btn').onclick = () => this.proceedToNextLevel();

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
            AudioManager.updateBgmVolume();
            SaveSystem.save();
        };
        document.getElementById('bgm-slider').oninput = (e) => {
            gameState.accessibility.bgmVolume = parseFloat(e.target.value);
            AudioManager.updateBgmVolume();
            SaveSystem.save();
        };
        document.getElementById('sfx-slider').oninput = (e) => {
            gameState.accessibility.sfxVolume = parseFloat(e.target.value);
            SaveSystem.save();
        };
        document.getElementById('narration-slider').oninput = (e) => {
            gameState.accessibility.narrationVolume = parseFloat(e.target.value);
            SaveSystem.save();
        };
        document.getElementById('speech-speed-slider').oninput = (e) => {
            gameState.accessibility.speechSpeed = parseFloat(e.target.value);
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

        document.getElementById('open-collection-btn-splash').onclick = () => {
            this.renderCollection();
            this.showScreen('collection-screen');
        };
    },

    renderCollection() {
        const container = document.getElementById('collection-grid');
        if (!container) return;
        container.innerHTML = '';
        const allAnimals = ['lion', 'monkey', 'zebra', 'elephant', 'giraffe', 'parrot', 'turtle', 'rhino', 'hippo'];

        allAnimals.forEach(animal => {
            const isUnlocked = gameState.animals.includes(animal);
            const card = document.createElement('div');
            card.className = `collection-card ${isUnlocked ? '' : 'locked'}`;

            const animalName = isUnlocked ? animal.toUpperCase() : '???';
            const statusLabel = isUnlocked ? LanguageManager.get('unlocked') : LanguageManager.get('locked');
            const statusClass = isUnlocked ? 'status-unlocked' : 'status-locked';

            card.innerHTML = `
                <div class="collection-animal-svg">${SVGS[animal]}</div>
                <h3 style="font-size: 1rem; margin: 0;">${animalName}</h3>
                <div class="collection-status ${statusClass}">${statusLabel}</div>
            `;
            container.appendChild(card);
        });
    },

    buyHint() {
        if (StarManager.spendStars(10)) {
            const hintBox = document.getElementById('hint-box');
            const hintText = document.getElementById('hint-text');
            hintBox.classList.remove('hidden');

            // Visual Star Hint System
            const answer = gameState.currentQuestion.answer;
            const levelMax = gameState.levelConfig[gameState.selectedLevel].max;

            const q = gameState.currentQuestion;
            hintText.innerHTML = `
                <div>${LanguageManager.get('star_hint')}${formatNum(answer)}</div>
                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;">
                    <div style="display: flex; justify-content: center; gap: 5px; flex-wrap: wrap;">
                        ${Array.from({length: q.a}, (_, i) => `<div style="width: 25px; height: 25px;">${SVGS[gameState.selectedAvatar]}</div>`).join('')}
                    </div>
                    <div style="font-weight: 900; color: var(--danger-color);">${q.op}</div>
                    <div style="display: flex; justify-content: center; gap: 5px; flex-wrap: wrap;">
                        ${Array.from({length: q.b}, (_, i) => `<div style="width: 25px; height: 25px;">${SVGS[gameState.selectedAvatar]}</div>`).join('')}
                    </div>
                </div>
                <div class="star-hint-container" style="border-top: 1px solid #ddd; padding-top: 10px; margin-top: 10px;">
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
