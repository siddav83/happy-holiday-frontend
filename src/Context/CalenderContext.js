import React, { createContext, useState } from "react";
import Calender from "../Data/CalenderData";
export const CalenderContext = createContext();

export const CalenderProvider = (props) => {
	const [calender, setCalender] = useState(Calender);
	const [daysLeft, setDaysLeft] = useState(25);

	return (
		<CalenderContext.Provider
			value={{
				calender,
				setCalender,
				daysLeft,
				setDaysLeft,
			}}
		>
			{props.children}
		</CalenderContext.Provider>
	);
};
