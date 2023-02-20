import React, { useState } from "react";

import { Button } from "@mui/material";

import RelatedBlogsAutocompleteCms from "../sections/RelatedBlogsAutocompleteCms";

interface TripRelatedBlogsProp {
	updatedTrip: any;
	saveData(sectionToUpdate: any, updatedSectionObject: any): void;
}

const TripRelatedBlogsCms = ({ updatedTrip, saveData }: TripRelatedBlogsProp) => {
	const relatedBlogsSection = updatedTrip?.website_cms_data?.filter(
		(cmsData: any) => cmsData.sectionName === "Related Blogs"
	);

	console.log("RELATED BLOGS SECTION", relatedBlogsSection[0]);

	const [relatedBlogs, setRelatedBlogs] = useState(relatedBlogsSection[0].relatedBlogs || []);

	console.log("RELATED BLOGS STATE", relatedBlogs);

	const updateBlogs = (index: any, value: string) => {
		let updatedRelatedBlogs = [...relatedBlogs];

		updatedRelatedBlogs[index]["id"] = value;

		setRelatedBlogs(updatedRelatedBlogs);
		console.log("UPDATED RELATED BLOGS", updatedRelatedBlogs);
	};

	const addBlog = () => {
		let updatedRelatedBlogs = [...relatedBlogs];

		updatedRelatedBlogs.push({
			id: "",
		});

		setRelatedBlogs(updatedRelatedBlogs);
	};

	const removeBlog = (id: any) => {
		let updatedRelatedBlogs = [...relatedBlogs];
		updatedRelatedBlogs = updatedRelatedBlogs.filter((blog) => blog.id !== id);

		setRelatedBlogs(updatedRelatedBlogs);
	};

	return (
		<div>
			{relatedBlogs.length > 0 ? (
				relatedBlogs.map((blog: any, index: any) => {
					return (
						<>
							<h4>{`Related Blog ${index + 1}`}</h4>
							<RelatedBlogsAutocompleteCms
								value={blog.id}
								index={index}
								setValue={updateBlogs}
							/>

							<div style={{ width: "100%", textAlign: "right" }}>
								<Button
									onClick={() => removeBlog(blog.id)}
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
					onClick={() => addBlog()}
					variant={"contained"}
					sx={{ width: 130, marginBottom: 2, marginTop: 8, bgcolor: "#494949" }}
				>
					Add Blog
				</Button>
			</div>

			<div style={{ width: "100%", textAlign: "right" }}>
				<Button
					onClick={() =>
						saveData(relatedBlogsSection[0], {
							...relatedBlogsSection[0],
							relatedBlogs,
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

export default TripRelatedBlogsCms;
