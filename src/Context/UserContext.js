import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [userData, setUserData] = useState({
		user_id: "",
		username: "",
		avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg",
		friends: [],
		wants: [],
		dreams: [],
		dislikes: [],
		brands: [],
		buying: [],
		budget: "",
		token: "",
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
