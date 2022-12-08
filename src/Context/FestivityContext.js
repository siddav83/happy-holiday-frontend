import React, { createContext, useState } from "react";

export const FestivityContext = createContext();

export const FestivityProvider = (props) => {
	const [festive, setFestive] = useState(true);
	const [darkMode, setDarkMode] = useState(false);

	return (
		<FestivityContext.Provider
			value={{
				festive,
				setFestive,
				darkMode,
				setDarkMode,
			}}
		>
			{props.children}
		</FestivityContext.Provider>
	);
};
