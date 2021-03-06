import React from "react";
import PropTypes from "prop-types";
import * as S from "./Category.styles";

const Category = ({ icon, iconColor, title, description, quantity, handleClick }) => {
	return (
		<S.Category>
			<S.StyledIcon icon={icon} style={{ color: iconColor }} onClick={handleClick} />
			<S.Control>
				<S.Title>{title}</S.Title>
				<S.Control2>
					<S.Text>{description}</S.Text>
					<S.Amount>{quantity}€</S.Amount>
				</S.Control2>
			</S.Control>
		</S.Category>
	);
};

Category.propTypes = {
	icon: PropTypes.object.isRequired,
	iconColor: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	quantity: PropTypes.any.isRequired,
	handleClick: PropTypes.func,
};

export default Category;
