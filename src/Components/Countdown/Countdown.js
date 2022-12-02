import React, { useEffect, useState } from "react";
import "./style.css";

const Countdown = () => {
	const [daysLeft, setDaysLeft] = useState(25);

	useEffect(() => {
		// Get Todays Date
		const date = new Date();
		let day = date.getDate();
		// Set Days Left
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
