import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
	Home,
	User,
	Tab,
	Holidays,
	Friends,
	Community,
	FriendsTab,
	Events,
} from "./Pages";
import "./app.css";

const Snowflakes = ({ count }) => {
	return (
		<div className="snowflake-container">
			{new Array(count).fill().map((snowflake, index) => {
				const size = 16 + Math.random() * 32;

				return (
					<i
						key={index}
						className="snowflake"
						style={{
							left: `${
								5 + (index * 90) / (count + 1) + Math.random() * 10 - 5
							}%`,
							width: `${size}px`,
							height: `${size}px`,
							animationDuration: `${5 + Math.random() * 10}s`,
							animationDelay: `${Math.random() * 10}s`,
						}}
					/>
				);
			})}
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<Snowflakes count={10} />
			<Routes>
				{/* Pages */}
				<Route path="/" element={<Home />} />
				<Route path="/user" element={<User />} />
				<Route path="/tab" element={<Tab />} />
				<Route path="/holidays" element={<Holidays />} />
				<Route path="/friends" element={<Friends />} />
				<Route path="/friends/tab" element={<FriendsTab />} />
				<Route path="/events" element={<Events />} />
			</Routes>
		</div>
	);
}

export default App;
