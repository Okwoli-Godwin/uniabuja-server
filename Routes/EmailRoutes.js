const express = require("express");
const creatingMessage = require("../Controller/EmailController")
const router = express.Router();

router.post("/postmessage", creatingMessage);

module.exports = router;