import styled from "styled-components";

export const Title = styled.h1`
	color: ${(props) => props.theme.colors.text.primary};
	font-size: ${(props) => props.theme.sizes.text.xxxl};
	margin: ${(props) => props.theme.sizes.spacing.xxxl} auto;
	text-align: center;
	&:hover {
		text-shadow: 0.25rem 0.25rem 0.25rem ${(props) => props.theme.colors.text.info};
	}
	@media (max-width: ${(props) => props.theme.sizes.breakpoints.m}) {
		font-size: ${(props) => props.theme.sizes.text.xxl};
		margin: ${(props) => props.theme.sizes.spacing.xxl} auto;
	}
`;

export const Subtitle = styled.p`
	color: ${(props) => props.theme.colors.text.secondary};
	font-size: ${(props) => props.theme.sizes.text.l};
	margin: ${(props) => props.theme.sizes.spacing.xxxl} auto;
	text-align: center;
	width: 70%;
	&:hover {
		color: ${(props) => props.theme.colors.text.primary};
	}
	@media (max-width: ${(props) => props.theme.sizes.breakpoints.m}) {
		width: 100%;
		margin: ${(props) => props.theme.sizes.spacing.xl} auto;
	}
`;
