let get_mileage = async (id, pw) => {
  const puppeteer = require("puppeteer");
  const browser = await puppeteer.launch({
    headless: true,
    slowMo: 0,
    devtools: false,
    args: [
      '--incognito',
      '--disable-infobars',
      '--no-default-browser-check',
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  let page = await browser.newPage();
  let url = 'https://www2.smile-etc.jp/NASApp/etcmlg/MlgReq?gvlddpef=1013000000&mdwsetmb=1013000000';
  await page.goto(url, {waitUntil: 'domcontentloaded'})
  let txt = await page.$eval('body', e => e.textContent);
  // race condition を避ける。
  // let ret = await page.evaluate( (id,pw)=>{ return 'aaaa'})
  // console.log(ret)
  await page.evaluate((id, pw) => {
    document.querySelector("input[name='mlgloginid']").value = id
    document.querySelector("input[type='password']").value = pw
    document.querySelector("input[value='ログイン']").click()
  }, id, pw);
  await page.waitForNavigation();
  let points_text = await page.evaluate((id, pw) => {
    c1 = Array.from(document.querySelectorAll('table[width="610"][bordercolor="#DEFFF7"] tr td:nth-child(1)'))
    c2 = Array.from(document.querySelectorAll('table[width="610"][bordercolor="#DEFFF7"] tr td:nth-child(2)'))
    c2.shift()
    let points = []
    for (let i in c1) {
      points[points.length] = [c1[i].firstChild.textContent, c2[i].textContent].join(', ')
    }
    return points.join("\n")
  });
  await browser.close();
  return points_text;
}

module.exports = {
  'get_mileage': get_mileage
}
