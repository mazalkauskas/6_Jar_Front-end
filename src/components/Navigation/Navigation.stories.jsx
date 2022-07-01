import React from "react";
import Navigation from "./Navigation";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
	title: "Components/Navigation",
	component: Navigation,
	decorators: [withRouter],
};

const links = [
	{ url: "/", title: "Login" },
	{ url: "/", title: "Register" },
];

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Navigation links={links} />
	</ThemeProvider>
);
