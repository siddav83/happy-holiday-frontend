import React, { createContext, useState } from "react";

export const FestivityType = createContext();

export const FestivityProvider = (props) => {
	const [festive, setCalender] = useState({
		festivity: "Christmas",
		calender: true,
	});

	return (
		<FestivityType.Provider
			value={{
				festive,
				setCalender,
			}}
		>
			{props.children}
		</FestivityType.Provider>
	);
};
