import React from "react";
import Breadcrumbs from "../../../components/_molecules/Breadcrumbs";
import ModuleMenu from "../../../components/_molecules/ModuleMenu";

const salesModules = [
	{ name: "People", anchor: "/admin/sales/people" },
	{ name: "Leads", anchor: "/admin/sales/leads" },
];

const Sales = () => {
	return (
		<div>
			<Breadcrumbs breadcrumbs={[{ label: "Sales", anchor: null }]} />
			<ModuleMenu menuItems={salesModules} />
		</div>
	);
};

export default Sales;
