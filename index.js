const express = require('express')
const Product =require('./models/productModel.js')
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");


dotenv.config();
const port = process.env.Port || 8080 
var mongoUrl = process.env.Mongo_url

app.use(express.json());

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
    console.log("Db connected")
  });
    app.listen(port, ()=>{
        console.log(`Server is running on port : ${port}`)
    })
app.post('/api/products', async (req,res)=>{
    try{
        const product = await Product.create(req.body);
    res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message:error})
    }

})

app.get('/', async (req, res) => {
    const products = await Product.find()
    res.json({ products: products })
  })
