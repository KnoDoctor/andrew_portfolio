import { useState } from "react";

import Image from "next/image";
import UploadButton from "../../_atoms/UploadButton";

import {
	Grid,
	Box,
	Button,
	Typography,
	FormGroup,
	FormControlLabel,
	TextField,
	Switch,
} from "@mui/material";

interface ArticleSidebarProps {
	articleHeroImage: string | null;
	setUpdatedHeroImage(value: string): void;
	hasContentBeenEdited: boolean | null;
	setHasContentBeenEdited(value: boolean): void;
	updatedArticle: any;
	article: any;
	setUpdatedArticleData(data: any): void;
	updatedIsPublished: boolean | undefined;
	setUpdatedIsPublished(object: any): void;
	handleSaveArticle(object: any): void;
}

const ArticleSidebar = ({
	articleHeroImage,
	setUpdatedHeroImage,
	hasContentBeenEdited,
	setHasContentBeenEdited,
	article,
	updatedArticle,
	handleSaveArticle,
	updatedIsPublished,
	setUpdatedIsPublished,
	setUpdatedArticleData,
}: ArticleSidebarProps) => {
	const [checked, setChecked] = useState(true);
	const [imagePrompt, setImagePrompt] = useState("");
	const [articlePrompt, setArticlePrompt] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
		setUpdatedIsPublished(!updatedIsPublished);
		setHasContentBeenEdited(true);
	};

	const handleGenerateImageSubmit = async (imagePrompt: string) => {
		try {
			const imageGenerationOptions = {
				prompt: imagePrompt,
			};

			const generateImageRes = await fetch(`/api/ai/generateImage`, {
				method: "POST",

				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(imageGenerationOptions),
			});
			const generatedImageData = await generateImageRes.json();

			if (generatedImageData.success) {
				console.log("Success: ", generatedImageData);
				setUpdatedHeroImage(generatedImageData.data.cloudinaryUrl);
				setHasContentBeenEdited(true);
			} else {
				console.log("ERROR: ", generatedImageData);
				// setIsError(true);
				// if (createProjectData.message) setErrorMessage(`${createProjectData.message}`);
				// if (createProjectData.error)
				// 	setErrorMessage(`API Error: ${createProjectData.error}`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleGenerateArticleSubmit = async (articlePrompt: string) => {
		try {
			const articleGenerationOptions = {
				prompt: articlePrompt,
			};

			const generateArticleRes = await fetch(`/api/ai/generateArticle`, {
				method: "POST",

				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(articleGenerationOptions),
			});

			const generatedArticleData = await generateArticleRes.json();

			if (generatedArticleData.success) {
				console.log("Success: ", generatedArticleData);
				setUpdatedArticleData(generatedArticleData.data.article);
				setHasContentBeenEdited(true);
			} else {
				console.log("ERROR: ", generatedArticleData);
				// setIsError(true);
				// if (createProjectData.message) setErrorMessage(`${createProjectData.message}`);
				// if (createProjectData.error)
				// 	setErrorMessage(`API Error: ${createProjectData.error}`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Grid container>
			<Grid item xs={12} lg={6}>
				<FormGroup>
					<FormControlLabel
						label={updatedIsPublished ? "Published" : "Draft"}
						control={
							<Switch
								checked={updatedIsPublished}
								onChange={handleChange}
								inputProps={{ "aria-label": "controlled" }}
							/>
						}
					></FormControlLabel>
				</FormGroup>
			</Grid>
			<Grid item xs={12} lg={6}>
				<Button
					variant="contained"
					sx={{ width: "100%" }}
					disabled={!hasContentBeenEdited}
					onClick={() =>
						handleSaveArticle({
							updatedArticle,
							article,
							setHasContentBeenEdited,
						})
					}
				>
					{!hasContentBeenEdited ? "Up to Date" : "Save"}
				</Button>
			</Grid>
			<Grid item xs={12} sx={{ mt: 4 }}>
				<Box>
					<Box sx={{ position: "relative", width: "100%", height: "250px", mb: 3 }}>
						<Image
							src={
								articleHeroImage ||
								"https://images.unsplash.com/photo-1596887245124-5150ad2491e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
							}
							fill={true}
							alt="test"
							style={{ objectFit: "cover", borderRadius: "25px" }}
						/>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={6}>
				<UploadButton
					setUpdatedHeroImage={setUpdatedHeroImage}
					setHasContentBeenEdited={setHasContentBeenEdited}
				/>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h6" mb={2}>
					AI Tools
				</Typography>
				<TextField
					multiline
					sx={{ width: "100%", mb: 2 }}
					id="imagePrompt"
					label="Image Prompt"
					value={imagePrompt}
					onChange={(e) => setImagePrompt(e.target.value)}
				/>
				<Button
					variant="contained"
					sx={{ width: "100%" }}
					onClick={() => handleGenerateImageSubmit(imagePrompt)}
				>
					{"Generate Hero Image"}
				</Button>
				<TextField
					multiline
					sx={{ width: "100%", my: 2 }}
					id="outlined-name"
					label="Article Prompt"
					value={articlePrompt}
					onChange={(e) => setArticlePrompt(e.target.value)}
				/>
				<Button
					variant="contained"
					sx={{ width: "100%" }}
					onClick={() => handleGenerateArticleSubmit(articlePrompt)}
				>
					{"Generate Article"}
				</Button>
			</Grid>
		</Grid>
	);
};

export default ArticleSidebar;
