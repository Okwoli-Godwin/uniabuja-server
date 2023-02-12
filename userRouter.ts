import { Router } from "express";
import { getUsers, register, Login } from "../Controller/Usercontroller";
import { loginValidation, registerValidation } from "../Validation/Auth/userValidation";

const Userrouters = Router()

Userrouters.route("/get").get(getUsers)
Userrouters.route("/register").post(registerValidation, register)
Userrouters.route("/Login").post(loginValidation, Login)

export default Userrouters