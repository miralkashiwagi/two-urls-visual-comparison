const imageScenarios = require("./scenarios/image-scenarios");
const path = require("path");

module.exports = {
  id: "image", // 設定のID
  viewports: [
    {
      label: "device", // ビューポートの設定名
      width: 1400, // ビューポートの幅
      height: 800, // ビューポートの高さ
    },
  ],
  onBeforeScript: "playwright/onBefore.js", // テスト前に実行するスクリプト
  onReadyScript: "playwright/onReady.js", // テスト準備完了後に実行するスクリプト
  scenarios: imageScenarios, // テストシナリオ
  paths: {
    bitmaps_reference: "reference", // 参照ビットマップのパス
    bitmaps_test: "backstop_data/bitmaps_test", // テストビットマップのパス
    engine_scripts: "backstop_data/engine_scripts", // エンジンスクリプトのパス
    html_report: "backstop_data/html_report", // HTMLレポートのパス
    ci_report: "backstop_data/ci_report", // CIレポートのパス
  },
  report: ["browser"], // レポートの形式
  engine: "playwright", // 使用するエンジン 'puppeteer' か 'playwright'
  engineOptions: {
    args: ["--no-sandbox"], // エンジンのオプション
  },
  asyncCaptureLimit: 2, // 同時キャプチャの制限
  asyncCompareLimit: 50, // 同時比較の制限
  debug: false, // デバッグモード
  debugWindow: false, // デバッグウィンドウの表示
};
