import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: ${(props) => props.theme.sizes.spacing.l} 0;
`;

export const StyledLogoLink = styled(Link)`
	text-decoration: none;
`;

export const StyledLink = styled(Link)`
	color: ${(props) => props.theme.colors.text.secondary};
	margin: 0 ${(props) => props.theme.sizes.spacing.l};
	text-decoration: none;
	&:hover {
		border-bottom: ${(props) => props.theme.sizes.spacing.xs} solid ${(props) => props.theme.colors.text.primary};
		color: ${(props) => props.theme.colors.text.primary};
	}
`;

export const Control = styled.div`
	align-items: center;
	display: flex;
`;
