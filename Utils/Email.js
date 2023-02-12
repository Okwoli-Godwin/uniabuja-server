
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const GOOGLE_SECRET = "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";
const GOOGLE_ID =
	"717654860266-4jdicf1esea6bemik2s1duf52dh3tc76.apps.googleusercontent.com";
const GOOGLE_REFRESHTOKEN =
	"1//04Px4yxSiBhMyCgYIARAAGAQSNwF-L9IrrIyoTWoDyjIGyPVkgzSVVSILDZWg4OzXbbcH7B-7bOohKsTPhz1CXZfY-1oDtbpXF4M";
const GOOGLE_REDIRECT = "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);

oAuth.setCredentials({ refresh_token: GOOGLE_REFRESHTOKEN });

const recieverEmail = "okwolig60@gmail.com";

const Messanger = async (user) => {
	try {
		const accessToken = await oAuth.getAccessToken();
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				type: "OAuth2",
				user: "d1churchnetwork@gmail.com",
				refreshToken: accessToken.token,
				clientId: GOOGLE_ID,
				clientSecret: GOOGLE_SECRET,
				accessToken: GOOGLE_REFRESHTOKEN,
			},
		});

		const mailOptions = {
			from: "no-reply✉️ <uniabuja@gmail.com>",
			to: recieverEmail,
			subject: "",
			html: `
			
			<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
     <title>Account Verification Email</title>
      </head>
      <body>
  
        <h3>From ${user?.name}</h3>
		<p>Subject Title : ${user?.title}</p><br/>
        <h5>${user?.subject}</h5>
		<br/>
		<div>Thanks ,</div>
		
      </body>
    </html>
					
			
	`,
		};

		const result = transporter.sendMail(mailOptions);
		return result;
	} catch (error) {
		return error;
	}
};

module.exports = {
	Messanger,
};