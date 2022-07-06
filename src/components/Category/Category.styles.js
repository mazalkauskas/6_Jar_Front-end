import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Category = styled.div`
	align-items: center;
	background: ${(props) => props.theme.colors.background.body};
	border-radius: ${(props) => props.theme.sizes.radius.l};
	color: ${(props) => props.theme.colors.text.primary};
	display: flex;
	font-family: ${(props) => props.theme.fonts.primary};
	margin: ${(props) => props.theme.sizes.spacing.m};
	padding: ${(props) => props.theme.sizes.spacing.xl};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
	background: ${(props) => props.theme.colors.background.darkbody};
	border-radius: ${(props) => props.theme.sizes.radius.l};
	color: ${(props) => props.theme.colors.text.primary};
	cursor: pointer;
	font-size: ${(props) => props.theme.sizes.text.xxl};
	margin-right: ${(props) => props.theme.sizes.spacing.xl};
	padding: ${(props) => props.theme.sizes.spacing.l};
	&:hover {
		background-color: ${(props) => props.theme.colors.background.dark};
	}
`;

export const Control = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 0 auto;
	text-align: center;
	width: 100%;
	@media (min-width: ${(props) => props.theme.sizes.breakpoints.m}) {
		align-items: start;
	}
`;

export const Control2 = styled.div`
	@media (min-width: ${(props) => props.theme.sizes.breakpoints.m}) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		text-align: center;
		width: 100%;
	}
	@media (min-width: ${(props) => props.theme.sizes.breakpoints.l}) {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
`;

export const Title = styled.h2`
	font-size: ${(props) => props.theme.sizes.text.l};
	margin: 0;
	@media (min-width: ${(props) => props.theme.sizes.breakpoints.m}) {
		font-size: ${(props) => props.theme.sizes.text.xl};
	}
`;

export const Text = styled.p`
	color: ${(props) => props.theme.colors.text.secondary};
	margin: 0;
	padding: ${(props) => props.theme.sizes.spacing.m} 0;
`;

export const Amount = styled.p`
	font-size: ${(props) => props.theme.sizes.text.xl};
	margin: 0;
`;
