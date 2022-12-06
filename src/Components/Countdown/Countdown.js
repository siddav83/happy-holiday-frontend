import React, { useEffect, useContext } from "react";
import "./style.css";
import { ToggleContext } from "../../Context/ToggleContext";
import { CalenderContext } from "../../Context/CalenderContext";
import SantaHat from "../../assets/images/hat.png";

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

	const { setCalenderToggle } = useContext(ToggleContext);

	const toggleCalender = () => {
		setCalenderToggle((prev) => !prev);
	};

	return (
		<div className="countdown-container" onClick={toggleCalender}>
			<div className="santa-hat">
				<img
					src="https://cdn-icons-png.flaticon.com/512/744/744546.png"
					alt="Santa hat"
				/>
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
