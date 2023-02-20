import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { checkIfGuid } from "../../../utils/uuids";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	const {
		query: { identifier },
		method,
	} = req;

	let page_id = typeof identifier === "string" ? identifier : "";

	if (!checkIfGuid(page_id))
		return res.status(400).json({
			success: false,
			error: "Please supply a uuid.",
		});

	switch (method) {
		case "GET":
			return getPage();
		case "PATCH":
			return updatePage();
		case "DELETE":
			return deletePage();
		default:
			return res.status(405).end(`Method ${req.method} Not Allowed`);
	}

	async function getPage() {
		try {
			let athlete;

			athlete = await prisma.pages.findUnique({
				where: {
					page_id,
				},
			});

			if (athlete) {
				res.status(200).json({
					success: true,
					data: athlete,
				});
			} else {
				res.status(404).json({
					success: false,
					data: athlete,
				});
			}
		} catch (error) {
			console.log(error);

			res.status(400).json({
				success: false,
				error: error,
			});
		}
	}

	async function updatePage() {
		try {
			const { page_name, page_cms_data, page_lookup_string } = req.body;

			const patchedPost = await prisma.pages.update({
				where: {
					page_id,
				},
				data: {
					page_name,
					page_cms_data,
					page_lookup_string,
				},
			});

			res.status(200).json({
				success: true,
				data: patchedPost,
			});
		} catch (error) {
			console.log(error);

			res.status(400).json({
				success: false,
				error: error,
			});
		}
	}

	async function deletePage() {
		try {
			const deletedPost = await prisma.pages.delete({
				where: {
					page_id,
				},
			});

			res.status(200).json({
				success: true,
				data: null,
			});
		} catch (error) {
			console.log(error);

			res.status(400).json({
				success: false,
				error: error,
			});
		}
	}
}
