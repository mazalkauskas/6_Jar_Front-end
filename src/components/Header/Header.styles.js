import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

export const Header = styled.header`
	background: ${(props) => props.theme.colors.background.body};
	color: ${(props) => props.theme.colors.text.primary};
	font-family: ${(props) => props.theme.fonts.primary};
`;

export const StyledNav = styled(Navigation)`
	@media (max-width: ${(props) => props.theme.sizes.breakpoints.m}) {
		display: none;
	}
`;

export const StyledMobNav = styled(MobileNavigation)`
	display: none;
	@media (max-width: ${(props) => props.theme.sizes.breakpoints.m}) {
		display: flex;
	}
`;
