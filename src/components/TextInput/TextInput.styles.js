import styled from "styled-components";

export const InputField = styled.div`
	color: ${(props) => props.theme.colors.text.primary};
	font-family: ${(props) => props.theme.fonts.primary};
`;

export const Input = styled.input`
	background: ${(props) => props.theme.colors.background.body};
	box-sizing: border-box;
	color: ${(props) => props.theme.colors.text.primary};
	border: ${(props) => props.theme.sizes.borders.s} solid ${(props) => props.theme.colors.background.light};
	border-radius: ${(props) => props.theme.sizes.radius.s};
	padding: ${(props) => props.theme.sizes.spacing.m};
	margin: ${(props) => props.theme.sizes.spacing.l} 0;
	width: 100%;
	&:focus {
		outline: none !important;
		border-color: ${(props) => props.theme.colors.background.success};
	}
	&::placeholder {
		color: ${(props) => props.theme.colors.text.secondary};
	}
`;
