import React from "react";
import ChangePassForm from "./ChangePassForm";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Views/ChangePassForm",
	component: ChangePassForm,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<ChangePassForm handleSubmit={(values) => console.log(values)} />
	</ThemeProvider>
);
