const  studentService = require('../services/student-service');

const registerStudents = async (req,res)=>{
    try{
        const {studentsData} = req.body;
        const faculty = req.user;
        if(!studentsData || studentsData.length===0){
            return res.status(400).json({message:'students data is required'});
        }
        let updatedStudents=[];
        for(let i=0;i<studentsData.length;i++){
            const student=studentsData[i];
            if(!student?.email || !student?.username || student?.email?.trim()=='' || student?.username?.trim()=='') continue;
            updatedStudents.push(student);
        }
        const registeredStudents = await studentService.registerStudents(updatedStudents, faculty);
        return res.status(201).json({message:'students created successfully',students: registeredStudents});
    }
    catch(err){
        return res.status(400).json({message:err?.message});
    }
}

module.exports = {registerStudents};