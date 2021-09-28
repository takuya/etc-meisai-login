

const send_requret = async function ( id, pw ) {
  const puppeteer = require('puppeteer');

  const main = async function(id, pw ) {
    
    const wait = (milisec) => { return new Promise(resolve => {setTimeout(resolve,milisec)}) };
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 0,
      devtools:false,
      args: [
        '--incognito',
        '--disable-infobars',
        '--no-default-browser-check',
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    let  page = await browser.newPage();

    const login_url = 'https://www2.etc-meisai.jp/etc/R?funccode=1013000000&nextfunc=1013000000'
    await page.goto(login_url, {waitUntil: 'domcontentloaded'})
    let txt = await page.$eval( 'body', e => e.textContent );
    // console.log(txt)

    // race condition を避ける。
    await page.evaluate( (id,pw)=>{      
        document.querySelector("input[name='risLoginId']").value=id
        document.querySelector("input[type='password']").value=pw
        document.querySelector("input[value='ログイン']").click()
        
      } ,id,pw);
    await page.waitForNavigation();
    let fee = await page.$eval('span.meisaivalue:nth-of-type(1)', e => e.textContent);
    let container = await page.$eval( 'div.contentsWrapper h2', e => e.textContent );

      
    await browser.close();
    return [container,fee];
  };

  ret =  await main(id,pw);
  return ret;
};









module.exports = {
  'send_request' : send_requret
}

