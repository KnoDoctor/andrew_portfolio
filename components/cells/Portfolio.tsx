import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SlideIn from "../_atoms/SlideIn";

import PortfolioCard from "../_molecules/projects/PortfolioCard";

import useProjects from "../../hooks/projects/useProjects";

const Portfolio = () => {
	const projects = useProjects();

	if (projects.isLoading) {
		return <div>Loading</div>;
	}
	return (
		<Container
			maxWidth={"xl"}
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				py: 12,
				// height: { xs: null, md: "100vh" },
			}}
		>
			<SlideIn>
				<>
					<Typography variant="h2" component="h3" sx={{ textAlign: "center", mb: 5 }}>
						Projects
					</Typography>
					<Grid container spacing={4}>
						{projects.data.data
							.filter((project: any) => project.is_published === true)
							.map((project: any, i: number) => {
								return (
									<Grid item xs={12} sm={6} md={4}>
										<PortfolioCard project={project} i={i} />
									</Grid>
								);
							})}
					</Grid>
				</>
			</SlideIn>
		</Container>
	);
};

export default Portfolio;
