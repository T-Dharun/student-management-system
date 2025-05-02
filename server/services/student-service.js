const studentModel = require('../models/student-model');
const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');

class StudentService{

    async registerStudents(students, faculty){
        let registeredStudents=[];
        for(let i=0;i<students.length;i++){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(students[i].email,salt);
            const updatedStudent={...students[i], password: hashedPassword, isVerified: true, role:'STUDENT'};
            const user = await userModel.create(updatedStudent);;
            const student = await studentModel.create({...students[i], userID: user._id, facultyID:faculty?.id});
            registeredStudents.push(student);
        }
        return registeredStudents
    }

}

const studentService = new StudentService();
module.exports = studentService;