import React, { useState } from "react";
import "./style.css";
import { Countdown, HolidaysNavbar, FunFact } from "../../Components";
import { Calender } from "../../Components";

const Holidays = () => {
	const [calenderToggle, setCalenderToggle] = useState(false);

	const toggleCalender = () => {
		setCalenderToggle((prev) => !prev);
	};
	console.log(calenderToggle);

	return (
		<>
			<div className="main-container">
				{!calenderToggle ? (
					<>
						<h1 className="holidays-heading">Happy Holidays!</h1>
						<Countdown />
						<FunFact />
						<button className="calender-btn" onClick={toggleCalender}>
							Calender
						</button>
					</>
				) : (
					<Calender />
				)}
			</div>
			<HolidaysNavbar />
		</>
	);
};

export default Holidays;
