import type { NextApiRequest, NextApiResponse } from "next";

import { IncomingForm } from "formidable";

var mv = require("mv");

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const data = await new Promise((resolve, reject) => {
		const form = new IncomingForm();

		form.parse(req, (err: any, fields: any, files: any) => {
			if (err) return reject(err);
			// console.log(fields, files);
			// console.log(files.upload.filepath);
			var oldPath = files.upload.filepath;
			var newPath = `./public/uploads/${files.upload.originalFilename}`;
			mv(oldPath, newPath, function (err: any) {});
			res.status(200).json({
				fields,
				files,
				url: encodeURI(`/uploads/${files.upload.originalFilename}`),
			});
		});
	});
};
