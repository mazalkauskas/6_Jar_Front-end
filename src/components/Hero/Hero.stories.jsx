import React from "react";
import Hero from "./Hero";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Components/Hero",
	component: Hero,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Hero title="Title" subtitle="Subtitle text is here" />
	</ThemeProvider>
);
