import styled from "styled-components";

export const Section = styled.section`
	margin: 0 auto;
	max-width: ${(props) => props.theme.sizes.breakpoints.xl};
	padding: 0 ${(props) => props.theme.sizes.spacing.xl};
`;
