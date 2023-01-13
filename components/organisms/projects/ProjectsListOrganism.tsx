import React from "react";
import { useRouter } from "next/router";

import { Card, Grid } from "@mui/material";

import ButtonBase from "@mui/material/ButtonBase";

import Link from "../../../src/Link";
import Breadcrumbs from "../../_molecules/Breadcrumbs";

import ProjectCreatationOrganism from "./ProjectCreatationOrganism";
import ProjectCard from "../../_molecules/projects/ProjectCard";

import { returnCurrentModule } from "../../../utils/helperFunctions";

import useProjects from "../../../hooks/projects/useProjects";

const ProjectsListOrganism = () => {
	const projects = useProjects();
	const router = useRouter();

	if (projects.isLoading) {
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
					{ label: "Projects", anchor: null },
				]}
				actions={[
					{
						label: "Add New Project",
						component: <ProjectCreatationOrganism />,
					},
				]}
			/>
			<Card sx={{ p: 2, my: 2 }}>
				<Grid container spacing={3}>
					{projects.data.data.map((project: any) => (
						<Grid item xs={12} sm={6} md={3}>
							<ProjectCard
								projectName={project.project_name}
								projectDescription={project.project_description}
								viewProductUrl={`/admin/${returnCurrentModule(router)}/projects/${
									project.project_id
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

export default ProjectsListOrganism;
