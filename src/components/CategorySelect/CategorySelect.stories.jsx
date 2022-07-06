import React from "react";
import CategorySelect from "./CategorySelect";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Components/CategorySelect",
	component: CategorySelect,
};

const OptionsData = [{ value: "give" }, { value: "play" }];

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<CategorySelect options={OptionsData} label="Default label" />
	</ThemeProvider>
);
