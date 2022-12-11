// example.spec.js
const { test, expect } = require('@playwright/test');
const p = require("../package.json");

const dir = "screenshots/";
var pagelist = p.pagelist;
var pagelist02 = p.pagelist02;


test.use({
  viewport: { width: 1400, height: 800 },
  deviceScaleFactor: 1,
  channel: 'chrome',
})


test.describe('multiple pages test',()=>{
  pagelist.forEach((item,index)=>{
    //連番生成
    let num = ( '000' + index ).slice( -3 );

    //1つ目のファイル名
    let filename =  item.replace(/(http:\/\/|https:\/\/)/g,"").replace(/\/?$/,"").replace(/\//g, "_").replace(/\./g, "-").replace(/:/g, "");

    //2つ目のページリストから同じ番目のURLを取得
    let item02 = pagelist02[index];
    //2つ目のファイル名
    let filename02 =  item02.replace(/(http:\/\/|https:\/\/)/g,"").replace(/\/?$/,"").replace(/\//g, "_").replace(/\./g, "-").replace(/:/g, "");

    //1つ目のキャプチャ処理
    test(`first ${filename} test`, async ({ page }) => {
        console.log(filename)
        await run(page,item,num,filename);
    });
    //2つ目のキャプチャ処理
    test(`second ${filename02} test`, async ({ page }) => {
      console.log(filename02)
      await run(page,item02,num,filename02);
    });
  })
})


//キャプチャ処理
async function run(page,item,num,filename){
  const browserName = page.context().browser().browserType().name()

  //URLへ移動
  await page.goto(item);

  //ページを下までスクロール
  await page.evaluate(() => window.scroll({top:document.body.scrollHeight, behavior:'smooth'}));
  await page.waitForTimeout(1000); // 1秒待機

  //ページを上までスクロール
  await page.evaluate(() => window.scroll({top: 0, behavior: 'smooth'}));
  await page.waitForTimeout(2000); // 2秒待機

  //スクリーンショットをとる
  await page.screenshot({ path:dir +num +"_"+ browserName+"-" + filename+".png", fullPage: true });
}