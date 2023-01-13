import React from "react";

import { useRouter } from "next/router";

import { Grid, Card, Button } from "@mui/material";

import Breadcrumbs from "../../_molecules/Breadcrumbs";
import ProjectEditor from "../../cells/projects/ProjectEditor";

import { returnCurrentModule } from "../../../utils/helperFunctions";

import useProject from "../../../hooks/projects/useProject";

const ProjectOrganism = () => {
	const router = useRouter();

	let isReady = router.isReady;
	let id = router.query.projectId;

	const project = useProject(id);

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
						label: `${project.data.data.project_name} ${project.data.data.project_data}`,
						anchor: null,
					},
				]}
			/>

			<Card sx={{ p: 2, my: 2 }}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<ProjectEditor project={project} />
					</Grid>
				</Grid>
			</Card>
		</>
	);
};

export default ProjectOrganism;
