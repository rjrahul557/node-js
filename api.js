const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();


app.use(express.json());

app.get('/',async(req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
})

app.post('/',async (req,res)=>{
    const data = await dbConnect();
    const result = await data.insertOne(req.body);
    res.send(req.body);
})

app.put('/:name',async (req,res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name : req.params.name},
        {$set : req.body}
    );
    res.send({result : "updated"})
})

app.delete('/:id',async(req,res)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId((req.params.id).trim())});
    res.send(result);
})
app.listen(5000);