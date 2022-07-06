import styled from "styled-components";

export const Container = styled.div`
	background: ${(props) => props.theme.colors.background.body};
	border-radius: ${(props) => props.theme.sizes.radius.m};
	color: ${(props) => props.theme.colors.text.primary};
	padding: ${(props) => props.theme.sizes.spacing.xl};
	margin: ${(props) => props.theme.sizes.spacing.l} 0;
`;

export const TabList = styled.ul`
	list-style: none;
	display: flex;
	padding: 0;
`;

export const Tab = styled.li`
	background: ${(props) => props.theme.colors.background.lightbody};
	border-radius: ${(props) => props.theme.sizes.radius.m};
	padding: 1rem;
	margin: 0.25rem;
	cursor: pointer;
	width: 100%;
	text-align: center;
`;

export const Control = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
