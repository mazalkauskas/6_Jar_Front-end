import React from "react";
import Main from "./Main";
import backgroundImg from "../../assets/images/jar-background.png";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Components/Main",
	component: Main,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Main image="yes" bgImage={backgroundImg}>
			Super duper text
		</Main>
	</ThemeProvider>
);
