const mongoose = require('mongoose')
const mailSender = require('../utils/mailSender')
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

const otpSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },

    otp : {
        type : String,
        required : true
    },

    createdAt : {
        type : Date,
        default : Date.now(),
        expires : new Date(Date.now() + 5 * 60 * 1000)   //minutes
    }
})

//Function to send mail
async function sendVerificationMail (email, otp){
    try{
        const mailResponse = await mailSender(email, "Verification Email from StudyNotion", emailTemplate(otp))
        // console.log("Mail sent successfully: ", mailResponse)
    }
    catch(err){
        console.log("Getting error while sending mail!")
        console.error(err)
        throw err;
    }
}

otpSchema.pre("save", async function(next){
    await sendVerificationMail(this.email, this.otp)
    next()
})

module.exports = mongoose.model("Otp", otpSchema)