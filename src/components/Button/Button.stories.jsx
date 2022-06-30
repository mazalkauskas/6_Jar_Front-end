import React from "react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Button",
	component: Button,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Button>Default button</Button>
	</ThemeProvider>
);
