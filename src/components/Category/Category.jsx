import React from "react";
import PropTypes from "prop-types";
import * as S from "./Category.styles";
import { faJar } from "@fortawesome/free-solid-svg-icons";

const Category = ({ iconColor, title, quantity }) => {
	return (
		<S.Category>
			<S.StyledIcon icon={faJar} style={{ color: iconColor }} />
			<S.Control>
				<S.Title>{title}</S.Title>
				<S.Control2>
					<S.Text>Remaining money:</S.Text>
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
