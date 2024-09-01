const urls = require("../urls.json");

// URLのリストを元にシナリオを作成
module.exports = urls.urlSet1.map((url, index) => ({
  label: `${index + 1}_${urls.urlSet2[index]}`, // インデックスとURLセット2のURLをラベルに使用
  url: urls.urlSet2[index], // テスト対象のURL（Set 2）
  referenceUrl: url, // 参照URL（Set 1）
  misMatchThreshold: 0.1, // 許容される不一致の閾値
  requireSameDimensions: false, // 同じ寸法が必要かどうか
}));
