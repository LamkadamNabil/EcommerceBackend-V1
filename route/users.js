const express =require('express')
const router =express.Router()
const {firstRoute,singup}=require('../controllers/userController')
const {userSignUpValidator}=require('../middleware/userValidator')

router.get('/',firstRoute)
router.post('/singup',userSignUpValidator,singup)

module.exports=router ;