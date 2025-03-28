import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { checkIfGuid } from "../../../utils/uuids";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	const {
		query: { identifier },
		method,
	} = req;

	let article_id = typeof identifier === "string" ? identifier : "";

	if (!checkIfGuid(article_id))
		return res.status(400).json({
			success: false,
			error: "Please supply a uuid.",
		});

	switch (method) {
		case "GET":
			return getArticle();
		case "PATCH":
			return updateArticle();
		case "DELETE":
			return deleteArticle();
		default:
			return res.status(405).end(`Method ${req.method} Not Allowed`);
	}

	async function getArticle() {
		try {
			let athlete;

			athlete = await prisma.articles.findUnique({
				where: {
					article_id,
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

	async function updateArticle() {
		try {
			const {
				article_name,
				article_description,
				article_data,
				article_hero_image,
				is_published,
			} = req.body;

			const patchedPost = await prisma.articles.update({
				where: {
					article_id,
				},
				data: {
					article_name,
					article_description,
					article_data,
					article_hero_image,
					is_published,
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

	async function deleteArticle() {
		try {
			const deletedPost = await prisma.articles.delete({
				where: {
					article_id,
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
