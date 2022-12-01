import React, { createContext, useState } from "react";
import Calender from "../Data/CalenderData";
export const CalenderContext = createContext();

export const CalenderProvider = (props) => {
	const [calender, setCalender] = useState(Calender);

	return (
		<CalenderContext.Provider
			value={{
				calender,
				setCalender,
			}}
		>
			{props.children}
		</CalenderContext.Provider>
	);
};
