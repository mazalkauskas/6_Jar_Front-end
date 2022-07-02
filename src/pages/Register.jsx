import React, { useState } from "react";
import Main from "../components/Main/Main";
import Notification from "../components/Notification/Notification";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Register = () => {
	const [error, setError] = useState();

	const registerUser = async (inputs) => {
		try {
			const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/users/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputs),
			});
			const data = await res.json();

			if (data.err) {
				return setError(data.err);
			}

			return setError("Registration succesfull");
		} catch (err) {
			return setError(err.message);
		}
	};

	return (
		<Main bgColor="#0d0d0d">
			{error && <Notification>{error}</Notification>}
			<RegisterForm handleSubmit={registerUser} />;
		</Main>
	);
};

export default Register;
