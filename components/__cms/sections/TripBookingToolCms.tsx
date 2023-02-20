import React, { useState } from "react";

import Button from "@mui/material/Button";

import ImageCms from "../blocks/ImageCms";

interface TripBookingToolCmsProps {
	updatedTrip: any;
	saveData(sectionToUpdate: any, updatedSectionObject: any): void;
}

const TripBookingToolCms = ({ updatedTrip, saveData }: TripBookingToolCmsProps) => {
	const bookingToolSection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Booking Tool"
	);

	console.log("BOOKING TOOL IMAGE", bookingToolSection[0]);

	const [bookingToolImage, setBookingToolImage] = useState(
		bookingToolSection[0].bookingToolImage.src
	);

	console.log("BOOKING TOOL STATE", bookingToolImage);

	return (
		<>
			<ImageCms
				fieldName={"bookingToolImage"}
				value={bookingToolSection[0].bookingToolImage.src}
				setValue={setBookingToolImage}
				section={bookingToolSection[0]}
			/>

			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() =>
						saveData(bookingToolSection[0], {
							...bookingToolSection[0],
							bookingToolImage: {
								alt: updatedTrip.p15_tripname,
								src: bookingToolImage,
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

export default TripBookingToolCms;
