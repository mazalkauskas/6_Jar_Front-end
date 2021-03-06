import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Section from "../Section/Section";
import TextInput from "../TextInput/TextInput";
import * as S from "./LoginForm.styles";

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
				<S.Title>Login to your account</S.Title>
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
				<S.Control>
					<Button type="submit">Login</Button>
				</S.Control>
			</S.Form>
		</Section>
	);
};

LoginForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
