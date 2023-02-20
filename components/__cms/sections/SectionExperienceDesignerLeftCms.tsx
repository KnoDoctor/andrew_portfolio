import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";

//Import Material-UI Components
import { Grid, FormControl } from "@mui/material";

import RadioGroupCmsBlock from "../blocks/RadioGroupCmsBlock";
import ColorPickerCmsBlock from "../blocks/ColorPickerCmsBlock";
import TextCmsBlock from "../blocks/TextCmsBlock";

//Import CMS Blocks
import ExperienceDesignerAutocompleteCmsBlock from "../blocks/ExperienceDesignerAutocompleteCmsBlock";
const WysiwygCmsBlock = dynamic(() => import("../blocks/WysiwygCmsBlock"), { ssr: false });

interface SectionExperienceDesignerLeftCmsProps {
	section: any;
	handleExplicitSectionDataChange: any;
	handleSectionDataChange: any;
}

const SectionExperienceDesignerLeftCms = ({
	section,
	handleExplicitSectionDataChange,
	handleSectionDataChange,
}: SectionExperienceDesignerLeftCmsProps) => {
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
						<Grid item xs={4}>
							<ColorPickerCmsBlock
								section={section}
								value={section?.sectionBackgroundColor || "transparent"}
								fieldName={"sectionBackgroundColor"}
								handleExplicitSectionDataChange={handleExplicitSectionDataChange}
							/>
						</Grid>
						<Grid item xs={4}>
							<ColorPickerCmsBlock
								section={section}
								value={section?.sectionFontColor || "#494949"}
								fieldName={"sectionFontColor"}
								handleExplicitSectionDataChange={handleExplicitSectionDataChange}
							/>
						</Grid>
						<Grid item xs={4}>
							<ColorPickerCmsBlock
								section={section}
								value={section?.designerBoxColor || "#6C705C"}
								fieldName={"designerBoxColor"}
								handleExplicitSectionDataChange={handleExplicitSectionDataChange}
							/>
						</Grid>
					</Grid>
				</>
			) : (
				<></>
			)}
			<Grid container style={{ width: "100%" }}>
				<Grid item xs={12} sm={6}>
					<FormControl variant="outlined" style={{ width: "100%" }}>
						<ExperienceDesignerAutocompleteCmsBlock
							section={section}
							handleExplicitSectionDataChange={handleExplicitSectionDataChange}
							fieldName={"experienceDesignerId"}
							value={section.experienceDesignerId}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<WysiwygCmsBlock
						data={section.content}
						section={section}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
						fieldName={"content"}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default SectionExperienceDesignerLeftCms;
