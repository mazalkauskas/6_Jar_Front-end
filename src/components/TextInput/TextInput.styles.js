import styled from "styled-components";

export const InputField = styled.div`
	color: ${(props) => props.theme.colors.text.primary};
	font-family: ${(props) => props.theme.fonts.primary};
`;

export const Input = styled.input`
	background: ${(props) => props.theme.colors.background.body};
	border-radius: ${(props) => props.theme.sizes.radius.s};
	border: ${(props) => props.theme.sizes.borders.s} solid ${(props) => props.theme.colors.background.light};
	box-sizing: border-box;
	color: ${(props) => props.theme.colors.text.primary};
	margin: ${(props) => props.theme.sizes.spacing.l} 0;
	padding: ${(props) => props.theme.sizes.spacing.m};
	width: 100%;
	&:focus {
		border-color: ${(props) => props.theme.colors.background.success};
		outline: none !important;
	}
	&::placeholder {
		color: ${(props) => props.theme.colors.text.secondary};
	}
`;
