const express = require('express');
const { registerStudents } = require('../controllers/student-controller');
const auth = require('../middlewares/auth');
const studentRouter = express.Router();

studentRouter.post("/register/all",auth,registerStudents);

module.exports = studentRouter;