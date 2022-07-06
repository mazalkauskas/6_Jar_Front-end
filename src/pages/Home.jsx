import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList/CategoryList";
import Main from "../components/Main/Main";
import StatisticList from "../components/StatisticList/StatisticList";
import Section from "../components/Section/Section";
import Table from "../components/Table/Table";
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

	const TableHeading = [
		{ heading: "Type", value: "type" },
		{ heading: "Category", value: "subtype" },
		{ heading: "Description", value: "description" },
		{ heading: "Date", value: "date" },
		{ heading: "Amount", value: "quantity" },
	];

	if (!historyData || !necessitiesData || !educationData || !savingData || !playData || !investmentData || !giveData) {
		return <div>Loading</div>;
	}

	const Categories = [
		{
			icon: faJar,
			color: "#fc424a",
			title: "Necessities",
			description: "Remaining money:",
			quantity: necessitiesData.map((item) => item.necessitiesLeft),
		},
		{
			icon: faJar,
			color: "#8f5fe8",
			title: "Education",
			description: "Remaining money:",
			quantity: educationData.map((item) => item.educationLeft),
		},
		{
			icon: faJar,
			color: "#ffab00",
			title: "Saving",
			description: "Remaining money:",
			quantity: savingData.map((item) => item.savingLeft),
		},
		{
			icon: faJar,
			color: "#00d25b",
			title: "Play",
			description: "Remaining money:",
			quantity: playData.map((item) => item.playLeft),
		},
		{
			icon: faJar,
			color: "#0090e7",
			title: "Investment",
			description: "Remaining money:",
			quantity: investmentData.map((item) => item.investmentLeft),
		},
		{
			icon: faJar,
			color: "#0dcaf0",
			title: "Give",
			description: "Remaining money:",
			quantity: giveData.map((item) => item.giveLeft),
		},
	];

	const Statistics = [
		{
			icon: faEquals,
			color: "#ffab00",
			title: "BALANCE",
			description: "This month:",
			quantity: incomesData.map((item) => item.incomesSum) - expensesData.map((item) => item.expensesSum),
		},
		{
			icon: faPlus,
			color: "#00d25b",
			title: "INCOMES",
			description: "This month:",
			quantity: incomesData.map((item) => item.incomesSum),
		},
		{
			icon: faMinus,
			color: "#fc424a",
			title: "EXPENSES",
			description: "This month:",
			quantity: expensesData.map((item) => item.expensesSum),
		},
	];

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
