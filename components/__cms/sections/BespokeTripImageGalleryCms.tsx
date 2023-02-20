import React, { useState } from "react";

import { Button } from "@mui/material";

import { generateGuid } from "../../../utils/uuids";

import TextfieldCms from "../blocks/TextfieldCms";
import ImageCms from "../blocks/ImageCms";
import ImageCarouselCms from "../blocks/ImageCarouselCms";

interface TripImageGalleryProps {
	updatedTrip: any;
	saveData(sectionToUpdate: any, updatedSectionObject: any): void;
}

const BespokeTripImageGalleryCms = ({ updatedTrip, saveData }: TripImageGalleryProps) => {
	const imageGallerySection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Trip Image Gallery"
	);

	const [slides, setSlides] = useState(imageGallerySection[0].slides || []);
	const [designerQuote, setDesignerQuote] = useState(
		imageGallerySection[0].tripDesignerQuote || ""
	);
	const [designerName, setDesignerName] = useState(imageGallerySection[0].tripDesignerName || "");
	const [leftImage, setLeftImage] = useState(imageGallerySection[0].leftImage || "");
	const [rightImage, setRightImage] = useState(imageGallerySection[0].rightImage || "");

	console.log("CAROUSEL SLIDES", slides);
	console.log("NAME", designerName);
	console.log("QUOTE", designerQuote);

	const addSlide = () => {
		let updatedImageSlides = [...slides];

		updatedImageSlides.push({
			slideId: generateGuid(),
			src: "",
		});

		setSlides(updatedImageSlides);
	};

	const removeSlide = (id: any) => {
		let updatedImageSlides = [...slides];
		updatedImageSlides = updatedImageSlides.filter((slide) => slide.slideId !== id);

		setSlides(updatedImageSlides);
	};

	const updateSlide = (id: any, value: string) => {
		let updatedImageSlides = [...slides];

		//Find index of matching slide in slides array to be updated
		const index = updatedImageSlides.findIndex((slide) => {
			return slide.slideId === id;
		});

		updatedImageSlides[index]["src"] = value;

		setSlides(updatedImageSlides);
		console.log("UPDATED IMAGE GALLERY SLIDES", updatedImageSlides);
	};

	return (
		<div>
			<h4>Designer Quote</h4>
			<TextfieldCms
				fieldName={"tripDesignerQuote"}
				value={designerQuote}
				setValue={setDesignerQuote}
			/>
			<h4>Designer Name</h4>
			<TextfieldCms
				fieldName={"tripDesignerName"}
				value={designerName}
				setValue={setDesignerName}
			/>
			<h4>Image Left</h4>
			<ImageCms
				fieldName={"leftImage"}
				value={leftImage}
				setValue={setLeftImage}
				section={imageGallerySection[0]}
			/>
			<h4>Image Right</h4>
			<ImageCms
				fieldName={"rightImage"}
				value={rightImage}
				setValue={setRightImage}
				section={imageGallerySection[0]}
			/>

			<div style={{ marginTop: 30 }}>
				<h2>Image Gallery Slides</h2>
				{slides.length > 0 ? (
					slides.map((slide: any, index: any) => {
						return (
							<>
								<h4 style={{ marginTop: 0 }}>{`Image Slide ${index + 1}`}</h4>
								<ImageCarouselCms
									updateSlide={updateSlide}
									fieldName={"tripImageGallery"}
									section={imageGallerySection[0]}
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
							</>
						);
					})
				) : (
					<></>
				)}
			</div>

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
						saveData(imageGallerySection[0], {
							...imageGallerySection[0],
							designerName,
							designerQuote,
							leftImage,
							rightImage,
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

export default BespokeTripImageGalleryCms;
