import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import Main from "../components/Main/Main";
import Notification from "../components/Notification/Notification";

const Login = () => {
	const [error, setError] = useState();

	const navigate = useNavigate();

	const loginUser = async (inputs) => {
		try {
			const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/users/login`, {
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

			localStorage.setItem("token", data.token);
			navigate("/home");
		} catch (err) {
			return setError(err.message);
		}
	};

	return (
		<Main bgColor="#0d0d0d">
			<LoginForm handleSubmit={loginUser} />
			{error && <Notification>{error}</Notification>};
		</Main>
	);
};

export default Login;
