import React, { useState } from "react";

import { useRouter } from "next/router";

import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { Card, Grid } from "@mui/material";

// Fetch page data
import usePage from "../../../hooks/pages/usePage";

//RenderCms component
import RenderCms from "../../__cms/RenderCms";

import Breadcrumbs from "../../_molecules/Breadcrumbs";

import { returnCurrentModule } from "../../../utils/helperFunctions";

//Meta data management

const PageOrganism = () => {
	const router = useRouter();
	let id = router.query.pageId;

	const pageData = usePage(id);

	const [savingAlert, setSavingAlert] = useState(false);
	const [saving, setSaving] = useState(false);
	const [saveSuccessful, setSaveSuccessful] = useState(false);

	// console.log("PAGE DATA", pageData);

	const renderSaveAlert = () => {
		if (savingAlert) {
			return (
				<div style={{ margin: "0 0 10px 0" }}>
					{saving ? (
						<Alert severity="info">Saving...</Alert>
					) : (
						<>
							{saveSuccessful ? (
								<Alert
									severity="success"
									onClose={() => {
										setSavingAlert(false);
									}}
								>
									Saved!
								</Alert>
							) : (
								<Alert
									severity="error"
									onClose={() => {
										setSavingAlert(false);
									}}
								>
									Save Failed
								</Alert>
							)}
						</>
					)}
				</div>
			);
		}
	};

	const savePageData = async (updatedPageData: any) => {
		let { page_id, ...updateObject } = updatedPageData;

		const reqOptions = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updateObject),
		};

		try {
			let pageRes = await fetch(`/api/pages/${updatedPageData.page_id}`, reqOptions);
			let pageData = await pageRes.json();

			if (pageData.success === false) {
				console.log("FAILED TO SAVE");

				setSaveSuccessful(false);
				setSaving(false);
			} else {
				setSaveSuccessful(true);
				setSaving(false);
			}

			// if (process.env.NEXT_PUBLIC_API_ENDPOINT === "https://staging.api.butterfield.com") {
			// 	let prodRes = await fetch(
			// 		`https://api.butterfield.com/v1/pages/${updatedPageData.page_id}`,
			// 		reqOptions
			// 	);

			// 	let prodData = await prodRes.json();

			// 	if (data.success === false || prodData.success === false) {
			// 		//Set error message to display via "snack bar component"
			// 		console.log("FAILED REQUEST");
			// 	}
			// }
		} catch (err) {
			console.log(err);
			setSaveSuccessful(false);
			setSaving(false);
		}
	};

	return (
		<div>
			{pageData.isLoading ? (
				<div>Loading CMS...</div>
			) : (
				<>
					<Breadcrumbs
						breadcrumbs={[
							{
								label: returnCurrentModule(router),
								anchor: `/admin/${returnCurrentModule(router)}`,
							},

							{
								label: "Pages",
								anchor: `/admin/${returnCurrentModule(router)}/pages`,
							},
							{
								label: pageData?.data?.data?.page_name,
								anchor: null,
							},
						]}
					/>
					<Card sx={{ p: 2, my: 2, overflow: "visible" }}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<RenderCms
									pageData={pageData}
									savePageData={savePageData}
									setSaving={setSaving}
									renderSaveAlert={renderSaveAlert}
									setSavingAlert={setSavingAlert}
								/>
							</Grid>
						</Grid>
					</Card>
				</>
			)}
		</div>
	);
};

export default PageOrganism;
