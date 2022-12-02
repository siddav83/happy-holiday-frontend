import React, { createContext, useState } from "react";
import Calender from "../Data/CalenderData";
export const CalenderContext = createContext();

export const CalenderProvider = (props) => {
	const [calender, setCalender] = useState(Calender);
	const [daysLeft, setDaysLeft] = useState(25);
	const [today, setToday] = useState(25);

	return (
		<CalenderContext.Provider
			value={{
				calender,
				setCalender,
				daysLeft,
				setDaysLeft,
				today,
				setToday,
			}}
		>
			{props.children}
		</CalenderContext.Provider>
	);
};
