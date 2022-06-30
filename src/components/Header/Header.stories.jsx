import React from "react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
	title: "Header",
	component: Header,
	decorators: [withRouter],
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Header />
	</ThemeProvider>
);
