import React, { useState, useEffect } from "react";

//Import Material-UI Components
import { Grid, FormControl } from "@mui/material";

//Import CMS Block
import TripCtaTileAutocompleteCmsBlock from "../blocks/TripCtaTileAutocompleteCmsBlock";
import TextCmsBlock from "../blocks/TextCmsBlock";
import RadioGroupCmsBlock from "../blocks/RadioGroupCmsBlock";
import ColorPickerCmsBlock from "../blocks/ColorPickerCmsBlock";

interface SectionBookingToolCmsProps {
	section: any;
	handleExplicitSectionDataChange: any;
	handleSectionDataChange: any;
}

const SectionBookingToolCms = ({
	section,
	handleExplicitSectionDataChange,
	handleSectionDataChange,
}: SectionBookingToolCmsProps) => {
	const [colorSettings, setColorSettings] = useState(section?.colorSettings || "Default");

	const handleColorSettingsChange = (event: any) => {
		setColorSettings(event.target.value);
	};

	useEffect(() => {
		handleExplicitSectionDataChange(
			{
				fieldName: "colorSettings",
				value: colorSettings,
			},
			section
		);
	}, [colorSettings]);

	return (
		<div>
			<div>
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
					<>
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
									handleExplicitSectionDataChange={
										handleExplicitSectionDataChange
									}
								/>
							</Grid>
							<Grid item xs={6}>
								<ColorPickerCmsBlock
									section={section}
									value={section?.sectionFontColor || "#494949"}
									fieldName={"sectionFontColor"}
									handleExplicitSectionDataChange={
										handleExplicitSectionDataChange
									}
								/>
							</Grid>
						</Grid>
					</>
				) : (
					<></>
				)}
			</div>
			<FormControl variant="outlined" style={{ width: "100%" }}>
				<TripCtaTileAutocompleteCmsBlock
					section={section}
					handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					fieldName={"tripId"}
					value={section.tripId}
				/>
				<TextCmsBlock
					section={section}
					// handleSectionDataChange={handleSectionDataChange}
					handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					fieldName={"tripTitle"}
					value={section.tripTitle}
				/>
				<TextCmsBlock
					section={section}
					// handleSectionDataChange={handleSectionDataChange}
					handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					fieldName={"tripSubtitle"}
					value={section.tripSubtitle}
				/>
				<TextCmsBlock
					section={section}
					// handleSectionDataChange={handleSectionDataChange}
					handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					fieldName={"tripActivityLevel"}
					value={section.tripActivityLevel}
				/>
				<TextCmsBlock
					section={section}
					// handleSectionDataChange={handleSectionDataChange}
					handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					fieldName={"tripDescription"}
					value={section.tripDescription}
				/>
			</FormControl>
		</div>
	);
};

export default SectionBookingToolCms;
