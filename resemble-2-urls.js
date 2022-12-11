const fs = require('fs');
const resemble = require('resemblejs');
const p =require('./package.json')

const dir = "./screenshots/"
const pagelist = p.pagelist;
const pagelist02 = p.pagelist02;

//本文テキストの色を除外
const color = p.bodyColor;

pagelist.forEach((item,index) => {
    let num = ( '000' + index ).slice( -3 );
    let item02 = pagelist02[index];
    let filename =  num + "_chromium-" +item.replace(/(http:\/\/|https:\/\/)/g,"").replace(/\/?$/,"").replace(/\//g, "_").replace(/\./g, "-").replace(/:/g, "");
    let filename02 =  num + "_chromium-" + item02.replace(/(http:\/\/|https:\/\/)/g,"").replace(/\/?$/,"").replace(/\//g, "_").replace(/\./g, "-").replace(/:/g, "");

    // 比較したい画像のパスを指定
    const image1 = fs.readFileSync(dir + filename + ".png");
    const image2 = fs.readFileSync(dir + filename02 + ".png");


    resemble(image1)
        .compareTo(image2)
        .ignoreAntialiasing()
        .outputSettings({ ignoreAreasColoredWith: color,largeImageThreshold:0 })
        .onComplete(data => {
            if (data.misMatchPercentage >= 0.5) {
                console.log(filename);
                console.log(filename02);
                console.log('差分を検知しました。');
                fs.writeFileSync("./diff_image/"+filename+".jpg", data.getBuffer());
            } else {
                console.log(filename);
                console.log(filename02);
                console.log("差分なし");
                fs.writeFileSync("./diff_image/"+filename+".jpg", data.getBuffer());
            }
        });
});

