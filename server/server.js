const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/user-route');
const studentRouter = require('./routes/student-route');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv');
const app=express();
dotenv.config();
connectDB();


app.use(morgan('dev'));
app.use(express.json());

app.use('/api/user',userRouter);
app.use('/api/student',studentRouter);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

