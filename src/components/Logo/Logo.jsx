import React from "react";
import PropTypes from "prop-types";
import * as S from "./Logo.styles";

const Logo = ({ children }) => {
	return <S.Logo>{children}</S.Logo>;
};

Logo.propTypes = {
	children: PropTypes.string.isRequired,
};

export default Logo;
