const dbConnect = require('./mongodb');
const update = async()=>{
    const data = await dbConnect();
    const result = await data.updateOne(
        {name :'f40'},{
            $set : {name : 'nord2'}
        }
    );
    console.log(result);
}
update();