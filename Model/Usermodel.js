const mongoose = require("mongoose")

const mySchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "please enter your name"]
        },
        email: {
            type: String,
            require: [true, "please enter your email"],
            unique: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            require: [true, "please enter your password"],
            min: 8
        }
    },
    {timeStamps: true}
)

module.exports = mongoose.model("user", mySchema)