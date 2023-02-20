import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";

import TextfieldCms from "../blocks/TextfieldCms";
import ImageCarouselCms from "../blocks/ImageCarouselCms";

import { generateGuid } from "../../../utils/uuids";

interface BespokeTripExperienceFieldsProps {
	title: string;
	experienceDescription: string;
	experienceSlides: {
		src: string;
		slideId: string;
	}[];
	experienceIndex: any;
	experienceId: any;
	section: any;
	updateExperiences(experienceId: string, fieldName: string, value: any): void;
}

const BespokeTripExperienceFieldsCms = ({
	title,
	experienceDescription,
	experienceSlides,
	experienceIndex,
	experienceId,
	section,
	updateExperiences,
}: BespokeTripExperienceFieldsProps) => {
	const [description, setDescription] = useState(experienceDescription || "");
	const [slides, setSlides] = useState(experienceSlides || []);

	const addSlide = () => {
		let updatedSlides = [...slides];

		updatedSlides.push({
			slideId: generateGuid(),
			src: "",
		});

		setSlides(updatedSlides);
	};

	const removeSlide = (slideId: string) => {
		let updatedSlides = [...slides];
		updatedSlides = updatedSlides.filter((slide) => slide.slideId !== slideId);

		setSlides(updatedSlides);
	};

	const updateSlide = (id: any, value: string) => {
		let updatedSlides = [...slides];

		//Find index of matching slides in slides array to be updated
		const index = slides.findIndex((slide: any) => {
			return slide.slideId === id;
		});

		updatedSlides[index]["src"] = value;

		setSlides(updatedSlides);
	};

	useEffect(() => {
		updateExperiences(experienceId, "description", description);
	}, [description]);

	useEffect(() => {
		updateExperiences(experienceId, "slides", slides);
	}, [slides.length]);

	return (
		<div
			style={{
				background: experienceIndex % 2 === 0 ? "#eeeeee" : "transparent",
				padding: "10px 30px",
				marginTop: experienceIndex === 0 ? "-15px" : "0",
			}}
		>
			<h2>{title}</h2>
			<h4>Description</h4>
			<TextfieldCms fieldName={"description"} value={description} setValue={setDescription} />

			{slides.length > 0 ? (
				slides.map((slide, index) => {
					return (
						<div>
							<h4>{`Image Slide ${index + 1}`}</h4>
							<ImageCarouselCms
								updateSlide={updateSlide}
								fieldName={"slides"}
								section={section}
								value={slide.src}
								id={slide.slideId}
							/>
							<div style={{ width: "100%", textAlign: "right" }}>
								<Button
									onClick={() => removeSlide(slide.slideId)}
									variant={"contained"}
									sx={{ width: 130, marginBottom: 2, bgcolor: "#494949" }}
								>
									Remove
								</Button>
							</div>
						</div>
					);
				})
			) : (
				<></>
			)}

			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() => addSlide()}
					variant={"contained"}
					sx={{ width: 130, marginBottom: 2, marginTop: 8, bgcolor: "#494949" }}
				>
					Add Slide
				</Button>
			</div>
		</div>
	);
};

export default BespokeTripExperienceFieldsCms;
