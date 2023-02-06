import { useState } from "react";

import Image from "next/image";
import UploadButton from "../../_atoms/UploadButton";

import { Grid, Box, Button, Typography, FormGroup, FormControlLabel, Switch } from "@mui/material";

interface ProjectSidebarProps {
	projectHeroImage: string | null;
	setUpdatedHeroImage(value: string): void;
	hasContentBeenEdited: boolean | null;
	setHasContentBeenEdited(value: boolean): void;
	updatedProject: any;
	project: any;
	handleSaveProject(object: any): void;
	updatedIsPublished: boolean | undefined;
	setUpdatedIsPublished(object: any): void;
}

const ProjectSidebar = ({
	projectHeroImage,
	setHasContentBeenEdited,
	hasContentBeenEdited,
	setUpdatedHeroImage,
	project,
	updatedProject,
	handleSaveProject,
	updatedIsPublished,
	setUpdatedIsPublished,
}: ProjectSidebarProps) => {
	const [checked, setChecked] = useState(true);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
		setUpdatedIsPublished(!updatedIsPublished);
		setHasContentBeenEdited(true);
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
						handleSaveProject({
							updatedProject,
							project,
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
								projectHeroImage ||
								"https://images.unsplash.com/photo-1473343775075-61805b64e5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
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
		</Grid>
	);
};

export default ProjectSidebar;
