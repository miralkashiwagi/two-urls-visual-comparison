const { test, expect } = require('@playwright/test');

const config = require('../playwright.config.js');
const { pagelist01, pagelist02 } = require('../package.json');

const currentPagelist = process.env.NODE_ENV === 'pagelist01' ? pagelist01 : pagelist02

const threshold = 0.5;//閾値0.2

test.use({
    viewport: { width: 1400, height: 800 },
    deviceScaleFactor: 1,
    channel: 'chrome',
});

test.describe('Screenshot tests', () => {
    currentPagelist.forEach((url, index) => {
        test(`Compare screenshot of ${url}`, async ({ page }) => {
            //キャプチャ処理
            //URLへ移動
            await page.goto(url);

            //ページを下までスクロール
            await page.evaluate(() => window.scroll({top:document.body.scrollHeight, behavior:'smooth'}));
            await page.waitForTimeout(1000); // 1秒待機

            //ページを上までスクロール
            await page.evaluate(() => window.scroll({top: 0, behavior: 'smooth'}));
            await page.waitForTimeout(2000); // 2秒待機



            let exception = false;
            try {
                await expect(page).toHaveScreenshot(`${index.toString().padStart(3, '0')}.png`,{fullPage:true, threshold:threshold, animations:'allow'});
            } catch (error) {
                exception = true;
                throw error; // re-throw the error to fail the test
            }
            if(process.env.NODE_ENV === 'pagelist02' && !exception){
                console.error('passed')
                throw error; // re-throw the error to fail the test
            }

        });
    });
});