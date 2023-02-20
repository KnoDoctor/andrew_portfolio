import React, { useState, useEffect } from "react";

//Import CMS Block
import ImageCarouselCmsBlock from "../blocks/ImageCarouselCmsBlock";
import RadioGroupCmsBlock from "../blocks/RadioGroupCmsBlock";
import ColorPickerCmsBlock from "../blocks/ColorPickerCmsBlock";
import TextCmsBlock from "../blocks/TextCmsBlock";

//Import Material-UI Components
import { Grid, Button } from "@mui/material";

//Import Helper Functions
import { generateGuid } from "../../../utils/uuids";

interface SectionFullWidthImageCmsProps {
	section: any;
	handleSectionDataChange?: any;
	handleExplicitSectionDataChange: any;
}

const SectionFullWidthImageCms = ({
	section,
	handleSectionDataChange,
	handleExplicitSectionDataChange,
}: SectionFullWidthImageCmsProps) => {
	const [colorSettings, setColorSettings] = useState(section?.colorSettings || "Default");

	const [heroBannerSlides, setHeroBannerSlides] = useState(section?.heroBannerSlides || []);

	const handleColorSettingsChange = (event: any) => {
		setColorSettings(event.target.value);
	};

	const addSlide = () => {
		let updatedHeroBannerSlides = [...heroBannerSlides];
		updatedHeroBannerSlides.push({
			imageUrl: "",
			slideId: generateGuid(),
			caption: "",
		});

		setHeroBannerSlides(updatedHeroBannerSlides);
	};

	const deleteSlide = (slideId: string) => {
		let updatedHeroBannerSlides = [...heroBannerSlides];
		updatedHeroBannerSlides = updatedHeroBannerSlides.filter(
			(slide) => slide.slideId !== slideId
		);

		setHeroBannerSlides(updatedHeroBannerSlides);
	};

	const updateSlide = (slideId: string, fieldName: string, value: string) => {
		let updatedHeroBannerSlides = [...heroBannerSlides];

		//Find index of matching slide in slides array to be updated
		const index = updatedHeroBannerSlides.findIndex((slide) => {
			return slide.slideId === slideId;
		});

		updatedHeroBannerSlides[index][fieldName] = value;

		setHeroBannerSlides(updatedHeroBannerSlides);
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

	useEffect(() => {
		handleExplicitSectionDataChange(
			{
				fieldName: "heroBannerSlides",
				value: heroBannerSlides,
			},
			section
		);
	}, [heroBannerSlides]);

	return (
		<>
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
			</div>
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
				</>
			) : (
				<></>
			)}

			<div>
				<ImageCarouselCmsBlock
					slidesArray={heroBannerSlides}
					deleteSlide={deleteSlide}
					updateSlide={updateSlide}
					// launchLoginModal={launchLoginModal}
				/>
				<div style={{ textAlign: "right" }}>
					<Button
						onClick={() => addSlide()}
						style={{ background: "#194666", color: "#fff" }}
					>
						Add Slide
					</Button>
				</div>
			</div>
			{/* <TextCmsBlock
                section={section}
                handleSectionDataChange={handleSectionDataChange}
                handleExplicitSectionDataChange={
                    handleExplicitSectionDataChange
                }
                fieldName={"caption"}
                value={section.caption}
            /> */}
		</>
	);
};

export default SectionFullWidthImageCms;
