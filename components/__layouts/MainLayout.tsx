import React, { useContext, useEffect } from "react";
import Head from "next/head";
// import { useUser } from '@auth0/nextjs-auth0';

// import { useRemoveContact, ContactContext } from '../../context/contact';

import NavBar from "../__navigation/NavBar";
import Copyright from "../../src/Copyright";

// import TopChipSlider from './TopChipSlider';
// // import Footer from '../Footer';
// import BottomNavigation from './BottomNavigation';

const MainLayout = ({ children }: any) => {
	// const [contact, setContact] = useContext(ContactContext);
	// const { user, isLoading } = useUser();

	// const getContact = async () => {
	//     const contactRes = await fetch(`/api/contacts/${user.email}`);
	//     if (contactRes.status === 401) return;

	//     const contactData = await contactRes.json();
	//     console.log(contactData);
	//     setContact(contactData.contacts[0]);
	// };

	// useEffect(() => {
	//     if (user && !isLoading) {
	//         getContact();
	//     }
	// }, [isLoading]);
	return (
		<>
			<Head>
				{/* <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css" /> */}
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<title>AB Designs</title>
			</Head>
			<main
				id="app"
				data-testid="layout"
				style={{ position: "relative", minHeight: "100vh" }}
			>
				<NavBar />
				{/*<TopChipSlider /> */}
				<div>{children}</div>
				{/* <Footer /> */}
				{/* <BottomNavigation /> */}
				<Copyright />
			</main>
		</>
	);
};

export default MainLayout;
