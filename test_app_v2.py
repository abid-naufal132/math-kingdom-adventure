import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 900})

        await page.goto("http://localhost:8080/index.html")
        await page.wait_for_selector("#app-container")

        # 1. Take screenshot of Game tab
        await page.click("#tab-game")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification_game_tab.png", full_page=True)
        print("Game tab screenshot saved")

        # 2. Take screenshot of Badges tab
        await page.click("#tab-badges")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification_badges_tab.png", full_page=True)
        print("Badges tab screenshot saved")

        # 3. Take screenshot of Teacher tab
        await page.click("#tab-teacher")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification_teacher_tab.png", full_page=True)
        print("Teacher tab screenshot saved")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
