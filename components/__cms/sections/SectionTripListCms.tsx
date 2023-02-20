import React, { useState, useEffect } from "react";

import { Grid, Button } from "@mui/material";

//Import CMS Blocks
import TripListAutocompleteCmsBlock from "../blocks/TripListAutocompleteCmsBlock";
import RadioGroupCmsBlock from "../blocks/RadioGroupCmsBlock";
import TextCmsBlock from "../blocks/TextCmsBlock";
import ColorPickerCmsBlock from "../blocks/ColorPickerCmsBlock";

//Import Helper Functions
import { generateGuid } from "../../../utils/uuids";

interface SectionTripCtaTileCmsProps {
	section: any;
	handleExplicitSectionDataChange: any;
	handleSectionDataChange: any;
}

const SectionTripListCms = ({
	section,
	handleExplicitSectionDataChange,
	handleSectionDataChange,
}: SectionTripCtaTileCmsProps) => {
	//Define Initial States
	const [tripsList, setTripsList] = useState(section?.tripsList || []);
	// const [ctaType, setCtaType] = useState(section?.ctaType || "Link to Trip");
	const [headline, setHeadline] = useState(section?.tripsListHeadline || null);
	const [colorSettings, setColorSettings] = useState(section?.colorSettings || "Default");

	const handleColorSettingsChange = (event: any) => {
		setColorSettings(event.target.value);
	};

	// const handleCtaTypeOptionChange = (event: any) => {
	// 	setCtaType(event.target.value);
	// };

	const addTripId = () => {
		let updatedTripsList = [...tripsList];
		updatedTripsList.push({
			tripItemId: generateGuid(),
		});

		setTripsList(updatedTripsList);
	};

	const deleteTripId = (tripItemId: string) => {
		let updatedTripsList = [...tripsList];
		updatedTripsList = updatedTripsList.filter((tripId) => tripId.tripItemId !== tripItemId);

		setTripsList(updatedTripsList);
	};

	const updateTripId = (tripItemId: string, fieldName: string, value: string) => {
		let updatedTripsList = [...tripsList];

		//Find index of matching tripId in tripsList array to be updated
		const index = updatedTripsList.findIndex((tripId) => {
			return tripId.tripItemId === tripItemId;
		});

		updatedTripsList[index][fieldName] = value;

		setTripsList(updatedTripsList);
	};

	useEffect(() => {
		handleExplicitSectionDataChange(
			{
				fieldName: "tripsList",
				value: tripsList,
			},
			section
		);
	}, [tripsList]);

	useEffect(() => {
		handleExplicitSectionDataChange(
			{
				fieldName: "colorSettings",
				value: colorSettings,
			},
			section
		);
	}, [colorSettings]);

	// useEffect(() => {
	//     handleExplicitSectionDataChange(
	//         {
	//             fieldName: "ctaType",
	//             value: ctaType,
	//         },
	//         section
	//     );
	// }, [ctaType]);

	useEffect(() => {
		handleExplicitSectionDataChange(
			{
				fieldName: "tripsListHeadline",
				value: headline,
			},
			section
		);
	}, [headline]);

	return (
		<div>
			{/* <div>
                <h4 style={{ marginBottom: 0, marginTop: 25 }}>CTA Type:</h4>
                <RadioGroupCmsBlock
                    handleOptionChange={handleCtaTypeOptionChange}
                    value={ctaType}
                    options={[
                        "Link to Trip",
                        "Request Itinerary or Start Planning",
                    ]}
                    name={"ctaType"}
                    fieldName={"ctaType"}
                />
            </div> */}
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6}>
					<TextCmsBlock
						section={section}
						// handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
						fieldName={"sectionTitle"}
						value={section.sectionTitle}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextCmsBlock
						section={section}
						// handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
						fieldName={"sectionAnchor"}
						value={section.sectionAnchor}
					/>
				</Grid>
			</Grid>
			<h3>Section Colors</h3>
			<RadioGroupCmsBlock
				handleOptionChange={(event: any) => {
					handleColorSettingsChange(event);
				}}
				value={colorSettings}
				options={["Default", "Custom"]}
				name={"colorSettings"}
				fieldName={"colorSettings"}
			/>
			{colorSettings === "Custom" ? (
				<Grid
					container
					style={{
						padding: "20px 0px",
						alignItems: "center",
					}}
				>
					<Grid item xs={6}>
						<ColorPickerCmsBlock
							section={section}
							value={section?.sectionBackgroundColor || "transparent"}
							fieldName={"sectionBackgroundColor"}
							handleExplicitSectionDataChange={handleExplicitSectionDataChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<ColorPickerCmsBlock
							section={section}
							value={section?.sectionFontColor || "#494949"}
							fieldName={"sectionFontColor"}
							handleExplicitSectionDataChange={handleExplicitSectionDataChange}
						/>
					</Grid>
				</Grid>
			) : (
				<></>
			)}
			<TextCmsBlock
				section={section}
				// handleSectionDataChange={handleSectionDataChange}
				handleExplicitSectionDataChange={handleExplicitSectionDataChange}
				fieldName={"tripsListHeadline"}
				value={section.tripsListHeadline}
			/>

			{tripsList.map((trip: any) => (
				<TripListAutocompleteCmsBlock
					trip={trip}
					deleteTripId={deleteTripId}
					updateTripId={updateTripId}
				/>
			))}
			<div style={{ textAlign: "right" }}>
				<Button
					onClick={() => addTripId()}
					style={{ background: "#194666", color: "#fff" }}
				>
					Add Trip
				</Button>
			</div>
		</div>
	);
};

export default SectionTripListCms;
