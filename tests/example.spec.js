const { test, expect } = require('@playwright/test');

const config = require('../playwright.config.js');
const { pagelist01, pagelist02 } = require('../package.json');

const currentPagelist = process.env.NODE_ENV || 'pagelist01' ? pagelist01 : pagelist02

test.use({
    viewport: { width: 1400, height: 800 },
    deviceScaleFactor: 1,
    channel: 'chrome',
});

test.describe('Screenshot tests', () => {
    console.log(process.env.NODE_ENV);
    currentPagelist.forEach((url, index) => {
        test(`Compare screenshot of ${url}`, async ({ page }) => {
            await page.goto(url);
            await expect(page).toHaveScreenshot(`${index.toString().padStart(3, '0')}.png`,{fullPage:true, });
        });
    });
});