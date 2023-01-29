import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { Box, Grid, Card, TextField, Typography, Button } from "@mui/material";

import Breadcrumbs from "../../_molecules/Breadcrumbs";
import ArticleEditor from "../../cells/articles/ArticleEditor";

import { returnCurrentModule } from "../../../utils/helperFunctions";

import useArticle from "../../../hooks/articles/useArticle";
import ArticleSidebar from "../../cells/articles/ArticleSidebar";

interface handleSaveArticleInputs {
	updatedArticle: {
		article_name?: string;
		article_data?: string;
	} | null;
	article: any;
	setHasContentBeenEdited(value: boolean): void;
}

const handleSaveArticle = async ({
	updatedArticle,
	article,
	setHasContentBeenEdited,
}: handleSaveArticleInputs) => {
	try {
		const articleId = article.data.data.article_id;

		// const updatedArticleObject = {
		// 	article_data: updatedArticleData,
		// };

		const updateArticleRes = await fetch(`/api/articles/${articleId}`, {
			method: "PATCH",

			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedArticle),
		});

		const updateArticleData = await updateArticleRes.json();

		if (updateArticleData.success) {
			article.mutate();
			setHasContentBeenEdited(false);
		} else {
			console.log("ERROR: ", updateArticleData);

			// setIsError(true);
			// if (createArticleData.message) setErrorMessage(`${createArticleData.message}`);
			// if (createArticleData.error)
			// 	setErrorMessage(`API Error: ${createArticleData.error}`);
		}
	} catch (error) {
		console.log(error);
	}
};

const ArticleOrganism = () => {
	const router = useRouter();
	let isReady = router.isReady;
	let id = router.query.articleId;

	const article = useArticle(id);

	const [articleName, setArticleName] = useState<string | null>(null);
	const [articleDescription, setArticleDescription] = useState<string | null>(null);
	const [updatedArticleData, setUpdatedArticleData] = useState<string | null>(null);
	const [updatedHeroImage, setUpdatedHeroImage] = useState<string | null>(null);
	const [updatedIsPublished, setUpdatedIsPublished] = useState<boolean | undefined>(undefined);

	const [updatedArticle, setUpdatedArticle] = useState<{
		article_name: string | null;
		article_description: string | null;
		article_data: string | null;
		article_hero_image: string | null;
		is_published: boolean | undefined;
	} | null>(null);

	const [hasContentBeenEdited, setHasContentBeenEdited] = useState(false);

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setArticleName(event.target.value);
		setHasContentBeenEdited(true);
	};
	const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setArticleDescription(event.target.value);
		setHasContentBeenEdited(true);
	};

	useEffect(() => {
		setArticleName(article?.data?.data?.article_name);
		setArticleDescription(article?.data?.data?.article_description);
		setUpdatedArticleData(article?.data?.data?.article_data);
		setUpdatedHeroImage(article?.data?.data?.article_hero_image);
		setUpdatedIsPublished(article?.data?.data?.is_published);
	}, [article.data]);

	useEffect(() => {
		setUpdatedArticle({
			article_name: articleName,
			article_description: articleDescription,
			article_data: updatedArticleData,
			article_hero_image: updatedHeroImage,
			is_published: updatedIsPublished,
		});
	}, [articleName, articleDescription, updatedArticleData, updatedHeroImage, updatedIsPublished]);

	console.log("UPDATED ARTICLE", updatedArticle);
	console.log("ARTICLE", article);

	if (article.isLoading || !isReady) {
		return <div>Loading</div>;
	}

	if (article.error) {
		return (
			<div>
				<h4>{article.error.message}</h4>
			</div>
		);
	}

	return (
		<>
			<Breadcrumbs
				breadcrumbs={[
					{
						label: returnCurrentModule(router),
						anchor: `/admin/${returnCurrentModule(router)}`,
					},
					{
						label: "Articles",
						anchor: `/admin/${returnCurrentModule(router)}/articles`,
					},
					{
						label: `${article.data.data.article_name}`,
						anchor: null,
					},
				]}
			/>

			<Card sx={{ height: "100%", p: 2, mt: 2 }}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={8}>
						<TextField
							sx={{ width: "100%", mb: 2 }}
							id="outlined-name"
							label="Article Name"
							value={articleName}
							onChange={handleNameChange}
						/>
						<TextField
							sx={{ width: "100%", mb: 2 }}
							id="outlined-name"
							label="Article Description"
							value={articleDescription}
							onChange={handleDescriptionChange}
						/>
						<Box>
							<ArticleEditor
								article={updatedArticle?.article_data}
								setUpdatedArticleData={setUpdatedArticleData}
								setHasContentBeenEdited={setHasContentBeenEdited}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<ArticleSidebar
							article={article}
							setUpdatedArticleData={setUpdatedArticleData}
							updatedArticle={updatedArticle}
							articleHeroImage={updatedHeroImage}
							hasContentBeenEdited={hasContentBeenEdited}
							setHasContentBeenEdited={setHasContentBeenEdited}
							setUpdatedHeroImage={setUpdatedHeroImage}
							handleSaveArticle={handleSaveArticle}
							updatedIsPublished={updatedIsPublished}
							setUpdatedIsPublished={setUpdatedIsPublished}
						/>
					</Grid>
				</Grid>
			</Card>
		</>
	);
};

export default ArticleOrganism;
