import styled from "styled-components";

export const CategoryList = styled.div`
	@media (min-width: ${(props) => props.theme.sizes.breakpoints.m}) {
		display: flex;
		flex-wrap: wrap;
		& > div {
			width: calc(50% - 1rem);
			box-sizing: border-box;
		}
	}
`;

export const Title = styled.h1`
	color: ${(props) => props.theme.colors.text.primary};
	font-family: ${(props) => props.theme.fonts.primary};
`;

export const Line = styled.hr`
	border: none;
	border-top: 1px solid ${(props) => props.theme.colors.background.lightbody};
`;
