import React, { useEffect, useState } from "react";
import Accordion from "../components/Accordion/Accordion";
import Button from "../components/Button/Button";
import Section from "../components/Section/Section";
import Main from "../components/Main/Main";

const Home = () => {
	return (
		<Main bgColor="#0d0d0d">
			<h1>Hi there</h1>
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
