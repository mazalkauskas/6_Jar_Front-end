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

const Links = [
	{ url: "/login", title: "Sign in" },
	{ url: "/register", title: "Sign up" },
];

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Navigation links={Links} />
	</ThemeProvider>
);
