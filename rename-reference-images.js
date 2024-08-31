const fs = require('fs');
const path = require('path');

const referenceDir = path.join(process.cwd(), 'reference');

// 指定されたディレクトリ内のすべてのPNGファイルを取得
fs.readdir(referenceDir, (err, files) => {
    if (err) {
        console.error('ディレクトリの読み取りエラー:', err);
        return;
    }

    files.forEach((file) => {
        if (path.extname(file).toLowerCase() === '.png') {
            const match = file.match(/^(\d+)\.png$/);
            if (match) {
                const number = match[1].padStart(3, '0');
                const newFileName = `image_${number}_0_document_0_device.png`;
                const oldPath = path.join(referenceDir, file);
                const newPath = path.join(referenceDir, newFileName);

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