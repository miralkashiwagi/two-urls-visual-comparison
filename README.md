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