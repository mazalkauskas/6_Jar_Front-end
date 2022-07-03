import React from "react";
import * as S from "./CategoryList.styles";
import Category from "../Category/Category";

const CategoryList = ({ title, categories }) => {
	return (
		<>
			<S.Title>{title}</S.Title>
			<S.CategoryList>
				{categories.length > 0 &&
					categories.map((category) => (
						<Category
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

export default CategoryList;
