import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [userData, setUserData] = useState({
		user_id: "",
		username: "",
		friends: [],
		wants: [],
		dreams: [],
		dislikes: [],
		brands: [],
		buying: [],
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
