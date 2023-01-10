import AdminLayout from "../../components/__layouts/AdminLayout";

import { Button } from "@mui/material";

export default function IndexPage() {
	return (
		<>
			<h1>NextAuth.js Example</h1>
			<p>
				This is an example site to demonstrate how to use{" "}
				<a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
			</p>
			<Button variant={"contained"}>Hello World</Button>
		</>
	);
}
