import styled from "styled-components";

export const Button = styled.button`
	background: ${(props) => props.theme.colors.background.secondary};
	border: 0.05rem solid ${(props) => props.theme.colors.border.primary};
	cursor: pointer;
	font-family: "Roboto";
	padding: 1rem;
`;
