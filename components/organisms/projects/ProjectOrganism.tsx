import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { Box, Grid, Card, TextField, Typography, Button } from "@mui/material";

import Breadcrumbs from "../../_molecules/Breadcrumbs";
import ProjectEditor from "../../cells/projects/ProjectEditor";

import { returnCurrentModule } from "../../../utils/helperFunctions";

import useProject from "../../../hooks/projects/useProject";
import ProjectSidebar from "../../cells/projects/ProjectSidebar";

interface handleSaveProjectInputs {
	updatedProject: {
		project_name?: string;
		project_data?: string;
	} | null;
	project: any;
	setHasContentBeenEdited(value: boolean): void;
}

const handleSaveProject = async ({
	updatedProject,
	project,
	setHasContentBeenEdited,
}: handleSaveProjectInputs) => {
	try {
		const projectId = project.data.data.project_id;

		// const updatedProjectObject = {
		// 	project_data: updatedProjectData,
		// };

		const updateProjectRes = await fetch(`/api/projects/${projectId}`, {
			method: "PATCH",

			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProject),
		});

		const updateProjectData = await updateProjectRes.json();

		if (updateProjectData.success) {
			project.mutate();
			setHasContentBeenEdited(false);
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

	const [projectName, setProjectName] = useState<string | null>(null);
	const [updatedProjectData, setUpdatedProjectData] = useState<string | null>(null);

	const [updatedProject, setUpdatedProject] = useState<{} | null>(null);

	const [hasContentBeenEdited, setHasContentBeenEdited] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setProjectName(event.target.value);
		setHasContentBeenEdited(true);
	};

	useEffect(() => {
		setProjectName(project?.data?.data?.project_name);
		setUpdatedProjectData(project?.data?.data?.project_data);
	}, [project.data]);

	useEffect(() => {
		setUpdatedProject({
			project_name: projectName,
			project_data: updatedProjectData,
		});
	}, [projectName, updatedProjectData]);

	console.log("UPDATED PROJECT", updatedProject);

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
						<TextField
							sx={{ width: "100%", mb: 2 }}
							id="outlined-name"
							label="Project Name"
							value={projectName}
							onChange={handleChange}
						/>
						<Box>
							<ProjectEditor
								project={project}
								setUpdatedProjectData={setUpdatedProjectData}
								setHasContentBeenEdited={setHasContentBeenEdited}
							/>
						</Box>
					</Grid>
					<Grid item xs={3}>
						<ProjectSidebar projectName={project.data.data.project_name} />
						<Button
							variant="contained"
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
				</Grid>
			</Card>
		</>
	);
};

export default ProjectOrganism;
