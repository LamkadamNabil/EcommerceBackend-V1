const express =require('express')
const router =express.Router()


const {createProduct, showProduct, productById, removeProduct, updateProduct} =require('../controllers/productController')
const {userById}=require('../middleware/user')
const {requireSignIn,isAuth,isAdmin}=require('../middleware/auth')
router.get('/:productId',showProduct)
router.post('/create/:userId',[requireSignIn,isAuth,isAdmin],createProduct)
router.delete('/:productId/:userId',[requireSignIn,isAuth,isAdmin],removeProduct)
router.put('/:productId/:userId',[requireSignIn,isAuth,isAdmin],updateProduct)
router.param('userId',userById)
router.param('productId',productById)

module.exports=router ;