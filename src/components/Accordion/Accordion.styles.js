import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
	border: ${(props) => props.theme.sizes.borders.s} solid ${(props) => props.theme.colors.background.lightbody};
	border-radius: ${(props) => props.theme.sizes.radius.m};
	color: ${(props) => props.theme.colors.text.primary};
	padding: ${(props) => props.theme.sizes.spacing.xl};
	margin: ${(props) => props.theme.sizes.spacing.l} 0;
`;

export const Control = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
	color: ${(props) => props.theme.colors.text.primary};
	cursor: pointer;
	font-size: ${(props) => props.theme.sizes.text.xl};
`;

export const Title = styled.h3`
	margin: 0 0 ${(props) => props.theme.sizes.spacing.m} 0;
`;

export const Text = styled.p`
	margin: 0;
`;
