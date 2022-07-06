import React from "react";
import TransactionForm from "./TransactionForm";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
	title: "Views/TransactionForm",
	component: TransactionForm,
};

const Types = [{ value: "Type1" }, { value: "Type2" }, { value: "Type3" }];

export const Primary = () => (
	<ThemeProvider theme={theme}>
		<TransactionForm type="Default type" options={Types} />
	</ThemeProvider>
);
