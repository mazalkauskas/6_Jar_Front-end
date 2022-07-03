import React from "react";
import Category from "./Category";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Components/Category",
	component: Category,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Category iconColor={"blue"} title="Long Term" quantity="999" />
	</ThemeProvider>
);
