import React, { useContext } from "react";
import "./style.css";
import { CalenderContext } from "../../Context/CalenderContext";

const FunFact = () => {
	const { calender, daysLeft } = useContext(CalenderContext);

	return (
		<div className="fun-fact-container">
			<p className="fun-fact-heading">Fact of the day!</p>
			<p className="fun-fact">{calender[daysLeft]?.fact}</p>
		</div>
	);
};

export default FunFact;
