import React, { useState } from "react";

import Button from "@mui/material/Button";

import MediaHeroCarouselCms from "../blocks/MediaHeroCarouselCms";

import { generateGuid } from "../../../utils/uuids";

interface TripHeroBannerCmsProps {
	updatedTrip: any;
	saveData(sectionToUpdate: any, updatedSectionObject: any): void;
}

const TripHeroBannerCms = ({ updatedTrip, saveData }: TripHeroBannerCmsProps) => {
	const heroBannerSection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Trip Hero Banner"
	);

	// console.log("HERO BANNER SECTION", heroBannerSection[0]);

	const [slides, setSlides] = useState(heroBannerSection[0]?.slides || []);

	const addSlide = () => {
		let updatedHeroBannerSlides = [...slides];

		updatedHeroBannerSlides.push({
			slideId: generateGuid(),
			mediaUrl: "",
			slideType: "image",
		});

		setSlides(updatedHeroBannerSlides);
	};

	const removeSlide = (id: any) => {
		let updatedHeroBannerSlides = [...slides];
		updatedHeroBannerSlides = updatedHeroBannerSlides.filter((slide) => slide.slideId !== id);

		setSlides(updatedHeroBannerSlides);
	};

	const updateSlide = (id: any, fieldName: string, value: string) => {
		let updatedHeroBannerSlides = [...slides];

		//Find index of matching slide in slides array to be updated
		const index = updatedHeroBannerSlides.findIndex((slide) => {
			return slide.slideId === id;
		});

		updatedHeroBannerSlides[index][fieldName] = value;

		setSlides(updatedHeroBannerSlides);
		console.log("UPDATED HERO BANNER SLIDES", updatedHeroBannerSlides);
	};

	return (
		<div>
			{slides.length > 0 ? (
				slides.map((slide: any, index: any) => {
					return (
						<>
							<h4>{`Slide ${index + 1}`}</h4>

							<MediaHeroCarouselCms
								updateSlide={updateSlide}
								fieldName={"tripHeroBanner"}
								slideType={slide.slideType}
								section={heroBannerSection[0]}
								value={slide.mediaUrl}
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
						</>
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

			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() =>
						saveData(heroBannerSection[0], {
							...heroBannerSection[0],
							slides,
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

export default TripHeroBannerCms;
