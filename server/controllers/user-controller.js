const userService = require('../services/user-service');
const { registerSchema, loginSchema } = require('../validation/user-validation');

const register = async (req,res) =>{
    try{
        const user= req.body;
        const {error} = registerSchema.validate(user);
        if(error){
            console.log(error);
            return res.status(400).json({message:error?.details[0]?.message});
        }
        const newUser = await userService.register(user);
        return res.status(201).json({message:'user created successfully',user: newUser});
    }
    catch(err){
        return res.status(400).json({message:err.message})
    }
}

const verifyUser = async (req,res)=>{
    try{
        const {id} = req.params;
        const {token, user} = await userService.verifyUser(id);
        return res.status(200).json({message:'user verified successfully',token,user})
    }
    catch(err){
        return res.status(400).json({message:err?.message});
    }
}
const login = async (req,res)=>{
    try{
        const user = req.body;
        const {error} = loginSchema.validate(user);
        if(error){
            return res.status(400).json({message:error?.details[0]?.message});
        }
        const token = await userService.login(user);
        return res.status(200).json({message:'user logged in successfully',token});
    }
    catch(err){
        return res.status(400).json({message:err?.message});
    }
}
module.exports = {register, login, verifyUser};