import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [userData, setUserData] = useState({
		id: "",
		username: "DummyUsername",
		avatar: "https://cdn-icons-png.flaticon.com/512/621/621914.png",
		friends: [],
		wishlist: { wants: [], dreams: [], dislikes: [] },
		buying: [],
		budget: "",
		token: "",
		tab: "Wants",
		friendViewing: { id: "", username: "", tab: "wants", wishlist: [] },
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
