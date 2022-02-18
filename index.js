const mongoose =require('mongoose');
const express =require('express');
const expressValidator=require('express-validator')
const cookieparser =require('cookie-parser')

//Import Routes
const authRouters=require('./route/auth')
const userRouters=require('./route/user')
const categoryRouters=require('./route/categories')
const productRouters=require('./route/product')

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
app.use(cookieparser())
app.use('/api',authRouters)
app.use('/api',userRouters)
app.use('/api/category',categoryRouters)
app.use('/api/product',productRouters)



const port =process.env.PORT ||3000
app.listen(port,()=>console.log(`the app listening the ${port} ..`));