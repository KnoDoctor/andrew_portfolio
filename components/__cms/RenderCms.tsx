import React, { useReducer, useEffect } from "react";

import { generateGuid } from "../../utils/uuids";

import { PageReducer } from "../../reducers/PageReducer";

import {
	Container,
	Paper,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Grid,
	Button,
	IconButton,
	Typography,
} from "@mui/material";

import {
	ChevronLeft,
	ChevronRight,
	ArrowUpward,
	ArrowDownward,
	DeleteForever,
	Save,
	Delete,
} from "@mui/icons-material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";

//Import CMS Components
import SectionHeroBannerCms from "./sections/SectionHeroBannerCms";
import SectionQuoteCms from "./sections/SectionQuoteCms";
import SectionParagraphWithHeadingsCms from "./sections/SectionParagraphWithHeadingCms";
import SectionExperienceDesignerLeftCms from "./sections/SectionExperienceDesignerLeftCms";
import SectionTwoColumnImageCms from "./sections/SectionTwoColumnImageCms";
import SectionFullWidthImageCms from "./sections/SectionFullWidthImageCms";
import SectionImageLeftTextRightCms from "./sections/SectionImageLeftTextRightCms";
import SectionTextLeftImageRightCms from "./sections/SectionTextLeftImageRightCms";
import SectionTripCtaTileCms from "./sections/SectionTripCtaTileCms";
import SectionTripListCms from "./sections/SectionTripListCms";
import SectionAccommodationCollectionCms from "./sections/SectionAccommodationCollectionCms";
import SectionBookingToolCms from "./sections/SectionBookingToolCms";
import SectionVideoCms from "./sections/SectionVideoCms";
import SectionFilteredTripListCms from "./sections/SectionFilteredTripListCms";

import { scrollToTarget } from "../../utils/helperFunctions";
import PageDeletionOrganism from "../organisms/pages/PageDeletionOrganism";

interface RenderCmsProps {
	pageData: {
		data: {
			data: {
				page_cms_data: {}[];
				page_id: string;
				page_name: string;
			};
			success: boolean;
		};
		isLoading: boolean;
		error: boolean;
		mutate(): void;
	};
	savePageData: any;
	renderSaveAlert: any;
	setSavingAlert: any;
	setSaving: any;
}

const SectionsButton = styled(Button)(() => ({
	background: "#194666",
	color: "#fff",
	marginLeft: 15,
	width: "25%",
	"&:hover": {
		background: "#194666",
		color: "#fff",
	},
	"&.MuiButton-root.Mui-disabled": {
		background: "#9e9e9e",
	},
}));

const SectionsSelector = styled("div")(() => ({
	position: "sticky",
	top: 64,
	width: "100%",
	zIndex: 99,
	marginBottom: "1rem",
}));

const ArrowNav = styled("div")(() => ({
	position: "absolute",
	top: "15px",
	color: "#fff",
	right: "10px",
	"&:hover": {
		cursor: "pointer",
	},
}));

const SectionContainer = styled("div")(() => ({
	borderRadius: 8,
	boxShadow: "1px 1px 5px #494949",
	padding: "30px 40px 5px 40px",
	marginBottom: 25,
}));

const AnchorNavMenu = styled("div")(() => ({
	position: "sticky",
	top: 205,
	width: "100%",
	zIndex: 99,
	background: "#194666",
	color: "#fff",
	borderEndEndRadius: 8,
	borderStartEndRadius: 8,
	marginTop: 25,
	overflowY: "auto",
	"& li:hover": {
		cursor: "pointer",
	},
}));

const SaveButton = styled("div")(() => ({
	width: "110px",
	position: "fixed",
	textAlign: "right",
	zIndex: 99,
	bottom: "80px",
	right: "5%",
	"& button": {
		background: "#3f51b5",
		color: "#fff",
		width: "100%",
		"&:hover": {
			background: "#3f51b5",
			color: "#fff",
		},
	},
}));

const DeleteButton = styled("div")(() => ({
	width: "110px",
	position: "fixed",
	textAlign: "right",
	zIndex: 99,
	bottom: "33px",
	right: "5%",
	"& button": {
		background: "#494949",
		color: "#fff",
		width: "100%",
		"&:hover": {
			background: "#494949",
			color: "#fff",
		},
	},
}));

const RenderCms = ({
	pageData,
	savePageData,
	renderSaveAlert,
	setSavingAlert,
	setSaving,
}: RenderCmsProps) => {
	const theme = useTheme();
	const smallWidth = useMediaQuery(theme.breakpoints.down("sm"));
	const mobileWidth = useMediaQuery(theme.breakpoints.down("md"));

	let initialState = {
		updatedPageData: null,
		isLoading: true,
		selectedSection: null,
		sectionId: null,
		isAnchorNavExpanded: false,
		displayNavContent: false,
		isDeleteModalOpen: false,
	};

	const [cmsPageData, dispatchCmsPageData] = useReducer(PageReducer, initialState);

	useEffect(() => {
		if (!cmsPageData.updatedPageData) {
			dispatchCmsPageData({
				type: "SET_UPDATED_PAGE_DATA",
				payload: pageData.data.data,
			});
		}
	}, [pageData.data.data]);

	const handleClose = () => {
		dispatchCmsPageData({
			type: "SET_IS_DELETE_MODAL_OPEN",
			payload: false,
		});
	};

	// console.log("UPDATED PAGE DATA", cmsPageData.updatedPageData);

	const addSection = (sectionName: string) => {
		let updatedValue = { ...cmsPageData.updatedPageData };
		updatedValue.page_cms_data.push({
			sectionName,
			sectionId: generateGuid(),
		});

		dispatchCmsPageData({
			type: "SET_UPDATED_PAGE_DATA",
			payload: updatedValue,
		});
	};

	const removeSection = (sectionId: string) => {
		let updatedValue = { ...cmsPageData.updatedPageData };
		updatedValue.page_cms_data = updatedValue.page_cms_data.filter(
			(section: any) => section.sectionId !== sectionId
		);

		dispatchCmsPageData({
			type: "SET_UPDATED_PAGE_DATA",
			payload: updatedValue,
		});
	};

	const reorderSections = (sectionToMove: any, moveTo: any) => {
		let updatedValue = { ...cmsPageData.updatedPageData };

		let numberOfDeletedElm = 1;

		const elm = updatedValue.page_cms_data.splice(sectionToMove, numberOfDeletedElm)[0];

		numberOfDeletedElm = 0;

		updatedValue.page_cms_data.splice(moveTo, numberOfDeletedElm, elm);

		dispatchCmsPageData({
			type: "SET_UPDATED_PAGE_DATA",
			payload: updatedValue,
		});
	};

	const handleSectionChange = (event: any) => {
		dispatchCmsPageData({
			type: "SET_SELECTED_SECTION",
			payload: event.target.value,
		});
	};

	const handleInputChange = (event: any) => {
		let updatedValue = { ...cmsPageData.updatedPageData };

		if (event.target.name === "is_published") {
			updatedValue[event.target.name] = event.target.checked;
		} else if (
			event.target.name === "collection_destination_id" ||
			event.target.name === "collection_experience_id"
		) {
			updatedValue[event.target.name] = event.target.value;
		} else {
			updatedValue[event.target.id] = event.target.value;
		}

		dispatchCmsPageData({
			type: "SET_UPDATED_PAGE_DATA",
			payload: updatedValue,
		});

		// console.log("UPDATED SECTION VAL", updatedValue);
	};

	const handleExplicitInputChange = (updateObject: any) => {
		let updatedValue = { ...cmsPageData.updatedPageData };
		updatedValue[updateObject.fieldName] = updateObject.value;

		dispatchCmsPageData({
			type: "SET_UPDATED_PAGE_DATA",
			payload: updatedValue,
		});

		// console.log("UPDATED SECTION VAL", updatedValue);
	};

	const handleSectionDataChange = (event: any, section: any) => {
		let updatedSectionValue = { ...section };
		updatedSectionValue[event.target.id] = event.target.value;

		let updatedValue = { ...cmsPageData.updatedPageData };

		//Find index of matching section in sections array to be updated
		const index = updatedValue.page_cms_data.findIndex((section: any) => {
			return section.sectionId === updatedSectionValue.sectionId;
		});

		updatedValue.page_cms_data[index] = updatedSectionValue;

		dispatchCmsPageData({
			type: "SET_UPDATED_PAGE_DATA",
			payload: updatedValue,
		});

		// console.log("UPDATED SECTION VAL", updatedSectionValue);
	};

	const handleExplicitSectionDataChange = (updateObject: any, section: any) => {
		let updatedSectionValue = { ...section };
		updatedSectionValue[updateObject.fieldName] = updateObject.value;

		let updatedValue = { ...cmsPageData.updatedPageData };

		//Find index of matching section in sections array to be updated
		const index = updatedValue.page_cms_data.findIndex((section: any) => {
			return section.sectionId === updatedSectionValue.sectionId;
		});

		updatedValue.page_cms_data[index] = updatedSectionValue;

		dispatchCmsPageData({
			type: "SET_UPDATED_PAGE_DATA",
			payload: updatedValue,
		});

		// console.log("UPDATED SECTION VAL", updatedSectionValue);
	};

	const handlePublishedDateChange = (date: any) => {
		let updatedValue = { ...cmsPageData.updatedPageData };

		const publishedDate = new Date(date);

		const formattedPublishedDate = publishedDate
			.toISOString()
			.replace(/-/g, "/")
			.replace(/T.+/, "");

		const finalPublishedDate = formattedPublishedDate.replaceAll("/", "-");

		updatedValue["published_on"] = finalPublishedDate;

		dispatchCmsPageData({
			type: "SET_UPDATED_PAGE_DATA",
			payload: updatedValue,
		});

		// console.log("UPDATED SECTION VAL", updatedValue);
	};

	const sectionTypes = [
		{
			sectionFieldName: "heroBanner",
			sectionLabel: "Hero Banner Image or Video",
		},
		{
			sectionFieldName: "paragraphWithHeadings",
			sectionLabel: "Paragraph With Headings",
		},
		{
			sectionFieldName: "experienceDesignerLeftTextRight",
			sectionLabel: "Experience Designer Left Text Right",
		},
		{
			sectionFieldName: "twoColumnImage",
			sectionLabel: "Two Column Image",
		},
		{
			sectionFieldName: "fullWidthImage",
			sectionLabel: "Full Width Image",
		},
		{
			sectionFieldName: "imageLeftTextRight",
			sectionLabel: "Image Left Text Right",
		},
		{
			sectionFieldName: "textLeftImageRight",
			sectionLabel: "Text Left Image Right",
		},
		{
			sectionFieldName: "quote",
			sectionLabel: "Quote",
		},
		{
			sectionFieldName: "tripCtaTile",
			sectionLabel: "Trip CTA Tile",
		},
		{
			sectionFieldName: "tripsList",
			sectionLabel: "Trips List",
		},
		{
			sectionFieldName: "accommodationCollection",
			sectionLabel: "Accommodations List",
		},
		{
			sectionFieldName: "bookingTool",
			sectionLabel: "Booking Tool",
		},
		{
			sectionFieldName: "videoUrl",
			sectionLabel: "Video",
		},
		{
			sectionFieldName: "filteredTripListByExperience",
			sectionLabel: "Trip List By Experience Type",
		},
	];

	const renderSectionCms = (section: any) => {
		switch (section.sectionName) {
			case "heroBanner":
				return (
					<SectionHeroBannerCms
						section={section}
						handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "quote":
				return (
					<SectionQuoteCms
						section={section}
						handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "paragraphWithHeadings":
				return (
					<SectionParagraphWithHeadingsCms
						section={section}
						handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "experienceDesignerLeftTextRight":
				return (
					<SectionExperienceDesignerLeftCms
						section={section}
						handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "twoColumnImage":
				return (
					<SectionTwoColumnImageCms
						section={section}
						handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "fullWidthImage":
				return (
					<SectionFullWidthImageCms
						section={section}
						handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "imageLeftTextRight":
				return (
					<SectionImageLeftTextRightCms
						section={section}
						handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "textLeftImageRight":
				return (
					<SectionTextLeftImageRightCms
						section={section}
						handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "tripCtaTile":
				return (
					<SectionTripCtaTileCms
						section={section}
						handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "tripsList":
				return (
					<SectionTripListCms
						section={section}
						handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "accommodationCollection":
				return (
					<SectionAccommodationCollectionCms
						section={section}
						handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "bookingTool":
				return (
					<SectionBookingToolCms
						section={section}
						handleSectionDataChange={handleSectionDataChange}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "videoUrl":
				return (
					<SectionVideoCms
						section={section}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			case "filteredTripListByExperience":
				return (
					<SectionFilteredTripListCms
						section={section}
						handleExplicitSectionDataChange={handleExplicitSectionDataChange}
					/>
				);
			default:
				return <div>No CMS available for section "{section.sectionName}"</div>;
		}
	};

	return pageData.isLoading ? (
		<div>Loading CMS...</div>
	) : (
		<>
			<SectionsSelector>
				<Paper
					elevation={6}
					style={{
						padding: "1rem",
					}}
				>
					<Container maxWidth={"md"} style={{ display: "flex" }}>
						<FormControl style={{ width: "75%" }}>
							<InputLabel>Select a layout...</InputLabel>
							<Select
								label={`Select a layout...`}
								value={cmsPageData.selectedSection}
								onChange={handleSectionChange}
								name="section"
								style={{ width: "100%" }}
							>
								{sectionTypes.map((sectionType) => {
									return (
										<MenuItem value={sectionType.sectionFieldName}>
											{sectionType.sectionLabel}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
						<SectionsButton
							onClick={() => addSection(cmsPageData.selectedSection)}
							disabled={cmsPageData.selectedSection ? false : true}
						>
							Add Section
						</SectionsButton>
					</Container>
				</Paper>
			</SectionsSelector>

			{/* Map over and render CMS Fields */}
			<div style={{ position: "relative" }}>
				{/* SECTIONS ANCHOR NAV */}
				{cmsPageData?.updatedPageData?.page_cms_data?.length > 0 ? (
					<div
						style={{
							position: "absolute",
							width:
								smallWidth && cmsPageData.isAnchorNavExpanded
									? "13%"
									: cmsPageData.isAnchorNavExpanded
									? "17%"
									: 45,
							height: "100%",
							transition: "all 0.2s ease",
						}}
					>
						<AnchorNavMenu
							className={"sections-anchor-nav"}
							style={{
								height: cmsPageData.isAnchorNavExpanded ? "auto" : 120,
								padding: smallWidth ? "5px 0px 5px 22px" : "15px 0px 15px 22px",
								maxHeight: smallWidth ? 370 : 550,
							}}
						>
							{cmsPageData.isAnchorNavExpanded ? (
								<ArrowNav>
									<ChevronLeft
										onClick={() => {
											dispatchCmsPageData({
												type: "IS_ANCHOR_NAV_EXPANDED",
												payload: false,
											});

											dispatchCmsPageData({
												type: "DISPLAY_NAV_CONTENT",
												payload: false,
											});
										}}
										style={{
											width: 30,
											height: 30,
										}}
									/>
								</ArrowNav>
							) : (
								<ArrowNav>
									<ChevronRight
										onClick={() => {
											dispatchCmsPageData({
												type: "IS_ANCHOR_NAV_EXPANDED",
												payload: true,
											});
											setTimeout(() => {
												dispatchCmsPageData({
													type: "DISPLAY_NAV_CONTENT",
													payload: true,
												});
											}, 200);
										}}
										style={{
											width: 30,
											height: 30,
										}}
									/>
								</ArrowNav>
							)}

							{cmsPageData.displayNavContent ? (
								<>
									<Typography
										variant="body1"
										sx={{
											color: "#fff",
											mb: 0,
										}}
									>
										SECTIONS
									</Typography>
									<ul
										style={{
											paddingLeft: smallWidth ? 0 : 10,
											overflowWrap: "break-word",
										}}
									>
										{cmsPageData.updatedPageData?.page_cms_data ? (
											cmsPageData.updatedPageData.page_cms_data.map(
												(section: any, i: any) => {
													return (
														<a
															key={i}
															onClick={() => {
																scrollToTarget(
																	section.sectionId,
																	mobileWidth,
																	95
																);
																dispatchCmsPageData({
																	type: "SET_SECTION_ID",
																	payload: section.sectionId,
																});
															}}
														>
															<li
																style={{
																	padding: "3px 0px",
																	fontSize: 15,
																	color: "#fff",
																	textDecoration:
																		section.sectionId ===
																		cmsPageData.sectionId
																			? "underline"
																			: "none",
																}}
															>
																{section.sectionTitle
																	? section.sectionTitle
																	: section.sectionName}
															</li>
														</a>
													);
												}
											)
										) : (
											<></>
										)}
									</ul>
								</>
							) : (
								<></>
							)}
						</AnchorNavMenu>
					</div>
				) : (
					<></>
				)}

				<Container maxWidth={"md"} style={{ paddingBottom: 40, paddingTop: 25 }}>
					{cmsPageData.updatedPageData?.page_cms_data ? (
						cmsPageData.updatedPageData.page_cms_data.map((section: any, i: any) => {
							return (
								<SectionContainer id={section.sectionId} key={i}>
									<Grid container>
										<Grid item xs={6}>
											<Typography
												variant="body1"
												sx={{
													margin: 0,
													color: "#194666",
												}}
											>
												{section.sectionTitle
													? section.sectionTitle
													: section.sectionName}
											</Typography>
										</Grid>
										<Grid
											item
											xs={6}
											style={{
												display: "flex",
												justifyContent: "right",
											}}
										>
											<IconButton
												aria-label="up"
												size="small"
												onClick={() => {
													reorderSections(i, i - 1);
												}}
												disabled={i === 0}
											>
												<ArrowUpward fontSize="inherit" />
											</IconButton>
											<IconButton
												aria-label="down"
												size="small"
												onClick={() => {
													reorderSections(i, i + 1);
												}}
												disabled={
													i ===
													cmsPageData.updatedPageData.page_cms_data
														.length -
														1
												}
											>
												<ArrowDownward fontSize="inherit" />
											</IconButton>
											<IconButton
												aria-label="delete"
												size="small"
												onClick={() => removeSection(section.sectionId)}
											>
												<DeleteForever fontSize="inherit" />
											</IconButton>
										</Grid>
									</Grid>

									<div
										style={{
											marginBottom: 40,
										}}
									>
										{renderSectionCms(section)}
									</div>
								</SectionContainer>
							);
						})
					) : (
						<></>
					)}
				</Container>

				<div>
					<div style={{ position: "fixed", bottom: "110px", right: "5%" }}>
						{renderSaveAlert()}
					</div>
					<SaveButton>
						<Button
							startIcon={<Save />}
							onClick={() => {
								setSavingAlert(true);
								setSaving(true);
								savePageData(cmsPageData.updatedPageData);
							}}
						>
							Save
						</Button>
					</SaveButton>
				</div>
				<div style={{ position: "fixed", bottom: "80px", right: "5%" }}>
					<DeleteButton>
						<Button
							startIcon={<Delete />}
							onClick={() => {
								dispatchCmsPageData({
									type: "SET_IS_DELETE_MODAL_OPEN",
									payload: true,
								});
							}}
						>
							Delete
						</Button>
					</DeleteButton>
				</div>

				<PageDeletionOrganism
					pageId={cmsPageData?.updatedPageData?.page_id}
					pageName={cmsPageData?.updatedPageData?.page_name}
					open={cmsPageData.isDeleteModalOpen}
					handleClose={handleClose}
				/>
			</div>
		</>
	);
};

export default RenderCms;
