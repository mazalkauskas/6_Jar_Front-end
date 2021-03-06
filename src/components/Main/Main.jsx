import React from "react";
import PropTypes from "prop-types";
import * as S from "./Main.styles";

const Main = ({ bgColor, bgImage, image, children }) => {
	return (
		<S.Main style={image === "yes" ? { backgroundImage: "url(" + bgImage + ")" } : { background: bgColor }}>
			{children}
		</S.Main>
	);
};

Main.propTypes = {
	bgColor: PropTypes.string,
	bgImage: PropTypes.string,
	children: PropTypes.node.isRequired,
	image: PropTypes.string,
};

export default Main;
