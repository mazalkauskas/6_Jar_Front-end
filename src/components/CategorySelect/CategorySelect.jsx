import React from "react";
import PropTypes from "prop-types";
import * as S from "./CategorySelect.styles";

const CategorySelect = ({ options, label, handleChange }) => {
	return (
		<S.InputField>
			<label htmlFor={label}>{label}</label>
			<S.Select defaultValue={"default"} id={label} name={label} onChange={(e) => handleChange(e.target.value)}>
				<option value="default" disabled>
					Choose category
				</option>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.value.charAt(0).toUpperCase() + option.value.slice(1)}
					</option>
				))}
			</S.Select>
		</S.InputField>
	);
};

CategorySelect.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

export default CategorySelect;
