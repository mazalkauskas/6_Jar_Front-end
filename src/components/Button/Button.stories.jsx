import React from "react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Components/Button",
	component: Button,
};

export const NormalButton = () => (
	<ThemeProvider theme={theme}>
		<Button>Default button</Button>
	</ThemeProvider>
);

export const OutlineButton = () => (
	<ThemeProvider theme={theme}>
		<Button shape="Outline">Default button</Button>
	</ThemeProvider>
);
