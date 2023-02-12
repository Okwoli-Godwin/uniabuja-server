const express = require("express")
const { getpost, newpost } = require("../Controller/Imagecontroller")
const uploader = require("../config/Multer")
const imagerouter = express.Router()

imagerouter.route("/getall").get(getpost)
imagerouter.route("/create").post(uploader, newpost)

module.exports = imagerouter