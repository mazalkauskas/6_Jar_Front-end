import React, { useState } from "react";
import PropTypes from "prop-types";
import Section from "../Section/Section";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import * as S from "./RegisterForm.styles";

const LoginForm = ({ handleSubmit }) => {
	const [loginValues, updateLoginValues] = useState();
	return (
		<Section>
			<S.Form
				onSubmit={(e) => {
					e.preventDefault();

					handleSubmit(loginValues);
				}}
			>
				<S.Title>Sign up with email</S.Title>
				<TextInput
					type="text"
					label="Full name:"
					placeholder="Enter your full name"
					handleChange={(nameValue) => updateLoginValues({ ...loginValues, name: nameValue })}
				/>
				<TextInput
					type="email"
					label="Email:"
					placeholder="Enter your email"
					handleChange={(emailValue) => updateLoginValues({ ...loginValues, email: emailValue })}
				/>
				<TextInput
					type="password"
					label="Password:"
					placeholder="Enter your password"
					handleChange={(passwordValue) => updateLoginValues({ ...loginValues, password: passwordValue })}
				/>
				<Button type="submit">Sign up</Button>
			</S.Form>
		</Section>
	);
};

LoginForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
