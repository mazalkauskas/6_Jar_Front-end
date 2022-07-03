import React from "react";
import * as S from "./Table.styles";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Table = ({ title, column, data }) => {
	return (
		<>
			<S.Title>{title}</S.Title>
			<S.Container>
				<S.Table>
					<S.Row>
						{column.map((item) => (
							<TableHeadItem item={item} />
						))}
					</S.Row>
					{data.map((item) => (
						<TableRow item={item} column={column} />
					))}
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
			{column.map((columnItem) => {
				return <S.Cell>{item[`${columnItem.value}`]}</S.Cell>;
			})}
			<S.Cell>
				<S.StyledIcon icon={faXmark} />
			</S.Cell>
		</S.Row>
	);
};

export default Table;
