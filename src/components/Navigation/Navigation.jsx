import React from "react";
import Logo from "../Logo/Logo";
import * as S from "./Navigation.styles";

const Navigation = ({ className }) => {
	return (
		<S.Nav className={className}>
			<S.StyledLogoLink to="/">
				<Logo>SIXJAR's</Logo>
			</S.StyledLogoLink>
			<S.Control>
				<S.StyledLink to="/register">Sign up</S.StyledLink>
				<S.StyledLink to="/login">Sign in</S.StyledLink>
			</S.Control>
		</S.Nav>
	);
};

export default Navigation;
