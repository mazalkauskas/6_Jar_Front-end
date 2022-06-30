import React from "react";
import Notification from "./Notification";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Components/Notification",
	component: Notification,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Notification>Notification Text</Notification>
	</ThemeProvider>
);
