import React, { useState, useEffect, useContext } from "react";

// import {
//     useRemoveTripReportUser,
//     TripReportUserContext,
// } from "../../context/tripReportUser";

import TopNavBar from "../__navigation/TopNavBar";
import MiniDrawer from "../__navigation/MiniDrawer";

interface TripReportLayoutProps {
	children: JSX.Element | JSX.Element[];
}
const AppLayout = ({ children }: TripReportLayoutProps) => {
	// useEffect(() => {
	//     let localStorageUserString = localStorage.tripReportUser || null;
	//     let localStorageUser = JSON.parse(localStorageUserString) || null;

	//     if (localStorageUser) {
	//         setTripReportUser(localStorageUser);
	//     }
	// }, []);

	//The below was pulled from https://stackoverflow.com/questions/68179715/react-usecontext-typescript-not-an-array-type
	// const [
	//     tripReportUser = {},
	//     setTripReportUser = (tripReportUser: any) => {},
	// ] = useContext(TripReportUserContext) ?? [];

	return (
		<main>
			{/* <TopNavBar /> */}
			<MiniDrawer children={children} />

			{/* <Footer /> */}
		</main>
	);
};

export default AppLayout;
