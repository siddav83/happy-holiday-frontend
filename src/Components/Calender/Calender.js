import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { CalenderContext } from "../../Context/CalenderContext";

const Calender = ({ setCalenderToggle }) => {
	const { calender } = useContext(CalenderContext);
	console.log(calender);
	return (
		<div className="calender-container">
			<button
				className="back-btn"
				onClick={() => setCalenderToggle((prev) => !prev)}
			>
				<i class="fa-solid fa-backward"></i>
			</button>
			{calender?.map((day, i) => {
				return (
					<div className="calender-day" key={i}>
						{day.day}
					</div>
				);
			})}
		</div>
	);
};

export default Calender;
