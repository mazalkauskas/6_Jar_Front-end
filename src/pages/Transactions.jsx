import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../components/Main/Main";
import Notification from "../components/Notification/Notification";
import Tabs from "../components/Tabs/Tabs";
import TransactionForm from "../components/TransactionForm/TransactionForm";

const Transactions = () => {
	const [error, setError] = useState();

	const navigate = useNavigate();

	const token = localStorage.getItem("token");

	const addIncome = async (inputs) => {
		try {
			const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/transactions/add/income`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(inputs),
			});
			const data = await res.json();

			if (data.err) {
				return setError(data.err);
			}

			navigate("/home");
		} catch (err) {
			return setError(err.message);
		}
	};

	const addExpense = async (inputs) => {
		try {
			const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/transactions/add/expense`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(inputs),
			});
			const data = await res.json();

			if (data.err) {
				return setError(data.err);
			}

			navigate("/home");
		} catch (err) {
			return setError(err.message);
		}
	};

	const IncomeTypes = [{ value: "salary" }, { value: "gift" }, { value: "other" }];
	const ExpenseTypes = [
		{ value: "necessities" },
		{ value: "education" },
		{ value: "saving" },
		{ value: "play" },
		{ value: "investment" },
		{ value: "give" },
	];

	const TabsData = [
		{ title: "Income", content: <TransactionForm type="income" options={IncomeTypes} handleSubmit={addIncome} /> },
		{ title: "Expenses", content: <TransactionForm type="expense" options={ExpenseTypes} handleSubmit={addExpense} /> },
	];

	return (
		<Main bgColor="#0d0d0d">
			<Tabs tabItems={TabsData} />
			{error && <Notification>{error}</Notification>}
		</Main>
	);
};

export default Transactions;
