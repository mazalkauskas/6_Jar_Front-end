import React from "react";
import PropTypes from "prop-types";
import * as S from "./TextInput.styles";

const TextInput = ({ type, label, placeholder, value, handleChange }) => {
	return (
		<S.InputField>
			<label htmlFor={label}>{label}</label>
			<S.Input type={type} id={label} placeholder={placeholder} value={value} onChange={handleChange} />
		</S.InputField>
	);
};

TextInput.propTypes = {
	type: PropTypes.oneOf(["text", "email", "password"]),
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

TextInput.defaultProps = {
	type: "text",
};

export default TextInput;
