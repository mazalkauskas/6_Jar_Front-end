import React from "react";
import Tabs from "./Tabs";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Components/Tabs",
	component: Tabs,
};

const TabsTitles = [
	{ title: "Income", content: <LoginForm /> },
	{ title: "Expenses", content: <RegisterForm /> },
];

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Tabs tabItems={TabsTitles} />
	</ThemeProvider>
);
