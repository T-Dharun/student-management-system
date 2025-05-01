const Joi = require('joi');

const registerSchema = Joi.object({

    username:Joi.string().min(3).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required(),
    role:Joi.string().valid('ADMIN','FACULTY','STUDENT').default('FACULTY'),

})

const loginSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required()
})

module.exports = {registerSchema , loginSchema};