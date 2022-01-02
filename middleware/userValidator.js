exports.userSignUpValidator =(req,res,next)=>{
    req.check('name','Name is required !!!!').notEmpty();
    req.check('email','email is required !!!!').isEmail().notEmpty();
    req.check('password','the password is required')
    .notEmpty()
    .isLength({min:6,max:10})
    .withMessage('password must between 6 and 10 Caracters');
    const errors=req.validationErrors();
    if(errors){ 
        return res.status(400).json(errors)
    }
    next()
}