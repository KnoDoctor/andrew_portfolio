import * as React from "react";

import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField } from "@mui/material";

import useProjects from "../../hooks/projects/useProjects";

const ProjectCreatationOrganism = ({ handleClose }: any) => {
	const projects = useProjects();

	const [isError, setIsError] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			const formData = new FormData(event.currentTarget);

			const newProjectObject = {
				project_name: formData.get("projectName"),
				project_description: formData.get("projectDescription"),
			};

			const createProjectRes = await fetch(`/api/projects`, {
				method: "POST",

				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newProjectObject),
			});
			const createProjectData = await createProjectRes.json();

			if (createProjectData.success) {
				projects.mutate();
				handleClose();
			} else {
				console.log("ERROR: ", createProjectData);

				setIsError(true);
				if (createProjectData.message) setErrorMessage(`${createProjectData.message}`);
				if (createProjectData.error)
					setErrorMessage(`API Error: ${createProjectData.error}`);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
				<DialogTitle id="scroll-dialog-title">Add New Project</DialogTitle>
				<DialogContent dividers={true}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="projectName"
						label="Proect Name"
						name="projectName"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="projectDescription"
						label="Project Description"
						type="text"
						id="projectDescription"
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

export default ProjectCreatationOrganism;
