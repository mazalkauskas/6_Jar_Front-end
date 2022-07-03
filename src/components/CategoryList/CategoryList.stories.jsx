import React from "react";
import CategoryList from "./CategoryList";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { faJar } from "@fortawesome/free-solid-svg-icons";

const Categories = [
	{ icon: faJar, color: "red", title: "NECESSITIES", description: "Remaining money:", quantity: "453" },
	{ icon: faJar, color: "yellow", title: "EDUCATION", description: "Remaining money:", quantity: "578" },
	{ icon: faJar, color: "blue", title: "SAVING", description: "Remaining money:", quantity: "213" },
	{ icon: faJar, color: "green", title: "PLAY", description: "Remaining money:", quantity: "41" },
	{ icon: faJar, color: "pink", title: "INVESTMENT", description: "Remaining money:", quantity: "23" },
	{ icon: faJar, color: "cyan", title: "GIVE", description: "Remaining money:", quantity: "60" },
];

export default {
	title: "Views/CategoryList",
	component: CategoryList,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<CategoryList categories={Categories} title="List of jars" />
	</ThemeProvider>
);
