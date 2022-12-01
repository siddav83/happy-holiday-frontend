import React, { createContext, useState } from "react";

export const FestivityType = createContext();

export const FestivityProvider = (props) => {
	const [festive, setFestive] = useState({
		festivity: "Christmas",
		calender: true,
	});

	return (
		<FestivityType.Provider
			value={{
				festive,
				setFestive,
			}}
		>
			{props.children}
		</FestivityType.Provider>
	);
};
