import React, { useContext, useState } from "react";
import "./style.css";
import { CalendarContext } from "../../Context/CalendarContext";
import { ToggleContext } from "../../Context/ToggleContext";

const Calendar = () => {
	const { calendar, today } = useContext(CalendarContext);

	const { toggleDay, setToggleDay, setCalendarToggle } =
		useContext(ToggleContext);
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
		<>
			<h2 className="sub-heading">Calendar</h2>
			<div className="calendar-container">
				<button
					className="back-btn"
					onClick={() => setCalendarToggle((prev) => !prev)}
				>
					<i className="fa-solid fa-backward" />
				</button>
				{!toggleDay ? (
					calendar?.map((day, i) => {
						return (
							<div
								onClick={() => openDay(day)}
								className={
									today < day.day ? "calendar-day" : "calendar-day-crossed"
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
							<i className="fa-solid fa-x close-btn" />
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default Calendar;
