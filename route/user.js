const express =require('express')
const router =express.Router()


const {getOneUser}=require('../controllers/userController')
const {userById}=require('../middleware/user')
const {requireSignIn,isAuth,isAdmin}=require('../middleware/auth')


router.get('/profile/:userId',requireSignIn,isAuth,getOneUser)
router.param('userId',userById)//fin ma rayl9a userId il va declencher un midl 

module.exports=router ;