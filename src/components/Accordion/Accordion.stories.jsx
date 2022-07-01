import React from "react";
import Accordion from "./Accordion";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Components/Accordion",
	component: Accordion,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Accordion title="Hello">Good Bye, looser</Accordion>
	</ThemeProvider>
);
