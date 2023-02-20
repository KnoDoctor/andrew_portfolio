import React, { useState } from "react";

import { Button } from "@mui/material";

import TextFieldCms from "../blocks/TextfieldCms";
import ImageCms from "../blocks/ImageCms";

import { generateGuid } from "../../../utils/uuids";

interface TripItineraryPreviewCmsProps {
	updatedTrip: any;
	saveData(sectionToUpdate: any, updatedSectionObject: any): void;
}

const TripItineraryPreviewCms = ({ updatedTrip, saveData }: TripItineraryPreviewCmsProps) => {
	const tripItineraryPreviewSection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Preview Trip Itinerary"
	);

	console.log("TRIP ITIN PREVIEW SECTION", tripItineraryPreviewSection[0]);

	const [days, setDays] = useState(tripItineraryPreviewSection[0]?.days || []);

	console.log("ITIN DAYS", days);

	const updateDay = (id: any, fieldName: string, value: string) => {
		let updatedDays = [...days];

		//Find index of matching day in days array to be updated
		const index = updatedDays.findIndex((day) => {
			return day.dayId === id;
		});

		updatedDays[index][fieldName] = value;

		console.log("UPDATED DAYS ARR", updatedDays);
		setDays(updatedDays);
	};

	const addDay = () => {
		let updatedDays = [...days];

		updatedDays.push({
			dayId: generateGuid(),
			dayDescription: "",
			image: {
				imageId: generateGuid(),
				src: "",
				alt: updatedTrip.p15_tripname,
			},
		});

		setDays(updatedDays);
	};

	const removeDay = (dayId: string) => {
		let updatedDays = [...days];
		updatedDays = updatedDays.filter((day) => day.dayId !== dayId);

		setDays(updatedDays);
	};

	return (
		<div>
			{days.length > 0 ? (
				days.map((day: any, index: any) => {
					return (
						<>
							<h4>{`Day ${index + 1} Description`}</h4>
							<TextFieldCms
								fieldName={"dayDescription"}
								value={day.dayDescription}
								updateField={updateDay}
								id={day.dayId}
							/>

							{/* <h4>{`Day ${index + 1} Image`}</h4>
						<ImageCms fieldName={"image"} value={day.image.src} section={tripItineraryPreviewSection[0]} /> */}

							<div style={{ width: "100%", textAlign: "right" }}>
								<Button
									onClick={() => removeDay(day.dayId)}
									variant={"contained"}
									sx={{ width: 130, marginBottom: 2, bgcolor: "#494949" }}
								>
									Remove
								</Button>
							</div>
						</>
					);
				})
			) : (
				<></>
			)}

			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() => addDay()}
					variant={"contained"}
					sx={{ width: 130, marginBottom: 2, marginTop: 8, bgcolor: "#494949" }}
				>
					Add Day
				</Button>
			</div>

			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() =>
						saveData(tripItineraryPreviewSection[0], {
							...tripItineraryPreviewSection[0],
							days,
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

export default TripItineraryPreviewCms;
