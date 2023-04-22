import type { NextApiRequest, NextApiResponse } from "next";

import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
	try {
		await mail.send({
			to: ["barfieldjt@gmail.com", "andrewbarfield4@gmail.com"], // Your email where you'll receive emails
			from: {
				email: "no-reply@abdesigns.ca", // your website email address here
				name: "ab|Designs",
			},
			replyTo: `${req.body.email}`,
			subject: `New Contact Request : ${req.body.firstName} ${req.body.lastName}`,
			html: `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html lang="en">
                    <head>
                        <meta charset="utf-8">
                        <title>ab|Designs Contact Request</title>
                        <meta name="description" content="ab|Designs contact form submission">
                        <meta name="author" content="AB Designs">
                        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
                        <link rel="stylesheet" href="css/styles.css?v=1.0">
                    </head>
        
                    <body>
                        <div class="container" style="margin-left: 20px;margin-right: 20px;">
                            <h3>A new contact request has been submitted by ${req.body.firstName} ${req.body.lastName}, their phone number is: ${req.body.phoneNumber} </h3>
                            <div style="font-size: 16px;">
                                <p>Message:</p>
                                <p>${req.body.message}</p>
                            </div>
                        </div>
                    </body>
                </html>
            `,
		});
	} catch (error: any) {
		// console.log(error);
		return res.status(error.statusCode || 500).json({ error: error.message });
	}

	return res.status(200).json({ error: "" });
}

export default sendEmail;
