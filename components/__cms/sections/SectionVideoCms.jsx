import React, { useState, useEffect } from "react";

//Import CMS Blockd
import RadioGroupCmsBlock from "../blocks/RadioGroupCmsBlock";
import ColorPickerCmsBlock from "../blocks/ColorPickerCmsBlock";
import VideoCmsBlock from "../blocks/VideoCmsBlock";
import TextCmsBlock from "../blocks/TextCmsBlock";

//Import Material-UI Components
import { Grid } from "@mui/material";

const SectionVideoCms = ({ section, handleExplicitSectionDataChange }) => {
	const [colorSettings, setColorSettings] = useState(section?.colorSettings || "Default");

	const handleColorSettingsChange = (event) => {
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
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6}>
					<TextCmsBlock
						section={section}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
						fieldName={"sectionTitle"}
						value={section.sectionTitle}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextCmsBlock
						section={section}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
						fieldName={"sectionAnchor"}
						value={section.sectionAnchor}
					/>
				</Grid>
			</Grid>
			<h3>Section Colors</h3>
			<RadioGroupCmsBlock
				handleOptionChange={(event) => {
					handleColorSettingsChange(event);
				}}
				value={colorSettings}
				options={["Default", "Custom"]}
				name={"colorSettings"}
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
						<Grid item xs={12}>
							<ColorPickerCmsBlock
								section={section}
								value={section?.sectionBackgroundColor || "transparent"}
								fieldName={"sectionBackgroundColor"}
								handleExplicitSectionDataChange={handleExplicitSectionDataChange}
							/>
						</Grid>
					</Grid>
				</>
			) : (
				<></>
			)}

			<div>
				<VideoCmsBlock
					section={section}
					handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					fieldName={"videoUrl"}
					value={section.videoUrl}
				/>
			</div>
		</div>
	);
};

export default SectionVideoCms;
