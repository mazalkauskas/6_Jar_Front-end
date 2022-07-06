import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList/CategoryList";
import StatisticList from "../components/StatisticList/StatisticList";
import Main from "../components/Main/Main";
import Table from "../components/Table/Table";
import Section from "../components/Section/Section";
import { faJar, faPlus, faMinus, faEquals } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
	const [historyData, setHistoryData] = useState();
	const [incomesData, setIncomesData] = useState();
	const [expensesData, setExpensesData] = useState();
	const [necessitiesData, setNecessitiesData] = useState();
	const [educationData, setEducationData] = useState();
	const [savingData, setSavingData] = useState();
	const [playData, setPlayData] = useState();
	const [investmentData, setInvestmentData] = useState();
	const [giveData, setGiveData] = useState();

	const getHistory = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/transactions/latest-history`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const resData = await res.json();

		setHistoryData(resData);
	};

	const getIncomes = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/statistics/incomes`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const resData = await res.json();

		setIncomesData(resData);
	};

	const getExpenses = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/statistics/expenses`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const resData = await res.json();

		setExpensesData(resData);
	};

	const getNecessities = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/statistics/jars/necessities`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const resData = await res.json();

		setNecessitiesData(resData);
	};

	const getEducation = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/statistics/jars/education`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const resData = await res.json();

		setEducationData(resData);
	};

	const getSaving = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/statistics/jars/saving`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const resData = await res.json();

		setSavingData(resData);
	};

	const getPlay = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/statistics/jars/play`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const resData = await res.json();

		setPlayData(resData);
	};

	const getInvestment = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/statistics/jars/investment`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const resData = await res.json();

		setInvestmentData(resData);
	};

	const getGive = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/statistics/jars/give`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const resData = await res.json();

		setGiveData(resData);
	};

	useEffect(() => {
		getHistory();
		getIncomes();
		getExpenses();
		getNecessities();
		getEducation();
		getSaving();
		getPlay();
		getInvestment();
		getGive();
	}, []);

	// const Categories = [
	// 	{ icon: faJar, color: "red", title: "Necessities", description: "Remaining money:", quantity: "48" },
	// 	{ icon: faJar, color: "yellow", title: "Education", description: "Remaining money:", quantity: "578" },
	// 	{ icon: faJar, color: "blue", title: "Saving", description: "Remaining money:", quantity: "213" },
	// 	{ icon: faJar, color: "green", title: "Play", description: "Remaining money:", quantity: "41" },
	// 	{ icon: faJar, color: "pink", title: "Investment", description: "Remaining money:", quantity: "23" },
	// 	{ icon: faJar, color: "cyan", title: "Give", description: "Remaining money:", quantity: "60" },
	// ];

	// const Statistics = [
	// 	{ icon: faEquals, color: "blue", title: "BALANCE", description: "This month:", quantity: "412" },
	// 	{ icon: faPlus, color: "green", title: "INCOMES", description: "This month:", quantity: "485" },
	// 	{ icon: faMinus, color: "red", title: "EXPENSES", description: "This month:", quantity: "213" },
	// ];

	const TableHeading = [
		{ heading: "Type", value: "type" },
		{ heading: "Category", value: "subtype" },
		{ heading: "Description", value: "description" },
		{ heading: "Date", value: "date" },
		{ heading: "Amount", value: "quantity" },
	];

	if (!historyData) {
		return <div>Loading</div>;
	}

	const Categories = [
		{
			icon: faJar,
			color: "red",
			title: "Necessities",
			description: "Remaining money:",
			quantity: necessitiesData[0].necessitiesLeft,
		},
		{
			icon: faJar,
			color: "yellow",
			title: "Education",
			description: "Remaining money:",
			quantity: educationData[0].educationLeft,
		},
		{
			icon: faJar,
			color: "blue",
			title: "Saving",
			description: "Remaining money:",
			quantity: savingData[0].savingLeft,
		},
		{ icon: faJar, color: "green", title: "Play", description: "Remaining money:", quantity: playData[0].playLeft },
		{
			icon: faJar,
			color: "pink",
			title: "Investment",
			description: "Remaining money:",
			quantity: investmentData[0].investmentLeft,
		},
		{ icon: faJar, color: "cyan", title: "Give", description: "Remaining money:", quantity: giveData[0].giveLeft },
	];

	const Statistics = [
		{
			icon: faEquals,
			color: "blue",
			title: "BALANCE",
			description: "This month:",
			quantity: incomesData[0].incomesSum - expensesData[0].expensesSum,
		},
		{ icon: faPlus, color: "green", title: "INCOMES", description: "This month:", quantity: incomesData[0].incomesSum },
		{
			icon: faMinus,
			color: "red",
			title: "EXPENSES",
			description: "This month:",
			quantity: expensesData[0].expensesSum,
		},
	];

	console.log(giveData);

	return (
		<Main bgColor="#0d0d0d">
			<Section>
				<StatisticList title="Balance trends" categories={Statistics} />
			</Section>
			<Section>
				<CategoryList title="List of jars" categories={Categories} />
			</Section>
			<Section>
				<Table title="Latest transactions" column={TableHeading} data={historyData} />
			</Section>
		</Main>
	);
};

export default Home;
