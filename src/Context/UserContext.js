import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [userData, setUserData] = useState({
		id: "",
		username: "",
		friends: [],
		wants: [],
		dreams: [],
		dislikes: [],
		brands: [],
	});

	return (
		<UserContext.Provider
			value={{
				userData,
				setUserData,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};
