import React from "react";
import Logo from "./Logo";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Components/Logo",
	component: Logo,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Logo>LOGO</Logo>
	</ThemeProvider>
);
