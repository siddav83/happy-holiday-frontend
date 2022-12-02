import React, { useContext } from "react";
import "./style.css";
import { CalenderContext } from "../../Context/CalenderContext";

const Calender = () => {
	const { calender } = useContext(CalenderContext);
	console.log(calender);
	return (
		<div className="calender-container">
			<button className="back-btn">
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
