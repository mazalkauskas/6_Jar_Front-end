import React from "react";
import Category from "./Category";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { faJar } from "@fortawesome/free-solid-svg-icons";

export default {
	title: "Components/Category",
	component: Category,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Category
			icon={faJar}
			iconColor={"blue"}
			title="Long Term"
			description="Remaining money:"
			quantity="999"
			handleClick={() => console.log("hey")}
		/>
	</ThemeProvider>
);
