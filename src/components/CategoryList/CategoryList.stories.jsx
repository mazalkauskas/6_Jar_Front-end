import React from "react";
import CategoryList from "./CategoryList";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

const Categories = [
	{ color: "red", title: "NECESSITIES", quantity: "453" },
	{ color: "yellow", title: "EDUCATION", quantity: "578" },
	{ color: "blue", title: "SAVING", quantity: "213" },
	{ color: "green", title: "PLAY", quantity: "41" },
	{ color: "pink", title: "INVESTMENT", quantity: "23" },
	{ color: "cyan", title: "GIVE", quantity: "60" },
];

export default {
	title: "Components/CategoryList",
	component: CategoryList,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<CategoryList categories={Categories} title="List of jars" />
	</ThemeProvider>
);
