import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = styled.nav`
	flex-direction: column;
	padding: ${(props) => props.theme.sizes.spacing.l} 0;
`;

export const StyledLogoLink = styled(Link)`
	text-decoration: none;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
	color: ${(props) => props.theme.colors.text.secondary};
	cursor: pointer;
	font-size: ${(props) => props.theme.sizes.text.xl};
	&:hover {
		color: ${(props) => props.theme.colors.text.primary};
	}
`;

export const Control = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const StyledLink = styled(Link)`
	color: ${(props) => props.theme.colors.text.secondary};
	margin: ${(props) => props.theme.sizes.spacing.l};
	text-decoration: none;
	&:hover {
		border-bottom: ${(props) => props.theme.sizes.spacing.xs} solid ${(props) => props.theme.colors.text.primary};
		color: ${(props) => props.theme.colors.text.primary};
	}
`;

export const NavExpansion = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: ${(props) => props.theme.sizes.spacing.l};
`;
