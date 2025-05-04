const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        immutable: true,
    },

    password: {
        type: String,
        required: true,
    },

    accountType: {
        type: String,
        default: "Student",
        enum: ["Admin", "Instructor", "Student"],
    },

    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        // required : true,
        ref: "Profile"
    },

    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ],

    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ],

    image: {
        type: String,
        required: true,
    },

    courseProgress: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CourseProgress"
        }
    ],

    token: {
        type: String
    },

    resetPasswordExpires: {
        type: Date
    }
})

module.exports = mongoose.model("User", userSchema)