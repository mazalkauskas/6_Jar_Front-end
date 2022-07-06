import React from "react";
import PropTypes from "prop-types";
import Category from "../Category/Category";
import * as S from "./CategoryList.styles";

const CategoryList = ({ title, categories }) => {
	return (
		<>
			<S.Title>{title}</S.Title>
			<S.CategoryList>
				{categories.length > 0 &&
					categories.map((category, index) => (
						<Category
							key={index}
							icon={category.icon}
							iconColor={category.color}
							title={category.title}
							description={category.description}
							quantity={category.quantity}
						/>
					))}
			</S.CategoryList>
			<S.Line />
		</>
	);
};

CategoryList.propTypes = {
	title: PropTypes.string.isRequired,
	categories: PropTypes.array.isRequired,
};

export default CategoryList;
