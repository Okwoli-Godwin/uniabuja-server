const userModel = require("../Model/Usermodel")
const bcrypt = require("bcrypt")

const register = async(req, res) => {
    try {
        const {name, email, password} = req.body

        const salt = await bcrypt.genSalt(12)
        const hashed = await bcrypt.hash(password, salt)

        const user = await userModel.create({
            name,
            email,
            password: hashed
        })
        res.status(200).json({
            message: "Registration complete",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            message: "Cannot register",
            data: error.message
        })
    }
}

const login = async(req, res) => {
    try {
        const {email, password} = req.body

    const log = await userModel.findOne({
        email
    })
    if (!log || !password) {
     res.status(400).json({
      message: "Username or Password not present",
    })
  }
    res.status(200).json({
        message: "Successful",
        data: log
    })

    } catch (error) {
        res.status(400).json({
            message: "failed to login",
            data: error.message
        })
    }
}
module.exports = {register, login}