import React from "react";
import MobileNavigation from "./MobileNavigation";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
	title: "MobileNavigation",
	component: MobileNavigation,
	decorators: [withRouter],
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<MobileNavigation />
	</ThemeProvider>
);
