import React from "react";
import { useRouter } from "next/router";

import { Card, Grid } from "@mui/material";

import ButtonBase from "@mui/material/ButtonBase";

import Link from "../../../src/Link";
import Breadcrumbs from "../../_molecules/Breadcrumbs";

import ArticleCreatationOrganism from "./ArticleCreatationOrganism";
import ArticleCard from "../../_molecules/articles/ArticleCard";

import { returnCurrentModule } from "../../../utils/helperFunctions";

import useArticles from "../../../hooks/articles/useArticles";

const ArticlesListOrganism = () => {
	const articles = useArticles();
	const router = useRouter();

	if (articles.isLoading) {
		return <div>Loading</div>;
	}

	return (
		<>
			<Breadcrumbs
				breadcrumbs={[
					{
						label: returnCurrentModule(router),
						anchor: `/admin/${returnCurrentModule(router)}`,
					},
					{ label: "Articles", anchor: null },
				]}
				actions={[
					{
						label: "Add New Article",
						component: <ArticleCreatationOrganism />,
					},
				]}
			/>
			<Card sx={{ p: 2, my: 2 }}>
				<Grid container spacing={3}>
					{articles.data.data.map((article: any) => (
						<Grid item xs={12} sm={6} md={3}>
							<ArticleCard
								articleName={article.article_name}
								articleDescription={article.article_description}
								articleData={article.article_data}
								viewProductUrl={`/admin/${returnCurrentModule(router)}/articles/${
									article.article_id
								}`}
							/>
							{/* <Link
								href={`/admin/${returnCurrentModule(router)}/people/${
									person.person_id
								}`}
							>
								<ButtonBase sx={{ width: "100%" }}>
									<Card
										variant={"outlined"}
										sx={{ p: 3, width: "100%", background: "#fafafa" }}
									>
										{person.first_name}
										{` `}
										{person.last_name}
									</Card>
								</ButtonBase>
							</Link> */}
						</Grid>
					))}
				</Grid>
			</Card>
		</>
	);
};

export default ArticlesListOrganism;
