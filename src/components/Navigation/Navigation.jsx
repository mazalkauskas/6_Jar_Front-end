import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import * as S from "./Navigation.styles";

const Navigation = ({ className }) => {
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
						shape="Outline"
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

export default Navigation;
