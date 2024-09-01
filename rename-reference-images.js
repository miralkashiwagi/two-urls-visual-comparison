const fs = require("fs");
const path = require("path");

const referenceDir = path.join(process.cwd(), "reference");

// 指定されたディレクトリ内のすべてのPNGファイルを取得
fs.readdir(referenceDir, (err, files) => {
  if (err) {
    console.error("ディレクトリの読み取りエラー:", err);
    return;
  }

  // 各ファイルを処理
  files.forEach((file) => {
    // 拡張子がPNGかどうかを確認
    if (path.extname(file).toLowerCase() === ".png") {
      // ファイル名が数字のみかどうかを確認
      const match = file.match(/^(\d+)\.png$/);
      if (match) {
        // 数字を3桁にパディング
        const number = match[1].padStart(3, "0");
        // 新しいファイル名を作成
        const newFileName = `image_${number}_0_document_0_device.png`;
        const oldPath = path.join(referenceDir, file);
        const newPath = path.join(referenceDir, newFileName);

        // ファイル名を変更
        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            console.error(`${file} のリネームエラー:`, err);
          } else {
            console.log(`${file} を ${newFileName} にリネームしました。`);
          }
        });
      }
    }
  });
});
