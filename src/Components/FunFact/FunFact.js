import React, { useContext } from "react";
import "./style.css";
import { CalenderContext } from "../../Context/CalenderContext";

const FunFact = ({ type }) => {
	const { calender, daysLeft } = useContext(CalenderContext);

	return (
		<div className="fun-fact-container">
			<p className="fun-fact-heading">
				{type === "fact" ? "Fact" : "Joke"} of the day!
			</p>
			<p className="fun-fact">
				{type === "fact" ? calender[daysLeft]?.fact : calender[daysLeft]?.joke}
				{}
			</p>
		</div>
	);
};

export default FunFact;
