import React from "react";
import StatisticList from "./StatisticList";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { faPlus, faMinus, faPlusMinus } from "@fortawesome/free-solid-svg-icons";

const Categories = [
	{ icon: faPlusMinus, color: "yellow", title: "BALANCE", description: "This month:", quantity: "453" },
	{ icon: faPlus, color: "green", title: "INCOMES", description: "This month:", quantity: "578" },
	{ icon: faMinus, color: "red", title: "EXPENSES", description: "This month:", quantity: "213" },
];

export default {
	title: "Views/StatisticList",
	component: StatisticList,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<StatisticList categories={Categories} title="List of jars" />
	</ThemeProvider>
);
