import { useState } from "react";

import Image from "next/image";
import UploadButton from "../../_atoms/UploadButton";

import { Box, Button, Typography } from "@mui/material";

interface ProjectSidebarProps {
	projectHeroImage: string | null;
	setUpdatedHeroImage(value: string): void;
	setHasContentBeenEdited(value: boolean): void;
}

const ProjectSidebar = ({
	projectHeroImage,
	setHasContentBeenEdited,
	setUpdatedHeroImage,
}: ProjectSidebarProps) => {
	return (
		<Box>
			<Box sx={{ position: "relative", width: "100%", height: "250px", mb: 3 }}>
				<Image
					src={
						projectHeroImage ||
						"https://images.unsplash.com/photo-1596887245124-5150ad2491e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
					}
					fill={true}
					alt="test"
					style={{ objectFit: "cover", borderRadius: "25px" }}
				/>
			</Box>
			<UploadButton
				setUpdatedHeroImage={setUpdatedHeroImage}
				setHasContentBeenEdited={setHasContentBeenEdited}
			/>
		</Box>
	);
};

export default ProjectSidebar;
