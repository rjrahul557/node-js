const dbConnect = require('./mongodb');

const inserting = async()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {name:'f30',brand:'vivo',price:'2498',categories:'mobile'},
            {name:'f40',brand:'vivo',price:'2498',categories:'mobile'},
            {name:'f50',brand:'vivo',price:'2498',categories:'mobile'}
        ]
        
    );

    if(result.acknowledged){
        console.log("data inserted");
    }
}
inserting();