const express = require('express');
const userRouter = express.Router();

const { register, login, verifyUser } = require('../controllers/user-controller');
const auth = require('../middlewares/auth');

userRouter.get('/auth/register/verify/:id',verifyUser);
userRouter.post('/auth/register',register);
userRouter.post('/auth/login',login);


userRouter.get("/",auth,(req,res)=>{
    res.status(200).json({message:'User route is working',user:req.user});
});

module.exports=userRouter;