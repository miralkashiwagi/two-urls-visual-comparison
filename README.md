# 準備

```
npm install
```

# 使い方

## ページリスト作成

package.jsonのpagelistと、pagelist02にテストしたいURLを記入。  
比較したいURLは同じ順番にくるようにする。

```json
"pagelist": [
  "https://developer.mozilla.org/en-US/docs/Web/CSS/::marker", 
  "https://developer.mozilla.org/en-US/docs/Web/CSS/"
],
"pagelist02": [
  "https://developer.mozilla.org/en-US/docs/Web/CSS/::before", 
  "https://developer.mozilla.org/en-US/docs/Web/CSS/"
]
```

## スクリーンショットの取得

```
npm run capture
```

## 比較の実行

```
npm run test
```

出力と diff_image を確認してください。

```text
000_chromium-developer-mozilla-org_en-US_docs_Web_CSS_marker
000_chromium-developer-mozilla-org_en-US_docs_Web_CSS_before
差分を検知しました。
001_chromium-developer-mozilla-org_en-US_docs_Web_CSS
001_chromium-developer-mozilla-org_en-US_docs_Web_CSS
差分なし
```

# 設定について
## キャプチャ設定
### playwright.config.js
playwright環境設定。  
`slowMo: 5000,` でサーバー負荷が下がっていて欲しいと願っている。

### tests/example.spec.js
44行目以降の「//キャプチャ処理」の箇所で、ページごとのキャプチャ処理を記載。  
アニメーション処理対策でページを一番下までスクロールして、もう一度一番上までスクロールしてから、キャプチャしている。

## 比較設定
### resemble-2-urls.js
`const percentage = 0.5;` の数値を 変更すると「差分あり」とする割合が変わる。  
1%の差があると結構違うため、0.1～1の間で設定するのがよさそう。