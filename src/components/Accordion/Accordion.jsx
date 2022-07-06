import React, { useState } from "react";
import PropTypes from "prop-types";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Accordion.styles";

const Accordion = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<S.Container>
			<S.Control>
				<S.Title style={{ color: !isOpen ? "#ffffff" : "#0090e7" }} onClick={() => setIsOpen(!isOpen)}>
					{title}
				</S.Title>
				<S.StyledIcon icon={isOpen ? faAngleUp : faAngleDown} onClick={() => setIsOpen(!isOpen)} />
			</S.Control>
			{isOpen && <S.Text>{children}</S.Text>}
		</S.Container>
	);
};

Accordion.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Accordion;
