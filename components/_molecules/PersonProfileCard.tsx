import React from "react";

import { Card, Grid, Typography, Button, IconButton } from "@mui/material";

import Avatar from "@mui/material/Avatar";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Link from "../_atoms/Link";

interface PersonProfileCardProps {
	firstname?: string;
	lastname?: string;
	viewProfileUrl?: string;
}

const PersonProfileCard = ({ firstname, lastname, viewProfileUrl }: PersonProfileCardProps) => {
	return (
		<Card variant={"outlined"} sx={{ p: 3, width: "100%", background: "#fafafa" }}>
			<Grid container>
				<Grid item xs={9}>
					<Avatar sx={{ height: 64, width: 64, mb: 2 }}>
						{typeof firstname === "string" ? firstname[0] : ""}
						{typeof lastname === "string" ? lastname[0] : ""}
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
						{firstname} {lastname}
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Typography variant="body2" sx={{ my: 2 }}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam maiores,
						quos unde id illum sequi quas odio quaerat quod minus doloremque quae
						deleniti sunt nisi sint molestias eligendi impedit ea.
					</Typography>
				</Grid>
				<Grid container spacing={2}>
					{viewProfileUrl ? (
						<Grid item xs={12}>
							<Link href={viewProfileUrl} sx={{ textDecoration: "none" }}>
								<Button color="primary" variant="contained" sx={{ width: "100%" }}>
									View Profile
								</Button>
							</Link>
						</Grid>
					) : (
						<></>
					)}
					<Grid item xs={6}>
						<Button
							color="info"
							variant="contained"
							sx={{ width: "100%" }}
							startIcon={<CallIcon />}
						>
							Call
						</Button>
					</Grid>
					<Grid item xs={6}>
						<Button
							color="secondary"
							variant="contained"
							sx={{ width: "100%" }}
							startIcon={<EmailIcon />}
						>
							Email
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Card>
	);
};

export default PersonProfileCard;
