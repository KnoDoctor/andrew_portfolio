import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { Box, Grid, Card, Button } from "@mui/material";

import Breadcrumbs from "../../_molecules/Breadcrumbs";
import ProjectEditor from "../../cells/projects/ProjectEditor";

import { returnCurrentModule } from "../../../utils/helperFunctions";

import useProject from "../../../hooks/projects/useProject";

interface handleSaveProjectInputs {
	updatedProjectData: string | null;
	project: any;
	setUpdatedProjectData(updatedData: any): void;
}

const handleSaveProject = async ({
	updatedProjectData,
	project,
	setUpdatedProjectData,
}: handleSaveProjectInputs) => {
	try {
		const projectId = project.data.data.project_id;

		const updatedProjectObject = {
			project_data: updatedProjectData,
		};

		const updateProjectRes = await fetch(`/api/projects/${projectId}`, {
			method: "PATCH",

			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProjectObject),
		});

		const updateProjectData = await updateProjectRes.json();

		if (updateProjectData.success) {
			project.mutate();
			setUpdatedProjectData(null);
		} else {
			console.log("ERROR: ", updateProjectData);

			// setIsError(true);
			// if (createProjectData.message) setErrorMessage(`${createProjectData.message}`);
			// if (createProjectData.error)
			// 	setErrorMessage(`API Error: ${createProjectData.error}`);
		}
	} catch (error) {
		console.log(error);
	}
};

const ProjectOrganism = () => {
	const router = useRouter();
	let isReady = router.isReady;
	let id = router.query.projectId;

	const project = useProject(id);

	const [updatedProjectData, setUpdatedProjectData] = useState(null);

	if (project.isLoading || !isReady) {
		return <div>Loading</div>;
	}

	if (project.error) {
		return (
			<div>
				<h4>{project.error.message}</h4>
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
						label: "Projects",
						anchor: `/admin/${returnCurrentModule(router)}/projects`,
					},
					{
						label: `${project.data.data.project_name}`,
						anchor: null,
					},
				]}
			/>

			<Card sx={{ height: "100%", p: 2, mt: 2 }}>
				<Grid container spacing={3}>
					<Grid item xs={9}>
						<Box>
							<ProjectEditor
								project={project}
								setUpdatedProjectData={setUpdatedProjectData}
							/>
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Button
							variant="contained"
							disabled={!updatedProjectData}
							onClick={() =>
								handleSaveProject({
									updatedProjectData,
									project,
									setUpdatedProjectData,
								})
							}
						>
							{!updatedProjectData ? "Up to Date" : "Save"}
						</Button>
					</Grid>
				</Grid>
			</Card>
		</>
	);
};

export default ProjectOrganism;
