import React, { useState } from "react";
import Notification from "../components/Notification/Notification";
import ChangePassForm from "../components/ChangePassForm/ChangePassForm";
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
		<>
			<ChangePassForm handleSubmit={changePass} />
			{error && <Notification>{error}</Notification>};
		</>
	);
};

export default ChangePassword;
