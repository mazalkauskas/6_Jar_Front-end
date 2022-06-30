import styled from "styled-components";

export const Section = styled.section`
	background: ${(props) => props.theme.colors.background.dark};
	color: ${(props) => props.theme.colors.text.primary};
	padding: 3rem;
	font-family: ${(props) => props.theme.fonts.primary};
	@media (max-width: ${(props) => props.theme.sizes.breakpoints.m}) {
		background: ${(props) => props.theme.colors.background.info};
	}
`;

export const Container = styled.div`
	background: ${(props) => props.theme.colors.background.body};
	margin: 2rem;
	border-radius: ${(props) => props.theme.sizes.spacing.m};
	text-align: center;
	&:hover {
		background: ${(props) => props.theme.colors.background.primary};
	}
`;
