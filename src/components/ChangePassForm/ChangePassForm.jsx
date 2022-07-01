import React, { useState } from "react";
import PropTypes from "prop-types";
import Section from "../Section/Section";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import * as S from "./ChangePassForm.styles";

const LoginForm = ({ handleSubmit }) => {
	const [passValues, updatePassValues] = useState();
	return (
		<Section>
			<S.Form
				onSubmit={(e) => {
					e.preventDefault();

					handleSubmit(passValues);
				}}
			>
				<S.Title>Change your password</S.Title>
				<TextInput
					type="password"
					label="Old password:"
					placeholder="Enter your old password"
					handleChange={(oldPassValue) => updatePassValues({ ...passValues, oldPassword: oldPassValue })}
				/>
				<TextInput
					type="password"
					label="New password:"
					placeholder="Enter your password"
					handleChange={(newPassValue) => updatePassValues({ ...passValues, newPassword: newPassValue })}
				/>
				<S.Control>
					<Button type="submit">Change password</Button>
				</S.Control>
			</S.Form>
		</Section>
	);
};

LoginForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
