const mongoose =require('mongoose')
const {ObjectId} =mongoose.Schema
const productSchema =new mongoose.Schema({
    name :
    {
        type:String,
        trim :true,
        require :true,
        maxlength:150

    },
    description :
    {
        type:String,
        trim :true,
        require :true,
        maxlength:2000

    },
    price :
    {
        type:Number,
        require :true,
    },
    quantity :
    {
        type:Number,
    },
    photo :
    {
        data:Buffer,
        contentType :String,
    },
    category :
    {
        type:ObjectId,
        ref :'Category',
        require:true
    },
    shipping :
    {
        type:Boolean,
        require :true,
        default:false

    },
},{timestamps:true})
module.exports=mongoose.model('Product',productSchema);