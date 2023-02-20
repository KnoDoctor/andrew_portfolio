import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";

//Import CMS Blocks
import RadioGroupCmsBlock from "../blocks/RadioGroupCmsBlock";
import HeroImageCarouselCmsBlock from "../blocks/HeroImageCarouselCmsBlock";
import VideoHeroBannerCmsBlock from "../blocks/VideoHeroBannerCmsBlock";
import TextCmsBlock from "../blocks/TextCmsBlock";

//Import Helper Functions
import { generateGuid } from "../../../utils/uuids";

interface SectionHeroBannerCmsProps {
	section: any;
	handleSectionDataChange: any;
	handleExplicitSectionDataChange: any;
}

const SectionHeroBannerCms = ({
	section,
	handleSectionDataChange,
	handleExplicitSectionDataChange,
}: SectionHeroBannerCmsProps) => {
	const [heroBannerOption, setHeroBannerOption] = useState(section?.heroBannerType || "Image");
	const [heroBannerSlides, setHeroBannerSlides] = useState(section?.heroBannerSlides || []);
	const [videoHeroBanner, setVideoHeroBanner] = useState(section?.videoHeroBanner || {});

	const handleHeroBannerOptionChange = (event: any) => {
		setHeroBannerOption(event.target.value);
	};

	const handleVideoHeroBannerUpdate = (fieldName: string, value: string) => {
		let updatedVideoHeroBannerObject = { ...videoHeroBanner };
		updatedVideoHeroBannerObject[fieldName] = value;

		setVideoHeroBanner(updatedVideoHeroBannerObject);

		handleExplicitSectionDataChange(
			{
				fieldName: "videoHeroBanner",
				value: updatedVideoHeroBannerObject,
			},
			section
		);
	};

	const addSlide = () => {
		let updatedHeroBannerSlides = [...heroBannerSlides];
		updatedHeroBannerSlides.push({
			imageUrl: "",
			slideId: generateGuid(),
			primaryCopy: "",
			secondaryCopy: "",
			buttonText: "",
			buttonLink: "",
			heroBannerCtaButtonColor: "Blue",
			contentAlignment: "Left",
		});

		handleExplicitSectionDataChange(
			{
				fieldName: "heroBannerType",
				value: heroBannerOption,
			},
			section
		);

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
				fieldName: "heroBannerType",
				value: heroBannerOption,
			},
			section
		);
	}, [heroBannerOption]);

	useEffect(() => {
		handleExplicitSectionDataChange(
			{
				fieldName: "heroBannerSlides",
				value: heroBannerSlides,
			},
			section
		);
	}, [heroBannerSlides]);

	useEffect(() => {
		handleExplicitSectionDataChange(
			{
				fieldName: "videoHeroBanner",
				value: videoHeroBanner,
			},
			section
		);
	}, [videoHeroBanner]);

	return (
		<div>
			<TextCmsBlock
				section={section}
				// handleSectionDataChange={handleSectionDataChange}
				handleExplicitSectionDataChange={handleExplicitSectionDataChange}
				fieldName={"sectionTitle"}
				value={section.sectionTitle}
			/>
			<h4 style={{ marginBottom: 0, marginTop: 25 }}>Banner Type:</h4>
			<RadioGroupCmsBlock
				handleOptionChange={handleHeroBannerOptionChange}
				value={heroBannerOption}
				options={["Image", "Video"]}
				name={"heroBanner"}
				fieldName={"heroBannerType"}
			/>

			{heroBannerOption === "Image" ? (
				<div>
					<HeroImageCarouselCmsBlock
						slidesArray={heroBannerSlides}
						deleteSlide={deleteSlide}
						updateSlide={updateSlide}
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
			) : (
				<div>
					<VideoHeroBannerCmsBlock
						section={section}
						handleVideoHeroBannerUpdate={handleVideoHeroBannerUpdate}
					/>
				</div>
			)}
		</div>
	);
};

export default SectionHeroBannerCms;
