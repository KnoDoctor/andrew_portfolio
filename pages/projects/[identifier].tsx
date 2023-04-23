import { useRouter } from "next/router";

import parse from "html-react-parser";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import Image from "next/image";

import SlideIn from "../../components/_atoms/SlideIn";

import useProjects from "../../hooks/projects/useProjects";
import Pagination from "@mui/material/Pagination";

const Project = ({ projectData }: any) => {
	const router = useRouter();

	const projects = useProjects();

	if (router.isFallback) {
		return <div style={{ padding: "150px" }}>Loading...</div>;
	}

	if (projects.isLoading) {
		return <div>Loading</div>;
	}

	const currentPage =
		projects.data.data.findIndex((d: any) => d.project_id === router.query.identifier) + 1;

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		router.push(`/projects/${projects.data.data[value - 1].project_id}`);
	};

	return (
		<Container
			maxWidth={"md"}
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				py: { xs: 9, md: 12 },
			}}
		>
			<SlideIn>
				<Box display="flex" justifyContent="center" mb={3}>
					<Pagination
						count={projects.data.data.length}
						page={currentPage}
						shape="rounded"
						onChange={handleChange}
					/>
				</Box>
			</SlideIn>
			<SlideIn>
				<Box
					sx={{
						position: "relative",
						width: { xs: "100%", md: "400px" },
						height: "300px",
						margin: "auto",
						mb: 5,
					}}
				>
					<Image
						src={
							projectData?.data?.project_hero_image ||
							"https://images.unsplash.com/photo-1473343775075-61805b64e5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
						}
						fill={true}
						alt="test123"
						style={{ objectFit: "cover", borderRadius: "25px" }}
					/>
				</Box>
			</SlideIn>

			<SlideIn delaySlideIn={0.1}>
				<Typography variant="h2" component="h1" textAlign={"center"} gutterBottom>
					{projectData?.data?.project_name}
				</Typography>
			</SlideIn>
			<SlideIn delaySlideIn={0.2}>
				<Typography variant="h5" component="h2" textAlign={"center"}>
					{projectData?.data?.project_description}
				</Typography>
			</SlideIn>
			<SlideIn delaySlideIn={0.3}>
				{
					<Box id={`ckeditor_content`}>
						{typeof projectData?.data?.project_data === "string"
							? parse(projectData?.data?.project_data)
							: "Parse Error"}
					</Box>
				}
			</SlideIn>
		</Container>
	);
};

export async function getStaticPaths() {
	return {
		paths: [
			{
				params: {
					identifier: "9eebd3bf-bb50-4c08-91f8-81b69bf5bdc6",
				},
			},
		],
		fallback: true,
	};
}

export async function getStaticProps({ params }: any) {
	try {
		//Fetch collection data
		const projectReq = await fetch(
			`${process.env.NEXT_PUBLIC_APP_DOMAIN}/api/projects/${params.identifier}`
		);

		const projectData = await projectReq.json();

		if (!projectData.success) {
			console.log(projectData);
			return {
				notFound: true,
			};
		}

		return {
			props: {
				projectData,
			},
			// Next.js will attempt to re-generate the page:
			// - When a request comes in
			// - At most once every second
			revalidate: 5, // In seconds
		};
	} catch (err) {
		console.log(err);
		return {
			notFound: true,
		};
	}
}

export default Project;
