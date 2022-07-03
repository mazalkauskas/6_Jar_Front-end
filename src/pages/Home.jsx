import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList/CategoryList";
import StatisticList from "../components/StatisticList/StatisticList";
import Main from "../components/Main/Main";
import Table from "../components/Table/Table";
import Section from "../components/Section/Section";
import { faJar, faPlus, faMinus, faEquals } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
	const Categories = [
		{ icon: faJar, color: "red", title: "Necessities", description: "Remaining money:", quantity: "453" },
		{ icon: faJar, color: "yellow", title: "Education", description: "Remaining money:", quantity: "578" },
		{ icon: faJar, color: "blue", title: "Saving", description: "Remaining money:", quantity: "213" },
		{ icon: faJar, color: "green", title: "Play", description: "Remaining money:", quantity: "41" },
		{ icon: faJar, color: "pink", title: "Investment", description: "Remaining money:", quantity: "23" },
		{ icon: faJar, color: "cyan", title: "Give", description: "Remaining money:", quantity: "60" },
	];

	const Statistics = [
		{ icon: faEquals, color: "blue", title: "BALANCE", description: "This month:", quantity: "453" },
		{ icon: faPlus, color: "green", title: "INCOMES", description: "This month:", quantity: "578" },
		{ icon: faMinus, color: "red", title: "EXPENSES", description: "This month:", quantity: "213" },
	];

	const TableHeading = [
		{ heading: "Name", value: "name" },
		{ heading: "Surname", value: "surname" },
		{ heading: "Age", value: "age" },
	];
	const TableInfo = [
		{
			name: "Marius",
			surname: "zalkauskas",
			age: "29",
		},
		{
			name: "Saulius",
			surname: "zalkauskas",
			age: "53",
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
				<Table title="History" column={TableHeading} data={TableInfo} />
			</Section>
		</Main>
	);

	// const [data, setData] = useState();

	// const getData = async () => {
	// 	const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/budget/incomes`, {
	// 		headers: {
	// 			authorization: `Bearer ${localStorage.getItem("token")}`,
	// 		},
	// 	});
	// 	const resData = await res.json();

	// 	setData(resData);
	// };

	// useEffect(() => {
	// 	getData();
	// }, []);

	// if (!data) {
	// 	return <div>Loading</div>;
	// }

	// if (data) {
	// 	return <div>{data[0].income_type}</div>;
	// }
};

export default Home;
