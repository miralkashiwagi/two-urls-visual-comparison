const urlScenarios = require("./scenarios/url-scenarios");
const path = require("path");

module.exports = {
  id: "url", // 設定のID
  viewports: [
    {
      label: "desktop", // ビューポートの設定名
      width: 1400, // ビューポートの幅
      height: 800, // ビューポートの高さ
    },
  ],
  onBeforeScript: "playwright/onBefore.js", // テスト前に実行するスクリプト
  onReadyScript: "playwright/onReady.js", // テスト準備完了後に実行するスクリプト
  scenarios: urlScenarios, // テストシナリオ
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference", // 参照ビットマップのパス
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
