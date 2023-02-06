import * as React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface PortfolioCardProps {
	i: number;
	project: {
		project_id: string;
		project_name: string;
		project_description: string;
		project_data: string;
		project_hero_image: string;
		is_published: boolean;
	};
}

export default function PortfolioCard({ project, i }: PortfolioCardProps) {
	const fadeIndDelay = i * 0.08;
	const router = useRouter();

	return (
		<Card
			raised
			component={motion.div}
			// whileHover={
			//     {
			//         // scale: 1.01,
			//         // transition: { duration: 0.2 },
			//     }
			// }
			initial={{
				y: 50,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
				transition: {
					duration: 0.7,
					delay: fadeIndDelay,
					type: "spring",
					bounce: 0.3,
				},
			}}
			// whileInView={{
			//     y: 0,
			//     opacity: 1,
			//     transition: {
			//         type: "spring",
			//         bounce: 0.4,
			//         duration: 1.2,
			//     },
			// }}
			// viewport={{ once: true, amount: amount }}
		>
			<ButtonBase
				focusRipple
				sx={{ display: "flex", flexDirection: "column" }}
				onClick={() => router.push(`/projects/${project.project_id}`)}
			>
				<CardMedia
					component="img"
					width={"100%"}
					height={250}
					image={
						project.project_hero_image ||
						"https://images.unsplash.com/photo-1473343775075-61805b64e5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
					}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{project.project_name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{project.project_description}
					</Typography>
				</CardContent>
				{/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
			</ButtonBase>
		</Card>
	);
}
