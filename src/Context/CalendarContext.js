import React, { createContext, useState } from "react";
import Calendar from "../Data/CalendarData";
export const CalendarContext = createContext();

export const CalendarProvider = (props) => {
	const [calendar, setCalendar] = useState(Calendar);
	const [daysLeft, setDaysLeft] = useState(25);
	const [today, setToday] = useState(25);

	return (
		<CalendarContext.Provider
			value={{
				calendar,
				setCalendar,
				daysLeft,
				setDaysLeft,
				today,
				setToday,
			}}
		>
			{props.children}
		</CalendarContext.Provider>
	);
};
