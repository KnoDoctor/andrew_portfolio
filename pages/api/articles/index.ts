import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { generateGuid } from "../../../utils/uuids";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req;

	switch (method) {
		case "GET":
			return getArticles();
		case "POST":
			return createArticle();
		default:
			return res.status(405).end(`Method ${req.method} Not Allowed`);
	}

	async function getArticles() {
		try {
			const allArticles = await prisma.articles.findMany();

			res.status(200).json({
				success: true,
				data: allArticles,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				success: false,
				error: error,
			});
		}
	}

	async function createArticle() {
		try {
			const { article_name, article_description, email } = req.body;

			if (!article_name) {
				return res.status(400).json({
					success: false,
					error: "Could not create article, name parameter is missing.",
				});
			}
			if (!article_description) {
				return res.status(400).json({
					success: false,
					error: "Could not create article, description parameter is missing.",
				});
			}
			// if (!email) {
			// 	return res.status(400).json({
			// 		success: false,
			// 		error: "Could not create article, email parameter is missing.",
			// 	});
			// }

			const createdArticle = await prisma.articles.create({
				data: {
					article_id: generateGuid(),
					article_name,
					article_description,
				},
			});

			res.status(201).json({
				success: true,
				data: createdArticle,
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
