const User =require('../models/user')
exports.userById=(req,res,next,id)=>{

    User.findById(id).exec((err,user)=>{
       if(err || !user){
           res.status(400).json(
               {
                   error :""
               }
           )
       }
       req.profile =user;
       
       next();
    })
}