import styled from "styled-components";

export const Form = styled.form`
	background: ${(props) => props.theme.colors.background.body};
	border-radius: ${(props) => props.theme.sizes.radius.l};
	font-family: ${(props) => props.theme.fonts.primary};
	margin-top: ${(props) => props.theme.sizes.spacing.xxl};
	padding: ${(props) => props.theme.sizes.spacing.xl};
`;

export const Title = styled.h1`
	background: ${(props) => props.theme.colors.background.body};
	color: ${(props) => props.theme.colors.text.primary};
	text-align: center;
`;