const urls = require("../urls.json");

// 画像URLのリストを元にシナリオを作成
module.exports = urls.imageUrls.map((url, index) => ({
  label: `${String(index + 1).padStart(3, "0")}`, // インデックスを3桁の文字列に変換
  referenceImage: `reference/${String(index + 1).padStart(3, "0")}.png`, // 参照画像のパス
  url: url, // 画像のURL
  misMatchThreshold: 0.1, // 許容される不一致の閾値
  requireSameDimensions: false, // 同じ寸法が必要かどうか
}));
