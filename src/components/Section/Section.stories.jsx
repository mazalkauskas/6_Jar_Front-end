import React from "react";
import Section from "./Section";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Section",
	component: Section,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Section>Default Section</Section>
	</ThemeProvider>
);
