import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import Section from "../components/Section/Section";
import Table from "../components/Table/Table";

const Home = () => {
	const TableHeading = [
		{ heading: "Type", value: "type" },
		{ heading: "Category", value: "subtype" },
		{ heading: "Description", value: "description" },
		{ heading: "Date", value: "date" },
		{ heading: "Amount", value: "quantity" },
	];

	const [data, setData] = useState();

	const getData = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/transactions/all-history`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const resData = await res.json();

		setData(resData);
	};

	useEffect(() => {
		getData();
	}, []);

	if (!data) {
		return <div>Loading</div>;
	}

	return (
		<Main bgColor="#0d0d0d">
			<Section>
				<Table title="History" column={TableHeading} data={data} />
			</Section>
		</Main>
	);
};

export default Home;
