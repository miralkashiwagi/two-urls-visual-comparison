# 準備

```
npm install
```
```
backstop init
```

※Node v18で動作確認

# 通常の使い方

## ページリスト作成
urls.jsonの「urlSet1」に正解のURL、
「urlSet2」にテストしたいURLを入力

## レファレンススクリーンショットの取得
```
npm run reference:url
```
## テストの実行
```
npm run test:url
```

# デザインデータの書き出しpngとの比較
## URLリストの作成
urls.jsonの「imageUrls」にテストしたいURLを入力

## 参照画像の作成
1.001.png, 002.png ... という命名で/reference/に保存
※urls.jsonに記載したのと同じ順番にすること
2.`npm run rename:image` を実行

## テストの実行
```
npm run test:image
```

