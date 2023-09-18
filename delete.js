const dbConnect  = require('./mongodb');

const deleted = async()=>{
    const data = await dbConnect();
    const result = await data.deleteOne({name :'f50'});
    console.log(result);

    if(result.acknowledged)

    {
        console.log("deleted");
    }
}

deleted();