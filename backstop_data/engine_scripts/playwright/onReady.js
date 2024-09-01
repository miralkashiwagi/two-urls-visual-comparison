module.exports = async (
  page,
  scenario,
  viewport,
  isReference,
  browserContext
) => {
  console.log("SCENARIO > " + scenario.label);
  await require("./clickAndHoverHelper")(page, scenario);

  // スクリーンショットを取るとき適用したいCSSがあればoverrideCSS.jsを使う
  // await require("./overrideCSS")(page, scenario);

  // ページがスクロール可能になるまで10秒待つ
  console.log("load時のアニメーションを待つため5秒待機しています……");
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // スクロール前のスクロール位置をログに出力
  // const initialScrollPosition = await page.evaluate(() => window.scrollY);
  // console.log('Initial Scroll Position:', initialScrollPosition);

  // スクロール高さを取得しログ出力
  const scrollTop = await page.evaluate(
    () => document.documentElement.scrollHeight
  );
  console.log("ページの高さを確認:", scrollTop);

  // スクロールアニメーションを実行
  await page.evaluate(async (scrollTop) => {
    // window.scrollTo(0, scrollTop);
    await window.scrollTo({ top: scrollTop, behavior: "smooth" });
  }, scrollTop);

  // await page.evaluate(async (scrollTop) => {
  //   await window.scrollTo({ top: 0, behavior: 'smooth' });
  // })

  // 1秒待つ
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // スクロール後のスクロール位置をログに出力
  // const finalScrollPosition = await page.evaluate(() => window.scrollY);
  // console.log('Final Scroll Position:', finalScrollPosition);
};
