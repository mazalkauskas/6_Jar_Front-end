import React from "react";
import * as S from "./CategoryList.styles";
import Category from "../Category/Category";
import { useNavigate } from "react-router-dom";

const CategoryList = ({ title, categories }) => {
	const navigate = useNavigate();
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
