import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import * as S from "./MobileNavigation.styles";

const MobileNavigation = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<S.Nav className={className}>
			<S.Control>
				<S.StyledLogoLink to={localStorage.getItem("token") ? "/home" : "/"}>
					<Logo>6JAR's</Logo>
				</S.StyledLogoLink>
				<S.StyledIcon icon={isOpen ? faXmark : faBars} onClick={() => setIsOpen(!isOpen)} />
			</S.Control>
			{isOpen && (
				<S.NavExpansion>
					{!localStorage.getItem("token") && (
						<>
							<S.StyledLink to={"/login"}>Sign in</S.StyledLink>
							<S.StyledLink to={"/register"}>Sign up</S.StyledLink>
						</>
					)}

					{localStorage.getItem("token") && (
						<>
							<S.StyledLink to={"/home"}>Dashboard</S.StyledLink>
							<S.StyledLink to={"/records"}>Records</S.StyledLink>
							<S.StyledLink to={"/analytics"}>Analytics</S.StyledLink>
							<S.StyledLink to={"/change-password"}>Change password</S.StyledLink>
							<Button
								handleClick={() => {
									localStorage.removeItem("token");
									navigate("/");
								}}
							>
								Sign out
							</Button>
						</>
					)}
				</S.NavExpansion>
			)}
		</S.Nav>
	);
};

export default MobileNavigation;
