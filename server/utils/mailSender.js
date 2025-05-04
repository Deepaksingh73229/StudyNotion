require('dotenv').config()
const nodemailer = require('nodemailer')

const mailSender = async (email, title, body) => {
    try{
        let transport = nodemailer.createTransport({
            host : process.env.MAIL_HOST,
            auth : {
                user : process.env.MAIL_USER,
                pass : process.env.MAIL_PASS,
            }
        })

        let info = await transport.sendMail({
            from : `StudyNotion || CodeHelp -> By Deepak Kumar Singh`,
            to : `${email}`,
            subject : `${title}`,
            html : `${body}`
        })

        if(info){
            console.log("Mail send successfully")
        }
        else{
            console.log("Failed to send mail")
        }
    }
    catch(err){
        console.log("Error in mailSender!")
        console.error(err.error)
    }
}

module.exports = mailSender