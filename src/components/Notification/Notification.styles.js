import styled from "styled-components";

export const Notification = styled.button`
	background: ${(props) => props.theme.colors.background.danger};
	border-radius: ${(props) => props.theme.sizes.spacing.m};
	border: none;
	color: ${(props) => props.theme.colors.text.primary};
	cursor: pointer;
	font-family: ${(props) => props.theme.fonts.primary};
	padding: ${(props) => props.theme.sizes.spacing.l} ${(props) => props.theme.sizes.spacing.xxxl};
`;
