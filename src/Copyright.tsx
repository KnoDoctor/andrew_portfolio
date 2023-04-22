import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import Link from "../components/_atoms/Link";
import { Box } from "@mui/material";

export default function Copyright() {
	return (
		<Box sx={{ position: "absolute", bottom: "2vh" }}>
			<Typography variant="body2" color="text.secondary" align="center">
				{"Copyright © "}
				ab | DESIGNS {new Date().getFullYear()}
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
				<a href="/admin" style={{ textDecoration: "none" }}>
					Admin
				</a>
			</Typography>
		</Box>
	);
}
