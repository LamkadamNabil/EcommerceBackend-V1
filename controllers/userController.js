const User =require( '../models/user')
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