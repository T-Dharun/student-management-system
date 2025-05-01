const userModel = require('../models/user-model');
const emailService = require('./email-service');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserService{

    generateToken(user){
        const token=jwt.sign(
            {
                id:user._id,
                email:user.email,
                username:user.username
            },
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        );
        return token;
    }

    async register(user){

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password,salt);
        const newUser = await userModel.create({...user, password: hashedPassword});
        await emailService.sendMail(newUser.email,'Verify your account',`<h1>Click here to verify your account</h1><a href="http://localhost:3000/api/user/auth/register/verify/${newUser._id}">Verify</a>`);
        return newUser;

    }

    async verifyUser(id){
        const user = await userModel.findOne({_id:id});
        if(!user){
            throw new Error('User not found');
        }
        user.isVerified = true;
        await user.save();
        const token = this.generateToken(user);
        emailService.sendMail('dharunt.22eee@kongu.edu','Test Email','<h1>Hello World</h1>');
        return {token, user};
    }

    async login(user){
        const existUser = await userModel.findOne({email:user?.email});
        if(!existUser){
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(user.password, existUser.password);
        if(!isMatch){
            throw new Error('Invalid credentials');
        }
        if(!existUser.isVerified){
            throw new Error('User is not verified');
        }
        const token = this.generateToken(existUser);
        return token;
    }
}

const userService = new UserService();
module.exports =  userService;