const { chromium } = require('playwright');
const path = require('path');

(async () => {
    console.log('Starting Playwright Verification Test...');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    const filePath = 'file://' + path.resolve('index.html');
    await page.goto(filePath);
    await page.waitForLoadState('domcontentloaded');

    console.log('1. Verifying initial page load and title...');
    const title = await page.textContent('#app-title-text');
    console.log('Title text:', title);

    console.log('2. Testing Language Toggle (BM -> EN -> BM)...');
    const initialLearnTab = await page.textContent('#tab-learn');
    console.log('Initial Learn Tab (BM):', initialLearnTab.trim());

    await page.click('#lang-toggle-btn');
    const enLearnTab = await page.textContent('#tab-learn');
    console.log('Toggled Learn Tab (EN):', enLearnTab.trim());

    await page.click('#lang-toggle-btn');
    const bmLearnTabAgain = await page.textContent('#tab-learn');
    console.log('Toggled Back Learn Tab (BM):', bmLearnTabAgain.trim());

    console.log('3. Navigating to Interactive Sharpener Machine (Game Tab)...');
    await page.click('#tab-game');
    await page.waitForTimeout(500);

    const equationText = await page.textContent('.equation-display');
    console.log('Equation displayed:', equationText.replace(/\s+/g, ' ').trim());

    console.log('4. Testing Sharpener Discard Mechanism (Clicking Sharpeners)...');
    const initialDiscarded = await page.textContent('#discarded-count-display');
    console.log('Initial discarded count:', initialDiscarded);

    const sharpeners = await page.$$('.interactive-sharpener');
    console.log('Found sharpener items in pool:', sharpeners.length);
    if (sharpeners.length > 0) {
        await sharpeners[0].click();
        await page.waitForTimeout(300);
        const afterDiscardCount = await page.textContent('#discarded-count-display');
        console.log('Discarded count after clicking 1 sharpener:', afterDiscardCount);
    }

    console.log('5. Testing Speech Synthesis Fallback Logic & Visual Cue...');
    await page.click('#tts-toggle-btn'); // Turn speech toggle or click speak
    await page.click('button[onclick="speakCurrentQuestion()"]');
    await page.waitForTimeout(500);

    console.log('6. Testing Answer Option Click and Diagnostic Metrics...');
    const options = await page.$$('.btn-option');
    if (options.length > 0) {
        await options[0].click();
        await page.waitForTimeout(500);
        const feedbackActive = await page.isVisible('#feedback-overlay.active');
        console.log('Feedback overlay active:', feedbackActive);
        if (feedbackActive) {
            await page.click('button[onclick="closeFeedbackOverlay()"]');
        }
    }

    console.log('7. Verifying Teacher Dashboard Metrics...');
    await page.click('#tab-teacher');
    await page.waitForTimeout(500);

    const totalQ = await page.textContent('#m-total-q');
    const correctQ = await page.textContent('#m-correct');
    const confusionQ = await page.textContent('#m-confusion');
    console.log(`Teacher Dashboard Metrics - Total: ${totalQ}, Correct: ${correctQ}, Addition Confusion: ${confusionQ}`);

    // Capture verification screenshot
    await page.screenshot({ path: 'verification_screenshot.png', fullPage: true });
    console.log('Saved screenshot to verification_screenshot.png');

    await browser.close();
    console.log('Playwright test executed successfully!');
})();
