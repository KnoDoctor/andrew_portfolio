import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import { generateGuid } from "../../../utils/uuids";

import BespokeTripExperienceFields from "./BespokeTripExperienceFieldsCms";

interface BespokeTripExperiencesCmsProps {
	updatedTrip: any;
	saveData(sectionToUpdate: any, updatedSectionObject: any): void;
}

interface ExperienceCmsFieldsInterface {
	experienceId: string;
	slides: [];
	title: string;
	description: string;
}

const BespokeTripExperiencesCms = ({ saveData, updatedTrip }: BespokeTripExperiencesCmsProps) => {
	const experiencesSection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Trip Experiences"
	);

	const experiencesOverviewSection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Trip Experiences Overview"
	);

	const experienceTitles = experiencesOverviewSection[0].experienceTitles;

	const buildExperienceFields = () => {
		const experienceCmsFields: ExperienceCmsFieldsInterface[] = [];
		const experienceCmsCount = experienceTitles.length;

		for (let x = 0; x < experienceCmsCount; x++) {
			if (experienceCmsCount > 0) {
				experienceCmsFields.push({
					experienceId:
						experiencesSection[0].experiences[x]?.experienceId || generateGuid(),
					slides: experiencesSection[0].experiences[x]?.slides,
					title: experienceTitles[x]?.title,
					description: experiencesSection[0].experiences[x]?.description,
				});
			}
		}
		return experienceCmsFields;
	};

	const [experiences, setExperiences] = useState(buildExperienceFields());
	console.log("EXPERIENCES ARR", experiences);

	//Update Experience function to be passed as prop to BespokeTripExperienceFields
	const updateExperiences = (experienceId: string, fieldName: string, value: any) => {
		let updatedExperiences = [...experiences];

		//Find index of matching experience in experiences array to be updated
		const index = updatedExperiences.findIndex((experience: any) => {
			return experience.experienceId === experienceId;
		});

		if (index < 0) return;

		//Update slides or description fields
		updatedExperiences[index][fieldName as keyof ExperienceCmsFieldsInterface] = value;

		setExperiences(updatedExperiences);
	};

	return (
		<div>
			{experiences.length > 0 ? (
				experiences.map((experienceField, index) => {
					return (
						<BespokeTripExperienceFields
							title={experienceField.title}
							experienceDescription={experienceField.description}
							experienceSlides={experienceField.slides}
							experienceIndex={index}
							experienceId={experienceField.experienceId}
							section={experiencesSection[0]}
							updateExperiences={updateExperiences}
						/>
					);
				})
			) : (
				<Typography variant="body1">
					Please create "Experience Titles" under the{" "}
					<span style={{ fontWeight: 900 }}>"Trip Experiences Overview"</span> tab to
					enable CMS fields.
				</Typography>
			)}

			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() =>
						saveData(experiencesSection[0], {
							...experiencesSection[0],
							experiences,
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

export default BespokeTripExperiencesCms;
