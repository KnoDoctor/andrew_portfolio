import Image from "next/image";

import { Box, Button, Typography } from "@mui/material";

interface ProjectSidebarProps {
	projectName: string;
}

const ProjectSidebar = ({ projectName }: ProjectSidebarProps) => {
	return (
		<Box>
			<Box sx={{ position: "relative", width: "100%", height: "250px", mb: 3 }}>
				<Image
					src="/images/beamish-taps/tap_1.jpg"
					fill={true}
					alt="test"
					style={{ objectFit: "cover", borderRadius: "25px" }}
				/>
			</Box>
			<Button variant="contained" component="label" sx={{ mb: 3 }}>
				Upload
				<input hidden accept="image/*" multiple type="file" />
			</Button>
		</Box>
	);
};

export default ProjectSidebar;
