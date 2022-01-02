const mongoose =require('mongoose');
const express =require('express');
const expressValidator=require('express-validator')

//Import Routes
const userRouters=require('./route/users')
//Config app
const app=express();
require('dotenv').config();
//Database 
mongoose.connect(process.env.DATABASE)
        .then(()=>console.log("database connected...."))
        .catch(err =>console.error('db could not connect....'))
//routes middleware    
app.use(express.json())
app.use(expressValidator()) 
app.use('/api/users',userRouters)
const port =process.env.PORT ||3000
app.listen(port,()=>console.log(`the app listening the ${port} ..`));