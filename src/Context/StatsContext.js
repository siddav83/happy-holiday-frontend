import React, { createContext, useState } from "react";

export const StatsContext = createContext();

export const StatsProvider = (props) => {
	const [stats, setStats] = useState({
		stats_id: "",
		posts: [],
		popular: [],
	});

	return (
		<StatsContext.Provider
			value={{
				stats,
				setStats,
			}}
		>
			{props.children}
		</StatsContext.Provider>
	);
};
