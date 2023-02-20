import React, { useState } from "react";

import { Button } from "@mui/material";

import TextfieldCms from "../../__cms/blocks/TextfieldCms";

interface TripDescriptionProps {
	updatedTrip: any;
	saveData(sectionToUpdate: any, updatedSectionObject: any): void;
}

const BespokeTripDescriptionCms = ({ updatedTrip, saveData }: TripDescriptionProps) => {
	const tripDescriptionSection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Trip Description"
	);

	const [tripDescription, setDescription] = useState(tripDescriptionSection[0].tripDescription);

	return (
		<div>
			<h4>Description</h4>
			<TextfieldCms
				fieldName={"tripOverviewDescription"}
				value={tripDescription}
				setValue={setDescription}
			/>
			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() =>
						saveData(tripDescriptionSection[0], {
							...tripDescriptionSection[0],
							tripDescription,
						})
					}
					variant={"contained"}
				>
					Save
				</Button>
			</div>
		</div>
	);
};

export default BespokeTripDescriptionCms;
