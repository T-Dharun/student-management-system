const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:String,
    personal_email:String,
    userID:mongoose.Schema.Types.ObjectId,
    facultyID:mongoose.Schema.Types.ObjectId
})

const studentModel = mongoose.model('student',studentSchema);
module.exports = studentModel;