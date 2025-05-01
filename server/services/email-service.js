const nodemailer = require('nodemailer');
require('dotenv').config();

class EmailService{
    constructor(){
        this.transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }
        })
    }

    async sendMail(to,subject,html){
        console.log(to);
        const mailOption  = {
            from:process.env.EMAIL_USER,
            to,
            subject,
            html
        }
        try{
            const info = await this.transporter.sendMail(mailOption);
            console.log(info);
        }
        catch(err){
            console.log(err);
            throw new Error('Error sending email');
        }
    }
}

const emailService = new EmailService();
module.exports = emailService;