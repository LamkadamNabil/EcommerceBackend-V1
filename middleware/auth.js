const expressJWT =require('express-jwt')
require('dotenv').config();

exports.requireSignIn=expressJWT({
    secret :process.env.TOKEN_SECRET, 
    algorithms :["HS256"],
    userProperty  :'auth'//=W> hana kayn hadak chi lifi payload
})
exports.isAuth=(req,res,next)=>{
    if(req.auth.role==1) return next();
    let user=req.profile && req.auth && (req.profile._id == req.auth._id)
    if(!user)
    {
        return res.status(403).json
        ({
            error : "access denied"
        })
    }
    next()

}
exports.isAdmin=(req,res,next)=>{
    
    if(req.auth.role == 0 )
    {
        res.status(403).json
        ({
            error : "Admin Resource ,access denied !!!!!"
        })
    }
    next()
 
}