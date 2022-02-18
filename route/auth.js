const express =require('express')
const router =express.Router()
const {requireSignIn} =require('../middleware/auth')
const {firstRoute,singup,singin,singout}=require('../controllers/authController')
const {userSignUpValidator}=require('../middleware/userValidator')

router.get('/',firstRoute)
router.post('/singup',userSignUpValidator,singup)
router.post('/singin',singin)
router.get('/singout',singout)

router.get("/hello",requireSignIn,(req,res)=>{
    res.send('hello there');
})


module.exports=router ;