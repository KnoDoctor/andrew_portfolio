import React, { useState } from "react";

import { Button } from "@mui/material";

import TextfieldCms from "../blocks/TextfieldCms";
import ImageCms from "../blocks/ImageCms";

import { generateGuid } from "../../../utils/uuids";

interface BespokeTripExperiencesOverviewProps {
	updatedTrip: any;
	saveData(sectionToUpdate: any, updatedSectionObject: any): void;
}

const BespokeTripExperiencesOverview = ({
	updatedTrip,
	saveData,
}: BespokeTripExperiencesOverviewProps) => {
	const experiencesOverviewSection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Trip Experiences Overview"
	);

	const [experienceTitles, setExperienceTitles] = useState(
		experiencesOverviewSection[0].anchorLinks || []
	);
	const [tagline, setTagline] = useState(experiencesOverviewSection[0].tagline || "");
	const [description, setDescription] = useState(experiencesOverviewSection[0].description || "");
	const [introductionImage, setIntroductionImage] = useState(
		experiencesOverviewSection[0].introductionImage || ""
	);

	const addExperienceTitle = () => {
		let updatedExperienceTitles = [...experienceTitles];

		updatedExperienceTitles.push({
			anchorId: generateGuid(),
			title: "",
		});

		setExperienceTitles(updatedExperienceTitles);
	};

	const removeExperienceTitle = (id: any) => {
		let updatedExperienceTitles = [...experienceTitles];
		updatedExperienceTitles = updatedExperienceTitles.filter((title) => title.anchorId !== id);

		setExperienceTitles(updatedExperienceTitles);
	};

	const updateExperienceTitle = (id: any, fieldName: string, value: string) => {
		let updatedExperienceTitles = [...experienceTitles];

		//Find index of matching slide in slides array to be updated
		const index = updatedExperienceTitles.findIndex((title) => {
			return title.anchorId === id;
		});

		updatedExperienceTitles[index][fieldName] = value;

		setExperienceTitles(updatedExperienceTitles);
	};

	return (
		<>
			<h4>Tagline</h4>
			<TextfieldCms fieldName={"tagline"} value={tagline} setValue={setTagline} />

			<h4>Description</h4>
			<TextfieldCms fieldName={"description"} value={description} setValue={setDescription} />

			<h4>Overview Image</h4>
			<ImageCms
				fieldName={"introductionImage"}
				value={introductionImage}
				setValue={setIntroductionImage}
				section={experiencesOverviewSection[0]}
			/>

			<div style={{ marginTop: 30 }}>
				<h4 style={{ fontSize: 24 }}>Experience Titles</h4>
				{experienceTitles.length > 0 ? (
					experienceTitles.map((title: any, index: any) => {
						return (
							<>
								<h4 style={{ marginTop: 0 }}>{`Experience Title ${index + 1}`}</h4>
								<TextfieldCms
									fieldName={"title"}
									value={title.title}
									updateField={updateExperienceTitle}
									id={title.anchorId}
								/>
								<div style={{ width: "100%", textAlign: "right" }}>
									<Button
										onClick={() => removeExperienceTitle(title.anchorId)}
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
			</div>

			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() => addExperienceTitle()}
					variant={"contained"}
					sx={{ width: 130, marginBottom: 2, marginTop: 8, bgcolor: "#494949" }}
				>
					Add Title
				</Button>
			</div>

			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() =>
						saveData(experiencesOverviewSection[0], {
							...experiencesOverviewSection[0],
							tagline,
							description,
							introductionImage,
							experienceTitles,
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

export default BespokeTripExperiencesOverview;
