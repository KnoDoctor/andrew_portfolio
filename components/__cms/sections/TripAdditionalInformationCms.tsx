import React, { useState } from "react";

import Button from "@mui/material/Button";

import ImageCms from "../blocks/ImageCms";

interface TripAdditionalInformationProps {
	updatedTrip: any;
	saveData(sectionToUpdate: any, updatedSectionObject: any): void;
}

const TripAdditionalInformationCms = ({
	updatedTrip,
	saveData,
}: TripAdditionalInformationProps) => {
	const additionalInfoSection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Trip Additional Information"
	);

	console.log("ADDITIONAL INFO SECTION", additionalInfoSection[0]);

	const [activityLevelImage, setActivityLevelImage] = useState(
		additionalInfoSection[0].activityLevelImage.src || ""
	);

	console.log("ACTIVITY LEVEL IMAGE STATE", activityLevelImage);

	return (
		<>
			<ImageCms
				fieldName={"additionalInfoImage"}
				value={additionalInfoSection[0].activityLevelImage.src}
				setValue={setActivityLevelImage}
				section={additionalInfoSection[0]}
			/>

			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() =>
						saveData(additionalInfoSection[0], {
							...additionalInfoSection[0],
							activityLevelImage: {
								alt: updatedTrip.p15_tripname,
								src: activityLevelImage,
							},
						})
					}
					variant={"contained"}
					sx={{ width: 130 }}
				>
					Save
				</Button>
			</div>
		</>
	);
};

export default TripAdditionalInformationCms;
