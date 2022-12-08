import React, { createContext, useState } from "react";
export const ToggleContext = createContext();

export const ToggleProvider = (props) => {
	const [calendarToggle, setCalendarToggle] = useState(false);
	const [toggleDay, setToggleDay] = useState(false);
	const [toggleAddFriend, setToggleAddFriend] = useState(false);
	const [toggleAddCategory, setToggleAddCategory] = useState(false);

	return (
		<ToggleContext.Provider
			value={{
				calendarToggle,
				setCalendarToggle,
				toggleDay,
				setToggleDay,
				toggleAddFriend,
				setToggleAddFriend,
				toggleAddCategory,
				setToggleAddCategory,
			}}
		>
			{props.children}
		</ToggleContext.Provider>
	);
};
