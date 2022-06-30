import React from "react";
import RegisterForm from "./RegisterForm";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Views/RegisterForm",
	component: RegisterForm,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<RegisterForm handleSubmit={(values) => console.log(values)} />
	</ThemeProvider>
);
