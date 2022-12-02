import React, { useContext, useState } from "react";
import "./style.css";
import { CalenderContext } from "../../Context/CalenderContext";

const Calender = ({ setCalenderToggle }) => {
	const { calender, today, toggleDay, setToggleDay } =
		useContext(CalenderContext);
	const [selectedDay, setSelectedDay] = useState({});

	const openDay = (day) => {
		setToggleDay((prev) => !prev);
		setSelectedDay(day);
	};

	const closeDay = () => {
		setToggleDay((prev) => !prev);
		setSelectedDay("");
	};

	return (
		<div className="calender-container">
			<button
				className="back-btn"
				onClick={() => setCalenderToggle((prev) => !prev)}
			>
				<i className="fa-solid fa-backward" />
			</button>
			{!toggleDay ? (
				calender?.map((day, i) => {
					return (
						<div
							onClick={() => openDay(day)}
							className={
								today < day.day ? "calender-day" : "calender-day-crossed"
							}
							key={i}
						>
							{day.day}
						</div>
					);
				})
			) : (
				<div className="show-day">
					<h2>Day: {selectedDay.day}</h2>
					<h2>Todays fact of the day</h2>
					<p>{selectedDay.joke}</p>
					<h2>Joke of the day</h2>
					<p>{selectedDay.fact}</p>
					<button onClick={closeDay}>
						<i class="fa-solid fa-x close-btn" />
					</button>
				</div>
			)}
		</div>
	);
};

export default Calender;
