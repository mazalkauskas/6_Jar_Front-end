import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Section from "../Section/Section";
import TextInput from "../TextInput/TextInput";
import * as S from "./RegisterForm.styles";

const LoginForm = ({ handleSubmit }) => {
	const [registerValues, updateLoginValues] = useState();
	return (
		<Section>
			<S.Form
				onSubmit={(e) => {
					e.preventDefault();

					handleSubmit(registerValues);
				}}
			>
				<S.Title>Sign up with email</S.Title>
				<TextInput
					type="text"
					label="Full name:"
					placeholder="Enter your full name"
					handleChange={(nameValue) => updateLoginValues({ ...registerValues, name: nameValue })}
				/>
				<TextInput
					type="email"
					label="Email:"
					placeholder="Enter your email"
					handleChange={(emailValue) => updateLoginValues({ ...registerValues, email: emailValue })}
				/>
				<TextInput
					type="password"
					label="Password:"
					placeholder="Enter your password"
					handleChange={(passwordValue) => updateLoginValues({ ...registerValues, password: passwordValue })}
				/>
				<S.Control>
					<Button type="submit">Sign up</Button>
				</S.Control>
			</S.Form>
		</Section>
	);
};

LoginForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
