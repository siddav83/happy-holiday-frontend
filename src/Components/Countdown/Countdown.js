import React, { useEffect, useContext } from "react";
import "./style.css";
import { CalenderContext } from "../../Context/CalenderContext";
import SantaHat from "../../Assets/images/hat.png";

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
			<div className="santa-hat">
				<img src={SantaHat} alt="Santa hat" />
			</div>

			<p className="countdown-left">{daysLeft}</p>
			<div className="countdown-right">
				<span>days</span>
				<span>until</span>
				<span>Christmas</span>
			</div>
			<div className="calender-icon">
				<img
					src="https://cdn-icons-png.flaticon.com/512/3652/3652267.png"
					alt="calender"
				/>
				<p>Calender</p>
			</div>
		</div>
	);
};

export default Countdown;
