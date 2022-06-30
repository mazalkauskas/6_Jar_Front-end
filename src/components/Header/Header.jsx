import React from "react";
import Section from "../Section/Section";
import * as S from "./Header.styles";

const Header = () => {
	return (
		<S.Header>
			<Section>
				<S.StyledNav />
				<S.StyledMobNav />
			</Section>
		</S.Header>
	);
};

export default Header;
