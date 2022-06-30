import styled from "styled-components";

export const Section = styled.section`
	margin: 0 auto;
	padding: 0 ${(props) => props.theme.sizes.spacing.xl};
	max-width: ${(props) => props.theme.sizes.breakpoints.xl};
`;
