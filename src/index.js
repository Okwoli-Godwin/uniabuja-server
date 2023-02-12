const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const url = "mongodb://localhost/emailTestingDB";
const lifeURI =
	"mongodb+srv://uniabuja-server:uniabuja-server@cluster0.8usbdhw.mongodb.net/server?retryWrites=true&w=majority";

const router = require("../Routes/EmailRoutes")
const imagerouter = require("../Routes/Imagerouter");
const userRouter = require("../Routes/userroute")

const port = 3030;

const app = express();
mongoose.connect(lifeURI).then(() => {
	console.log("connected");
});

app.use(express.json());
app.use(cors());

app.use("/api", router);
app.use("/api/image", imagerouter);
app.use("/api/user", userRouter)

app.listen(port, () => {
	console.log(`listenning on ${port}`);
});