const mongoose = require("mongoose");

const mySchema = mongoose.Schema(
	{
		name: {
			type: String,
		},
		title: {
			type: String,
		},
		Subject: {
			type: String,
		},
		email: {
			type: String,
		},
	},
	{ timeStamps: true },
);

module.exports = mongoose.model("users", mySchema);