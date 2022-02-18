const express =require('express')
const router =express.Router()


const {createCategory} =require('../controllers/categoryController')
const {userById}=require('../middleware/user')
const {requireSignIn,isAuth,isAdmin}=require('../middleware/auth')

router.post('/create/:userId',[requireSignIn,isAuth,isAdmin],createCategory)
router.param('userId',userById)
module.exports=router ;