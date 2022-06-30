import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import * as S from "./MobileNavigation.styles";

const MobileNavigation = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<S.Nav className={className}>
			<S.Control>
				<S.StyledLogoLink to="/">
					<Logo>6JAR's</Logo>
				</S.StyledLogoLink>
				<S.StyledIcon icon={isOpen ? faXmark : faBars} onClick={() => setIsOpen(!isOpen)} />
			</S.Control>
			{isOpen && (
				<S.NavExpansion>
					<S.StyledLink to="/register">Sign up</S.StyledLink>
					<S.StyledLink to="/login">Sign in</S.StyledLink>
				</S.NavExpansion>
			)}
		</S.Nav>
	);
};

export default MobileNavigation;
