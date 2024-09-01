# 準備

```
npm install
```

※Node v18 で動作確認

# 通常の使い方（URL 比較）

## URLリスト作成

urls.json の「urlSet1」に正解の URL、  
「urlSet2」にテストしたい URL を入力

## テストの実行

```
npm run url
```

# デザインデータの書き出し png との比較

## URL リストの作成

urls.json の「imageUrls」にテストしたい URL を入力

## 参照画像の作成

001.png, 002.png ... という命名で/reference/に保存  
※urls.json に記載したのと同じ順番にすること

## テストの実行

```
npm run image
```

# テスト設定の変更

## URL 比較

- backstop.url.js
  - ブラウザの設定など
- scenarios/url-scenarios.js
  - 一致度の閾値など
- backstop_data/engine_scripts/playwright/onReady.js
  - ページを開いてからスクリーンショットを取るまでの処理

## デザインデータ比較

- backstop.image.js
  - ブラウザの設定など
- scenarios/image-scenarios.js
  - 一致度の閾値など
- backstop_data/engine_scripts/playwright/onReady.js
  - ページを開いてからスクリーンショットを取るまでの処理

## スクリーンショットを取るとき適用したい CSS があれば overrideCSS.js を使う

- backstop_data/engine_scripts/playwright/onReady.js にある overrideCSS.js の行のコメントを解除
- 適用したい CSS を overrideCSS.js に記載
- テストの実行時に CSS が適用される

# エラーが出たとき
- Looks like Playwright Test or Playwright was just installed or updated が出たら
  メッセージの通り `npx playwright install` を実行してから、再度テストのcommandを実行してください
