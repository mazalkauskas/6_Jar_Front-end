import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import CategorySelect from "../CategorySelect/CategorySelect";
import Section from "../Section/Section";
import TextInput from "../TextInput/TextInput";
import * as S from "./TransactionForm.styles";

const TransactionForm = ({ type, options, handleSubmit }) => {
	const [transactionValues, updateTransactionValues] = useState();
	return (
		<Section>
			<S.Form
				onSubmit={(e) => {
					e.preventDefault();

					handleSubmit(transactionValues);
				}}
			>
				<CategorySelect
					label="Select category:"
					options={options}
					handleChange={(subtypeValue) =>
						updateTransactionValues({ ...transactionValues, subtype: subtypeValue, type: type })
					}
				/>
				<TextInput
					type="text"
					label="Description:"
					placeholder="Write a short description"
					handleChange={(descriptionValue) =>
						updateTransactionValues({ ...transactionValues, description: descriptionValue })
					}
				/>
				<TextInput
					type="number"
					label="Quantity:"
					placeholder="Enter amount"
					handleChange={(quantityValue) => updateTransactionValues({ ...transactionValues, quantity: quantityValue })}
				/>
				<S.Control>
					<Button type="submit">Add a transaction</Button>
				</S.Control>
			</S.Form>
		</Section>
	);
};

TransactionForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
};

export default TransactionForm;
