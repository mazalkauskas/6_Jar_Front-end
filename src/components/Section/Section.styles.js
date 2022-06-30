import styled from "styled-components";

export const Section = styled.section`
	font-family: ${(props) => props.theme.fonts.primary};
	margin: 0 auto;
	max-width: ${(props) => props.theme.sizes.breakpoints.xl};
	padding: 0 ${(props) => props.theme.sizes.spacing.xl};
`;
