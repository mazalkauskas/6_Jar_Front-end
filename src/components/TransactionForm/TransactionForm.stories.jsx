import React from "react";
import TransactionForm from "./TransactionForm";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Views/TransactionForm",
	component: TransactionForm,
};

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<TransactionForm handleSubmit={(values) => console.log(values)} />
	</ThemeProvider>
);
