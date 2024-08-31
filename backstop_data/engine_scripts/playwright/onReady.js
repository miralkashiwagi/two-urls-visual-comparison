module.exports = async (page, scenario, viewport, isReference, browserContext) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // add more ready handlers here...

  // ページがスクロール可能になるまで10秒待つ
  console.log('Waiting for 10 seconds to ensure the page is scrollable...');
  await new Promise((resolve) => setTimeout(resolve, 10000));

  // スクロール前のスクロール位置をログに出力
  // const initialScrollPosition = await page.evaluate(() => window.scrollY);
  // console.log('Initial Scroll Position:', initialScrollPosition);


  // スクロール高さを取得しログ出力
  const scrollTop = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log('Calculated Scroll Top:', scrollTop);

  // スクロールアニメーションを実行
  await page.evaluate(async (scrollTop) => {
    // window.scrollTo(0, scrollTop);
    await window.scrollTo({ top: scrollTop, behavior: 'smooth' });
  }, scrollTop);

  // await page.evaluate(async (scrollTop) => {
  //   await window.scrollTo({ top: 0, behavior: 'smooth' });
  // })

  // 3秒待つ
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // スクロール後のスクロール位置をログに出力
  // const finalScrollPosition = await page.evaluate(() => window.scrollY);
  // console.log('Final Scroll Position:', finalScrollPosition);

};
