import styled from "styled-components";

export const InputField = styled.div`
	color: ${(props) => props.theme.colors.text.primary};
	font-family: ${(props) => props.theme.fonts.primary};
`;

export const Input = styled.input`
	background: ${(props) => props.theme.colors.background.lightbody};
	border-radius: ${(props) => props.theme.sizes.radius.s};
	border: none;
	box-sizing: border-box;
	color: ${(props) => props.theme.colors.text.primary};
	margin-bottom: ${(props) => props.theme.sizes.spacing.xl};
	margin-top: ${(props) => props.theme.sizes.spacing.s};
	padding: ${(props) => props.theme.sizes.spacing.m};
	width: 100%;
	&:focus {
		border: ${(props) => props.theme.sizes.borders.s} solid ${(props) => props.theme.colors.background.success};
		outline: none !important;
	}
	&::placeholder {
		color: ${(props) => props.theme.colors.text.secondary};
	}
`;
