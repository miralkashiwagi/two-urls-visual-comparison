const fs = require('fs').promises;
const path = require('path');

module.exports = async (page, scenario) => {
    console.log('SCENARIO > ' + scenario.label);

    // screenshot.cssファイルを読み込む
    const cssPath = path.join(__dirname, '..', 'screenshot.css');
    try {
        const cssContent = await fs.readFile(cssPath, 'utf8');

        // ページにCSSを適用
        await page.evaluate((css) => {
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        }, cssContent);

        console.log('Custom CSS applied successfully');
    } catch (error) {
        console.error('Error applying custom CSS:', error);
    }
};