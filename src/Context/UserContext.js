import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [userData, setUserData] = useState({
		id: "",
		username: "DummyUsername",
		avatar: "https://cdn-icons-png.flaticon.com/512/621/621914.png",
		friends: [],
		wants: [],
		dreams: [],
		dislikes: [],
		brands: [],
		buying: [],
		budget: "",
		token: "",
		friendViewing: "",
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
