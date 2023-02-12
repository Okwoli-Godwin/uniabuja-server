const {register, login} = require("../Controller/Usercontroller")
const express = require("express")

const userRouter = express.Router()

userRouter.route("/register").post(register)
userRouter.route("/login").post(login)

module.exports = userRouter