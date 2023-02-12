const mongoose = require("mongoose")

const mySchema = mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    name: {
        type: String
    }
})

const profilemodel = mongoose.model("myProfile", mySchema)

module.exports = profilemodel