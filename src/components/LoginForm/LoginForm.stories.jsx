import React from "react";
import LoginForm from "./LoginForm";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Views/LoginForm",
	component: LoginForm,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<LoginForm handleSubmit={(values) => console.log(values)} />
	</ThemeProvider>
);
