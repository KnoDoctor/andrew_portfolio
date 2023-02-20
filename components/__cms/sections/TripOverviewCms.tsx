import React, { useState } from "react";

import { Button } from "@mui/material";

import TextfieldCms from "../../__cms/blocks/TextfieldCms";

interface TripOverviewProps {
	updatedTrip: any;
	saveData(sectionToUpdate: any, updatedSectionObject: any): void;
}

const TripOverviewCms = ({ updatedTrip, saveData }: TripOverviewProps) => {
	const tripOveriewSection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Trip Overview"
	);

	const [tripOverviewTitle, setTripOverviewTitle] = useState(
		tripOveriewSection[0].tripOverviewTitle
	);

	console.log("TRIP OVERVIEW TITLE", tripOverviewTitle);

	const [tripOverviewDescription, setTripOverviewDescription] = useState(
		tripOveriewSection[0].tripOverviewDescription
	);

	return (
		<div>
			<h4>Title</h4>
			<TextfieldCms
				fieldName={"tripOverviewTitle"}
				value={tripOverviewTitle}
				setValue={setTripOverviewTitle}
			/>

			<h4>Description</h4>
			<TextfieldCms
				fieldName={"tripOverviewDescription"}
				value={tripOverviewDescription}
				setValue={setTripOverviewDescription}
			/>
			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() =>
						saveData(tripOveriewSection[0], {
							...tripOveriewSection[0],
							tripOverviewTitle,
							tripOverviewDescription,
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

export default TripOverviewCms;
