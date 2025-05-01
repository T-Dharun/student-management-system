const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please provide a username'],
    },
    email:{
        type:String,
        required:[true,'Please provide an email'],
        unique:[true,"A user with this email already exists."]
    },
    password:{
        type:String,
        required:[true,'Please provide a password']
    },
    role:{
        type:String,
        enum:['ADMIN','FACULTY','STUDENT'],
        required:[true,'Please provide a role'],
        default:'FACULTY'
    },
    isVerified:{
        type:Boolean,
        default:false
    }
});
const userModel = mongoose.model('user',userSchema);

module.exports = userModel;