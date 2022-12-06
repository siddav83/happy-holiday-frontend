import React, { useContext } from "react";
import "./style.css";
import { CalendarContext } from "../../Context/CalendarContext";

const FunFact = ({ type }) => {
	const { calendar, daysLeft } = useContext(CalendarContext);

	return (
		<div className="fun-fact-container">
			<p className="fun-fact-heading">
				{type === "fact" ? "Fact" : "Joke"} of the day!
			</p>
			<p className="fun-fact">
				{type === "fact" ? calendar[daysLeft]?.fact : calendar[daysLeft]?.joke}
				{}
			</p>
		</div>
	);
};

export default FunFact;
