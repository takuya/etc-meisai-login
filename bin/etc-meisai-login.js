#!/usr/bin/env node 

let main = async (id , pw)=>{
  const send_request =  require('../lib/etc-meisai.js').send_request
  let ret = await send_request(id,pw)
  console.log(ret);
}


if ( ! process.argv.length != 4 ){
  console.log('使い方');
  console.log(`node bin/${process.argv[1].split(/\//).pop()} $USER $PASS`);
  return;
}

main(process.argv[2],process.argv[3]);