const express = require('express');
const userRouter = express.Router();

const { register, login, verifyUser, getUser } = require('../controllers/user-controller');
const auth = require('../middlewares/auth');

userRouter.post('/auth/register',register);
userRouter.post('/auth/login',login);
userRouter.get('/auth/register/verify/:id',verifyUser);
userRouter.get('/auth/me',auth,getUser)


module.exports=userRouter;