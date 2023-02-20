import React from "react";

import FilteredTripListByExperienceCmsBlock from "../blocks/FilteredTripListByExperienceCmsBlock";

interface SectionFilteredTripListCmsProps {
	section: any;
	handleExplicitSectionDataChange: any;
}

const SectionFilteredTripListCms = ({
	section,
	handleExplicitSectionDataChange,
}: SectionFilteredTripListCmsProps) => {
	return (
		<div>
			<FilteredTripListByExperienceCmsBlock
				section={section}
				handleExplicitSectionDataChange={handleExplicitSectionDataChange}
				fieldName={"experienceId"}
				value={section.experienceId}
			/>
		</div>
	);
};

export default SectionFilteredTripListCms;
