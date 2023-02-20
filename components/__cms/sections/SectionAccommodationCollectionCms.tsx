import React, { useState, useEffect } from "react";

//Import CMS Block
import TextCmsBlock from "../blocks/TextCmsBlock";
import RadioGroupCmsBlock from "../blocks/RadioGroupCmsBlock";
import ColorPickerCmsBlock from "../blocks/ColorPickerCmsBlock";

import { Grid } from "@mui/material";

interface SectionAccommodationCollectionCmsProps {
	section: any;
	handleSectionDataChange: any;
	handleExplicitSectionDataChange: any;
}

const SectionAccommodationCollectionCms = ({
	section,
	handleSectionDataChange,
	handleExplicitSectionDataChange,
}: SectionAccommodationCollectionCmsProps) => {
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
		<div style={{ width: "100%" }}>
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
				<TextCmsBlock
					section={section}
					// handleSectionDataChange={handleSectionDataChange}
					handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					fieldName={"sectionTitle"}
					value={section.sectionTitle}
				/>
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

			<p style={{ marginTop: 30, fontStyle: "italic" }}>
				Please add a WETU Itinerary ID below
			</p>
			<TextCmsBlock
				section={section}
				// handleSectionDataChange={handleSectionDataChange}
				handleExplicitSectionDataChange={handleExplicitSectionDataChange}
				fieldName={"accommodationsId"}
				value={section.accommodationsId}
			/>
			<TextCmsBlock
				section={section}
				// handleSectionDataChange={handleSectionDataChange}
				handleExplicitSectionDataChange={handleExplicitSectionDataChange}
				fieldName={"accommodationsHeadline"}
				value={section.accommodationsHeadline}
			/>
		</div>
	);
};

export default SectionAccommodationCollectionCms;
