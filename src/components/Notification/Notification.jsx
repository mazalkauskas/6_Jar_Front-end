import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.styles";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Notification = ({ children }) => {
	return (
		<S.Notification>
			<S.StyledIcon icon={faCircleExclamation} />
			{children}
		</S.Notification>
	);
};

Notification.propTypes = {
	children: PropTypes.string.isRequired,
};

export default Notification;
