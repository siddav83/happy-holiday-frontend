import React, { useContext } from "react";
import "./style.css";
import { Countdown, HolidaysNavbar, FunFact } from "../../Components";
import { Calender } from "../../Components";
import { ToggleContext } from "../../Context/ToggleContext";

const Holidays = () => {
	const { calenderToggle, setCalenderToggle } = useContext(ToggleContext);

	const toggleCalender = () => {
		setCalenderToggle((prev) => !prev);
	};

	return (
		<>
			<div className="main-container">
				<h1>Happy Holidays!</h1>
				{!calenderToggle ? (
					<>
						<Countdown />
						<FunFact />
						<button className="calender-btn" onClick={toggleCalender}>
							Calender
						</button>
					</>
				) : (
					<Calender setCalenderToggle={setCalenderToggle} />
				)}
			</div>
			<HolidaysNavbar />
		</>
	);
};

export default Holidays;
