const EmailModel = require("../Model/EmailModel");
const { Messanger } = require("../Utils/Email");

const creatingMessage = async (req, res) => {
	try {
		const { name, email, title, subject } = req.body;

		const createData = await EmailModel.create({
			name,
			email,
			title,
			subject,
		});

		Messanger(createData)
			.then((result) => {
				console.log("sent: ", result);
			})
			.catch((error) => {
				console.log(error);
			});

		return res.status(200).json({
			message: "please check your mail for verification",
			data: {
				createData,
			},
		});
	} catch (err) {
		return res.status(404).json({ message: "an error occured", err });
	}
};

module.exports = creatingMessage;
