const urls = require('../urls.json');

module.exports = urls.imageUrls.map((url, index) => ({
    label: `${String(index + 1).padStart(3, '0')}`,
    referenceImage: `reference/${String(index + 1).padStart(3, '0')}.png`,
    url: url,
    misMatchThreshold: 0.1,
    requireSameDimensions: true,
    onReadyScript: 'applyCss.js'  // カスタムCSSを適用するスクリプトを指定
}));