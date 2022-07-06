import React, { useState } from "react";
import Section from "../Section/Section";
import * as S from "./Tabs.styles";

const Tabs = ({ tabItems }) => {
	const [active, setActive] = useState(0);

	return (
		<Section>
			<S.Container>
				<S.TabList>
					{tabItems.map((item, index) => (
						<S.Tab
							key={index}
							style={{ background: index === active ? "#0090e7" : "#2A3038" }}
							onClick={() => setActive(index)}
							tabIndex={active === index ? localStorage.setItem("tabIndex", index) : ""}
						>
							{item.title}
						</S.Tab>
					))}
				</S.TabList>
				<div>{tabItems[localStorage.getItem("tabIndex")].content}</div>
			</S.Container>
		</Section>
	);
};

export default Tabs;
