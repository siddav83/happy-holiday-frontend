import React, { createContext, useState } from "react";
export const ToggleContext = createContext();

export const ToggleProvider = (props) => {
	const [calenderToggle, setCalenderToggle] = useState(false);
	const [toggleDay, setToggleDay] = useState(false);
	const [toggleAddFriend, setToggleAddFriend] = useState(false);

	return (
		<ToggleContext.Provider
			value={{
				calenderToggle,
				setCalenderToggle,
				toggleDay,
				setToggleDay,
				toggleAddFriend,
				setToggleAddFriend,
			}}
		>
			{props.children}
		</ToggleContext.Provider>
	);
};
