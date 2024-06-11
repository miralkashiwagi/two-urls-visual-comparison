# 準備

```
npm install
```

※Node v20で動作確認（v18でも動く気がする）

# 通常の使い方

## ページリスト作成

package.jsonのpagelist01と、pagelist02にテストしたいURLを記入。  
比較したいURLは同じ順番にくるようにする。

```json
"pagelist01": [
  "https://example.com/test01-dev/", 
  "https://example.com/test02-dev/"
],
"pagelist02": [
  "https://example.com/test01/", 
  "https://example.com/test02/"
]
```

## pagelist01のスクリーンショット撮影

```
npm run cap
```

/snapshots/にpngを保存します。


## pagelist02との比較の実行

```
npm run test
```

pagelist02の内容と/snapshots/を比較します。

## 結果の確認

結果は http://localhost:9323/ で確認できます。
レポートが表示されない場合は`npx playwright show-report`を試してください。


# キャプチャ設定
## playwright.config.js
playwright環境設定。  
`slowMo: 5000,` でサーバー負荷が下がっていて欲しいと願っている。  
サーバー負荷が高い場合は `fullyParallel`を`false`にしてみて。

## tests/visual.spec.js
19行目以降の「//キャプチャ処理」の箇所で、ページごとのキャプチャ処理を記載。  
アニメーション処理対策でページを一番下までスクロールして、もう一度一番上までスクロールしてから、キャプチャしている。

---

# デザインデータとの比較
- `npm run cap` を行わずに、pagelist02にテストサイトURLを入力。
- /snapshots/にpagelist02に記載のURLの順番通りに、000.png,001.pngという命名でデザインデータから書き出したpngを格納。
- tests/visual.spec.js の `viewport` をデザインデータの設定に合わせる
- `npm run test` を実行

---

# `npm run test` でtimeoutになりdiff生成に失敗しているとき
- 原因：無限スクロールや動き続けるカルーセルなどの自動で動き続ける要素が原因
- 対策1:screenshot.cssで動き続ける要素をopacity:0;に指定する
- 対策2:tests/visual.spec.js の32行目にある `animations` を`'disabled'`に変える
- その他の方法：diffを見るのは諦めて、side by sideや sliderで差分を目視でチェックする
