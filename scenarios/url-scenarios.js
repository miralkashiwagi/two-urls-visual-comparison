const urls = require('../urls.json');

module.exports = urls.urlSet1.map((url, index) => ({
    label: `${index + 1}_${urls.urlSet2[index]}`,
    url: urls.urlSet2[index],  // テスト対象のURL（Set 2）
    referenceUrl: url,         // 参照URL（Set 1）
    misMatchThreshold: 0.1,
    requireSameDimensions: true,
}));
