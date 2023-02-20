import React, { useState, useEffect } from "react";

import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useDebounce } from "use-debounce";

//Import Helper Functions
import { parseWpCharacters } from "../../../utils/helperFunctions";
import { checkIfGuid } from "../../../utils/uuids";

interface RelatedBlogsAutocompleteCmsProps {
	value: any;
	index: any;
	setValue(index: any, value: string | null): void;
}

export default function RelatedBlogsAutocompleteCms({
	value,
	index,
	setValue,
}: RelatedBlogsAutocompleteCmsProps) {
	const [fieldValue, setFieldValue] = useState(value ? value : null);
	const [inputValue, setInputValue] = useState("");
	const [blog, setBlog] = useState<any>(null);
	const [combinedBlogs, setCombinedBlogs] = useState([]);

	const [debouncedInputValue] = useDebounce(inputValue, 500);

	const getBlogArticlesList = async () => {
		if (debouncedInputValue.length > 0) {
			//Fetch blog posts data
			const blogPostsReq = await fetch(
				`${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/blogArticles`
			);

			const blogPostsData = await blogPostsReq.json();

			let filteredBlogPosts = [];

			filteredBlogPosts = blogPostsData.blogArticles.filter((blog: any) => {
				let shouldBlogBeReturned;
				let tagArray = [blog.title, blog.article_snippet];
				let tagCloud = tagArray.join();

				shouldBlogBeReturned = tagCloud
					.toLowerCase()
					.includes(debouncedInputValue.toLowerCase());

				return shouldBlogBeReturned;
			});

			//Fetch WP blog posts data
			const wordpressBlogPostsReq = await fetch(
				`https://blog.butterfield.com/wp-json/wp/v2/posts?_embed&per_page=15&search=${debouncedInputValue}`
			);

			const wordpressBlogPostsData = await wordpressBlogPostsReq.json();

			setCombinedBlogs(filteredBlogPosts.concat(wordpressBlogPostsData));
		}
	};

	const refreshBlogData = async () => {
		if (fieldValue) {
			if (!checkIfGuid(fieldValue)) {
				const wordpressBlogPostReq = await fetch(
					`https://blog.butterfield.com/wp-json/wp/v2/posts/${fieldValue}?_embed`
				);

				const wordpressBlogPostData = await wordpressBlogPostReq.json();

				setBlog(wordpressBlogPostData);
			} else {
				const blogPostsReq = await fetch(
					`${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/blogArticles`
				);

				const blogPostsData = await blogPostsReq.json();

				let blogPost = blogPostsData?.blogArticles.filter(
					(blog: any) => blog.id === fieldValue
				);

				setBlog(blogPost[0]);
			}
		} else {
			setBlog(null);
		}
	};

	//Fetch Data
	useEffect(() => {
		getBlogArticlesList();
	}, [debouncedInputValue]);

	useEffect(() => {
		refreshBlogData();
	}, [fieldValue]);

	return (
		<div>
			{blog ? (
				<div>
					<div
						style={{
							zIndex: "0",
							position: "relative",
							width: "400px",
							height: "300px",
						}}
					>
						<img
							src={
								!checkIfGuid(blog.id)
									? blog._embedded["wp:featuredmedia"][0].source_url
									: blog.main_banner_image
							}
							alt="hero-image"
							style={{
								objectFit: "cover",
								height: "100%",
								width: "100%",
							}}
						></img>
					</div>
					<div>
						<h3>
							{!checkIfGuid(blog.id)
								? parseWpCharacters(blog.title.rendered)
								: blog.title}
							<IconButton
								onClick={() => {
									setFieldValue(null);
									setValue(index, null);
								}}
								aria-label="clear"
							>
								<ClearIcon fontSize="small" />
							</IconButton>
						</h3>
					</div>
				</div>
			) : (
				<></>
			)}
			<Autocomplete
				onChange={(event, newValue: any) => {
					if (newValue) {
						if (checkIfGuid(newValue.id)) {
							setFieldValue(newValue.id);
							setValue(index, newValue.id);
						} else {
							setFieldValue(newValue.id);
							setValue(index, newValue.id);
						}
					} else {
						setFieldValue(null);
						setValue(index, null);
					}
				}}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue);
				}}
				id="blog-autocomplete-field"
				options={combinedBlogs}
				getOptionLabel={(blog) =>
					checkIfGuid(blog.id) ? blog.title : parseWpCharacters(blog.title.rendered)
				}
				filterOptions={(combinedBlogs, state) => combinedBlogs}
				renderInput={(params) => (
					<TextField
						{...params}
						style={{ width: "100%" }}
						label="Search for a blog title..."
						variant="outlined"
						inputProps={{
							...params.inputProps,
							autoComplete: "new-password", // disable autocomplete and autofill
						}}
					/>
				)}
			/>
		</div>
	);
}
