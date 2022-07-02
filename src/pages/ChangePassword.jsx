import React, { useState } from "react";
import ChangePassForm from "../components/ChangePassForm/ChangePassForm";
import Main from "../components/Main/Main";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
	const [error, setError] = useState();

	const navigate = useNavigate();

	const changePass = async (inputs) => {
		const token = localStorage.getItem("token");

		try {
			const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/users/change-password`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(inputs),
			});
			const data = await res.json();

			if (data.err) {
				return setError(data.err);
			}

			navigate("/home");
		} catch (err) {
			return setError(err.message);
		}
	};

	return (
		<Main bgColor="#0d0d0d">
			<ChangePassForm handleSubmit={changePass} />
			{error && <Notification>{error}</Notification>};
		</Main>
	);
};

export default ChangePassword;
