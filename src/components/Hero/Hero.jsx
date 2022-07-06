import React from "react";
import PropTypes from "prop-types";
import * as S from "./Hero.styles";

const Hero = ({ title1, title2, title3, subtitle, children }) => {
	return (
		<div>
			<S.Title>
				{title1}
				<br />
				{title2}
				<br />
				{title3}
			</S.Title>
			<S.Subtitle>{subtitle}</S.Subtitle>
			{children}
		</div>
	);
};

Hero.propTypes = {
	title1: PropTypes.string.isRequired,
	title2: PropTypes.string,
	title3: PropTypes.string,
	subtitle: PropTypes.string,
	children: PropTypes.node,
};

export default Hero;
