import React from "react";
import * as S from "./StatisticList.styles";
import Category from "../Category/Category";

const StatisticList = ({ title, categories }) => {
	return (
		<>
			<S.Title>{title}</S.Title>
			<S.StatisticList>
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
			</S.StatisticList>
			<S.Line />
		</>
	);
};

export default StatisticList;
