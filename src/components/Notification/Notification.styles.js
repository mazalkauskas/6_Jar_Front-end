import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Notification = styled.button`
	background: ${(props) => props.theme.colors.background.danger};
	border-radius: ${(props) => props.theme.sizes.spacing.m};
	border: none;
	color: ${(props) => props.theme.colors.text.primary};
	cursor: pointer;
	display: block;
	font-family: ${(props) => props.theme.fonts.primary};
	margin: ${(props) => props.theme.sizes.spacing.xl} auto;
	padding: ${(props) => props.theme.sizes.spacing.l} ${(props) => props.theme.sizes.spacing.xxxl};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
	padding-right: ${(props) => props.theme.sizes.spacing.l};
`;
