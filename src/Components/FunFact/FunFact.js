import React, { useContext } from "react";
import "./style.css";
import { CalenderContext } from "../../Context/CalenderContext";

const FunFact = () => {
	const { calender, daysLeft } = useContext(CalenderContext);

	return <p className="fun-fact">{calender[daysLeft]?.fact}</p>;
};

export default FunFact;
