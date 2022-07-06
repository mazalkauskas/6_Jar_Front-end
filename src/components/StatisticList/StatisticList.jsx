import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./StatisticList.styles";
import Category from "../Category/Category";

const StatisticList = ({ title, categories }) => {
	const navigate = useNavigate();

	return (
		<>
			<S.Title>{title}</S.Title>
			<S.StatisticList>
				{categories.length > 0 &&
					categories.map((category, index) => (
						<Category
							key={index}
							icon={category.icon}
							iconColor={category.color}
							title={category.title}
							description={category.description}
							quantity={category.quantity}
							handleClick={() => {
								navigate("/transactions");
							}}
						/>
					))}
			</S.StatisticList>
			<S.Line />
		</>
	);
};

export default StatisticList;
