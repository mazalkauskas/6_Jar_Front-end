import styled from "styled-components";

export const Logo = styled.div`
	font-size: ${(props) => props.theme.sizes.text.xxl};
	color: ${(props) => props.theme.colors.text.primary};
	letter-spacing: ${(props) => props.theme.sizes.text.l};
`;
