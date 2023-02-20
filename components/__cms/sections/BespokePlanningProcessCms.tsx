import React, { useState } from "react";

import TextfieldCms from "../blocks/TextfieldCms";

import { Button } from "@mui/material";

interface BespokePlanningProcessCmsProps {
	updatedTrip: any;
	saveData(sectionToUpdate: any, updatedSectionObject: any): void;
}

const BespokePlanningProcessCms = ({ updatedTrip, saveData }: BespokePlanningProcessCmsProps) => {
	const planningProcessSection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Planning Process"
	);

	const [description, setDescription] = useState(planningProcessSection[0].description || "");
	const [tripLength, setTripLength] = useState(planningProcessSection[0].tripLength || "");

	return (
		<div>
			<h4>Description</h4>
			<TextfieldCms fieldName={"description"} value={description} setValue={setDescription} />

			<h4>Trip Length</h4>
			<TextfieldCms fieldName={"tripLength"} value={tripLength} setValue={setTripLength} />

			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() =>
						saveData(planningProcessSection[0], {
							...planningProcessSection[0],
							description,
							tripLength,
						})
					}
					variant={"contained"}
					sx={{ width: 130 }}
				>
					Save
				</Button>
			</div>
		</div>
	);
};

export default BespokePlanningProcessCms;
