import React from "react";
import Logo from "../Logo/Logo";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import * as S from "./Navigation.styles";
import { useNavigate } from "react-router-dom";

const Navigation = ({ className, links }) => {
	const navigate = useNavigate();
	return (
		<S.Nav className={className}>
			<S.Control>
				<S.StyledLogoLink to={localStorage.getItem("token") ? "/home" : "/"}>
					<Logo>SIXJAR's</Logo>
				</S.StyledLogoLink>

				{localStorage.getItem("token") && (
					<S.Control>
						<S.StyledLink to={"/home"}>Dashboard</S.StyledLink>
						<S.StyledLink to={"/records"}>Records</S.StyledLink>
					</S.Control>
				)}
			</S.Control>

			{!localStorage.getItem("token") && (
				<S.Control>
					<S.StyledLink to={"/login"}>Sign in</S.StyledLink>
					<S.StyledLink to={"/register"}>Sign up</S.StyledLink>
				</S.Control>
			)}

			{localStorage.getItem("token") && (
				<S.Control>
					<S.StyledLink to={"/change-password"}>Change password</S.StyledLink>

					<Button
						handleClick={() => {
							localStorage.removeItem("token");
							navigate("/");
						}}
					>
						Sign out
					</Button>
				</S.Control>
			)}
		</S.Nav>
	);
};

Navigation.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		})
	),
};

export default Navigation;
