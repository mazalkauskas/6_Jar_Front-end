import styled from "styled-components";

export const Form = styled.form`
	background: ${(props) => props.theme.colors.background.body};
	border-radius: ${(props) => props.theme.sizes.radius.l};
	font-family: ${(props) => props.theme.fonts.primary};
	margin-top: ${(props) => props.theme.sizes.spacing.xxl};
	padding: ${(props) => props.theme.sizes.spacing.m};
	@media (min-width: ${(props) => props.theme.sizes.breakpoints.xxxl}) {
		text-align: center;
	}
`;

export const Title = styled.h1`
	background: ${(props) => props.theme.colors.background.body};
	color: ${(props) => props.theme.colors.text.primary};
	text-align: center;
`;

export const Control = styled.div`
	@media (max-width: ${(props) => props.theme.sizes.breakpoints.m}) {
		text-align: center;
	}
`;
