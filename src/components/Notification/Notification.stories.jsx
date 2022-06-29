import React from "react";
import Notification from "./Notification";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Notification",
	component: Notification,
};

export const Default = () => (
	<ThemeProvider theme={theme}>
		<Notification>Notification Text</Notification>
	</ThemeProvider>
);
