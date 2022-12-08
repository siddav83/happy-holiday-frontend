import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, User, Tab, Holidays, Friends, FriendsTab } from "./Pages";
import "./app.css";
import { FestivityContext } from "./Context/FestivityContext";

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
	const { darkMode, setDarkMode } = useContext(FestivityContext);

	const updateDarkMode = () => {
		setDarkMode((prev) => !prev);
	};

	if (darkMode) {
		document.body.style.backgroundColor = "#0e2332";
		const title = document.querySelectorAll("h2");
		title.forEach((item) => (item.style.color = "white"));
		const navbar = document.querySelectorAll(".Navbar");
		navbar.forEach((item) => (item.style.background = "unset"));
	} else {
		document.body.style.backgroundColor = "white";
		const title = document.querySelectorAll("h2");
		title.forEach((item) => (item.style.color = "black"));
	}

	return (
		<div className="App">
			<i
				className={`fa-solid fa-moon ${
					darkMode ? "dark-mode-btn-light" : "dark-mode-btn"
				}`}
				onClick={updateDarkMode}
			/>

			<Snowflakes count={10} />
			<Routes>
				{/* Pages */}
				<Route path="/" element={<Home />} />
				<Route path="/user" element={<User />} />
				<Route path="/tab" element={<Tab />} />
				<Route path="/holidays" element={<Holidays />} />
				<Route path="/friends" element={<Friends />} />
				<Route path="/friends/tab" element={<FriendsTab />} />
			</Routes>
		</div>
	);
}

export default App;
