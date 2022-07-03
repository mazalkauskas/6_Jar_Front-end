import React from "react";
import PropTypes from "prop-types";
import * as S from "./Category.styles";

const Category = ({ icon, iconColor, title, description, quantity }) => {
	return (
		<S.Category>
			<S.StyledIcon icon={icon} style={{ background: iconColor }} />
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
	title: PropTypes.string.isRequired,
};

export default Category;
