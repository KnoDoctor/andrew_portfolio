import * as React from "react";

import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField } from "@mui/material";

import useArticles from "../../../hooks/articles/useArticles";

const ArticleCreatationOrganism = ({ handleClose }: any) => {
	const articles = useArticles();

	const [isError, setIsError] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			const formData = new FormData(event.currentTarget);

			const newArticleObject = {
				article_name: formData.get("articleName"),
				article_description: formData.get("articleDescription"),
			};

			const createArticleRes = await fetch(`/api/articles`, {
				method: "POST",

				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newArticleObject),
			});
			const createArticleData = await createArticleRes.json();

			if (createArticleData.success) {
				articles.mutate();
				handleClose();
			} else {
				console.log("ERROR: ", createArticleData);

				setIsError(true);
				if (createArticleData.message) setErrorMessage(`${createArticleData.message}`);
				if (createArticleData.error)
					setErrorMessage(`API Error: ${createArticleData.error}`);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
				<DialogTitle id="scroll-dialog-title">Add New Article</DialogTitle>
				<DialogContent dividers={true}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="articleName"
						label="Article Name"
						name="articleName"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="articleDescription"
						label="Article Description"
						type="text"
						id="articleDescription"
					/>

					{/* <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid> */}
				</DialogContent>
				<DialogActions>
					<Button size="small" onClick={handleClose}>
						Cancel
					</Button>
					<Button type="submit" variant={"contained"} size="small">
						Create
					</Button>
				</DialogActions>
			</Box>
		</>
	);
};

export default ArticleCreatationOrganism;
