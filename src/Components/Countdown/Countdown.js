import React, { useEffect, useContext } from "react";
import "./style.css";
import { CalenderContext } from "../../Context/CalenderContext";
const Countdown = () => {
	const { daysLeft, setDaysLeft, setToday } = useContext(CalenderContext);

	useEffect(() => {
		// Get Todays Date
		const date = new Date();
		let day = date.getDate();
		// Set Days Left
		setToday(day);
		setDaysLeft(25 - day);
	});

	return (
		<div className="countdown-container">
			<p className="countdown-left">{daysLeft}</p>
			<div className="countdown-right">
				<span>Days</span>
				<span>Until</span>
				<span>Christmas</span>
			</div>
		</div>
	);
};

export default Countdown;
