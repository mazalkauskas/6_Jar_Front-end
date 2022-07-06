import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
	box-sizing: border-box;
	background: ${(props) => props.theme.colors.background.body};
	border-radius: ${(props) => props.theme.sizes.radius.l};
	font-family: ${(props) => props.theme.fonts.primary};
	padding: ${(props) => props.theme.sizes.spacing.l};
	margin: ${(props) => props.theme.sizes.spacing.m};
`;

export const Table = styled.table`
	display: block;
	border-collapse: collapse;
	text-align: center;
	overflow: auto;
	width: 100%;
	&::-webkit-scrollbar {
		width: 12px;
	}
	&::-webkit-scrollbar-track {
		background: ${(props) => props.theme.colors.background.body};
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.colors.background.light};
		border-radius: ${(props) => props.theme.sizes.radius.l};
	}
	@media (min-width: ${(props) => props.theme.sizes.breakpoints.xs}) {
		display: table;
	}
`;

export const StyledIcon = styled(FontAwesomeIcon)`
	color: ${(props) => props.theme.colors.background.danger};
	cursor: pointer;
	font-size: ${(props) => props.theme.sizes.text.xl};
`;

export const Row = styled.tr`
	border-bottom: ${(props) => props.theme.sizes.borders.s} solid ${(props) => props.theme.colors.text.secondary};
	&:not(:first-child):hover {
		background: ${(props) => props.theme.colors.background.darkbody};
	}
`;

export const Cell = styled.td`
	color: ${(props) => props.theme.colors.text.secondary};
	padding: ${(props) => props.theme.sizes.spacing.m};
	font-size: ${(props) => props.theme.sizes.text.s};
`;

export const Header = styled.th`
	color: ${(props) => props.theme.colors.text.primary};
	font-size: ${(props) => props.theme.sizes.text.s};
	padding-bottom: ${(props) => props.theme.sizes.spacing.l};
`;

export const Title = styled.h1`
	color: ${(props) => props.theme.colors.text.primary};
	font-family: ${(props) => props.theme.fonts.primary};
`;

export const Line = styled.hr`
	border: none;
	border-top: 1px solid ${(props) => props.theme.colors.background.lightbody};
	margin-top: ${(props) => props.theme.sizes.spacing.l};
`;
