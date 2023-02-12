const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, "./uploads");
	},

	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const filefilter = (req, file, cb) => {
	if (
		file.minetype === "/jpg" ||
		file.minetype === "/png" ||
		file.minetype === "/jpeg"
	) {
		cb(null, true);
	}
};

const imageUploader = multer({
	storage: storage,
	// fileFilter: filefilter,
	// limits: {
	// 	fileSize: 1024 * 1024 * 2,
	// },
}).single("image");

module.exports = imageUploader;