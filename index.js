const puppeteer = require('puppeteer');

const options = {
  args: [
    "--no-sandbox"
  ]
};

var url = 'https://www.yahoo.co.jp/';
var savePath = "test_image.png";

(async () => {
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();

  await page.goto(url);
  await page.screenshot({path: savePath});

  await browser.close();
})();


