import React from "react";

import { Card, Grid, Typography, Button, IconButton } from "@mui/material";

import Avatar from "@mui/material/Avatar";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Link from "../../_atoms/Link";

interface ProjectCardProps {
	projectName?: string;
	projectDescription?: string;
	viewProductUrl?: string;
}

const ProjectCard = ({ projectName, projectDescription, viewProductUrl }: ProjectCardProps) => {
	return (
		<Card variant={"outlined"} sx={{ p: 3, width: "100%", background: "#fafafa" }}>
			<Grid container>
				<Grid item xs={9}>
					<Avatar sx={{ height: 64, width: 64, mb: 2 }}>
						{typeof projectName === "string" ? projectName[0] : ""}
						{typeof projectDescription === "string" ? projectDescription[0] : ""}
					</Avatar>
				</Grid>
				<Grid
					item
					xs={3}
					sx={{
						display: "flex",
						justifyContent: "right",
						alignItems: "flex-start",
					}}
				>
					<IconButton aria-label="more-info">
						<MoreVertIcon />
					</IconButton>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h5" sx={{ mb: 0 }}>
						{projectName}
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Typography variant="body2" sx={{ my: 2 }}>
						{projectDescription}
					</Typography>
				</Grid>
				<Grid container spacing={2}>
					{viewProductUrl ? (
						<Grid item xs={12}>
							<Link href={viewProductUrl} sx={{ textDecoration: "none" }}>
								<Button color="primary" variant="contained" sx={{ width: "100%" }}>
									View Project
								</Button>
							</Link>
						</Grid>
					) : (
						<></>
					)}
				</Grid>
			</Grid>
		</Card>
	);
};

export default ProjectCard;
