const dbConnect = require('./mongodb');
const main = async () =>{
  let data = await dbConnect();
  data = await data.find({name : 's30'}).toArray();
  console.log(data);
}

main();
