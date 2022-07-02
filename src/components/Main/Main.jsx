import React from "react";
import PropTypes from "prop-types";
import * as S from "./Main.styles";

const Main = ({ image, bgImage, bgColor, children }) => {
	return (
		<S.Main style={image === "yes" ? { backgroundImage: "url(" + bgImage + ")" } : { background: bgColor }}>
			{children}
		</S.Main>
	);
};

Main.propTypes = {
	children: PropTypes.node.isRequired,
	image: PropTypes.string,
	bgImage: PropTypes.string,
	bgColor: PropTypes.string,
};

export default Main;
