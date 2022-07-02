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
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
};

export default Hero;
