const User =require( '../models/user')
const JWT = require('jsonwebtoken')
exports.firstRoute =(req,res)=>{
    res.send({message :"users module"})
}
exports.singup=(req,res) =>{
    const user=new User(
        req.body
    )
    user.save((err,user)=>{
        if(err){
            return res.status(400).send(err)
        }
        res.send(user)
    })
}
exports.singin=(req,res) =>{
    const {email ,password}= req.body
    User.findOne({email},(err,user)=>{
         
        if(err || !user) {
            return  res.status(400).json({
                error : "USER NOT FOUND WITH THIS EMAIL , PLEASE SIGNUP!!"
            })
        }
        

        if(!user.authenticate(password)){
           return res.status(401).json({
                error :"Email OR password Dont Match"
            })
        }
        const token =JWT.sign({_id:user._id,role :user.role},process.env.TOKEN_SECRET)
        res.cookie('MY COOKIE ',token,{expire :new Date()+85213549})
        const {_id,name,email,role}=user
        return res.json({
            token,
            user:{_id,name,email,role}
        })
    })
}
///expresstokenjwt => role :lire le token envoyer par le client et apres il fait le pers bach 
//bach y9dar recuper les info li kaynini fi payload 
//pour faire ca(Authorization) il faut passer par les etape suivant :
// 1)-> khasak tkon authentifie(require Signin)
//2)-> verifie wach rak authentifie
//3)->verfie le role 
exports.singout=(req,res) =>{

        res.clearCookie('MY COOKIE ')
      
        return res.json({
            message :"User Signout"
        })
}