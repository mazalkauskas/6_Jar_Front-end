import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Button.styles";

const Button = ({ shape, type, children, handleClick }) => {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouse = () => {
		setIsHovering(!isHovering);
	};

	const Normal = {};

	const Outline = {
		background: isHovering ? "#0090e7" : "none",
		color: isHovering ? "#ffffff" : "#0090e7",
	};

	return (
		<S.Button
			style={shape === "Outline" ? Outline : Normal}
			type={type}
			onClick={handleClick}
			onMouseEnter={handleMouse}
			onMouseLeave={handleMouse}
		>
			{children}
		</S.Button>
	);
};

Button.propTypes = {
	type: PropTypes.oneOf(["submit", "reset", "button"]),
	children: PropTypes.string.isRequired,
	handleClick: PropTypes.func,
};

Button.defaultProps = {
	type: "button",
};

export default Button;
