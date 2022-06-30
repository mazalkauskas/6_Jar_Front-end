import React from "react";
import TextInput from "./TextInput";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Components/TextInput",
	component: TextInput,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<TextInput type="text" label="Default label" placeholder="Default placeholder" />
	</ThemeProvider>
);
