const express = require('express')
const mongoose = require('mongoose')
const Laptop = require('./Laptop');

mongoose
.connect('mongodb+srv://arjunbala:ArjunBala001@cluster0.26xlz28.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true})
.then(()=>{
    console.log("Database Connected")
    const app = express();
    app.get('/laptop',async (req,res)=>{
        laptops = await Laptop.find()
        res.send(laptops)
    })

    app.get('/laptop/:id',async (req,res)=>{
        console.log(req.params.id);
        laptops = await Laptop.findOne({_id:req.params.id})
        res.send(laptops)
    })

    app.listen(3030,()=>{
        console.log("server started")
    })
})