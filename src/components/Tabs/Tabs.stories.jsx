import React from "react";
import Tabs from "./Tabs";
import LoginForm from "../TransactionForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Views/Tabs",
	component: Tabs,
};

const TabsTitles = [
	{ title: "Login", content: <LoginForm /> },
	{ title: "Register", content: <RegisterForm /> },
];

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<Tabs tabItems={TabsTitles} />
	</ThemeProvider>
);
