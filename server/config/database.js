require("dotenv").config()
const mongoose = require("mongoose")

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Database connected successfully 😁"))
    .catch((error) => {
        console.log("Getting error while connecting with database! 😒")
        console.error(error)
        process.exit(1)
    })
}