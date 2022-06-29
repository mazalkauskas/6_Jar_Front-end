import styled from "styled-components";

export const Button = styled.button`
	background: ${(props) => props.theme.colors.background.body};
	border-radius: ${(props) => props.theme.sizes.spacing.m};
	border: none;
	color: ${(props) => props.theme.colors.text.primary};
	cursor: pointer;
	font-family: ${(props) => props.theme.fonts.primary};
	padding: ${(props) => props.theme.sizes.spacing.l};
`;
