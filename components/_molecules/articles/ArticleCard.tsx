import React from "react";

import { Card, Grid, Typography, Button, IconButton } from "@mui/material";

import Avatar from "@mui/material/Avatar";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Link from "../../_atoms/Link";

interface ArticleCardProps {
	articleName?: string;
	articleDescription?: string;
	articleData?: string;
	viewProductUrl?: string;
}

const ArticleCard = ({
	articleName,
	articleDescription,
	articleData,
	viewProductUrl,
}: ArticleCardProps) => {
	return (
		<Card variant={"outlined"} sx={{ p: 3, width: "100%", background: "#fafafa" }}>
			<Grid container>
				<Grid item xs={9}>
					<Avatar sx={{ height: 64, width: 64, mb: 2 }}>
						{typeof articleName === "string" ? articleName[0] : ""}
						{typeof articleDescription === "string" ? articleDescription[0] : ""}
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
						{articleName}
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Typography variant="body2" sx={{ my: 2 }}>
						{articleDescription}
					</Typography>
				</Grid>
				<Grid container spacing={2}>
					{viewProductUrl ? (
						<Grid item xs={12}>
							<Link href={viewProductUrl} sx={{ textDecoration: "none" }}>
								<Button color="primary" variant="contained" sx={{ width: "100%" }}>
									View Article
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

export default ArticleCard;
