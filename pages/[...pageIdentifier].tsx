import React from "react";

import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

const Page = ({ pageData }: any) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div style={{ padding: "150px" }}>Loading...</div>;
	}

	return <div style={{ padding: 150 }}>{pageData.data[0].page_name}</div>;
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
	// Get the paths we want to pre-render based on users
	// const paths = sampleUserData.map((user) => ({
	//   params: { id: user.id.toString() },
	// }))

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return {
		paths: [{ params: { pageIdentifier: ["jeffs-first-page"] } }],
		fallback: true,
	};
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		let identifier = "";
		if (params?.pageIdentifier) {
			if (typeof params.pageIdentifier === "string") {
				identifier = `___${identifier}`;
			} else {
				identifier = `___${params.pageIdentifier.join("___")}`;
			}
		}

		//Fetch Trip Data
		const pageReq = await fetch(`${process.env.NEXTAUTH_URL}/api/pages/${identifier}`);

		const pageData = await pageReq.json();

		if (!pageData.success) return { notFound: true };

		return {
			props: {
				pageData,
			},
			// Next.js will attempt to re-generate the page:
			// - When a request comes in
			// - At most once every second
			revalidate: 30, // In seconds
		};
	} catch (err) {
		console.log(err);
		return {
			notFound: true,
		};
	}
};
