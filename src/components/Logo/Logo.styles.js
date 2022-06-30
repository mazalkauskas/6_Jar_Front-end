import styled from "styled-components";

export const Logo = styled.div`
	color: ${(props) => props.theme.colors.text.primary};
	font-size: ${(props) => props.theme.sizes.text.xxl};
	font-family: ${(props) => props.theme.fonts.primary};
	letter-spacing: ${(props) => props.theme.sizes.text.l};
`;
