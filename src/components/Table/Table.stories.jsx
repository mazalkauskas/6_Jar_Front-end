import React from "react";
import Table from "./Table";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Views/Table",
	component: Table,
};

const TableHeading = [
	{ heading: "Name", value: "name" },
	{ heading: "Surname", value: "surname" },
	{ heading: "Age", value: "age" },
];

const TableInfo = [
	{
		name: "Marius",
		surname: "zalkauskas",
		age: "29",
	},
	{
		name: "Saulius",
		surname: "zalkauskas",
		age: "53",
	},
	{
		name: "Saulius",
		surname: "zalkauskas",
		age: "53",
	},
];

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Table title="History" column={TableHeading} data={TableInfo} />
	</ThemeProvider>
);
