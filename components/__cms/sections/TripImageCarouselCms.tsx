import React, { useState } from "react";

import ImageCms from "../blocks/ImageCms";

import Button from "@mui/material/Button";

import { generateGuid } from "../../../utils/uuids";

interface TripImageCarouselCmsProps {
	updatedTrip: any;
	saveData(sectionToUpdate: any, updatedSectionObject: any): void;
}

const TripImageCarouselCms = ({ updatedTrip, saveData }: TripImageCarouselCmsProps) => {
	const imageCarouselSection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Trip Image Carousel"
	);

	console.log("IMAGE CAROUSEL", imageCarouselSection[0]);

	const [images, setImages] = useState(imageCarouselSection[0].images || []);

	console.log("CAROUSEL IMAGES", images);

	const updateImage = (id: any, fieldName: string, value: string) => {
		let updatedCarouselImages = [...images];

		//Find index of matching image in images array to be updated
		const index = updatedCarouselImages.findIndex((image) => {
			return image.imageId === id;
		});

		updatedCarouselImages[index][fieldName] = value;

		console.log("UPDATED CAROUSEL IMAGES", updatedCarouselImages);
		setImages(updatedCarouselImages);
	};

	const addImage = () => {
		let updatedCarouselImages = [...images];

		updatedCarouselImages.push({
			imageId: generateGuid(),
			src: "",
			alt: updatedTrip.p15_tripname,
		});

		setImages(updatedCarouselImages);
	};

	const removeImage = (imageId: string) => {
		let updatedCarouselImages = [...images];
		updatedCarouselImages = updatedCarouselImages.filter((image) => image.imageId !== imageId);

		setImages(updatedCarouselImages);
	};

	return (
		<div>
			{images.length > 0 ? (
				images.map((image: any, index: any) => {
					return (
						<>
							<h4>{`Image ${index + 1}`}</h4>

							<ImageCms
								fieldName={"src"}
								value={image.src}
								id={image.imageId}
								updateField={updateImage}
								section={imageCarouselSection[0]}
							/>

							<div style={{ width: "100%", textAlign: "right" }}>
								<Button
									onClick={() => removeImage(image.imageId)}
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
					onClick={() => addImage()}
					variant={"contained"}
					sx={{ width: 130, marginBottom: 2, marginTop: 8, bgcolor: "#494949" }}
				>
					Add Image
				</Button>
			</div>

			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() =>
						saveData(imageCarouselSection[0], {
							...imageCarouselSection[0],
							images,
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

export default TripImageCarouselCms;
