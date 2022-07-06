import React from "react";
import * as S from "./Table.styles";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Table = ({ title, column, data }) => {
	return (
		<>
			<S.Title>{title}</S.Title>
			<S.Container>
				<S.Table cellSpacing={0}>
					<thead>
						<S.Row>
							{column.map((item, index) => (
								<TableHeadItem key={index} item={item} />
							))}
						</S.Row>
					</thead>
					<tbody>
						{data.map((item, index) => (
							<TableRow key={index} item={item} column={column} />
						))}
					</tbody>
				</S.Table>
			</S.Container>
			<S.Line />
		</>
	);
};

const TableHeadItem = ({ item }) => {
	return <S.Header>{item.heading}</S.Header>;
};

const TableRow = ({ item, column }) => {
	return (
		<S.Row>
			{column.map((columnItem, index) => {
				return <S.Cell key={index}>{item[`${columnItem.value}`]}</S.Cell>;
			})}
			<S.Cell>
				<S.StyledIcon icon={faXmark} />
			</S.Cell>
		</S.Row>
	);
};

export default Table;
