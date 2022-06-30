import styled from "styled-components";

export const Button = styled.button`
	background: ${(props) => props.theme.colors.background.primary};
	border-radius: ${(props) => props.theme.sizes.spacing.m};
	border: none;
	color: ${(props) => props.theme.colors.text.primary};
	cursor: pointer;
	font-family: ${(props) => props.theme.fonts.primary};
	padding: ${(props) => props.theme.sizes.spacing.m} ${(props) => props.theme.sizes.spacing.xl};
	&:hover {
		background: ${(props) => props.theme.colors.hover.primary};
	}
`;
