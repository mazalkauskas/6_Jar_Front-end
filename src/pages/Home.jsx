import React from "react";
import Section from "../components/Section/Section";
import TextInput from "../components/TextInput/TextInput";

const Home = () => {
	return (
		<Section>
			<h1 style={{ color: "white" }}>Home</h1>
			<TextInput label="Text label" placeholder="Text is here" />
		</Section>
	);
};

export default Home;
