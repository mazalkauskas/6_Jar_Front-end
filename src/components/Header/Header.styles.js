import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

export const Header = styled.header`
	background: ${(props) => props.theme.colors.background.body};
	color: ${(props) => props.theme.colors.text.primary};
	font-family: ${(props) => props.theme.fonts.primary};
	position: fixed;
	top: 0;
	width: 100%;
`;

export const StyledNav = styled(Navigation)`
	display: none;
	@media (min-width: ${(props) => props.theme.sizes.breakpoints.m}) {
		display: flex;
	}
`;

export const StyledMobNav = styled(MobileNavigation)`
	@media (min-width: ${(props) => props.theme.sizes.breakpoints.m}) {
		display: none;
	}
`;
