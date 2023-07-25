

let main = async (id , pw)=>{
  const client = require("../lib/etc-mileage-points")
  const text = await client.get_mileage(id,pw)
  console.log(text);
}

if ( process.argv.length != 4 ){
  console.log('使い方');
  console.log(`node bin/${process.argv[1].split(/\//).pop()} $USER $PASS`);
  return;
}else{
  main(process.argv[2],process.argv[3]);
}


